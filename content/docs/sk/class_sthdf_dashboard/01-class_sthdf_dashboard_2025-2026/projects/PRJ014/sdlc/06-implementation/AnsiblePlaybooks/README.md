# AnsiblePlaybooks

End-to-end automation for creating Proxmox LXC guests and hardening their SSH access.

## Layout
- `playbooks/site.yml` – Main playbook that provisions LXCs on Proxmox, then configures them.
- `roles/proxmox_lxc` – Interacts with the Proxmox API to create, start, and manage LXC containers, and dynamically adds new containers to the inventory.
- `roles/lxc_general` – Configures user accounts, syncs SSH keys, applies SSH hardening and firewall rules inside the LXCs.
- `roles/lxc_networking` – (Optional) Configures Nginx reverse proxy and manages Let's Encrypt certificates.

## Adding a New Container
1. Edit `inventory/group_vars/proxmox/main.yml` and add a new container entry to the `proxmox_lxc_instances` list with required parameters like `name`, `vmid`, `cores`, `memory`, `ip_octet`, etc.
2. Optionally define any extra roles for that container by adding `extra_roles` to the container entry.
3. Save your changes.
4. Run the playbook to provision and configure the container.
5. The container will be created on Proxmox, started, added dynamically to the `new_lxcs` group, then configured with users, SSH keys, firewall, and any extra roles.

## Adding New SSH Keys for Access
1. Update the SSH keys file that your configuration fetches, currently defined by `lxc_general_authorized_keys_url` in `group_vars/all.yml` or other relevant group vars.
2. Add the new public keys to that remote URL or the file path your setup uses.
3. Run the playbook again on the target hosts or the `new_lxcs` group to sync the new keys:
4. This will update the authorized keys for the configured administrative user without recreating containers.

