---
sidebar_label: "Agent Deliberation"
title: "Agent Deliberation Pseudo CLI"
description: "Pseudo CLI reference for the Agent Deliberation module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `deliberation` pseudo CLI module currently exposes 7 commands.

Related SDK docs: [Agent Deliberation](../../10_api-access/agentDeliberation/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create deliberation | `--params` |
| `get` | Get deliberation | `--params` |
| `list` | List deliberations | None |
| `respond` | Respond to deliberation | `--params` |
| `vote` | Vote on deliberation | `--params` |
| `winner` | Get deliberation winner | `--params` |
| `summary` | Get deliberation summary | `--params` |

## `create`

Create deliberation

```text
codebolt deliberation create --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get`

Get deliberation

```text
codebolt deliberation get --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list`

List deliberations

```text
codebolt deliberation list
```

This command takes no parameters.

## `respond`

Respond to deliberation

```text
codebolt deliberation respond --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `vote`

Vote on deliberation

```text
codebolt deliberation vote --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `winner`

Get deliberation winner

```text
codebolt deliberation winner --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `summary`

Get deliberation summary

```text
codebolt deliberation summary --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |
