---
sidebar_label: "Action Block"
title: "Action Block Pseudo CLI"
description: "Pseudo CLI reference for the Action Block module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `actionblock` pseudo CLI module currently exposes 3 commands.

Related SDK docs: [Action Block](../../10_api-access/actionBlock/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `list` | List action blocks | None |
| `detail` | Get action block detail | `--name` |
| `start` | Start an action block | `--name` |

## `list`

List action blocks

```text
codebolt actionblock list [--filter <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `filter` | `--filter` | `json` | No | Value for the `filter` parameter. |

## `detail`

Get action block detail

```text
codebolt actionblock detail --name <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |

## `start`

Start an action block

```text
codebolt actionblock start --name <string> [--params <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `params` | `--params` | `json` | No | Structured JSON payload passed through to the underlying SDK method. |
