---
sidebar_label: "Memory Ingestion"
title: "Memory Ingestion Pseudo CLI"
description: "Pseudo CLI reference for the Memory Ingestion module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `ingestion` pseudo CLI module currently exposes 11 commands.

Related SDK docs: [Memory Ingestion](../../10_api-access/memoryIngestion/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create ingestion pipeline | `--config` |
| `get` | Get ingestion pipeline | `--id` |
| `list` | List ingestion pipelines | None |
| `update` | Update ingestion pipeline | `--id`, `--updates` |
| `delete` | Delete ingestion pipeline | `--id` |
| `execute` | Execute ingestion pipeline | `--params` |
| `validate` | Validate ingestion pipeline | `--pipeline` |
| `processor-specs` | Get processor specifications | None |
| `activate` | Activate ingestion pipeline | `--id` |
| `disable` | Disable ingestion pipeline | `--id` |
| `duplicate` | Duplicate ingestion pipeline | `--id` |

## `create`

Create ingestion pipeline

```text
codebolt ingestion create --config <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `config` | `--config` | `json` | Yes | Structured configuration object for the target operation. |

## `get`

Get ingestion pipeline

```text
codebolt ingestion get --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `list`

List ingestion pipelines

```text
codebolt ingestion list [--filters <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `filters` | `--filters` | `json` | No | Value for the `filters` parameter. |

## `update`

Update ingestion pipeline

```text
codebolt ingestion update --id <string> --updates <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `updates` | `--updates` | `json` | Yes | Value for the `updates` parameter. |

## `delete`

Delete ingestion pipeline

```text
codebolt ingestion delete --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `execute`

Execute ingestion pipeline

```text
codebolt ingestion execute --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `validate`

Validate ingestion pipeline

```text
codebolt ingestion validate --pipeline <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pipeline` | `--pipeline` | `json` | Yes | Value for the `pipeline` parameter. |

## `processor-specs`

Get processor specifications

```text
codebolt ingestion processor-specs
```

This command takes no parameters.

## `activate`

Activate ingestion pipeline

```text
codebolt ingestion activate --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `disable`

Disable ingestion pipeline

```text
codebolt ingestion disable --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `duplicate`

Duplicate ingestion pipeline

```text
codebolt ingestion duplicate --id <string> [--new-id <string>] [--new-label <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `new-id` | `--new-id` | `string` | No | Value for the `new-id` parameter. |
| `new-label` | `--new-label` | `string` | No | Value for the `new-label` parameter. |
