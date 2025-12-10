#!/usr/bin/env python3
"""
core/scripts/tools/fm_fix.py

Front-matter normalizer based on FM-Core template.

Modes:
  - audit : only print what would be changed
  - dry   : like apply, but do NOT write files, just log
  - apply : rewrite files in-place (optionally creating .bak backups)

This version is add-only:
  * never changes existing keys/values
  * only adds missing keys from FM-Core
  * can backfill fm_version, fm_build, locale, title
"""

import argparse
import os
import re
import sys
from datetime import datetime, timezone
from typing import Dict, Tuple, Optional

try:
    import yaml
except ImportError:
    print("❌ Missing PyYAML. Install: pip install pyyaml")
    sys.exit(1)

# --- Front matter helpers ----------------------------------------------------

# Jednoduchší, robustný pattern: YAML blok na začiatku súboru
FRONT_MATTER_RE = re.compile(r'^---\n(.*?)\n---\n', re.DOTALL)


def split_front_matter(text: str) -> Tuple[Optional[str], str]:
    """
    Returns (fm_text or None, body_text).
    """
    m = FRONT_MATTER_RE.match(text)
    if not m:
        return None, text
    fm_text = m.group(1)
    body = text[m.end():]
    return fm_text, body


def load_template_fm(path: str) -> Dict:
    """
    Load first front-matter block from FM-Core.md (or any template).
    Only keys are important; values serve as defaults (ale v tomto
    fixeri ich berieme hlavne ako zoznam kľúčov).
    """
    with open(path, "r", encoding="utf-8") as f:
        raw = f.read()
    fm_text, _ = split_front_matter(raw)
    if fm_text is None:
        raise SystemExit(f"❌ Template {path} does not contain YAML front matter.")
    data = yaml.safe_load(fm_text) or {}
    if not isinstance(data, dict):
        raise SystemExit(f"❌ Template {path} front matter is not a mapping.")
    return data


def detect_locale(path: str, default_locale: str) -> str:
    """
    Very simple heuristic: content/docs/<locale>/...
    If nothing found, use default_locale.
    """
    parts = path.replace("\\", "/").split("/")
    for p in parts:
        if p in {"sk", "en"}:
            return p
    return default_locale


def infer_title(body: str, fallback: str) -> str:
    """
    Try to guess title from first level-1 heading; fallback to given string.
    Example:
      # ST001        -> "ST001"
      # About Course -> "About Course"
    """
    for line in body.splitlines():
        line = line.strip()
        if line.startswith("# "):
            return line[2:].strip()
    return fallback


# --- Core unify logic --------------------------------------------------------


def unify_front_matter(
    existing: Optional[Dict],
    template_keys: Dict,
    body: str,
    path: str,
    locale_default: str,
) -> Tuple[Dict, Dict]:
    """
    Build new_fm (add-only) and return (new_fm, changes).
    changes = { "added_keys": [...], "autofilled": [...] }
    """
    fm = dict(existing) if isinstance(existing, dict) else {}
    changes = {"added_keys": [], "autofilled": []}

    # 1) Ensure fm_version
    if "fm_version" not in fm or not fm.get("fm_version"):
        fm["fm_version"] = "1.0.1"
        changes["autofilled"].append("fm_version")

    # 2) Ensure locale
    if "locale" not in fm or not fm.get("locale"):
        fm["locale"] = detect_locale(path, locale_default)
        changes["autofilled"].append("locale")

    # 3) Ensure fm_build (iba ak chýba)
    if "fm_build" not in fm or not fm.get("fm_build"):
        fm["fm_build"] = (
            datetime.now(timezone.utc)
            .isoformat(timespec="seconds")
            .replace("+00:00", "Z")
        )
        changes["autofilled"].append("fm_build")

    # 4) Ensure title (pre sidebar)
    if "title" in template_keys and not fm.get("title"):
        filename = os.path.basename(path)
        stem = os.path.splitext(filename)[0]
        fm["title"] = infer_title(body, stem)
        changes["autofilled"].append("title")

    # 5) Add all missing keys from template (prázdne hodnoty – doplníme neskôr)
    for key in template_keys.keys():
        if key not in fm:
            fm[key] = ""
            changes["added_keys"].append(key)

    return fm, changes


