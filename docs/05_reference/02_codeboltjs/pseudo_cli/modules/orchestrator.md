---
sidebar_label: "Orchestrator"
title: "Orchestrator Pseudo CLI"
description: "Pseudo CLI reference for the Orchestrator module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `orchestrator` pseudo CLI module currently exposes 8 commands.

Related SDK docs: [Orchestrator](../../10_api-access/orchestrator/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `list` | List orchestrators | None |
| `get` | Get orchestrator | `--id` |
| `settings` | Get orchestrator settings | `--id` |
| `create` | Create orchestrator | `--params` |
| `update` | Update orchestrator | `--id`, `--params` |
| `update-settings` | Update orchestrator settings | `--id`, `--params` |
| `delete` | Delete orchestrator | `--id` |
| `status` | Update orchestrator status | `--id`, `--status` |

## `list`

List orchestrators

```text
codebolt orchestrator list
```

This command takes no parameters.

## `get`

Get orchestrator

```text
codebolt orchestrator get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `settings`

Get orchestrator settings

```text
codebolt orchestrator settings --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `create`

Create orchestrator

```text
codebolt orchestrator create --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update`

Update orchestrator

```text
codebolt orchestrator update --id <string> --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update-settings`

Update orchestrator settings

```text
codebolt orchestrator update-settings --id <string> --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete`

Delete orchestrator

```text
codebolt orchestrator delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `status`

Update orchestrator status

```text
codebolt orchestrator status --id <string> --status <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `status` | `--status` | `string` | Yes | Status value to apply to the target resource. |
