---
sidebar_position: 5
title: Updating
---

# Updating

How to update Codebolt to a newer version. Desktop app updates automatically by default; the CLI updates via the same package manager you installed it with.

## Desktop app auto-update

By default, the desktop app checks for updates periodically and prompts when one is available. Click "restart to update" at your convenience.

**Settings → Updates** controls this:

- **Channel** — `stable` (default), `beta`, `nightly`.
- **Auto-check** — on/off.
- **Auto-install** — on/off (if off, you're notified but nothing installs until you say so).
- **Check now** — manual check.

## Channels

| Channel | Purpose |
|---|---|
| `stable` | Tested releases. Default. Recommended for everyday use. |
| `beta` | Preview of the next release. More bugs, earlier features. |
| `nightly` | Daily builds from main. For Codebolt contributors and brave testers. |

Switch channels any time. Moving from nightly back to stable may require a fresh install if schema migrations were applied.

## Pinning a version

To stay on a specific version and not auto-update:

**Settings → Updates → Auto-check: off.**

You're now on whatever version you installed until you update manually.

## CLI updates

Depends on how you installed it:

```bash
# npm
npm update -g codebolt

# Homebrew
brew upgrade codebolt-cli

# Package manager (apt, dnf, etc.)
sudo apt update && sudo apt upgrade codebolt-cli

# Direct binary
# Download the new binary from the releases page, replace the old one.

# From the CLI itself (if your install method supports it)
codebolt app upgrade --install
```

Server and CLI should be the same version. A mismatch works if they're within one minor version; otherwise you'll see warnings.

## Server updates (self-hosted)

For self-hosted deployments, see [Self-Hosting → Upgrade Guide](../../04_build-on-codebolt/10_self-hosting/08_upgrade-guide.md). Upgrades can involve database migrations and should be done carefully with backups first.

## What gets updated

An update replaces:

- The app binary / CLI binary.
- Bundled assets (themes, default agents, built-in tools).
- Migration scripts (run on next start).

It **does not** touch:

- Your projects.
- Your data directory (databases, memory, shadow git, history).
- Your settings.
- Installed MCP servers or capabilities (those are updated separately).

## After an update

On first start of the new version:

1. The app runs database migrations if any.
2. Checks compatibility of installed capabilities and MCP servers.
3. Loads any new built-in agents.

If a capability or MCP server becomes incompatible, you'll see a warning and the affected tools will be disabled until the capability author ships an update.

## Rollback

If the new version breaks something:

1. **Uninstall the new version.**
2. **Reinstall the previous version** (from releases archive or a saved binary).
3. **Run the server.** Database migrations only work forward — if a breaking migration ran, you may need to restore from backup.

For this reason, take a backup before upgrading a self-hosted instance. See [Backup and Restore](../../04_build-on-codebolt/10_self-hosting/07_backup-and-restore.md).

## Release notes

Every release ships with notes listing:

- New features
- Bug fixes
- Breaking changes
- Migration actions required

**Read these before upgrading**, especially across minor or major versions.

## See also

- [Installation Overview](./01_overview.md)
- [Desktop App](./02_desktop-app.md)
- [CLI](./03_cli.md)
- [Self-Hosting → Upgrade Guide](../../04_build-on-codebolt/10_self-hosting/08_upgrade-guide.md)