def format_yaml_block(data: Dict) -> str:
    """Dump YAML with stable ordering (rešpektuje insertion order)."""
    return (
        yaml.safe_dump(
            data,
            sort_keys=False,
            allow_unicode=True,
            width=1000,  # nech nám netrhá krátke riadky
        ).rstrip()
        + "\n"
    )


# --- File processing ---------------------------------------------------------


def process_file(
    path: str,
    template_fm: Dict,
    mode: str,
    backup: bool,
    locale_default: str,
) -> Tuple[bool, Dict]:
    """
    Process single .md file. Returns (changed, changes_info).
    """
    with open(path, "r", encoding="utf-8") as f:
        original = f.read()

    fm_text, body = split_front_matter(original)
    if fm_text is None:
        existing_fm: Optional[Dict] = None
    else:
        try:
            existing_fm = yaml.safe_load(fm_text) or {}
            if not isinstance(existing_fm, dict):
                print(f"⚠️  {path}: front matter is not a mapping, skipping.")
                return False, {}
        except Exception as e:
            print(f"⚠️  {path}: YAML parse error in front matter: {e}, skipping.")
            return False, {}

    new_fm, changes = unify_front_matter(
        existing=existing_fm,
        template_keys=template_fm,
        body=body,
        path=path,
        locale_default=locale_default,
    )

    if not (changes["added_keys"] or changes["autofilled"]):
        # nothing to change
        return False, changes

    new_yaml = format_yaml_block(new_fm)
    new_content = f"---\n{new_yaml}---\n\n{body.lstrip()}"

    rel_path = path
    if mode == "audit":
        print(f"[AUDIT] {rel_path}")
        if changes["autofilled"]:
            print("   autofilled:", ", ".join(changes["autofilled"]))
        if changes["added_keys"]:
            print("   added keys:", ", ".join(changes["added_keys"]))
    elif mode == "dry":
        print(f"[DRY] would update {rel_path}")
        if changes["autofilled"]:
            print("   autofilled:", ", ".join(changes["autofilled"]))
        if changes["added_keys"]:
            print("   added keys:", ", ".join(changes["added_keys"]))
    elif mode == "apply":
        if backup:
            bak_path = path + ".bak"
            if not os.path.exists(bak_path):
                with open(bak_path, "w", encoding="utf-8") as f:
                    f.write(original)
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"[APPLY] updated {rel_path}")
    else:
        raise SystemExit(f"Unknown mode: {mode}")

    return True, changes


def walk_root(root: str, template_fm: Dict, mode: str, backup: bool, locale_default: str) -> None:
    total = 0
    changed = 0
    for dirpath, _, filenames in os.walk(root):
        for fname in filenames:
            if not fname.endswith(".md"):
                continue
            path = os.path.join(dirpath, fname)
            total += 1
            ch, _ = process_file(
                path=path,
                template_fm=template_fm,
                mode=mode,
                backup=backup,
                locale_default=locale_default,
            )
            if ch:
                changed += 1
    print(f"✅ Done. Scanned {total} files, changed {changed}.")


def main() -> None:
    p = argparse.ArgumentParser(description="FM-Core fixer (add-only).")
    p.add_argument(
        "--root",
        required=True,
        help="Root folder with .md files (e.g. content/docs or content/docs/sk/class_sthdf_dashboard)",
    )
    p.add_argument(
        "--template",
        required=True,
        help="FM-Core template .md (with YAML front matter)",
    )
    p.add_argument(
        "--mode",
        choices=["audit", "dry", "apply"],
        default="audit",
        help="What to do: audit (default), dry, apply",
    )
    p.add_argument(
        "--backup",
        action="store_true",
        help="Create .bak files when writing (apply mode)",
    )
    p.add_argument(
        "--locale-default",
        default="sk",
        help="Fallback locale if not inferred from path",
    )
    args = p.parse_args()

    template_fm = load_template_fm(args.template)
    walk_root(
        root=args.root,
        template_fm=template_fm,
        mode=args.mode,
        backup=args.backup,
        locale_default=args.locale_default,
    )


if __name__ == "__main__":
    main()