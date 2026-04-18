---
sidebar_label: "Todo"
title: "Todo Pseudo CLI"
description: "Pseudo CLI reference for the Todo module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `todo` pseudo CLI module currently exposes 6 commands.

Related SDK docs: [Todo](../../10_api-access/todo/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `add` | Add a todo item | `--title` |
| `update` | Update a todo item | `--id` |
| `list` | List todo items | None |
| `incomplete` | Get incomplete todos | None |
| `export` | Export todos | None |
| `import` | Import todos | `--data` |

## `add`

Add a todo item

```text
codebolt todo add --title <string> [--priority <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `title` | `--title` | `string` | Yes | Title of the resource being created or updated. |
| `priority` | `--priority` | `string` | No | Priority value for todo or task-related operations. |

## `update`

Update a todo item

```text
codebolt todo update --id <string> [--status <string>] [--title <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `status` | `--status` | `string` | No | Status value to apply to the target resource. |
| `title` | `--title` | `string` | No | Title of the resource being created or updated. |

## `list`

List todo items

```text
codebolt todo list
```

This command takes no parameters.

## `incomplete`

Get incomplete todos

```text
codebolt todo incomplete
```

This command takes no parameters.

## `export`

Export todos

```text
codebolt todo export [--format <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `format` | `--format` | `string` | No | Serialization or import/export format. |

## `import`

Import todos

```text
codebolt todo import --data <string> [--format <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `string` | Yes | Structured JSON payload passed through to the underlying SDK method. |
| `format` | `--format` | `string` | No | Serialization or import/export format. |
