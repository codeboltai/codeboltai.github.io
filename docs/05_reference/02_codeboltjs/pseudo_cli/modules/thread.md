---
sidebar_label: "Thread"
title: "Thread Pseudo CLI"
description: "Pseudo CLI reference for the Thread module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `thread` pseudo CLI module currently exposes 10 commands.

Related SDK docs: [Thread](../../10_api-access/thread/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create a thread | `--task` |
| `create-start` | Create and start a thread | `--task`, `--agent` |
| `create-bg` | Create thread in background | `--task`, `--agent` |
| `list` | List threads | None |
| `get` | Get thread details | `--id` |
| `start` | Start a thread | `--id` |
| `update` | Update a thread | `--id`, `--data` |
| `delete` | Delete a thread | `--id` |
| `status` | Update thread status | `--id`, `--status` |
| `messages` | Get thread messages | `--id` |

## `create`

Create a thread

```text
codebolt thread create --task <string> [--agent <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `task` | `--task` | `string` | Yes | Task or prompt text for the target operation. |
| `agent` | `--agent` | `string` | No | Agent identifier used by the command. |

## `create-start`

Create and start a thread

```text
codebolt thread create-start --task <string> --agent <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `task` | `--task` | `string` | Yes | Task or prompt text for the target operation. |
| `agent` | `--agent` | `string` | Yes | Agent identifier used by the command. |

## `create-bg`

Create thread in background

```text
codebolt thread create-bg --task <string> --agent <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `task` | `--task` | `string` | Yes | Task or prompt text for the target operation. |
| `agent` | `--agent` | `string` | Yes | Agent identifier used by the command. |

## `list`

List threads

```text
codebolt thread list
```

This command takes no parameters.

## `get`

Get thread details

```text
codebolt thread get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `start`

Start a thread

```text
codebolt thread start --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `update`

Update a thread

```text
codebolt thread update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete`

Delete a thread

```text
codebolt thread delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `status`

Update thread status

```text
codebolt thread status --id <string> --status <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `status` | `--status` | `string` | Yes | Status value to apply to the target resource. |

## `messages`

Get thread messages

```text
codebolt thread messages --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
