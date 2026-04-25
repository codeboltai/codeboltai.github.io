# Running the Server

> How to run codebolt-server as a shared service for a team. For single-user / desktop use, you already have a server — the desktop app runs it for you

How to run `codebolt-server` as a shared service for a team. For single-user / desktop use, you already have a server — the desktop app runs it for you. This page is about the team-shared deployment.

## Minimum viable setup

```bash
# Install the server
npm install -g @codebolt/server

# Create data directory
mkdir -p /var/lib/codebolt

# Start
codebolt-server start
```

That's enough to have a running server. Users point their desktop app or CLI at it:

```bash
codebolt config set server https://codebolt.my-org.com
```

## Systemd (Linux)

For production, run under systemd:

```ini
# /etc/systemd/system/codebolt.service
[Unit]
Description=Codebolt Server
After=network.target postgresql.service
Requires=postgresql.service

[Service]
Type=simple
User=codebolt
Group=codebolt
WorkingDirectory=/var/lib/codebolt
Environment="CODEBOLT_DATA_DIR=/var/lib/codebolt"
Environment="CODEBOLT_DB_URL=postgresql://codebolt@localhost/codebolt"
Environment="CODEBOLT_MASTER_KEY_FILE=/etc/codebolt/master.key"
ExecStart=/usr/local/bin/codebolt-server start --headless --foreground
Restart=on-failure
RestartSec=5s

# Security hardening
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=/var/lib/codebolt /var/log/codebolt

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now codebolt
sudo systemctl status codebolt
```

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `CODEBOLT_DATA_DIR` | Where databases, shadow git, cache live | `~/.codebolt` |
| `CODEBOLT_DB_URL` | Database URL (SQLite path or Postgres URL) | `sqlite://$DATA_DIR/db/main.db` |
| `CODEBOLT_MASTER_KEY` | Encryption key for stored secrets | (from OS keychain) |
| `CODEBOLT_MASTER_KEY_FILE` | File containing the master key | — |
| `CODEBOLT_HOST` | Bind address | `127.0.0.1` |
| `CODEBOLT_PORT` | Bind port | `3456` |
| `CODEBOLT_PUBLIC_URL` | URL users connect to | auto-detected |
| `CODEBOLT_LOG_LEVEL` | `trace`, `debug`, `info`, `warn`, `error` | `info` |
| `CODEBOLT_LOG_FORMAT` | `text` or `json` | `text` |
| `CODEBOLT_TELEMETRY` | Anonymous usage telemetry | `on` |

## Binding

For a team server, bind to a non-loopback address:

```bash
CODEBOLT_HOST=0.0.0.0 codebolt-server start
```

Put a reverse proxy (nginx, caddy, traefik) in front with TLS:

```nginx
# /etc/nginx/sites-available/codebolt
server {
    listen 443 ssl http2;
    server_name codebolt.my-org.com;

    ssl_certificate /etc/letsencrypt/live/codebolt.my-org.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/codebolt.my-org.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3456;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_read_timeout 3600s;  # WebSockets need long timeouts
    }
}
```

The `Upgrade`/`Connection` headers are required for WebSockets.

## First-time setup

On first start:

1. The server creates the data directory structure.
2. Runs database migrations.
3. Seeds default data (themes, default agents, problem matchers).
4. Generates a master key and stores it in the OS keychain (or the configured key file).
5. Creates an admin user and prints a one-time signup token.

Use the token to create your admin account:

```bash
codebolt admin create-user --token <token> --email you@example.com
```

## Adding users

Self-hosted Codebolt supports several auth modes:

- **Local accounts** — email + password, stored in the Codebolt DB.
- **OAuth / OIDC** — Google Workspace, Microsoft Entra, GitHub, Okta, any OIDC provider.
- **LDAP** — for traditional enterprise directories.
- **SAML** — for legacy SSO.

Configure in `codebolt-server.yaml`:

```yaml
auth:
  mode: oidc
  oidc:
    issuer: https://accounts.google.com
    client_id: ...
    client_secret_env: OIDC_CLIENT_SECRET
    allowed_domains: ["my-org.com"]
```

## Health checks

```bash
curl https://codebolt.my-org.com/health
```

Returns JSON with server status, DB connectivity, worker status. Use this for load balancer health checks and monitoring.

## Logs

```bash
# if running under systemd
journalctl -u codebolt -f

# if running standalone
tail -f /var/log/codebolt/server.log
```

Set `CODEBOLT_LOG_FORMAT=json` for structured logs that feed into your log aggregator.

## Shutting down

Graceful:

```bash
sudo systemctl stop codebolt
```

This stops accepting new connections, waits for in-flight runs to finish (up to a grace period), then exits. Any agents still running are marked `killed` with reason `server_shutdown`.

## See also

- [Self-Hosting Overview](./01_overview.md)
- [Database](./03_database.md)
- [Security hardening](./06_security-hardening.md)
- [Upgrade guide](./08_upgrade-guide.md)
