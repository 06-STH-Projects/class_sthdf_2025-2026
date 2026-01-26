.PHONY: help provision update validate list

help:
	@echo "Available commands:"
	@echo "  make provision       - Create new LXCs"
	@echo "  make update LXC=name - Update specific LXC"
	@echo "  make validate        - Check LXC health"
	@echo "  make list            - Show inventory"

provision:
	ansible-playbook playbooks/provision.yml --ask-vault-pass

update:
	@test -n "$(LXC)" || (echo "Usage: make update LXC=networking" && exit 1)
	ansible-playbook playbooks/configure.yml --ask-vault-pass --limit $(LXC)

validate:
	ansible-playbook playbooks/validate.yml

list:
	ansible-inventory --graph
