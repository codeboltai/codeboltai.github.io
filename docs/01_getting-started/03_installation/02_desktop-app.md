---
sidebar_position: 2
title: Desktop App
---

# Desktop App Installation

The desktop app is the most common way to run Codebolt. It bundles the server, CLI, and GUI in one install. Once installed, the server starts automatically when you launch the app.

## System requirements

Before installing, check you meet the minimums in [System requirements](./04_system-requirements.md). Short version: Windows 10+, macOS 12+, or a recent Linux distro; 4 GB free RAM; ~2 GB disk.

## Windows

### Installer (recommended)

1. Download `Codebolt-Setup-x64.exe` from the Codebolt website.
2. Run the installer. Accept the defaults unless you need a non-standard location.
3. The installer registers Codebolt with Windows and adds a Start menu entry.
4. Launch from the Start menu.

Silent install for fleet deployment:

```powershell
Codebolt-Setup-x64.exe /S /D=C:\Program Files\Codebolt
```

The server installs as a user-level background process. No admin rights needed beyond the install itself.

### Scoop

```powershell
scoop bucket add extras
scoop install codebolt
```

### Winget

```powershell
winget install Codebolt.Codebolt
```

### Known Windows quirks

- **Antivirus false positives.** Some AV software flags Electron apps on first run. Whitelist the `Codebolt.exe` binary if needed.
- **Path length limits.** If your project is under a deep path (>260 characters), some operations fail. Enable long paths via Group Policy or move the project.
- **Firewall prompts.** First run asks for firewall permission to bind localhost. Allow for private networks only.

## macOS

### DMG (recommended)

1. Download `Codebolt.dmg` from the website.
2. Open the DMG. Drag `Codebolt.app` to `Applications`.
3. First launch: right-click → Open (required because the app is initially unsigned on your machine — this only happens once).
4. macOS will prompt for permission to run the unidentified developer. Approve.

### Homebrew

```bash
brew install --cask codebolt
```

Handles signing/notarization prompts automatically.

### Apple Silicon vs Intel

The DMG download page auto-detects your architecture. If you need to pick manually:

- **Apple Silicon (M1/M2/M3/M4):** `Codebolt-arm64.dmg`
- **Intel:** `Codebolt-x64.dmg`

Apple Silicon is strongly preferred if you have the option — local models run dramatically faster on unified memory.

### macOS quirks

- **Gatekeeper:** first run needs right-click → Open. Subsequent launches don't.
- **Rosetta:** if you installed the x64 build on Apple Silicon by mistake, it runs under Rosetta and is slower. Reinstall the arm64 build.
- **Keychain access:** Codebolt stores provider API keys in the macOS keychain. You'll be prompted on first save and again after OS upgrades.
- **Full Disk Access:** for some project types (external drives, certain system paths), you may need to grant Full Disk Access in System Settings → Privacy & Security.

## Linux

### AppImage (works everywhere)

1. Download `Codebolt-x86_64.AppImage` (or `aarch64` for ARM).
2. `chmod +x Codebolt-x86_64.AppImage`
3. Run it: `./Codebolt-x86_64.AppImage`

Integrates with your desktop environment on first run. No install required.

### .deb (Debian, Ubuntu)

```bash
wget https://<download-url>/codebolt_latest_amd64.deb
sudo apt install ./codebolt_latest_amd64.deb
```

Installs to `/usr/bin/codebolt` and adds a desktop entry.

### .rpm (Fedora, RHEL, openSUSE)

```bash
sudo rpm -i codebolt-latest.x86_64.rpm
```

### Arch Linux

```bash
yay -S codebolt
# or
paru -S codebolt
```

### Flatpak

```bash
flatpak install flathub com.codebolt.Codebolt
```

### Linux quirks

- **Sandbox requirements.** Electron apps need kernel unprivileged user namespaces enabled. On some hardened distros (e.g. recent Debian with kernel.unprivileged_userns_clone=0), you'll see a sandbox error. Either enable user namespaces or run with `--no-sandbox` (not recommended).
- **Wayland vs X11.** Codebolt works on both. On Wayland, screen sharing and some clipboard operations may behave differently than X11 — there's a `--wayland` flag if auto-detection picks wrong.
- **libGL / GPU drivers.** If the app opens as a grey window, your GPU drivers may be missing. Install `mesa-libGL` (or equivalent) and restart.
- **AppArmor / SELinux.** If the server fails to bind localhost, check your policy logs.

## First launch

Regardless of OS, first launch takes 30-90 seconds because the app is:

1. Creating the Codebolt data directory (`~/.config/CodeBolt/` on Linux, `~/Library/Application Support/CodeBolt/` on macOS, `%APPDATA%\CodeBolt\` on Windows).
2. Initializing the local database.
3. Starting the server process.
4. Running first-time migrations.
5. Opening the GUI.

You'll see a "setting things up" screen. Don't kill it midway — if interrupted, delete the data directory and retry.

## Where things get installed

| Component | Path (Linux) | Path (macOS) | Path (Windows) |
|---|---|---|---|
| App binary | `/opt/Codebolt/` | `/Applications/Codebolt.app` | `C:\Program Files\Codebolt\` |
| User data | `~/.config/CodeBolt/` | `~/Library/Application Support/CodeBolt/` | `%APPDATA%\CodeBolt\` |
| Database | `~/.config/CodeBolt/database.db` | `~/Library/Application Support/CodeBolt/database.db` | `%APPDATA%\CodeBolt\database.db` |
| Logs | `~/.config/CodeBolt/logs/` | `~/Library/Application Support/CodeBolt/logs/` | `%APPDATA%\CodeBolt\logs\` |
| Provider keys (encrypted) | `~/.config/CodeBolt/keys/` + OS keychain | `~/Library/Application Support/CodeBolt/keys/` + OS keychain | `%APPDATA%\CodeBolt\keys\` + Credential Manager |
| Cached models / plugins | `~/.config/CodeBolt/cache/` | `~/Library/Application Support/CodeBolt/cache/` | `%APPDATA%\CodeBolt\cache\` |

The app binary is replaced on update; user data is preserved.

## Verifying the install

After first launch:

1. **Status bar should say Connected.** If it's stuck on "Connecting", the server failed to start — check logs.
2. **`codebolt --version` from a terminal** should print the version number, confirming the CLI can see the install.
3. **Go to Settings → About.** It should show the version and server state.

If any of these fail, see [Install troubleshooting](./07_install-troubleshooting.md).

## Upgrading the desktop app

Auto-update is enabled by default. The app checks for updates periodically and prompts you to restart when a new version is available.

To control updates:

- **Settings → Updates → Channel:** stable, beta, or nightly.
- **Settings → Updates → Check now:** manual check.
- **Settings → Updates → Auto-update:** off to require manual approval.

See [Updating](./05_updating.md) for channel details and pinning.

## Uninstalling

See [Uninstalling](./06_uninstalling.md). By default, uninstall **preserves** your data directory so you don't lose projects, memory, or history. You have to opt in to data deletion.

## See also

- [Installation Overview](./01_overview.md)
- [CLI install](./03_cli.md)
- [System requirements](./04_system-requirements.md)
- [Install troubleshooting](./07_install-troubleshooting.md)
- [First-run checklist](../04_first-run-checklist.md)
