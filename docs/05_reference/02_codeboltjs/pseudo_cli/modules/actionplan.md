---
sidebar_label: "Action Plan"
title: "Action Plan Pseudo CLI"
description: "Pseudo CLI reference for the Action Plan module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `actionplan` pseudo CLI module currently exposes 8 commands.

Related SDK docs: [Action Plan](../../10_api-access/actionPlan/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `list` | List all action plans | None |
| `get` | Get action plan detail | `--id` |
| `detail` | Get detailed action plan | `--id` |
| `create` | Create an action plan | `--name` |
| `update` | Update an action plan | `--id`, `--data` |
| `add-task` | Add task to action plan | `--id`, `--task` |
| `add-group` | Add group to action plan | `--id`, `--group` |
| `start-step` | Start a task step | `--plan-id`, `--task-id` |

## `list`

List all action plans

```text
codebolt actionplan list
```

This command takes no parameters.

## `get`

Get action plan detail

```text
codebolt actionplan get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `detail`

Get detailed action plan

```text
codebolt actionplan detail --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `create`

Create an action plan

```text
codebolt actionplan create --name <string> [--description <string>] [--agent-id <string>] [--agent-name <string>] [--status <string>] [--plan-id <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `description` | `--description` | `string` | No | Longer description text for the resource. |
| `agent-id` | `--agent-id` | `string` | No | Value for the `agent-id` parameter. |
| `agent-name` | `--agent-name` | `string` | No | Value for the `agent-name` parameter. |
| `status` | `--status` | `string` | No | Status value to apply to the target resource. |
| `plan-id` | `--plan-id` | `string` | No | Value for the `plan-id` parameter. |

## `update`

Update an action plan

```text
codebolt actionplan update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `add-task`

Add task to action plan

```text
codebolt actionplan add-task --id <string> --task <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `task` | `--task` | `json` | Yes | Task or prompt text for the target operation. |

## `add-group`

Add group to action plan

```text
codebolt actionplan add-group --id <string> --group <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `group` | `--group` | `json` | Yes | Value for the `group` parameter. |

## `start-step`

Start a task step

```text
codebolt actionplan start-step --plan-id <string> --task-id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `plan-id` | `--plan-id` | `string` | Yes | Value for the `plan-id` parameter. |
| `task-id` | `--task-id` | `string` | Yes | Value for the `task-id` parameter. |
