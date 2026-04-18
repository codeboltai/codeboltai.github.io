---
sidebar_label: "Feedback"
title: "Feedback Pseudo CLI"
description: "Pseudo CLI reference for the Feedback module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `feedback` pseudo CLI module currently exposes 7 commands.

Related SDK docs: [Feedback](../../10_api-access/groupFeedback/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create group feedback | `--params` |
| `get` | Get group feedback | `--params` |
| `list` | List group feedbacks | None |
| `respond` | Respond to feedback | `--params` |
| `reply` | Reply to feedback | `--params` |
| `update-summary` | Update feedback summary | `--params` |
| `update-status` | Update feedback status | `--params` |

## `create`

Create group feedback

```text
codebolt feedback create --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get`

Get group feedback

```text
codebolt feedback get --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list`

List group feedbacks

```text
codebolt feedback list [--params <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | No | Structured JSON payload passed through to the underlying SDK method. |

## `respond`

Respond to feedback

```text
codebolt feedback respond --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `reply`

Reply to feedback

```text
codebolt feedback reply --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update-summary`

Update feedback summary

```text
codebolt feedback update-summary --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update-status`

Update feedback status

```text
codebolt feedback update-status --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |
