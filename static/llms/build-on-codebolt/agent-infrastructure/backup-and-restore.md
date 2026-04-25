# Backup and Restore

> A backup that has never been restored is a hope, not a backup. This page covers what to back up, how, and how to verify restore works.

A backup that has never been restored is a hope, not a backup. This page covers what to back up, how, and how to verify restore works.

## What needs backing up

| Component | Purpose | Criticality |
|---|---|---|
| **Main database** | Users, runs, memory, settings | Essential — loss = lose everything |
| **Master key** | Decrypts stored secrets | Essential — loss = ciphertext is unrecoverable |
| **Shadow git repos** | Rollback history | Important — loss = lose checkpoints |
| **Vector DB** (if embedded) | Embeddings | Rebuildable — can re-embed from source |
| **Knowledge graph** | Typed entity graph | Rebuildable — can re-index |
| **Capability bundles** | Installed extensions | Rebuildable — can reinstall |
| **Config files** | Server config | Important — but should already be in infra repo |
| **Project files** | Actual user code | Usually in git elsewhere; check your assumptions |

**Essentials**: main DB + master key. Without these, nothing else can be restored usefully.

## A complete backup script

```bash
#!/bin/bash
set -euo pipefail

DEST=/backups/codebolt/$(date +%Y%m%d_%H%M%S)
mkdir -p "$DEST"

# 1. Main database
echo "Backing up database..."
pg_dump -Fc codebolt > "$DEST/main.dump"

# 2. Master key (from separate secret store)
echo "Backing up master key reference..."
# Don't copy the key itself — just record its identifier.
# The key itself should be in your secrets manager, separately backed up.
cat /etc/codebolt/master-key-id > "$DEST/master-key-id.txt"

# 3. Shadow git (rsync for incremental)
echo "Backing up shadow git repos..."
rsync -a /var/lib/codebolt/shadow-git/ "$DEST/shadow-git/"

# 4. Vector DB (if embedded)
echo "Backing up vector DB..."
rsync -a /var/lib/codebolt/vectordb/ "$DEST/vectordb/"

# 5. Knowledge graph
echo "Backing up knowledge graphs..."
rsync -a /var/lib/codebolt/kg/ "$DEST/kg/"

# 6. Capabilities
echo "Backing up capabilities..."
rsync -a /var/lib/codebolt/capabilities/ "$DEST/capabilities/"

# 7. Config
echo "Backing up config..."
cp /etc/codebolt/codebolt-server.yaml "$DEST/"

# 8. Compute manifest
echo "Writing manifest..."
cat > "$DEST/manifest.txt" <<EOF
timestamp: $(date -u +%FT%TZ)
hostname: $(hostname)
server_version: $(codebolt-server --version)
db_size: $(du -sh /var/lib/codebolt/db 2>/dev/null || echo "-")
shadow_git_size: $(du -sh /var/lib/codebolt/shadow-git)
vector_db_size: $(du -sh /var/lib/codebolt/vectordb)
kg_size: $(du -sh /var/lib/codebolt/kg)
EOF

# 9. Compute checksum
sha256sum "$DEST/main.dump" > "$DEST/SHA256SUMS"

echo "Backup complete: $DEST"
```

Schedule daily, rotate weekly, keep monthlies for your retention period.

## Using the built-in helper

Codebolt ships a backup command that wraps most of the above:

```bash
codebolt admin backup --output /backups/codebolt/$(date +%Y%m%d).tar.gz
```

This:
- Takes a consistent snapshot (pauses writes briefly).
- Includes DB, shadow git, vector DB, KG, capabilities, config.
- Excludes logs and caches.
- Writes a manifest and checksum.

Still doesn't include the master key — you're responsible for that separately.

## The master key

**Without the master key, encrypted data in a backup is unrecoverable.** Provider API keys, user credentials, and anything else stored as a secret will be permanently lost.

Two rules:

1. **Back up the master key separately from the data backup.** If an attacker gets the data backup, they should not automatically get the key.
2. **Back up the master key to a different medium / location.** The whole point is surviving the loss of the primary location.

