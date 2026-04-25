# Installation & Setup

> Get Codebolt installed and configured in a few minutes. Pick your interface below — each tab walks through install, sign-in, and first-run setup end to end.

Get Codebolt installed and configured in a few minutes. Pick your interface below — each tab walks through install, sign-in, and first-run setup end to end.

---

## System requirements

| Resource | Minimum | Recommended |
|---|---|---|
| OS | Windows 10+, macOS 12+, Linux (glibc 2.31+) | Current versions |
| RAM | 4 GB free | 8 GB free |
| Disk | 2 GB | 20+ GB (more for local models) |
| CPU | Any 64-bit x86 or ARM | 4+ cores |

For **local models** (Ollama, llama.cpp), add the model's VRAM/RAM on top — a 7B model typically needs ~8–10 GB extra.

---

## Updating

**Desktop app** — updates automatically. Check **Settings → Updates** to choose the channel (`stable` / `beta` / `nightly`).

**CLI:**

```bash
npm update -g codebolt          # npm
brew upgrade codebolt-cli        # Homebrew
sudo apt upgrade codebolt-cli    # apt
```

---

## Uninstalling

Uninstall removes binaries only — **projects and data are not deleted** by default.

| OS | Desktop app | CLI |
|---|---|---|
| Windows | Settings → Apps → Codebolt → Uninstall | `npm uninstall -g codebolt` |
| macOS | Drag to Trash or `brew uninstall --cask codebolt` | `brew uninstall codebolt-cli` |
| Linux | `sudo apt remove codebolt` or `flatpak uninstall …` | `npm uninstall -g codebolt` |

To **remove all data** (chat history, settings, runs — irreversible):

```bash
# Linux
rm -rf ~/.config/CodeBolt
# macOS
rm -rf ~/Library/Application\ Support/CodeBolt
# Windows (PowerShell)
Remove-Item -Recurse -Force $env:APPDATA\CodeBolt
```

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Port in use on startup | Change port in **Settings → Server** |
| Permission error on Windows | Run installer as administrator once |
| Missing build tools on Linux | Install `build-essential` (Debian) or `gcc make` (Fedora) |
| Rosetta 2 required on macOS | Download the `arm64` build instead of `x64` |
| Antivirus blocking on Windows | Whitelist `Codebolt.exe` — Electron apps are commonly flagged |
| `glibc` version error on Linux | Upgrade to Ubuntu 20.04+ or use the Docker install |
