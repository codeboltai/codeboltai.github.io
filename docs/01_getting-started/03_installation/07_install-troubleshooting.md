---
sidebar_position: 7
title: Install Troubleshooting
---

# Install Troubleshooting

The most common things that go wrong during install and first run, and how to fix them. If your issue isn't here, try [Common issues](../../02_using-codebolt/10_troubleshooting/01_common-issues.md) or report the bug.

## App won't start

### "Codebolt already running" but nothing is visible

Leftover server process from a previous run.

**Windows:** Task Manager → find `Codebolt.exe` or `codebolt-server.exe` → End Task. Relaunch.
**macOS:** `ps aux | grep -i codebolt` → `kill <pid>` → relaunch.
**Linux:** `pkill -f codebolt-server` → relaunch.

If the zombie keeps coming back, the app's shutdown is broken on your system. File a bug with your OS version.

### App opens, server never connects

Server failed to start. Check logs:

- **Desktop app:** Settings → Logs (or open the logs directory in the user data folder — see [Desktop App install](./02_desktop-app.md) for paths).

Look for `ERROR` lines. Most common causes below.

### "EADDRINUSE: address already in use"

Another process is holding Codebolt's port (default 12345).

```bash
# Linux/macOS
lsof -i :12345
# Windows
netstat -ano | findstr :12345
```

Kill the offending process, or change Codebolt's port:

```bash
codebolt --port 12346
```

Restart the app.

### "Database locked" or "database is corrupt"

SQLite wasn't closed cleanly, or disk space issue.

1. **Back up the database** and let Codebolt re-create it:
   ```bash
   # Linux
   mv ~/.config/CodeBolt/database.db ~/.config/CodeBolt/database.db.bak
   # macOS
   mv ~/Library/Application\ Support/CodeBolt/database.db ~/Library/Application\ Support/CodeBolt/database.db.bak
   codebolt
   ```
   You lose run history, memory, and settings. Project files are unaffected.

### "Permission denied" on startup

Can't write to the user data directory. Check permissions:

```bash
# Linux
ls -la ~/.config/CodeBolt/
chown -R $(whoami) ~/.config/CodeBolt/
# macOS
ls -la ~/Library/Application\ Support/CodeBolt/
```

On Windows, check that `%APPDATA%\CodeBolt\` is writable by your user.

## Desktop app specific

### Windows: blank grey window

Electron GPU acceleration failed. Try:

```powershell
Codebolt.exe --disable-gpu
```

If that works, you have a graphics driver issue. Update drivers. If not, your system is missing required runtime libraries — reinstall.

### macOS: "cannot open because the developer cannot be verified"

Gatekeeper. Right-click the app → Open. Approve the dialog. First run only.

If you still can't open it:

```bash
xattr -d com.apple.quarantine /Applications/Codebolt.app
```

Removes the quarantine flag.

### Linux: "failed to load libGL.so"

Missing graphics library.

```bash
# Debian/Ubuntu
sudo apt install libgl1 libgbm1

# Fedora
sudo dnf install mesa-libGL

# Arch
sudo pacman -S mesa
```

### Linux: sandbox error on launch

User namespaces disabled.

```bash
# Check
sysctl kernel.unprivileged_userns_clone

# Enable (temporary)
sudo sysctl kernel.unprivileged_userns_clone=1

# Enable (persistent)
echo 'kernel.unprivileged_userns_clone=1' | sudo tee /etc/sysctl.d/99-codebolt.conf
```

Last resort: run with `--no-sandbox` (reduces security; not recommended).

### Wayland: mouse cursor issues

Electron on Wayland can have cursor glitches. Force X11:

```bash
Codebolt --ozone-platform=x11
```

## CLI specific

### "codebolt: command not found"

The binary isn't on PATH.

**npm install:** check `npm bin -g` and ensure it's on PATH.
**Direct download:** ensure the binary is executable (`chmod +x`) and in a directory on PATH.
**Homebrew:** `brew doctor` often catches PATH issues.

### "codebolt: Cannot find module codebolt"

Your `codebolt` install is broken.

```bash
npm uninstall -g codebolt
npm install -g codebolt
```

If it still fails, check Node version: `node --version`. Must be 18+.

### CLI can't connect to server

Check if the server is running:

```bash
codebolt --version
```

If this fails:

1. **Is the server running?** Check for the process in Task Manager / `ps aux`.
2. **Is anything listening on the port?** `curl http://localhost:12345/health`
3. **Try starting the server:** `codebolt --server`

If the server is running but the CLI can't reach it, check firewalls. On Linux, `localhost` connections should always work; if they don't, your network config is broken.

## First-run setup issues

### Can't sign in

If the sign-in flow opens a browser and nothing happens:

1. Copy the URL from the browser and open it manually — auth flows sometimes lose the redirect.
2. Check your browser isn't blocking third-party cookies on the auth domain.
3. Try a different browser.

For offline / air-gapped installs, use a local license key instead of cloud sign-in. See the relevant section of the self-hosting docs.

### Provider test fails

First check: is it a key issue or a network issue?

```bash
curl -H "Authorization: Bearer $KEY" https://api.openai.com/v1/models
```

(Adjust for your provider.)

- **Succeeds outside Codebolt → key is fine, Codebolt config is wrong.** Re-add the provider.
- **Fails outside Codebolt too → key is bad, network is blocking, or quota is exceeded.** Fix the underlying issue.

### Project indexing stuck

Large projects can take a while. Check the logs in **Settings → Logs** for `projectStructureService` messages.

If the log is quiet (nothing happening), the indexer is hung. Restart the server. If it's scrolling but very slow, it's working — just wait.

For extremely large projects (>100K files), exclude generated directories via `.codebolt/ignore` to speed up initial index.

### First agent run fails immediately

Check the run trace in the desktop app under **History**, or check **Settings → Logs** for errors.

Common reasons:
- **No provider configured** → "no provider available"
- **Tool allowlist empty** → "no tools available; cannot handle task"
- **Agent manifest invalid** → "failed to load agent"
- **Spawn error** → the agent process couldn't start; check Node version

## Upgrade issues

### App starts, "database migration failed"

A schema migration hit an error. Options:

1. **Revert to the previous version** and file a bug.
2. **Reset the database** (loses history): rename the `database.db` file in the user data directory and restart.

Never proceed past a migration error by ignoring it — subsequent operations may corrupt data.

### Plugins broken after upgrade

Capability bundles and MCP servers can break when Codebolt's protocol version changes.

Check **Settings → Tools** for any servers showing errors or incompatibility warnings.

## When nothing works

Nuclear options, in order of severity:

1. **Restart the server:** stop the process (Ctrl+C or kill) and start again with `codebolt --server`
2. **Reset the database (keeps projects):** rename `database.db` in the user data directory and restart
3. **Full reset (loses everything):** rename the entire user data directory and reinstall

Back up before each step.

## Collecting diagnostics for a bug report

Before filing, collect:

- Version info: `codebolt --version`
- OS and version
- Relevant log entries from **Settings → Logs**
- Steps to reproduce

Attach this information to your bug report.

See [Reporting bugs](../../02_using-codebolt/10_troubleshooting/03_reporting-bugs.md).

## See also

- [Desktop App install](./02_desktop-app.md)
- [CLI install](./03_cli.md)
- [First-run checklist](../04_first-run-checklist.md)
- [Common issues (post-install)](../../02_using-codebolt/10_troubleshooting/01_common-issues.md)
