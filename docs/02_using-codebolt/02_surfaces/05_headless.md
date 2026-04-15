---
sidebar_position: 7
title: Headless Mode
---

# Headless Mode

Run Codebolt without any UI — no GUI, no TUI. Just the server, accepting CLI commands. The setup for CI runners, background services, automation.

## Starting headless

```bash
codebolt app start --headless
```

Starts the server without opening any UI. The CLI can still connect and issue commands.

For daemonised operation:

```bash
codebolt app start --headless --daemon
```

Runs detached, survives terminal close. Use with `systemd` / `launchd` for a proper background service — see [Self-hosting → Running the server](../../04_build-on-codebolt/10_self-hosting/02_running-the-server.md).

## Typical headless workflow

```bash
# Start the server
codebolt app start --headless --daemon

# Configure a provider from env
codebolt provider add anthropic --key "$ANTHROPIC_API_KEY"

# Open a project
codebolt project open /path/to/project

# Run an agent
codebolt agent start reviewer --task "review the diff" --json > review.json

# Check status
cat review.json | jq '.status'

# Shut down
codebolt app stop
```

All of this happens without any display. Perfect for CI jobs.

## CI integration

GitHub Actions example:

```yaml
- name: Install Codebolt CLI
  run: npm install -g codebolt

- name: Start server
  run: codebolt app start --headless --daemon

- name: Configure provider
  env:
    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
  run: codebolt provider add anthropic --key "$ANTHROPIC_API_KEY"

- name: Run reviewer
  run: |
    codebolt project open "$GITHUB_WORKSPACE"
    codebolt agent start reviewer --task "review the PR diff" --json > review.json

- name: Fail on blockers
  run: |
    if jq -e '.comments[] | select(.severity == "blocker")' review.json > /dev/null; then
      exit 1
    fi

- name: Stop server
  if: always()
  run: codebolt app stop
```

Same pattern works for GitLab CI, CircleCI, Jenkins, or any other runner.

## Docker for ephemeral runs

For fully disposable CI runs, use the official Docker image:

```bash
docker run --rm \
  -v "$(pwd):/workspace" \
  -e ANTHROPIC_API_KEY \
  codebolt/cli:latest \
  agent start reviewer --task "review the diff" --project /workspace
```

The image starts a headless server, runs the command, exits. No persistence between runs.

For scripted multi-step work, start a long-lived container:

```bash
docker run -d --name codebolt -v "$(pwd):/workspace" -e ANTHROPIC_API_KEY codebolt/cli:latest app start --headless
docker exec codebolt codebolt project open /workspace
docker exec codebolt codebolt agent start reviewer --task "..." > result.json
docker stop codebolt
```

## Systemd service

For a persistent headless instance on a server:

```ini
# /etc/systemd/system/codebolt.service
[Unit]
Description=Codebolt Server
After=network.target

[Service]
Type=simple
User=codebolt
Environment="ANTHROPIC_API_KEY=..."
ExecStart=/usr/local/bin/codebolt app start --headless --foreground
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now codebolt
```

For self-hosted team use, see [Self-hosting → Running the server](../../04_build-on-codebolt/10_self-hosting/02_running-the-server.md) for the production-grade version.

## Passing credentials

Never pass secrets as command-line arguments — they'd show up in process listings and logs. Use environment variables:

```bash
export ANTHROPIC_API_KEY=sk-ant-...
codebolt provider add anthropic --key "$ANTHROPIC_API_KEY"
```

Or use `codebolt provider reload` which picks up env vars for known providers.

## Output parsing

In headless mode, use `--json` consistently:

```bash
codebolt agent start my-agent --task "..." --json | jq '.output'
```

JSON output is stable across versions; text output is not and may change.

## Long-running headless sessions

For sessions that run many agents over time (e.g. a nightly batch job):

```bash
#!/bin/bash
set -euo pipefail

codebolt app start --headless --daemon
trap 'codebolt app stop' EXIT

for project in /repos/*/; do
  codebolt project open "$project"
  codebolt agent start reviewer --task "nightly review" --json > "/reports/$(basename $project).json"
done
```

The `trap` ensures the server stops cleanly even if the script fails.

## Headless limitations

- **Nothing that needs human input.** Interactive commands (sign-in flows, dialogs) don't work. Configure everything non-interactively.
- **No UI extensions.** Capabilities that provide UI panels won't load anything visible, but their non-UI pieces (tools, hooks, agents) still work.
- **No desktop notifications.** Use hook-based notifications to external systems instead.

## See also

- [CLI Overview](./01_overview.md)
- [TUI Mode](./04_tui.md)
- [Self-Hosting → Running the server](../../04_build-on-codebolt/10_self-hosting/02_running-the-server.md)
- [Code review with an agent](../../03_guides/03_everyday-workflows/code-review-with-an-agent.md) — CI-integrated example
