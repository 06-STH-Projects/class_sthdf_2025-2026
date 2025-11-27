#!/usr/bin/env python3
"""
new_item_instance.py

Orchestrátor pre generovanie nových inštancií rôznych typov:
- knife
- sthdf
- 7ds
- q12 (pripravené)
- sdlc (pripravené)
- thesis (pripravené)
- class_sthdf_dashboard
Spoločné princípy:
- Config YAML popisuje DAO, cesty a default hodnoty.
- FM-Core je SSOT (core/templates/system/FM-Core.md) – obsah vrátane `---` sa NEMENÍ.
- Orchestrátor pripraví spoločný `ctx` a zavolá typový generátor new_*.py.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Any, Dict

from base_fm import parse_simple_yaml, debug_print


# -- Typovo-špecifické generátory ------------------------------------------


def _missing_generator(name: str):
    def _fn(ctx: Dict[str, Any]) -> None:
        raise SystemExit(f"Generator '{name}' nie je ešte implementovaný alebo nie je dostupný.")
    return _fn


try:
    from new_knife import generate as generate_knife  # type: ignore
except ImportError:  # pragma: no cover
    generate_knife = _missing_generator("new_knife")

try:
    from new_sthdf import generate as generate_sthdf  # type: ignore
except ImportError:  # pragma: no cover
    generate_sthdf = _missing_generator("new_sthdf")

try:
    from new_7ds import generate as generate_7ds  # type: ignore
except ImportError:  # pragma: no cover
    generate_7ds = _missing_generator("new_7ds")

# Q12 / SDLC / Thesis – zatiaľ môžu byť len placeholdery, neskôr nahradíš
try:
    from new_q12 import generate as generate_q12  # type: ignore
except ImportError:  # pragma: no cover
    generate_q12 = _missing_generator("new_q12")

try:
    from new_sdlc import generate as generate_sdlc  # type: ignore
except ImportError:  # pragma: no cover
    generate_sdlc = _missing_generator("new_sdlc")

try:
    from new_thesis import generate as generate_thesis  # type: ignore
except ImportError:  # pragma: no cover
    generate_thesis = _missing_generator("new_thesis")

try:
    from new_class_sthdf_dashboard import generate as generate_class_sthdf_dashboard  # type: ignore
except ImportError:  # pragma: no cover
    generate_class_sthdf_dashboard = _missing_generator("new_class_sthdf_dashboard")


TYPE_HANDLERS = {
    "knife": generate_knife,
    "sthdf": generate_sthdf,
    "7ds": generate_7ds,
    "q12": generate_q12,
    "sdlc": generate_sdlc,
    "thesis": generate_thesis,
    "class_sthdf_dashboard": generate_class_sthdf_dashboard,
}


# -- Pomocné funkcie -------------------------------------------------------


def _parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Vytvorí novú inštanciu položky (KNIFE / STHDF / 7DS / Q12 / SDLC / Thesis / class_sthdf_dashboard) "
    )

    parser.add_argument(
        "--type",
        required=True,
        choices=["knife", "sthdf", "7ds", "q12", "sdlc", "thesis", "class_sthdf_dashboard"],
        help="Typ položky: knife | sthdf | 7ds | q12 | sdlc | thesis | class_sthdf_dashboard",
    )
    parser.add_argument(
        "--config",
        required=True,
        help="Cesta k config YAML (napr. config/sthdf/sthdf_config.yml)",
    )
    parser.add_argument(
        "--id",
        dest="id",
        required=True,
        help="ID / prefix inštancie (napr. 2025_ST_001, K000123, 7ds_PlatobnyPortal...)",
    )
    parser.add_argument(
        "--name",
        required=True,
        help="Meno/address nového priečinka (instance_name). Zvyčajne rovnaké ako --id.",
    )
    parser.add_argument(
        "--title",
        required=False,
        default=None,
        help="Titulok (ak nie je zadaný, použije sa --name).",
    )
    parser.add_argument(
        "--exists",
        choices=["error", "skip", "replace"],
        default="error",
        help="Správanie pri existujúcej inštancii (default: error).",
    )
    parser.add_argument(
        "--debug",
        action="store_true",
        help="Zapne debug výstup.",
    )
    parser.add_argument(
        "--dry-run",
        dest="dry_run",
        action="store_true",
        help="Len ukáže, čo by sa spravilo (bez zápisu na disk).",
    )

    return parser.parse_args(argv)


def _validate_config(config_path: str, cfg: Dict[str, Any]) -> None:
    """Základná validácia configu – nech chyby neprechádzajú mlčky."""

    required_keys = ["dao", "content_dir", "template_fm"]
    for key in required_keys:
        if key not in cfg:
            raise SystemExit(f"Config '{config_path}' chýba povinný kľúč '{key}'")

    # FM-Core musí existovať – je SSOT
    fm_path = Path(cfg["template_fm"])
    if not fm_path.is_file():
        raise SystemExit(f"template_fm neexistuje: {fm_path}")

    # content_dir nemusí fyzicky existovať (môžeme ho vytvoriť), ale necháme info
    content_dir = Path(cfg["content_dir"])
    debug_print(True, f"[CFG] content_dir (nemusí ešte existovať): {content_dir}")

    # Voliteľné template_root (pre 7ds / q12 / sdlc / thesis)
    template_root = cfg.get("template_root")
    if template_root:
        t_root = Path(template_root)
        if not t_root.exists():
            raise SystemExit(f"template_root neexistuje: {t_root}")


def _load_fm_core(fm_core_path: Path) -> list[str]:
    """Načíta FM-Core ako zoznam riadkov.

    Nezasahujeme do obsahu – vrátane `---` delimitrov.
    """
    text = fm_core_path.read_text(encoding="utf-8")
    # vraciame list bez `\n`, new_* si s tým vie poradiť
    return text.splitlines()


def _build_ctx(cfg: Dict[str, Any], args: argparse.Namespace, fm_core_lines: list[str]) -> Dict[str, Any]:
    """Postaví spoločný kontext pre všetky typy generátorov.

    Špecifiká (projects_root/students_root...) si riešia new_*.py cez cfg.
    """

    content_dir = Path(cfg["content_dir"])

    cli_title = args.title or args.name

    ctx: Dict[str, Any] = {
        "dao": cfg.get("dao"),
        "config": cfg,  # celé YAML, nech new_*.py má všetko k dispozícii
        "content_dir": content_dir,
        "instance_name": args.name,
        "cli_title": cli_title,
        "fm_core_lines": fm_core_lines,
        "explicit_id": args.id,
        "exists_mode": args.exists,
        "debug": args.debug,
        "dry_run": args.dry_run,
        "defaults": cfg.get("defaults", {}),
    }

    # Propagate template_root if present
    if "template_root" in cfg:
        ctx["template_root"] = cfg["template_root"]

    return ctx


# -- Hlavný vstup ----------------------------------------------------------


def main(argv: list[str] | None = None) -> None:
    args = _parse_args(argv)

    item_type = args.type
    config_path = args.config

    if item_type not in TYPE_HANDLERS:
        if item_type == "class_sthdf_dasboard":
            raise SystemExit("Unsupported type 'class_sthdf_dasboard'. Myslíš 'class_sthdf_dashboard'?")
        raise SystemExit(f"Unsupported type '{item_type}'. Nie je ešte implementované.")

    handler = TYPE_HANDLERS[item_type]

    # 1) Načítaj config YAML
    cfg = parse_simple_yaml(config_path)

    # 2) Validácia základných kľúčov + ciest
    _validate_config(config_path, cfg)

    # 3) Načítaj FM-Core
    fm_core_path = Path(cfg["template_fm"])
    fm_core_lines = _load_fm_core(fm_core_path)

    # 4) Postav kontext
    ctx = _build_ctx(cfg, args, fm_core_lines)

    debug_print(args.debug, f"[ORCH] Typ: {item_type}")
    debug_print(args.debug, f"[ORCH] Config: {config_path}")
    debug_print(args.debug, f"[ORCH] Content dir: {ctx['content_dir']}")
    debug_print(args.debug, f"[ORCH] Instance: {ctx['instance_name']}")
    debug_print(args.debug, f"[ORCH] ID: {ctx['explicit_id']}")
    debug_print(args.debug, f"[ORCH] Title: {ctx['cli_title']}")

    # 5) Dry-run – iba informácia, že handler by bežal
    if args.dry_run:
        print(f"[DRY-RUN][ORCH] Spustil by som handler pre typ '{item_type}' s ctx.instance='{ctx['instance_name']}'")
        return

    # 6) Zavolaj konkrétny generátor
    handler(ctx)


if __name__ == "__main__":
    main()