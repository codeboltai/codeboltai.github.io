---
sidebar_label: "Auto Testing"
title: "Auto Testing Pseudo CLI"
description: "Pseudo CLI reference for the Auto Testing module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `testing` pseudo CLI module currently exposes 18 commands.

Related SDK docs: [Auto Testing](../../10_api-access/autoTesting/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create-suite` | Create test suite | `--params` |
| `get-suite` | Get test suite | `--params` |
| `list-suites` | List test suites | None |
| `update-suite` | Update test suite | `--params` |
| `delete-suite` | Delete test suite | `--params` |
| `add-case` | Add case to suite | `--params` |
| `remove-case` | Remove case from suite | `--params` |
| `create-case` | Create test case | `--params` |
| `get-case` | Get test case | `--params` |
| `list-cases` | List test cases | None |
| `update-case` | Update test case | `--params` |
| `delete-case` | Delete test case | `--params` |
| `create-run` | Create test run | `--params` |
| `get-run` | Get test run | `--params` |
| `list-runs` | List test runs | None |
| `update-run-status` | Update test run status | `--params` |
| `update-run-case` | Update run case status | `--params` |
| `update-run-step` | Update run step status | `--params` |

## `create-suite`

Create test suite

```text
codebolt testing create-suite --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get-suite`

Get test suite

```text
codebolt testing get-suite --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list-suites`

List test suites

```text
codebolt testing list-suites [--params <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | No | Structured JSON payload passed through to the underlying SDK method. |

## `update-suite`

Update test suite

```text
codebolt testing update-suite --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete-suite`

Delete test suite

```text
codebolt testing delete-suite --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `add-case`

Add case to suite

```text
codebolt testing add-case --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `remove-case`

Remove case from suite

```text
codebolt testing remove-case --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `create-case`

Create test case

```text
codebolt testing create-case --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get-case`

Get test case

```text
codebolt testing get-case --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list-cases`

List test cases

```text
codebolt testing list-cases [--params <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | No | Structured JSON payload passed through to the underlying SDK method. |

## `update-case`

Update test case

```text
codebolt testing update-case --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete-case`

Delete test case

```text
codebolt testing delete-case --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `create-run`

Create test run

```text
codebolt testing create-run --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get-run`

Get test run

```text
codebolt testing get-run --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list-runs`

List test runs

```text
codebolt testing list-runs [--params <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | No | Structured JSON payload passed through to the underlying SDK method. |

## `update-run-status`

Update test run status

```text
codebolt testing update-run-status --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update-run-case`

Update run case status

```text
codebolt testing update-run-case --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update-run-step`

Update run step status

```text
codebolt testing update-run-step --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |
