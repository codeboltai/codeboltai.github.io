---
sidebar_label: "DB Memory"
title: "DB Memory Pseudo CLI"
description: "Pseudo CLI reference for the DB Memory module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `dbmemory` pseudo CLI module currently exposes 2 commands.

Related SDK docs: [DB Memory](../../10_api-access/dbmemory/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `add` | Add knowledge to DB memory | `--key`, `--value` |
| `get` | Get knowledge from DB memory | `--key` |

## `add`

Add knowledge to DB memory

```text
codebolt dbmemory add --key <string> --value <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |
| `value` | `--value` | `string` | Yes | Value stored or updated by the operation. |

## `get`

Get knowledge from DB memory

```text
codebolt dbmemory get --key <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |
