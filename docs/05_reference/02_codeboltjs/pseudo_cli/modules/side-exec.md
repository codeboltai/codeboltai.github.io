---
sidebar_label: "Side Execution"
title: "Side Execution Pseudo CLI"
description: "Pseudo CLI reference for the Side Execution module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `side-exec` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [Side Execution](../../10_api-access/sideExecution/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `start-block` | Start side execution with action block | `--path` |
| `start-code` | Start side execution with inline code | `--code` |
| `stop` | Stop side execution | `--id` |
| `list-blocks` | List available action blocks | None |
| `status` | Get side execution status | `--id` |

## `start-block`

Start side execution with action block

```text
codebolt side-exec start-block --path <string> [--params <json>] [--timeout <number>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |
| `params` | `--params` | `json` | No | Structured JSON payload passed through to the underlying SDK method. |
| `timeout` | `--timeout` | `number` | No | Value for the `timeout` parameter. |

## `start-code`

Start side execution with inline code

```text
codebolt side-exec start-code --code <string> [--params <json>] [--timeout <number>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `code` | `--code` | `string` | Yes | Value for the `code` parameter. |
| `params` | `--params` | `json` | No | Structured JSON payload passed through to the underlying SDK method. |
| `timeout` | `--timeout` | `number` | No | Value for the `timeout` parameter. |

## `stop`

Stop side execution

```text
codebolt side-exec stop --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `list-blocks`

List available action blocks

```text
codebolt side-exec list-blocks
```

This command takes no parameters.

## `status`

Get side execution status

```text
codebolt side-exec status --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
