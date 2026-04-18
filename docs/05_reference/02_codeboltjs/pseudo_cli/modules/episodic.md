---
sidebar_label: "Episodic Memory"
title: "Episodic Memory Pseudo CLI"
description: "Pseudo CLI reference for the Episodic Memory module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `episodic` pseudo CLI module currently exposes 8 commands.

Related SDK docs: [Episodic Memory](../../10_api-access/episodicMemory/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create episodic memory | `--params` |
| `list` | List episodic memories | None |
| `get` | Get episodic memory | `--id` |
| `append` | Append event to memory | `--params` |
| `query` | Query episodic events | `--params` |
| `event-types` | Get event types | `--params` |
| `tags` | Get tags | `--params` |
| `archive` | Archive memory | `--params` |

## `create`

Create episodic memory

```text
codebolt episodic create --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list`

List episodic memories

```text
codebolt episodic list
```

This command takes no parameters.

## `get`

Get episodic memory

```text
codebolt episodic get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `append`

Append event to memory

```text
codebolt episodic append --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `query`

Query episodic events

```text
codebolt episodic query --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `event-types`

Get event types

```text
codebolt episodic event-types --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `tags`

Get tags

```text
codebolt episodic tags --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `archive`

Archive memory

```text
codebolt episodic archive --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |
