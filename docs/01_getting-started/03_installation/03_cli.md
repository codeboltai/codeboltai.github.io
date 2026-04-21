---
sidebar_position: 3
title: CLI
---

# CLI Installation

The CLI-only install gives you the server and the `codebolt` command without the Electron desktop shell. Good for:

- Headless servers, CI runners, containers.
- Machines you access via SSH.
- Users who prefer the TUI over a GUI.
- Pairing with an already-running desktop instance elsewhere.

If you have the desktop app installed, you already have the CLI — skip this page and use the `codebolt` binary that came with it.

## Installation methods

### npm (cross-platform)

```bash
npm install -g codebolt
```

Works anywhere with Node.js 18+. Puts `codebolt` on PATH. Auto-detects whether to use the local install's server binary or connect to a running desktop app.

### Homebrew (macOS, Linux)

```bash
brew install codebolt/tap/cli
```

### Scoop / Winget (Windows)

```powershell
scoop install codebolt-cli
# or
winget install Codebolt.CLI
```

### Linux package managers

```bash
# Debian/Ubuntu
sudo apt install codebolt-cli

# Fedora/RHEL
sudo dnf install codebolt-cli

# Arch
yay -S codebolt-cli
```

### Direct binary download

Binaries for every platform on the releases page. Download, extract, put on PATH.

```bash
curl -L https://<download-url>/codebolt-cli-linux-x64.tar.gz | tar xz -C /usr/local/bin
```

## First run

```bash
codebolt --version
```

If the command prints a version, the CLI is installed. To start the server:

```bash
codebolt
```

This spawns the local Codebolt server and opens the TUI. The server stays running until you close it (Ctrl+C).

For server-only mode (no TUI, suitable for background/SSH use):

```bash
codebolt --server
```

The server runs in the foreground. Use a process manager or terminal multiplexer to keep it running.

## CLI without a local server

If you're connecting to a remote Codebolt server (self-hosted for your team), you don't need a local server at all:

```bash
codebolt --connect <port> --provider <name> --api-key <key>
```

The CLI talks directly to the remote server. No local resources used except for the CLI process.

## CLI alongside the desktop app

You can have both installed. They share the same server — if the desktop app is running, `codebolt --version` from a terminal confirms the CLI can see the install, and commands affect the same workspace.

By default, the CLI auto-detects a running desktop server and connects to it. If you have both the desktop app running AND a separate local server started via `codebolt --server`, there will be a port conflict. Pick one.

## Headless setup

For a server that will only be accessed via CLI (no display, no TUI):

```bash
# Install CLI
npm install -g codebolt

# Start the server in server-only mode
codebolt --server &

# Verify
codebolt --version

# Configure a provider
codebolt --provider openai --api-key "$OPENAI_API_KEY"

# Open a project
codebolt --project /path/to/project
```

From here, all agent/flow/tool commands work. See [CLI overview](../../02_using-codebolt/02_surfaces/03_cli/01_overview.md).

## Running in CI

For CI environments (GitHub Actions, GitLab, etc.), the pattern is:

1. Install the CLI.
2. Start the server in daemon mode.
3. Configure providers from CI secrets.
4. Run agents or flows.
5. Stop the server.

Example GitHub Actions step:

```yaml
- name: Install Codebolt CLI
  run: npm install -g codebolt

- name: Start Codebolt server
  run: codebolt --server &

- name: Run reviewer agent
  env:
    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
  run: |
    codebolt --prompt "review the PR diff" --agent reviewer --project "$GITHUB_WORKSPACE" --provider anthropic --api-key "$ANTHROPIC_API_KEY"

- name: Stop Codebolt server
  if: always()
  run: kill %1
```

## Docker

Docker images are not currently available. Use the npm or binary install methods for CI and containerized environments.

## Systemd (Linux)

To run the Codebolt server as a system service:

```ini
# /etc/systemd/system/codebolt.service
[Unit]
Description=Codebolt Server
After=network.target

[Service]
Type=simple
User=codebolt
Environment="CODEBOLT_DATA_DIR=/var/lib/codebolt"
ExecStart=/usr/local/bin/codebolt --server
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now codebolt
sudo systemctl status codebolt
```

This is the pattern for team self-hosted instances. See [Self-hosting](../../04_build-on-codebolt/10_self-hosting/01_overview.md) for the full guide.

## Upgrading the CLI

### npm

```bash
npm update -g codebolt
```

### Homebrew

```bash
brew upgrade codebolt-cli
```

### Direct binary

Download and replace the binary from the releases page.

Server and CLI versions should match. Mixing versions works but you may see warnings if the protocol changed. For production, pin both.

## Uninstalling

### npm

```bash
npm uninstall -g codebolt
```

### Homebrew

```bash
brew uninstall codebolt-cli
```

Data (databases, projects, keys) is not removed. To purge everything:

```bash
rm -rf ~/.config/codebolt   # Linux CLI
rm -rf ~/Library/Application\ Support/codebolt   # macOS CLI
rmdir /s %APPDATA%\codebolt   # Windows
```

## See also

- [Installation Overview](./01_overview.md)
- [Desktop App install](./02_desktop-app.md)
- [CLI Overview](../../02_using-codebolt/02_surfaces/03_cli/01_overview.md)
- [Self-hosting](../../04_build-on-codebolt/10_self-hosting/01_overview.md)
