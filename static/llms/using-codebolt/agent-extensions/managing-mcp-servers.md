# Managing MCP Servers

> Once MCP servers are installed, there are five ways to manage them — desktop app, CLI, TUI, HTTP API, and the Plugin SDK

Once MCP servers are installed, there are five ways to manage them — desktop app, CLI, TUI, HTTP API, and the Plugin SDK. The mental model is the same across all of them: a server is a supervised process with a lifecycle (start → running → stopped / crashed), a config file, logs, and resource limits. Pick your surface and the commands follow.

:::tip Pilot page
This page is the pilot for our **feature-first + tabbed surfaces** pattern. The conceptual explanation is shared; the surface-specific commands live in tabs. If this reads well to you, the rest of *Using Codebolt* will follow the same shape.
:::

## What you manage

Every installed MCP server has:

- **Name and version**
- **State** — `running` / `stopped` / `crashed` / `starting`
- **Tools provided** — the list of tool functions the server exposes
- **Resource usage** — CPU, memory (when the server reports it)
- **Last activity** — when a tool from this server was last called
- **Logs** — everything the server wrote to stderr

`PluginProcessManager` supervises all servers and handles restarts, health checks, and resource enforcement. How you *view* and *control* this varies by surface; what's being controlled does not.

## Start · stop · restart

Servers normally start automatically when the Codebolt server boots — you only touch this manually when debugging, recovering from a crash, or testing a new server.

## Auto-restart policy

Every server runs under a restart policy:

- **`always`** — restart on any exit (clean or crashed).
- **`on_failure`** *(default)* — restart only on non-zero exit.
- **`never`** — let it die and stay dead.

Under `on_failure`, a crashing server is retried with exponential backoff (1s, 5s, 15s, 60s) and **circuit-breaks after 5 consecutive failures**. At that point it's marked errored and needs manual intervention — restart policies don't rescue a fundamentally broken server.

The policy is set in the server's config; see [Installing MCP Servers](./06_installing-mcp-servers.md).

## Viewing logs

Everything a server writes to **stderr** is captured as logs. (Stdout is reserved for the MCP protocol itself.) When a server crashes, the cause is almost always in the last few log lines.

## Updating a server

Every update path does the same thing: download the new version, verify its signature, stop the old version, swap files, start the new version, **and restore the old version if the new one fails to start**. For manually-configured servers (not from a registry), update by editing `.codebolt/mcp-servers.yaml` yourself.

## Disabling vs uninstalling

Two very different operations:

- **Disable** — keep the server installed but don't start it. Reversible with one flag.
- **Uninstall** — remove files, config entries, and registered tools. Not reversible without reinstalling.

Disable is also editable directly in config:

```yaml
# .codebolt/mcp-servers.yaml
servers:
  my-server:
    command: /usr/local/bin/my-server
    enabled: false
```

## Health checks

Codebolt pings each server periodically. A non-responsive server is marked **unhealthy** and subsequent tool calls to it **fail fast** instead of hanging. Configure per server:

```yaml
# .codebolt/mcp-servers.yaml
servers:
  my-server:
    health_check_interval_seconds: 30
    health_check_timeout_seconds: 5
```

State (`healthy` / `unhealthy`) shows up in the Tools panel pill, the `codebolt tool list` output, the TUI list column, the `GET /api/tools` response, and the SDK's `tools.list()` return — same data, rendered per surface.

## Resource limits

Per-server caps keep a buggy server from eating your machine:

```yaml
# .codebolt/mcp-servers.yaml
servers:
  my-server:
    command: ...
    limits:
      memory_mb: 512
      cpu_shares: 512
      open_files: 256
```

On Linux these map to **cgroups**; on macOS/Windows they're enforced via soft process monitoring. A server exceeding its limits is **killed and restarted** (subject to the circuit breaker).

## User-wide vs project-local servers

By default, MCP server configs live in the project (`.codebolt/mcp-servers.yaml`) so each project can have its own set. For servers you want everywhere, use the **user-level** config:

```yaml
# ~/.codebolt/mcp-servers.yaml
servers:
  my-common-server:
    command: my-common-server-binary
```

The runtime merges user-level + project-local (project wins on conflicts) before handing the list to `PluginProcessManager`.

## Debugging a broken server

The same 5-step flowchart, regardless of surface:

1. **Is it running?** Check the state. If not `running`, start it.
2. **If crashed, why?** Tail the last 50 log lines. Look for the last error before exit.
3. **If running but tools don't work:** invoke the tool directly (bypassing the agent) and see what it returns.
4. **If the direct call fails:** the issue is inside the server's tool implementation. Check the server's own application logs.
5. **If the direct call works but the agent still can't use it:** check the agent's `tools.allow` list — the tool might not be granted.

## Auditing which servers are doing what

The event log has every tool call. One query, any surface:

```bash
codebolt events query "type == tool.call" --since "1 day ago" --json | \
  jq -r '.tool | split(".")[0]' | sort | uniq -c | sort -rn
```

Shows tool-call counts grouped by server. Useful for spotting **unused servers** (candidates to uninstall) and **heavy users** (candidates to investigate for cost or correctness).

The same query works through the HTTP API (`POST /api/events/query`) and the SDK (`codebolt.events.query(...)`), so you can build dashboards on top of it from wherever.

## See also

- [Agent Extensions Overview](./01_overview.md)
- [Installing MCP Servers](./06_installing-mcp-servers.md)
- [Agent Tools](../05a_tools-and-mcp/01_overview.md)
- [CLI reference](../02_surfaces/03_cli/01_overview.md) — exhaustive list of `codebolt tool` commands
- [MCP & Tools (internals)](../../04_build-on-codebolt/09_internals/03_subsystems/02_mcp-and-tools.md)
