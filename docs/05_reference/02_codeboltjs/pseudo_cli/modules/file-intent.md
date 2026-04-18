---
sidebar_label: "File Update Intent"
title: "File Update Intent Pseudo CLI"
description: "Pseudo CLI reference for the File Update Intent module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `file-intent` pseudo CLI module currently exposes 11 commands.

Related SDK docs: [File Update Intent](../../10_api-access/fileUpdateIntent/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create file update intent | `--data`, `--claimed-by` |
| `update` | Update file update intent | `--id`, `--data` |
| `get` | Get file update intent | `--id` |
| `list` | List file update intents | None |
| `complete` | Complete file update intent | `--id`, `--closed-by` |
| `cancel` | Cancel file update intent | `--id`, `--cancelled-by` |
| `check-overlap` | Check for overlapping intents | `--env-id`, `--files` |
| `blocked-files` | Get blocked files | `--env-id` |
| `by-agent` | Get intents by agent | `--agent-id` |
| `files-with-intents` | Get files with active intents | `--env-id` |
| `delete` | Delete file update intent | `--id` |

## `create`

Create file update intent

```text
codebolt file-intent create --data <json> --claimed-by <string> [--claimed-by-name <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |
| `claimed-by` | `--claimed-by` | `string` | Yes | Value for the `claimed-by` parameter. |
| `claimed-by-name` | `--claimed-by-name` | `string` | No | Value for the `claimed-by-name` parameter. |

## `update`

Update file update intent

```text
codebolt file-intent update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get`

Get file update intent

```text
codebolt file-intent get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `list`

List file update intents

```text
codebolt file-intent list [--filters <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `filters` | `--filters` | `json` | No | Value for the `filters` parameter. |

## `complete`

Complete file update intent

```text
codebolt file-intent complete --id <string> --closed-by <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `closed-by` | `--closed-by` | `string` | Yes | Value for the `closed-by` parameter. |

## `cancel`

Cancel file update intent

```text
codebolt file-intent cancel --id <string> --cancelled-by <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `cancelled-by` | `--cancelled-by` | `string` | Yes | Value for the `cancelled-by` parameter. |

## `check-overlap`

Check for overlapping intents

```text
codebolt file-intent check-overlap --env-id <string> --files <json> [--priority <number>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `env-id` | `--env-id` | `string` | Yes | Value for the `env-id` parameter. |
| `files` | `--files` | `json` | Yes | Value for the `files` parameter. |
| `priority` | `--priority` | `number` | No | Priority value for todo or task-related operations. |

## `blocked-files`

Get blocked files

```text
codebolt file-intent blocked-files --env-id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `env-id` | `--env-id` | `string` | Yes | Value for the `env-id` parameter. |

## `by-agent`

Get intents by agent

```text
codebolt file-intent by-agent --agent-id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `agent-id` | `--agent-id` | `string` | Yes | Value for the `agent-id` parameter. |

## `files-with-intents`

Get files with active intents

```text
codebolt file-intent files-with-intents --env-id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `env-id` | `--env-id` | `string` | Yes | Value for the `env-id` parameter. |

## `delete`

Delete file update intent

```text
codebolt file-intent delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
