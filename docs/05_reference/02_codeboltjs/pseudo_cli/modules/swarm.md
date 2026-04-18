---
sidebar_label: "Swarm"
title: "Swarm Pseudo CLI"
description: "Pseudo CLI reference for the Swarm module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `swarm` pseudo CLI module currently exposes 11 commands.

Related SDK docs: [Swarm](../../10_api-access/swarm/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create a swarm | `--data` |
| `list` | List swarms | None |
| `get` | Get swarm | `--id` |
| `agents` | Get swarm agents | `--id` |
| `register` | Register agent in swarm | `--id`, `--data` |
| `unregister` | Unregister agent from swarm | `--id`, `--agent` |
| `create-team` | Create team in swarm | `--id`, `--data` |
| `list-teams` | List teams in swarm | `--id` |
| `create-role` | Create role in swarm | `--id`, `--data` |
| `list-roles` | List roles in swarm | `--id` |
| `status` | Get swarm status summary | `--id` |

## `create`

Create a swarm

```text
codebolt swarm create --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list`

List swarms

```text
codebolt swarm list
```

This command takes no parameters.

## `get`

Get swarm

```text
codebolt swarm get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `agents`

Get swarm agents

```text
codebolt swarm agents --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `register`

Register agent in swarm

```text
codebolt swarm register --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `unregister`

Unregister agent from swarm

```text
codebolt swarm unregister --id <string> --agent <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `agent` | `--agent` | `string` | Yes | Agent identifier used by the command. |

## `create-team`

Create team in swarm

```text
codebolt swarm create-team --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list-teams`

List teams in swarm

```text
codebolt swarm list-teams --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `create-role`

Create role in swarm

```text
codebolt swarm create-role --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list-roles`

List roles in swarm

```text
codebolt swarm list-roles --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `status`

Get swarm status summary

```text
codebolt swarm status --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
