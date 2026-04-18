---
sidebar_label: "Environment"
title: "Environment Pseudo CLI"
description: "Pseudo CLI reference for the Environment module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `env` pseudo CLI module currently exposes 14 commands.


## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `list` | List environments | None |
| `get` | Get environment | `--id` |
| `create` | Create environment | `--data` |
| `update` | Update environment | `--id`, `--data` |
| `delete` | Delete environment | `--id` |
| `start` | Start environment | `--id` |
| `stop` | Stop environment | `--id` |
| `restart` | Restart environment | `--id` |
| `status` | Get environment status | `--id` |
| `stats` | Get environment statistics | None |
| `providers` | Get running providers | None |
| `local-providers` | Get local providers | None |
| `message` | Send message to environment | `--id`, `--message` |
| `start-agent` | Start agent in environment | `--id`, `--task` |

## `list`

List environments

```text
codebolt env list
```

This command takes no parameters.

## `get`

Get environment

```text
codebolt env get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `create`

Create environment

```text
codebolt env create --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update`

Update environment

```text
codebolt env update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete`

Delete environment

```text
codebolt env delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `start`

Start environment

```text
codebolt env start --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `stop`

Stop environment

```text
codebolt env stop --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `restart`

Restart environment

```text
codebolt env restart --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `status`

Get environment status

```text
codebolt env status --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `stats`

Get environment statistics

```text
codebolt env stats
```

This command takes no parameters.

## `providers`

Get running providers

```text
codebolt env providers
```

This command takes no parameters.

## `local-providers`

Get local providers

```text
codebolt env local-providers
```

This command takes no parameters.

## `message`

Send message to environment

```text
codebolt env message --id <string> --message <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `message` | `--message` | `json` | Yes | Human-readable message text sent to the SDK method. |

## `start-agent`

Start agent in environment

```text
codebolt env start-agent --id <string> --task <string> [--agent <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `task` | `--task` | `string` | Yes | Task or prompt text for the target operation. |
| `agent` | `--agent` | `string` | No | Agent identifier used by the command. |
