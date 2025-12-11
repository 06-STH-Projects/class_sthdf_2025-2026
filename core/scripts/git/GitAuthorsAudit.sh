#!/usr/bin/env bash
set -euo pipefail

ROOT="content/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026"
STUDENTS="$ROOT/students"
PROJECTS="$ROOT/body/projects"

AUTHORS=(
  "roman_kazicka|roman kazicka"
  "Roman-Kazicka|Roman-Kazicka"
  "Danylo_Bashmakov|DF-group@users.noreply.github.com"
  "patrikfejda|patrikfejda@gmail.com"
  "Patrik_Fejda|55843553+patrikfejda@users.noreply.github.com"
  "Juraj_Marcinech|Jammz-kekw"
  "Oliver_Ondrus|G0stik@users.noreply.github.com"
  "xmarcins|xmarcins@users.noreply.github.com"
  "ItsPatrik|patominarovic1@gmail.com"
  "Dalibor_Dosa|xdosa@stuba.sk"
  "DariiaSira|DariiaSira@users.noreply.github.com"
  "Dominik_Pallo|pallodominik@gmail.com"
  "Akos_Levardy|Akos360@users.noreply.github.com"
)

echo "=== KNIFE audit student/project súborov ==="
echo "Repo: $(pwd)"
echo "Cesty: STUDENTS=$STUDENTS"
echo "       PROJECTS=$PROJECTS"
echo

for entry in "${AUTHORS[@]}"; do
  label="${entry%%|*}"
  pattern="${entry#*|}"

  last_commit="$(git log -1 --author="$pattern" --pretty=format:%H -- "$STUDENTS" "$PROJECTS" || true)"

  if [[ -z "${last_commit}" ]]; then
    echo "Autor: $label ($pattern)"
    echo "  -> Nenašli sa žiadne commity v $STUDENTS alebo $PROJECTS"
    echo
    continue
  fi

  outfile="audit_${label}.diff"

  echo "Autor: $label ($pattern)"
  echo "  Posledný commit v students/projects: $last_commit"
  echo "  Ukladám diff do: $outfile"

  git diff "${last_commit}"..HEAD -- "$STUDENTS" "$PROJECTS" > "$outfile" || true
  echo
done

echo "Hotovo."
echo "Ak vznikli súbory audit_*.diff, prejdi si ich a skontroluj zmeny."