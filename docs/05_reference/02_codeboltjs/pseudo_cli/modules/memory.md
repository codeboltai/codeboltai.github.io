---
sidebar_label: "Memory"
title: "Memory Pseudo CLI"
description: "Pseudo CLI reference for the Memory module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `memory` pseudo CLI module currently exposes 12 commands.

Related SDK docs: [Memory](../../10_api-access/memory/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `json-save` | Save JSON memory | `--data` |
| `json-update` | Update JSON memory | `--id`, `--data` |
| `json-delete` | Delete JSON memory | `--id` |
| `json-list` | List JSON memories | None |
| `todo-save` | Save todo memory | `--title` |
| `todo-update` | Update todo memory | `--id`, `--data` |
| `todo-delete` | Delete todo memory | `--id` |
| `todo-list` | List todo memories | None |
| `md-save` | Save markdown memory | `--content` |
| `md-update` | Update markdown memory | `--id`, `--content` |
| `md-delete` | Delete markdown memory | `--id` |
| `md-list` | List markdown memories | None |

## `json-save`

Save JSON memory

```text
codebolt memory json-save --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `json-update`

Update JSON memory

```text
codebolt memory json-update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `json-delete`

Delete JSON memory

```text
codebolt memory json-delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `json-list`

List JSON memories

```text
codebolt memory json-list
```

This command takes no parameters.

## `todo-save`

Save todo memory

```text
codebolt memory todo-save --title <string> [--priority <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `title` | `--title` | `string` | Yes | Title of the resource being created or updated. |
| `priority` | `--priority` | `string` | No | Priority value for todo or task-related operations. |

## `todo-update`

Update todo memory

```text
codebolt memory todo-update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `todo-delete`

Delete todo memory

```text
codebolt memory todo-delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `todo-list`

List todo memories

```text
codebolt memory todo-list
```

This command takes no parameters.

## `md-save`

Save markdown memory

```text
codebolt memory md-save --content <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `content` | `--content` | `string` | Yes | Raw content string passed to the SDK method. |

## `md-update`

Update markdown memory

```text
codebolt memory md-update --id <string> --content <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `content` | `--content` | `string` | Yes | Raw content string passed to the SDK method. |

## `md-delete`

Delete markdown memory

```text
codebolt memory md-delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `md-list`

List markdown memories

```text
codebolt memory md-list
```

This command takes no parameters.
