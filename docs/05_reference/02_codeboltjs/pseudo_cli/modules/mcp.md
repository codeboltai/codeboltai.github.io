---
sidebar_label: "MCP"
title: "MCP Pseudo CLI"
description: "Pseudo CLI reference for the MCP module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `mcp` pseudo CLI module currently exposes 6 commands.

Related SDK docs: [MCP](../../10_api-access/mcp/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `servers` | Get enabled MCP servers | None |
| `tools` | Get MCP tools | None |
| `execute` | Execute MCP tool | `--toolbox`, `--tool`, `--params` |
| `configure` | Configure MCP server | `--name`, `--config` |
| `list` | List MCP servers | None |
| `all-tools` | Get all MCP tools | None |

## `servers`

Get enabled MCP servers

```text
codebolt mcp servers
```

This command takes no parameters.

## `tools`

Get MCP tools

```text
codebolt mcp tools [--servers <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `servers` | `--servers` | `json` | No | JSON array of MCP server names. |

## `execute`

Execute MCP tool

```text
codebolt mcp execute --toolbox <string> --tool <string> --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `toolbox` | `--toolbox` | `string` | Yes | MCP toolbox or server namespace to target. |
| `tool` | `--tool` | `string` | Yes | Specific MCP tool name to execute. |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `configure`

Configure MCP server

```text
codebolt mcp configure --name <string> --config <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `config` | `--config` | `json` | Yes | Structured configuration object for the target operation. |

## `list`

List MCP servers

```text
codebolt mcp list
```

This command takes no parameters.

## `all-tools`

Get all MCP tools

```text
codebolt mcp all-tools
```

This command takes no parameters.
