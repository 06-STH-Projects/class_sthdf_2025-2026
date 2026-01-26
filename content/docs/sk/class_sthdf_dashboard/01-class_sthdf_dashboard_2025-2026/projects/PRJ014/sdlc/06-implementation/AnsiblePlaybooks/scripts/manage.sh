#!/bin/bash
PLAYBOOK_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PLAYBOOK_DIR"

case "$1" in
  provision)
    ansible-playbook create_lxc.yml --ask-vault-pass --tags provision
    ;;
  update)
    if [ -z "$2" ]; then
      echo "Usage: $0 update <lxc_name|all>"
      exit 1
    fi
    if [ "$2" = "all" ]; then
      ansible-playbook create_lxc.yml --ask-vault-pass --limit lxc_hosts
    else
      ansible-playbook create_lxc.yml --ask-vault-pass --limit "$2"
    fi
    ;;
  list)
    ansible-inventory -i inventory/hosts.ini --graph
    ;;
  *)
    echo "Usage: $0 {provision|update <name>|list}"
    exit 1
    ;;
esac
