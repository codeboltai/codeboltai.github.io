---
sidebar_label: "Persistent Memory"
title: "Persistent Memory Pseudo CLI"
description: "Pseudo CLI reference for the Persistent Memory module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `pmemory` pseudo CLI module currently exposes 6 commands.

Related SDK docs: [Persistent Memory](../../10_api-access/persistentMemory/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create persistent memory | `--params` |
| `get` | Get persistent memory | `--id` |
| `list` | List persistent memories | None |
| `update` | Update persistent memory | `--id`, `--params` |
| `delete` | Delete persistent memory | `--id` |
| `retrieve` | Execute retrieval on persistent memory | `--id`, `--intent` |

## `create`

Create persistent memory

```text
codebolt pmemory create --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get`

Get persistent memory

```text
codebolt pmemory get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `list`

List persistent memories

```text
codebolt pmemory list
```

This command takes no parameters.

## `update`

Update persistent memory

```text
codebolt pmemory update --id <string> --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete`

Delete persistent memory

```text
codebolt pmemory delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `retrieve`

Execute retrieval on persistent memory

```text
codebolt pmemory retrieve --id <string> --intent <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `intent` | `--intent` | `json` | Yes | Structured intent object for retrieval or planning operations. |
