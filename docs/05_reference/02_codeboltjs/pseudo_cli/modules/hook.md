---
sidebar_label: "Hook"
title: "Hook Pseudo CLI"
description: "Pseudo CLI reference for the Hook module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `hook` pseudo CLI module currently exposes 7 commands.

Related SDK docs: [Hook](../../10_api-access/hook/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `list` | List hooks | None |
| `get` | Get hook | `--id` |
| `create` | Create hook | `--config` |
| `update` | Update hook | `--id`, `--config` |
| `delete` | Delete hook | `--id` |
| `enable` | Enable hook | `--id` |
| `disable` | Disable hook | `--id` |

## `list`

List hooks

```text
codebolt hook list
```

This command takes no parameters.

## `get`

Get hook

```text
codebolt hook get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `create`

Create hook

```text
codebolt hook create --config <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `config` | `--config` | `json` | Yes | Structured configuration object for the target operation. |

## `update`

Update hook

```text
codebolt hook update --id <string> --config <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `config` | `--config` | `json` | Yes | Structured configuration object for the target operation. |

## `delete`

Delete hook

```text
codebolt hook delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `enable`

Enable hook

```text
codebolt hook enable --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `disable`

Disable hook

```text
codebolt hook disable --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
