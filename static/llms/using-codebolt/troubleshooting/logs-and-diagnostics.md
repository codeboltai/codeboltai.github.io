# Logs and Diagnostics

> Where to look when something's wrong and Common Issues doesn't cover it.

Where to look when something's wrong and [Common Issues](./01_common-issues.md) doesn't cover it.

## The log sources

Codebolt writes several streams of diagnostic output:

| Source | What | Where |
|---|---|---|
| **Server logs** | Main server output | `~/.codebolt/logs/server.log`, or stdout (headless) |
| **Agent logs** | Per-run, per-agent | Event log (`codebolt agent trace`) |
| **Plugin logs** | Per MCP server / capability | `~/.codebolt/logs/plugins/<name>.log` |
| **System events** | DB, heartbeat, lifecycle | Event log (`codebolt events query 'type ~ "system.*"'`) |
| **Guardrail decisions** | Every verdict | Event log |
| **Audit trail** | Security-relevant actions | Event log + optional SIEM sink |

## Viewing server logs

## Log levels

Codebolt emits five levels:

- **TRACE** — extremely verbose. Usually off.
- **DEBUG** — diagnostic detail. On when debugging.
- **INFO** — normal operation. Default.
- **WARN** — something's off but not broken.
- **ERROR** — something broke.

Change the level for all components:

```bash
codebolt app logs --level debug
```

Or for specific components in `codebolt-server.yaml`:

```yaml
logging:
  level: info
  components:
    agentService: debug
    memoryIngestionService: warn
```

## Reading a stack trace

When you see an error with a stack trace:

```
ERROR [agentService] Failed to spawn agent: spawn my-agent ENOENT
    at ChildProcess._handle.onexit (node:internal/child_process:...)
    at onErrorNT (node:internal/child_process:...)
```

The key parts:

- **Component** in brackets — where in Codebolt the error happened.
- **Error message** — the "what".
- **Cause** (if chained) — the underlying reason.
- **Stack frames** — the "where", often just internal Node frames; the Codebolt frames are the interesting ones.

For "how do I fix it" — usually the error message itself tells you (ENOENT = file not found, EADDRINUSE = port taken, EACCES = permission).

## The run trace

For anything related to an agent run, the trace is more useful than raw logs:

```bash
codebolt agent trace <run-id>
```

Shows the phase-by-phase execution with structured data. Logs emitted by the agent during the run show up here, correlated with the phase they belong to.

## Running diagnostics

```bash
codebolt app doctor
```

Checks for known misconfigurations and broken state. Reports:

- Database connectivity and schema version
- Disk space
- Shadow git repo integrity
- Plugin process health
- Port conflicts
- Expired credentials
- Corrupted cache
- Unused / orphaned resources

Safe to run any time — it's read-only by default. Add `--fix` to auto-repair certain issues (confirmed separately).

## Collecting diagnostics for a bug report

```bash
codebolt app report > diagnostic.txt
```

Creates a redacted report containing:

- Codebolt version (server, CLI, protocol)
- OS and hardware info
- Config summary (secrets redacted)
- Recent logs (last 500 lines)
- Database info (version, size)
- Active tools and capabilities
- Doctor output
- Recent run failures

Attach this to bug reports. It's designed to be safe to share — secrets are stripped. Review before sending if you're paranoid.

## Event log queries for debugging

The event log is the authoritative source for anything that happened in the past. Useful queries:

### Find recent errors

```bash
codebolt events query 'level == "error"' --since "1 hour ago"
```

### Find all failed runs today

```bash
codebolt events query 'type == run.ended and status == "failed"' --since "today"
```

### What was happening at time T?

```bash
codebolt events query 'timestamp > "2026-04-06 14:30:00" and timestamp < "2026-04-06 14:31:00"'
```

### Every time a specific tool was called

```bash
codebolt events query 'type == tool.call and tool == "codebolt_fs.write_file"' --since "today"
```

See [Query the event log](../../03_guides/07_advanced/query-the-event-log.md) for the full query language.

## Log rotation and retention

Server logs are rotated daily by default. Old logs are compressed and kept for 30 days.

```yaml
logging:
  retention_days: 30
  max_file_size_mb: 100
  rotate: daily
```

For self-hosted production, ship logs to a centralised aggregator rather than relying on local files. See [Self-hosting](../../04_build-on-codebolt/10_self-hosting/01_overview.md).

## Live metrics

For real-time observability (counts, rates, percentiles), use the Prometheus endpoint if enabled:

```
http://localhost:9091/metrics
```

See [Self-hosting → Scaling](../../04_build-on-codebolt/10_self-hosting/05_scaling-and-workers.md) for configuration.

## See also

- [Common Issues](./01_common-issues.md)
- [Reporting Bugs](./03_reporting-bugs.md)
- [Agent Debug](../05c_agent-observability/02_agent-debug.md)
- [Query the event log](../../03_guides/07_advanced/query-the-event-log.md)
