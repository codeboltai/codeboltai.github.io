---
sidebar_label: "Knowledge Graph"
title: "Knowledge Graph Pseudo CLI"
description: "Pseudo CLI reference for the Knowledge Graph module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `kg` pseudo CLI module currently exposes 10 commands.

Related SDK docs: [Knowledge Graph](../../10_api-access/knowledgeGraph/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create-template` | Create KG instance template | `--config` |
| `list-templates` | List KG instance templates | None |
| `create-instance` | Create KG instance | `--config` |
| `list-instances` | List KG instances | None |
| `get-instance` | Get KG instance | `--id` |
| `add-record` | Add memory record | `--instance`, `--record` |
| `list-records` | List memory records | `--instance` |
| `add-edge` | Add edge | `--instance`, `--edge` |
| `list-edges` | List edges | `--instance` |
| `execute-view` | Execute a view | `--id` |

## `create-template`

Create KG instance template

```text
codebolt kg create-template --config <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `config` | `--config` | `json` | Yes | Structured configuration object for the target operation. |

## `list-templates`

List KG instance templates

```text
codebolt kg list-templates
```

This command takes no parameters.

## `create-instance`

Create KG instance

```text
codebolt kg create-instance --config <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `config` | `--config` | `json` | Yes | Structured configuration object for the target operation. |

## `list-instances`

List KG instances

```text
codebolt kg list-instances
```

This command takes no parameters.

## `get-instance`

Get KG instance

```text
codebolt kg get-instance --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `add-record`

Add memory record

```text
codebolt kg add-record --instance <string> --record <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `instance` | `--instance` | `string` | Yes | Value for the `instance` parameter. |
| `record` | `--record` | `json` | Yes | Value for the `record` parameter. |

## `list-records`

List memory records

```text
codebolt kg list-records --instance <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `instance` | `--instance` | `string` | Yes | Value for the `instance` parameter. |

## `add-edge`

Add edge

```text
codebolt kg add-edge --instance <string> --edge <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `instance` | `--instance` | `string` | Yes | Value for the `instance` parameter. |
| `edge` | `--edge` | `json` | Yes | Value for the `edge` parameter. |

## `list-edges`

List edges

```text
codebolt kg list-edges --instance <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `instance` | `--instance` | `string` | Yes | Value for the `instance` parameter. |

## `execute-view`

Execute a view

```text
codebolt kg execute-view --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
