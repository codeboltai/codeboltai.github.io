---
sidebar_label: "Capability"
title: "Capability Pseudo CLI"
description: "Pseudo CLI reference for the Capability module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `capability` pseudo CLI module currently exposes 7 commands.

Related SDK docs: [Capability](../../10_api-access/capability/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `list` | List capabilities | None |
| `skills` | List skills | None |
| `powers` | List powers | None |
| `detail` | Get capability detail | `--name` |
| `start` | Start a capability | `--name`, `--type` |
| `stop` | Stop a capability | `--id` |
| `status` | Get execution status | `--id` |

## `list`

List capabilities

```text
codebolt capability list
```

This command takes no parameters.

## `skills`

List skills

```text
codebolt capability skills
```

This command takes no parameters.

## `powers`

List powers

```text
codebolt capability powers
```

This command takes no parameters.

## `detail`

Get capability detail

```text
codebolt capability detail --name <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |

## `start`

Start a capability

```text
codebolt capability start --name <string> --type <string> [--params <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `type` | `--type` | `string` | Yes | Type discriminator used by the underlying SDK method. |
| `params` | `--params` | `json` | No | Structured JSON payload passed through to the underlying SDK method. |

## `stop`

Stop a capability

```text
codebolt capability stop --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `status`

Get execution status

```text
codebolt capability status --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
