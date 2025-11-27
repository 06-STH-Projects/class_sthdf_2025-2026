#!/usr/bin/env sh
# Vytvorí novú KNIFE inštanciu – test

set -e

python3 core/scripts/tools/new_item_instance.py \
  --type knife \
  --config config/knifes/knifes_config.yml \
  --id K000101 \
  --name "K000101" \
  --title "CKO-Onboarding " \
  --exists error