---
sidebar_label: "Vectordb"
title: "Vectordb Pseudo CLI"
description: "Pseudo CLI reference for the Vectordb module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `vectordb` pseudo CLI module currently exposes 3 commands.

Related SDK docs: [Vectordb](../../10_api-access/vectordb/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `get` | Get vector | `--key` |
| `add` | Add vector item | `--item` |
| `query` | Query vector items | `--key` |

## `get`

Get vector

```text
codebolt vectordb get --key <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |

## `add`

Add vector item

```text
codebolt vectordb add --item <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `item` | `--item` | `json` | Yes | Value for the `item` parameter. |

## `query`

Query vector items

```text
codebolt vectordb query --key <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |
