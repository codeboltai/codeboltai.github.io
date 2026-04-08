---
sidebar_position: 5
title: App Commands
---

# `codebolt app` commands

Manage the Codebolt server itself (the local process or a self-hosted instance you're connected to).

## Server lifecycle

### `codebolt app start`

Start the server.

```bash
codebolt app start
codebolt app start --headless            # no UI
codebolt app start --daemon              # detach and run in background
codebolt app start --port 3457           # custom port
```

If the server is already running, this is a no-op (logs a message).

### `codebolt app stop`

Graceful shutdown. Waits for in-flight runs to finish (up to a grace period), then exits.

```bash
codebolt app stop
codebolt app stop --grace-period 60      # seconds to wait for runs
```

### `codebolt app restart`

Stop then start. Shorthand for the common pattern.

```bash
codebolt app restart
```

### `codebolt app status`

```bash
codebolt app status
```

Prints:
- Server state (running/stopped)
- Uptime
- Active agents count
- Active tool servers count
- Workspace
- Memory usage
- Recent error count

## Logs

```bash
codebolt app logs
codebolt app logs --tail 200
codebolt app logs --follow
codebolt app logs --filter agentService
codebolt app logs --level warn
```

Tails the server log. Filter by component or level.

## Health and diagnostics

### `codebolt app doctor`

Diagnostic tool. Checks for common misconfigurations and corrupted state.

```bash
codebolt app doctor
codebolt app doctor --fix     # attempt auto-repair
```

Checks:
- Database connectivity and schema version
- Shadow git repo health
- Plugin process health
- Disk space
- Port conflicts
- Expired credentials
- Corrupted cache

### `codebolt app version`

```bash
codebolt app version
codebolt app version --json
```

Shows server, CLI, and protocol versions. Useful for compatibility checks.

### `codebolt app report`

```bash
codebolt app report > report.txt
```

Generates a redacted diagnostic report suitable for bug reports. Includes version info, config summary, recent logs, detected issues. Secrets are redacted.

## Config

```bash
codebolt config get <key>
codebolt config set <key> <value>
codebolt config unset <key>
codebolt config list
```

Manages the CLI-local configuration (server URL, auth token, default provider, etc.). This is **not** the server configuration — for that, edit `codebolt-server.yaml` or use `codebolt app config` on a self-hosted instance.

Common keys:

- `server` — URL the CLI connects to
- `token` — auth token for remote servers
- `default_provider`
- `default_model`
- `theme`

## Upgrading

```bash
codebolt app upgrade                 # check for updates
codebolt app upgrade --channel beta
codebolt app upgrade --install       # download and install
```

For package-manager installs (npm, Homebrew), this delegates to the package manager. For direct-download installs, it downloads the new binary and replaces the old one.

## Remote server management

When connected to a self-hosted server, some `codebolt app` commands are proxied to the server. Only users with admin permissions can run them:

```bash
codebolt admin backup --output /backups/...
codebolt admin user create --email alice@example.com
codebolt admin migrations status
codebolt admin rotate-master-key
```

## See also

- [CLI Overview](./01_overview.md)
- [Self-Hosting → Running the server](../../../04_build-on-codebolt/09_self-hosting/02_running-the-server.md)
- [Install troubleshooting](../../../01_getting-started/03_installation/07_install-troubleshooting.md)
