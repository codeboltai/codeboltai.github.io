---
sidebar_position: 6
title: Uninstalling
---

# Uninstalling

Removing Codebolt. By default, uninstall **preserves your data** so nothing you've worked on is lost. You have to opt in to data deletion.

## What uninstall removes

- App binary
- CLI binary
- Desktop shortcuts, menu entries
- Auto-update registration

## What uninstall does NOT remove (by default)

- User data (varies by platform — see [Desktop App install](./02_desktop-app.md) for paths)
- Databases, runs, memory, history
- Projects (they were never in Codebolt's directory)
- Shadow git repos
- Installed MCP servers and capabilities (part of user data)
- Your actual source code

Reinstalling Codebolt will pick up where you left off.

## Uninstalling the desktop app

### Windows

**Settings → Apps → Installed apps → Codebolt → Uninstall.**

Or if you installed via Winget:

```powershell
winget uninstall Codebolt.Codebolt
```

Or Scoop:

```powershell
scoop uninstall codebolt
```

### macOS

Drag `Codebolt.app` from `/Applications` to the Trash.

Or if installed via Homebrew:

```bash
brew uninstall --cask codebolt
```

### Linux

Depends on install method:

```bash
# AppImage — just delete the file
rm ~/Downloads/Codebolt-x86_64.AppImage

# .deb
sudo apt remove codebolt

# .rpm
sudo dnf remove codebolt

# Arch
sudo pacman -R codebolt

# Flatpak
flatpak uninstall com.codebolt.Codebolt
```

## Uninstalling the CLI

```bash
# npm
npm uninstall -g codebolt

# Homebrew
brew uninstall codebolt-cli

# Direct binary
rm /usr/local/bin/codebolt
```

## Removing user data

This is the opt-in step. Only do this if you really want to wipe everything:

### All platforms

```bash
# Stop any running server first (Ctrl+C or kill the process)

# Then delete the data directory
# Linux (Electron desktop app):
rm -rf ~/.config/CodeBolt

# Linux (CLI):
rm -rf ~/.config/codebolt

# macOS (Electron desktop app):
rm -rf ~/Library/Application\ Support/CodeBolt

# macOS (CLI):
rm -rf ~/Library/Application\ Support/codebolt

# Windows (PowerShell):
Remove-Item -Recurse -Force $env:APPDATA\CodeBolt
```

This permanently deletes:
- All projects' Codebolt data (not the source files)
- All chat history across all threads
- All agent runs and traces
- All memory (persistent, episodic, KG, vector)
- All shadow git history
- All installed MCP servers and capabilities
- All settings and profiles

**Not reversible.** Back up first if you might want any of it later.

## Revoking tokens and credentials

If you used the hosted service:

1. **Sign in to codebolt.ai** → Account → Sessions → revoke all.
2. **Remove Codebolt from OAuth providers** (Google Account → Security → Third-party apps, etc.) if you signed in via SSO.
3. **Delete API tokens** you generated for CLI use.

If you configured provider API keys in Codebolt, **revoke them at the provider** (OpenAI, Anthropic, etc.) to be safe — Codebolt stores them encrypted but you should assume "possibly recoverable" if a machine was compromised.

## Uninstalling from a self-hosted team server

For a team member leaving the team, the team admin should remove the user's access through the admin UI or team management interface. Their contributed data (runs, memory) may be preserved per team policy.

To uninstall the team server entirely:

```bash
# Stop and disable
sudo systemctl stop codebolt
sudo systemctl disable codebolt

# Remove the binary
rm /usr/local/bin/codebolt

# Remove data (after backing up!)
sudo rm -rf /var/lib/codebolt

# Remove config
sudo rm -rf /etc/codebolt

# Remove systemd unit
sudo rm /etc/systemd/system/codebolt.service
sudo systemctl daemon-reload
```

Back up the master key separately before deleting — without it, any encrypted data in old backups is unrecoverable.

## Reinstalling

Just run the installer again. If you preserved the data directory, everything's as you left it. If you deleted it, first-run will create a fresh empty state.

## See also

- [Installation Overview](./01_overview.md)
- [Desktop App](./02_desktop-app.md)
- [CLI](./03_cli.md)
- [Self-Hosting](../../04_build-on-codebolt/10_self-hosting/01_overview.md)
