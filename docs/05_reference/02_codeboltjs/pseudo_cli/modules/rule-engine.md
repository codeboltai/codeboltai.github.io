---
sidebar_label: "Context Rule Engine"
title: "Context Rule Engine Pseudo CLI"
description: "Pseudo CLI reference for the Context Rule Engine module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `rule-engine` pseudo CLI module currently exposes 7 commands.

Related SDK docs: [Context Rule Engine](../../10_api-access/contextRuleEngine/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create context rule engine | `--config` |
| `get` | Get context rule engine | `--id` |
| `list` | List context rule engines | None |
| `update` | Update context rule engine | `--id`, `--updates` |
| `delete` | Delete context rule engine | `--id` |
| `evaluate` | Evaluate rules | `--params` |
| `variables` | Get possible variables | None |

## `create`

Create context rule engine

```text
codebolt rule-engine create --config <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `config` | `--config` | `json` | Yes | Structured configuration object for the target operation. |

## `get`

Get context rule engine

```text
codebolt rule-engine get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `list`

List context rule engines

```text
codebolt rule-engine list
```

This command takes no parameters.

## `update`

Update context rule engine

```text
codebolt rule-engine update --id <string> --updates <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `updates` | `--updates` | `json` | Yes | Value for the `updates` parameter. |

## `delete`

Delete context rule engine

```text
codebolt rule-engine delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `evaluate`

Evaluate rules

```text
codebolt rule-engine evaluate --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `variables`

Get possible variables

```text
codebolt rule-engine variables
```

This command takes no parameters.
