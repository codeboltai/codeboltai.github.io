---
sidebar_position: 2.3
title: Installation
---

# Installation

Codebolt runs as a desktop app, a CLI, or both. The desktop app includes the server and CLI bundled — it's the most common starting point. The CLI-only install is for headless servers, CI, and users who prefer the terminal.

## Which method

| Method | When to use |
|---|---|
| **Desktop app** | Day-to-day development, full UI experience |
| **CLI only** | Remote machines, CI runners, containers, SSH access |
| **Both** | Desktop for daily use, CLI for scripting — same server backs both |

---

## Desktop app

### System requirements

| Resource | Minimum | Recommended |
|---|---|---|
| OS | Windows 10+, macOS 12+, Linux (glibc 2.31+) | Current versions |
| RAM | 4 GB free | 8 GB free |
| Disk | 2 GB | 20+ GB (more for local models) |
| CPU | Any 64-bit x86 or ARM | 4+ cores |

For **local models** (Ollama, llama.cpp), add the model's memory requirements on top — a 7B model needs ~10 GB extra RAM.

### Windows

Download `Codebolt-Setup-x64.exe` from the Codebolt website and run the installer. The server registers as a user-level background process (no admin rights needed beyond the initial install).

For silent/fleet deployment:

```powershell
Codebolt-Setup-x64.exe /S /D=C:\Program Files\Codebolt
```

Via Winget:

```powershell
winget install Codebolt.Codebolt
```

Via Scoop:

```powershell
scoop bucket add codebolt https://github.com/codebolt-app/scoop-bucket
scoop install codebolt
```

### macOS

Download the `.dmg` from the Codebolt website, open it, and drag `Codebolt.app` to `/Applications`.

Via Homebrew:

```bash
brew install --cask codebolt
```

**Apple Silicon** is recommended over Intel — local model performance is 3–5× faster on ARM64.

### Linux

| Format | Command |
|---|---|
| AppImage | Download → `chmod +x Codebolt-x86_64.AppImage` → run |
| .deb (Ubuntu/Debian) | `sudo dpkg -i codebolt.deb` |
| .rpm (Fedora/RHEL) | `sudo rpm -i codebolt.rpm` |
| Arch | `yay -S codebolt` |
| Flatpak | `flatpak install flathub com.codebolt.Codebolt` |

**Note:** user namespaces must be enabled (`sysctl kernel.unprivileged_userns_clone=1`). Some hardened distros default to 0.

---

## CLI only

The CLI-only install gives you the server and `codebolt` command without the Electron desktop shell.

```bash
# npm (cross-platform, requires Node.js 18+)
npm install -g codebolt

# Homebrew (macOS / Linux)
brew install codebolt/tap/cli

# apt (Ubuntu / Debian)
curl -fsSL https://pkg.codebolt.ai/gpg | sudo gpg --dearmor -o /usr/share/keyrings/codebolt.gpg
echo "deb [signed-by=/usr/share/keyrings/codebolt.gpg] https://pkg.codebolt.ai/apt stable main" | sudo tee /etc/apt/sources.list.d/codebolt.list
sudo apt update && sudo apt install codebolt-cli

# dnf (Fedora / RHEL)
sudo dnf config-manager --add-repo https://pkg.codebolt.ai/rpm/codebolt.repo
sudo dnf install codebolt-cli
```

If you have the desktop app installed, you already have the CLI — no separate install needed.

---

## Updating

### Desktop app

The desktop app checks for updates automatically. **Settings → Updates** controls the channel and auto-install behaviour:

| Channel | Purpose |
|---|---|
| `stable` | Tested releases — default |
| `beta` | Preview of the next release |
| `nightly` | Daily builds from main |

To update the CLI:

```bash
npm update -g codebolt          # npm
brew upgrade codebolt-cli        # Homebrew
sudo apt upgrade codebolt-cli    # apt
```

---

## Uninstalling

Uninstall removes the app and CLI binaries. **It does not delete your projects or data** by default.

### Desktop app

| OS | Method |
|---|---|
| Windows | Settings → Apps → Codebolt → Uninstall, or `winget uninstall Codebolt.Codebolt` |
| macOS | Drag `Codebolt.app` to Trash, or `brew uninstall --cask codebolt` |
| Linux | `sudo apt remove codebolt`, `flatpak uninstall com.codebolt.Codebolt`, etc. |

### CLI

```bash
npm uninstall -g codebolt       # npm
brew uninstall codebolt-cli      # Homebrew
```

### Removing all data (optional, irreversible)

```bash
# Linux
rm -rf ~/.config/CodeBolt

# macOS
rm -rf ~/Library/Application\ Support/CodeBolt

# Windows (PowerShell)
Remove-Item -Recurse -Force $env:APPDATA\CodeBolt
```

This permanently deletes chat history, runs, memory, shadow git repos, installed MCP servers, and settings.

---

## Troubleshooting install issues

| Symptom | Fix |
|---|---|
| Port in use on startup | Another process on the default port — change in Settings → Server |
| Permission error on Windows | Run installer as administrator once; day-to-day use doesn't need it |
| Missing build tools on Linux | Install `build-essential` (Debian) or `gcc make` (Fedora) |
| Rosetta 2 required on macOS | Download the `arm64` build instead of `x64` |
| Antivirus blocking on Windows | Whitelist `Codebolt.exe` in your AV — Electron apps are commonly flagged |
| `glibc` version error on Linux | Your distro is too old; use the Docker install or upgrade to Ubuntu 20.04+ |

For further help see [Troubleshooting](./10_troubleshooting/01_common-issues.md).
