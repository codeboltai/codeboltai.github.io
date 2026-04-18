---
sidebar_label: "Tokenizer"
title: "Tokenizer Pseudo CLI"
description: "Pseudo CLI reference for the Tokenizer module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `tokenizer` pseudo CLI module currently exposes 2 commands.

Related SDK docs: [Tokenizer](../../10_api-access/tokenizer/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `add` | Add a token | `--key` |
| `get` | Get a token | `--key` |

## `add`

Add a token

```text
codebolt tokenizer add --key <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |

## `get`

Get a token

```text
codebolt tokenizer get --key <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |
