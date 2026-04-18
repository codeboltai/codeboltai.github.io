---
sidebar_label: "Event Log"
title: "Event Log Pseudo CLI"
description: "Pseudo CLI reference for the Event Log module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `eventlog` pseudo CLI module currently exposes 6 commands.

Related SDK docs: [Event Log](../../10_api-access/eventLog/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create event log instance | `--name` |
| `get` | Get event log instance | `--id` |
| `list` | List event log instances | None |
| `append` | Append event | `--params` |
| `query` | Query events | `--query` |
| `stats` | Get instance statistics | `--id` |

## `create`

Create event log instance

```text
codebolt eventlog create --name <string> [--description <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `description` | `--description` | `string` | No | Longer description text for the resource. |

## `get`

Get event log instance

```text
codebolt eventlog get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `list`

List event log instances

```text
codebolt eventlog list
```

This command takes no parameters.

## `append`

Append event

```text
codebolt eventlog append --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `query`

Query events

```text
codebolt eventlog query --query <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `query` | `--query` | `json` | Yes | Search query string used by the command. |

## `stats`

Get instance statistics

```text
codebolt eventlog stats --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
