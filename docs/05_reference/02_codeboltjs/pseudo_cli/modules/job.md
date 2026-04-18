---
sidebar_label: "Job"
title: "Job Pseudo CLI"
description: "Pseudo CLI reference for the Job module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `job` pseudo CLI module currently exposes 13 commands.

Related SDK docs: [Job](../../10_api-access/job/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create a job | `--group`, `--data` |
| `get` | Get job details | `--id` |
| `update` | Update a job | `--id`, `--data` |
| `delete` | Delete a job | `--id` |
| `list` | List jobs | None |
| `group-create` | Create a job group | `--data` |
| `add-dep` | Add job dependency | `--id`, `--target` |
| `remove-dep` | Remove job dependency | `--id`, `--target` |
| `ready` | Get ready jobs | None |
| `blocked` | Get blocked jobs | None |
| `lock` | Lock a job | `--id`, `--agent` |
| `unlock` | Unlock a job | `--id`, `--agent` |
| `bid` | Add a bid to a job | `--id`, `--data` |

## `create`

Create a job

```text
codebolt job create --group <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `group` | `--group` | `string` | Yes | Value for the `group` parameter. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get`

Get job details

```text
codebolt job get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `update`

Update a job

```text
codebolt job update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete`

Delete a job

```text
codebolt job delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `list`

List jobs

```text
codebolt job list [--filters <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `filters` | `--filters` | `json` | No | Value for the `filters` parameter. |

## `group-create`

Create a job group

```text
codebolt job group-create --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `add-dep`

Add job dependency

```text
codebolt job add-dep --id <string> --target <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `target` | `--target` | `string` | Yes | Value for the `target` parameter. |

## `remove-dep`

Remove job dependency

```text
codebolt job remove-dep --id <string> --target <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `target` | `--target` | `string` | Yes | Value for the `target` parameter. |

## `ready`

Get ready jobs

```text
codebolt job ready
```

This command takes no parameters.

## `blocked`

Get blocked jobs

```text
codebolt job blocked
```

This command takes no parameters.

## `lock`

Lock a job

```text
codebolt job lock --id <string> --agent <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `agent` | `--agent` | `string` | Yes | Agent identifier used by the command. |

## `unlock`

Unlock a job

```text
codebolt job unlock --id <string> --agent <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `agent` | `--agent` | `string` | Yes | Agent identifier used by the command. |

## `bid`

Add a bid to a job

```text
codebolt job bid --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |
