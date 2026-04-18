---
sidebar_label: "Context Assembly"
title: "Context Assembly Pseudo CLI"
description: "Pseudo CLI reference for the Context Assembly module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `context` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [Context Assembly](../../10_api-access/contextAssembly/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `get` | Get assembled context | `--request` |
| `validate` | Validate context assembly request | `--request` |
| `memory-types` | List available memory types | None |
| `evaluate-rules` | Evaluate rules for context | `--request` |
| `required-vars` | Get required variables for memories | `--names` |

## `get`

Get assembled context

```text
codebolt context get --request <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `request` | `--request` | `json` | Yes | Value for the `request` parameter. |

## `validate`

Validate context assembly request

```text
codebolt context validate --request <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `request` | `--request` | `json` | Yes | Value for the `request` parameter. |

## `memory-types`

List available memory types

```text
codebolt context memory-types
```

This command takes no parameters.

## `evaluate-rules`

Evaluate rules for context

```text
codebolt context evaluate-rules --request <json> [--engines <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `request` | `--request` | `json` | Yes | Value for the `request` parameter. |
| `engines` | `--engines` | `json` | No | Value for the `engines` parameter. |

## `required-vars`

Get required variables for memories

```text
codebolt context required-vars --names <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `names` | `--names` | `json` | Yes | Value for the `names` parameter. |
