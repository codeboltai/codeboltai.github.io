---
sidebar_label: "Dynamic Panel"
title: "Dynamic Panel Pseudo CLI"
description: "Pseudo CLI reference for the Dynamic Panel module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `panel` pseudo CLI module currently exposes 5 commands.


## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `open` | Open a dynamic panel with HTML content | `--id`, `--title`, `--html` |
| `update` | Update dynamic panel HTML content | `--id`, `--html` |
| `close` | Close a dynamic panel | `--id` |
| `send` | Send data to a dynamic panel | `--id`, `--data` |
| `list` | List active dynamic panels | None |

## `open`

Open a dynamic panel with HTML content

```text
codebolt panel open --id <string> --title <string> --html <string> [--wait | --no-wait] [--timeout <number>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `title` | `--title` | `string` | Yes | Title of the resource being created or updated. |
| `html` | `--html` | `string` | Yes | Value for the `html` parameter. |
| `wait` | `--wait` | `boolean` | No | Value for the `wait` parameter. |
| `timeout` | `--timeout` | `number` | No | Value for the `timeout` parameter. |

## `update`

Update dynamic panel HTML content

```text
codebolt panel update --id <string> --html <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `html` | `--html` | `string` | Yes | Value for the `html` parameter. |

## `close`

Close a dynamic panel

```text
codebolt panel close --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `send`

Send data to a dynamic panel

```text
codebolt panel send --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list`

List active dynamic panels

```text
codebolt panel list
```

This command takes no parameters.
