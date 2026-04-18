---
sidebar_label: "Project Structure Update Request"
title: "Project Structure Update Request Pseudo CLI"
description: "Pseudo CLI reference for the Project Structure Update Request module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `update-request` pseudo CLI module currently exposes 14 commands.

Related SDK docs: [Project Structure Update Request](../../10_api-access/projectStructureUpdateRequest/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create update request | `--data` |
| `get` | Get update request | `--id` |
| `list` | List update requests | None |
| `update` | Update an update request | `--id`, `--updates` |
| `delete` | Delete update request | `--id` |
| `submit` | Submit update request | `--id` |
| `start-work` | Start work on update request | `--id` |
| `complete` | Complete update request | `--id` |
| `merge` | Merge update request | `--id` |
| `add-dispute` | Add dispute to update request | `--id`, `--data` |
| `resolve-dispute` | Resolve dispute | `--id`, `--dispute-id` |
| `add-comment` | Add comment to dispute | `--id`, `--dispute-id`, `--data` |
| `watch` | Watch update request | `--id`, `--data` |
| `unwatch` | Unwatch update request | `--id`, `--watcher-id` |

## `create`

Create update request

```text
codebolt update-request create --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get`

Get update request

```text
codebolt update-request get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `list`

List update requests

```text
codebolt update-request list [--filters <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `filters` | `--filters` | `json` | No | Value for the `filters` parameter. |

## `update`

Update an update request

```text
codebolt update-request update --id <string> --updates <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `updates` | `--updates` | `json` | Yes | Value for the `updates` parameter. |

## `delete`

Delete update request

```text
codebolt update-request delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `submit`

Submit update request

```text
codebolt update-request submit --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `start-work`

Start work on update request

```text
codebolt update-request start-work --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `complete`

Complete update request

```text
codebolt update-request complete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `merge`

Merge update request

```text
codebolt update-request merge --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `add-dispute`

Add dispute to update request

```text
codebolt update-request add-dispute --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `resolve-dispute`

Resolve dispute

```text
codebolt update-request resolve-dispute --id <string> --dispute-id <string> [--summary <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `dispute-id` | `--dispute-id` | `string` | Yes | Value for the `dispute-id` parameter. |
| `summary` | `--summary` | `string` | No | Value for the `summary` parameter. |

## `add-comment`

Add comment to dispute

```text
codebolt update-request add-comment --id <string> --dispute-id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `dispute-id` | `--dispute-id` | `string` | Yes | Value for the `dispute-id` parameter. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `watch`

Watch update request

```text
codebolt update-request watch --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `unwatch`

Unwatch update request

```text
codebolt update-request unwatch --id <string> --watcher-id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `watcher-id` | `--watcher-id` | `string` | Yes | Value for the `watcher-id` parameter. |
