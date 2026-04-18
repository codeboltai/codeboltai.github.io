---
sidebar_label: "Review Merge Request"
title: "Review Merge Request Pseudo CLI"
description: "Pseudo CLI reference for the Review Merge Request module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `rmr` pseudo CLI module currently exposes 11 commands.

Related SDK docs: [Review Merge Request](../../10_api-access/reviewMergeRequest/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `list` | List review merge requests | None |
| `get` | Get review merge request | `--id` |
| `create` | Create review merge request | `--data` |
| `update` | Update review merge request | `--id`, `--data` |
| `delete` | Delete review merge request | `--id` |
| `merge` | Merge a review merge request | `--id`, `--by` |
| `review` | Add review to merge request | `--id`, `--feedback` |
| `status` | Update merge request status | `--id`, `--status` |
| `pending` | Get pending merge requests | None |
| `ready` | Get merge requests ready to merge | None |
| `stats` | Get merge request statistics | None |

## `list`

List review merge requests

```text
codebolt rmr list [--filters <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `filters` | `--filters` | `json` | No | Value for the `filters` parameter. |

## `get`

Get review merge request

```text
codebolt rmr get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `create`

Create review merge request

```text
codebolt rmr create --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update`

Update review merge request

```text
codebolt rmr update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete`

Delete review merge request

```text
codebolt rmr delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `merge`

Merge a review merge request

```text
codebolt rmr merge --id <string> --by <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `by` | `--by` | `string` | Yes | Value for the `by` parameter. |

## `review`

Add review to merge request

```text
codebolt rmr review --id <string> --feedback <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `feedback` | `--feedback` | `json` | Yes | Value for the `feedback` parameter. |

## `status`

Update merge request status

```text
codebolt rmr status --id <string> --status <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `status` | `--status` | `string` | Yes | Status value to apply to the target resource. |

## `pending`

Get pending merge requests

```text
codebolt rmr pending
```

This command takes no parameters.

## `ready`

Get merge requests ready to merge

```text
codebolt rmr ready
```

This command takes no parameters.

## `stats`

Get merge request statistics

```text
codebolt rmr stats
```

This command takes no parameters.
