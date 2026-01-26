#!/bin/bash
cd "$(dirname "$0")/.."

cat > inventory/hosts.ini <<EOF
[proxmox]
proxmox-node ansible_host=192.168.1.200 ansible_user=root

[lxc_hosts]
$(yq -r '.lxc_definitions | to_entries[] | "\(.key) ansible_host=192.168.1.\(.value.ip_octet)"' inventory/group_vars/all.yml)

[new_lxcs]
EOF
chmod 644 inventory/hosts.ini
