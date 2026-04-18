---
sidebar_label: "Search"
title: "Search Pseudo CLI"
description: "Pseudo CLI reference for the Search module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `search` pseudo CLI module currently exposes 2 commands.

Related SDK docs: [Search](../../10_api-access/search/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `codebase` | Search the codebase | `--query` |
| `mcp-tool` | Search MCP tools | `--query` |

## `codebase`

Search the codebase

```text
codebolt search codebase --query <string> [--dirs <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `query` | `--query` | `string` | Yes | Search query string used by the command. |
| `dirs` | `--dirs` | `json` | No | Value for the `dirs` parameter. |

## `mcp-tool`

Search MCP tools

```text
codebolt search mcp-tool --query <string> [--tags <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `query` | `--query` | `string` | Yes | Search query string used by the command. |
| `tags` | `--tags` | `json` | No | Value for the `tags` parameter. |
