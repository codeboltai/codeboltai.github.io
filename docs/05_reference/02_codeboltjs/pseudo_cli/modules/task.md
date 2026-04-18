---
sidebar_label: "Task"
title: "Task Pseudo CLI"
description: "Pseudo CLI reference for the Task module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `task` pseudo CLI module currently exposes 7 commands.

Related SDK docs: [Task](../../10_api-access/taskplaner/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create a task | `--title` |
| `update` | Update a task | `--id`, `--data` |
| `delete` | Delete a task | `--id` |
| `list` | List tasks | None |
| `get` | Get task details | `--id` |
| `assign` | Assign agent to task | `--id`, `--agent` |
| `execute` | Execute task with agent | `--id`, `--agent` |

## `create`

Create a task

```text
codebolt task create --title <string> [--description <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `title` | `--title` | `string` | Yes | Title of the resource being created or updated. |
| `description` | `--description` | `string` | No | Longer description text for the resource. |

## `update`

Update a task

```text
codebolt task update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete`

Delete a task

```text
codebolt task delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `list`

List tasks

```text
codebolt task list
```

This command takes no parameters.

## `get`

Get task details

```text
codebolt task get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `assign`

Assign agent to task

```text
codebolt task assign --id <string> --agent <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `agent` | `--agent` | `string` | Yes | Agent identifier used by the command. |

## `execute`

Execute task with agent

```text
codebolt task execute --id <string> --agent <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `agent` | `--agent` | `string` | Yes | Agent identifier used by the command. |