Options:
- **Sealed envelope + safe** — old-school, works.
- **Hardware Security Module** — for regulated environments.
- **Secrets manager with its own backup story** — HashiCorp Vault, AWS Secrets Manager, etc. Let the secrets manager back itself up per its docs.
- **Split knowledge** — Shamir secret sharing among trusted administrators.

## Restore

### Full restore (disaster recovery)

```bash
# 1. Install Codebolt server (same version as the backup!)
# Get the version from the backup manifest
cat /backups/manifest.txt

# 2. Prepare the target machine
sudo mkdir -p /var/lib/codebolt
sudo chown codebolt:codebolt /var/lib/codebolt

# 3. Restore the database
sudo -u postgres createdb codebolt
pg_restore -d codebolt /backups/.../main.dump

# 4. Restore the master key from your secrets manager / safe
# (manual — depends on your setup)
sudo cp <master-key-source> /etc/codebolt/master.key
sudo chmod 600 /etc/codebolt/master.key

# 5. Restore storage
sudo rsync -a /backups/.../shadow-git/ /var/lib/codebolt/shadow-git/
sudo rsync -a /backups/.../vectordb/ /var/lib/codebolt/vectordb/
sudo rsync -a /backups/.../kg/ /var/lib/codebolt/kg/
sudo rsync -a /backups/.../capabilities/ /var/lib/codebolt/capabilities/

# 6. Restore config
sudo cp /backups/.../codebolt-server.yaml /etc/codebolt/

# 7. Fix ownership
sudo chown -R codebolt:codebolt /var/lib/codebolt

# 8. Start the server
sudo systemctl start codebolt

# 9. Verify
codebolt-server status
codebolt admin check
```

### Restoring just the database

If you only need to recover a dropped row / table:

```bash
# Restore to a temporary DB
sudo -u postgres createdb codebolt_tmp
pg_restore -d codebolt_tmp /backups/.../main.dump

# Copy the rows you need
sudo -u postgres psql <<SQL
INSERT INTO codebolt.persistent_memory
  SELECT * FROM codebolt_tmp.persistent_memory
  WHERE workspace_id = 'xyz' AND id = 'abc';
SQL

# Drop the temp
sudo -u postgres dropdb codebolt_tmp
```

## Verifying a backup

Untested backups are a common source of disaster. At least monthly:

1. **Restore to a separate machine** (or a throwaway VM).
2. **Start the server.**
3. **Verify a sample project opens correctly.**
4. **Verify a sample run replays.**
5. **Shut down and destroy the test environment.**

Automate this in CI if possible. A backup that's never been restored is not a backup.

## Point-in-time recovery (Postgres)

For tight RPO, set up Postgres streaming replication + WAL archiving:

```
Primary ──WAL stream──▶ Standby
     │
     └──WAL archive──▶ Object storage
```

In disaster: promote the standby, or restore the base backup + replay WAL up to a chosen point.

This is standard Postgres PITR — see Postgres docs. Codebolt doesn't need anything special for it to work.

## Shadow git specifically

Shadow git repos are the biggest storage component and the most change-intensive. Backup strategies:

- **Rsync nightly** — incremental, only changed files copied. Works for moderate sizes.
- **Btrfs / ZFS snapshots** — instantaneous, space-efficient. Good if your host supports them.
- **Object storage backend** — if you configured shadow git to use S3 in [Storage Backends](./04_storage-backends.md), use S3 versioning + lifecycle rules. Backups happen automatically.

## Retention

A backup policy that keeps everything forever is expensive. A typical policy:

- **Daily backups** for the last 30 days.
- **Weekly backups** for the last 12 weeks.
- **Monthly backups** for the last 12 months.
- **Annual backups** retained per compliance requirements.

Rotate daily into weekly into monthly automatically. Codebolt's backup helper supports a `--retention-policy` flag that does this.

## See also

- [Self-Hosting Overview](./01_overview.md)
- [Database](./03_database.md)
- [Storage Backends](./04_storage-backends.md)
- [Upgrade Guide](./08_upgrade-guide.md)
- [Security Hardening](./06_security-hardening.md)
