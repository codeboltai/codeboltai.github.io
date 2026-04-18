---
sidebar_label: "KV Store"
title: "KV Store Pseudo CLI"
description: "Pseudo CLI reference for the KV Store module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `kv` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [KV Store](../../10_api-access/kvStore/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create KV store instance | `--name` |
| `get` | Get value from KV store | `--instance`, `--ns`, `--key` |
| `set` | Set value in KV store | `--instance`, `--ns`, `--key`, `--value` |
| `delete` | Delete key from KV store | `--instance`, `--ns`, `--key` |
| `query` | Query KV store | `--query` |

## `create`

Create KV store instance

```text
codebolt kv create --name <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |

## `get`

Get value from KV store

```text
codebolt kv get --instance <string> --ns <string> --key <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `instance` | `--instance` | `string` | Yes | Value for the `instance` parameter. |
| `ns` | `--ns` | `string` | Yes | Value for the `ns` parameter. |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |

## `set`

Set value in KV store

```text
codebolt kv set --instance <string> --ns <string> --key <string> --value <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `instance` | `--instance` | `string` | Yes | Value for the `instance` parameter. |
| `ns` | `--ns` | `string` | Yes | Value for the `ns` parameter. |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |
| `value` | `--value` | `string` | Yes | Value stored or updated by the operation. |

## `delete`

Delete key from KV store

```text
codebolt kv delete --instance <string> --ns <string> --key <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `instance` | `--instance` | `string` | Yes | Value for the `instance` parameter. |
| `ns` | `--ns` | `string` | Yes | Value for the `ns` parameter. |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |

## `query`

Query KV store

```text
codebolt kv query --query <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `query` | `--query` | `json` | Yes | Search query string used by the command. |
