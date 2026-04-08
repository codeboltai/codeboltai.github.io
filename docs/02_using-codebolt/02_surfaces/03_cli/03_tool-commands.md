---
sidebar_position: 3
title: Tool Commands
---

# `codebolt tool` commands

Manage MCP servers and tools from the CLI. User-level reference; for the full flag list see [Reference → CLI](../../../05_reference/01_overview.md).

## Listing and inspecting

### `codebolt tool list`

List installed tools (MCP servers and capability-provided tools).

```bash
codebolt tool list
codebolt tool list --json
codebolt tool list --status        # include running / stopped status
```

### `codebolt tool show <server>`

Show details for a specific server: config, tools provided, resource usage.

```bash
codebolt tool show my-server
```

### `codebolt tool describe <tool>`

Show a specific tool's schema and description.

```bash
codebolt tool describe codebolt_fs.read_file
codebolt tool describe my-server.search
```

Useful when debugging "why isn't the LLM picking my tool" — read the description.

## Installing and removing

### `codebolt tool install`

```bash
codebolt tool install marketplace/my-mcp-server
codebolt tool install marketplace/my-mcp-server@2.1.0
codebolt tool install https://example.com/my-mcp.tar.gz
codebolt tool install ./local-directory
```

### `codebolt tool uninstall`

```bash
codebolt tool uninstall my-server
```

## Lifecycle

### `codebolt tool start` / `stop` / `restart`

```bash
codebolt tool start my-server
codebolt tool stop my-server
codebolt tool restart my-server
```

Servers auto-start on boot; these are for debugging.

### `codebolt tool logs`

```bash
codebolt tool logs my-server
codebolt tool logs my-server --tail 100
codebolt tool logs my-server --follow
```

### `codebolt tool status`

```bash
codebolt tool status my-server
```

Quick health check — running, responsive, last tool call time.

## Direct tool invocation

### `codebolt tool call`

Run a tool directly from the CLI, outside an agent run.

```bash
codebolt tool call codebolt_fs.read_file --args '{"path": "README.md"}'
codebolt tool call my-server.search --args '{"query": "error handling"}'
```

Useful for:
- **Testing a new tool** — verify it works before wiring it into an agent.
- **One-off data gathering** — quick ad-hoc queries.
- **Debugging** — confirm the tool returns what you expect.

## Updating

```bash
codebolt tool update my-server                    # to latest
codebolt tool update my-server@2.2.0              # specific version
codebolt tool update-all                          # all non-breaking updates
```

## Examples

### Find tools that match a query

```bash
codebolt tool search "git"
```

Lists installed tools whose description mentions git.

### Export a tool config

```bash
codebolt tool export > tools.yaml
```

Dumps the merged `.codebolt/mcp-servers.yaml` for backup or transfer.

### Import a tool config

```bash
codebolt tool import < tools.yaml
```

Loads and reconciles the config with what's currently installed.

## See also

- [Tools & MCP Overview](../../05_tools-and-mcp/01_overview.md)
- [Installing MCP Servers](../../05_tools-and-mcp/02_installing-mcp-servers.md)
- [Managing MCP Servers](../../05_tools-and-mcp/03_managing-mcp-servers.md)
- [Custom Tools & MCP (for builders)](../../../04_build-on-codebolt/04_custom-tools-and-mcp/01_overview.md)
