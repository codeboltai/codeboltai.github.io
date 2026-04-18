---
sidebar_label: "Code Map"
title: "Code Map Pseudo CLI"
description: "Pseudo CLI reference for the Code Map module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `codemap` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [Code Map](../../10_api-access/codemap/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `list` | List codemaps | None |
| `get` | Get codemap | `--id` |
| `create` | Create codemap | `--data` |
| `update` | Update codemap | `--id`, `--data` |
| `delete` | Delete codemap | `--id` |

## `list`

List codemaps

```text
codebolt codemap list
```

This command takes no parameters.

## `get`

Get codemap

```text
codebolt codemap get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `create`

Create codemap

```text
codebolt codemap create --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update`

Update codemap

```text
codebolt codemap update --id <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete`

Delete codemap

```text
codebolt codemap delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
