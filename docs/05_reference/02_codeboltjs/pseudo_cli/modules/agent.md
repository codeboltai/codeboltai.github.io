---
sidebar_label: "Agent"
title: "Agent Pseudo CLI"
description: "Pseudo CLI reference for the Agent module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `agent` pseudo CLI module currently exposes 4 commands.

Related SDK docs: [Agent](../../10_api-access/agent/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `find` | Find an agent for a task | `--task` |
| `start` | Start an agent | `--id`, `--task` |
| `list` | List agents | None |
| `details` | Get agent details | None |

## `find`

Find an agent for a task

```text
codebolt agent find --task <string> [--max <number>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `task` | `--task` | `string` | Yes | Task or prompt text for the target operation. |
| `max` | `--max` | `number` | No | Maximum number of results to return. |

## `start`

Start an agent

```text
codebolt agent start --id <string> --task <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `task` | `--task` | `string` | Yes | Task or prompt text for the target operation. |

## `list`

List agents

```text
codebolt agent list [--type <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `type` | `--type` | `string` | No | Type discriminator used by the underlying SDK method. |

## `details`

Get agent details

```text
codebolt agent details [--agents <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `agents` | `--agents` | `json` | No | JSON array or structured value identifying one or more agents. |
