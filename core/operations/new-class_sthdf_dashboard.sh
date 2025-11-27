#!/usr/bin/env sh
# Vytvorí novú class_sthdf_dashboard inštanciu pre projekt

set -e

python3 core/scripts/tools/new_item_instance.py \
  --type class_sthdf_dashboard \
  --config config/class_sthdf_dashboard/class_sthdf_dashboard_config.yml \
  --id 01-class_sthdf_dashboard_2025 \
  --name "01-class_sthdf_dashboard_2025" \
  --title "01-class_sthdf_dashboard – rok 2025" \
  --exists replace

 