# Upgrade Guide

> Safe procedure for upgrading a self-hosted Codebolt server

Safe procedure for upgrading a self-hosted Codebolt server. The desktop app auto-updates; this page is for the team-shared deployment where you control the version.

## Before every upgrade

- [ ] **Read the release notes.** Migrations, breaking changes, new requirements.
- [ ] **Check the compatibility matrix.** Your client versions (desktop apps, CLIs) must be compatible.
- [ ] **Backup everything.** Full backup per [Backup and Restore](./07_backup-and-restore.md). Test the backup before proceeding.
- [ ] **Schedule downtime.** Even "rolling" upgrades need brief pauses. Notify users.
- [ ] **Pin the new version.** Don't use `latest` — explicitly pick the version you're moving to.

## The safe upgrade procedure

### 1. Upgrade a staging environment first

Never upgrade production first. Staging should mirror production closely enough that a working staging upgrade is strong evidence the production upgrade will work.

```bash
# On staging
sudo systemctl stop codebolt-staging
npm install -g @codebolt/server@<new-version>
sudo systemctl start codebolt-staging
sudo journalctl -u codebolt-staging -f   # watch migrations
```

Wait for migrations to complete. Smoke-test:
- Log in as a test user.
- Open a project.
- Run a test agent.
- Verify history and memory are intact.
- Check for any error logs.

Let staging bake for at least a day under realistic load if you can.

### 2. Prepare production

```bash
# Announce downtime window
# Complete a backup and verify it
/usr/local/bin/codebolt-backup.sh
ls -la /backups/codebolt/
codebolt admin backup-verify /backups/codebolt/latest.tar.gz
```

### 3. Upgrade production

```bash
# Stop gracefully — waits for in-flight runs
sudo systemctl stop codebolt

# Upgrade the binary
npm install -g @codebolt/server@<new-version>

# Start
sudo systemctl start codebolt

# Watch migrations
sudo journalctl -u codebolt -f
```

Migrations run on startup. Watch for:

```
migrations: applying 20260315_add_foo_index
migrations: applying 20260320_partition_event_log
migrations: 2 applied, 0 failed
server ready: listening on :3456
```

If you see `migrations: failed`, **stop immediately** and restore from backup. Do not proceed.

### 4. Smoke test production

Same tests as staging: log in, open project, run agent, check history. If anything's wrong, roll back (see below).

### 5. Announce completion

Users can now update their desktop apps / CLIs if their versions aren't compatible with the new server.

## Client compatibility

Codebolt's wire protocol is versioned. A newer server can usually speak older client protocols for a grace period (typically one minor version back). Check the release notes.

- **Backwards compatible** — users don't need to upgrade their clients immediately.
- **Not backwards compatible** — users must upgrade their desktop app / CLI to match.

For enforced upgrades, send users a notice and give them a window before the breaking change.

## Rolling upgrades (clustered deployments)

If you run multiple Codebolt servers behind a load balancer, you can upgrade without downtime:

1. Drain one server (stop accepting new connections, wait for in-flight to finish).
2. Upgrade and restart that server.
3. Wait for it to become healthy.
4. Move to the next server.

Migrations must be backwards-compatible during a rolling upgrade — otherwise half the cluster sees a new schema and the other half sees old. Codebolt's migrations are designed to be backwards-compatible within a minor version. Major version upgrades may require full downtime.

## Major version upgrades

Major versions (e.g. 2.x → 3.x) usually involve:

- Breaking schema changes.
- Breaking protocol changes.
- Deprecated features removed.

Procedure:

1. **Read the upgrade guide for that specific major version.** Each major has its own page.
2. **Test the upgrade path on a full-fidelity staging copy.**
3. **Plan for non-rolling downtime.**
4. **Ensure all clients are on a compatible version before upgrading the server.**

For some major upgrades, an intermediate step is required: migrate through an intermediate version that supports both old and new clients. Follow the specific upgrade guide.

## Rollback

If an upgrade goes wrong:

### Minor / patch rollback

```bash
sudo systemctl stop codebolt

# Downgrade
npm install -g @codebolt/server@<previous-version>

# Restart
sudo systemctl start codebolt
```

Usually works if the new version hasn't applied breaking migrations. Check the release notes for the migration list before trying this.

### Full restore

If the upgrade applied breaking migrations and the new version is broken:

```bash
sudo systemctl stop codebolt

# Restore the database from backup
sudo -u postgres dropdb codebolt
sudo -u postgres createdb codebolt
pg_restore -d codebolt /backups/codebolt/pre-upgrade/main.dump

# Restore storage (if any changed)
sudo rsync -a --delete /backups/codebolt/pre-upgrade/shadow-git/ /var/lib/codebolt/shadow-git/

# Install the previous version
npm install -g @codebolt/server@<previous-version>

sudo systemctl start codebolt
```

Data written since the backup is lost. That's the tradeoff — be confident in your backups and keep the backup-to-upgrade window small.

## Dependency upgrades

The Codebolt server has its own dependencies (Node.js, Postgres version, OS libraries). Upgrade requirements are in the release notes. Common:

- **Postgres major version upgrades** — follow Postgres docs. Usually a `pg_upgrade` procedure.
- **Node.js upgrades** — update the runtime; Codebolt usually supports a range.
- **OS security patches** — apply normally; Codebolt doesn't care.

## MCP servers and capabilities

Installed capabilities and MCP servers may break on Codebolt upgrades if the protocol changed:

```bash
codebolt tool list --status
codebolt capability list --status
```

Any showing `incompatible` need updating. The tool/capability author may not have released an update yet — pin Codebolt to the previous version until they do, or disable the broken extension.

## Watching for problems after upgrade

For 24-48 hours after an upgrade, watch:

- **Error rate** — should return to baseline.
- **Agent run success rate** — should not drop.
- **Event log ingestion lag** — should stay low.
- **Memory usage trend** — should not grow unboundedly.
- **User reports** — watch support channels.

If any of these degrade post-upgrade, investigate quickly. The first day is when regressions surface.

## See also

- [Self-Hosting Overview](./01_overview.md)
- [Database](./03_database.md)
- [Backup and Restore](./07_backup-and-restore.md)
- [Security Hardening](./06_security-hardening.md)
