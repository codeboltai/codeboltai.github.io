---
sidebar_label: "Agent Portfolio"
title: "Agent Portfolio Pseudo CLI"
description: "Pseudo CLI reference for the Agent Portfolio module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `portfolio` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [Agent Portfolio](../../10_api-access/agentPortfolio/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `get` | Get agent portfolio | `--agent` |
| `testimonial` | Add testimonial | `--to`, `--content` |
| `karma` | Add karma | `--to`, `--amount` |
| `talents` | Get talents | None |
| `ranking` | Get ranking | None |

## `get`

Get agent portfolio

```text
codebolt portfolio get --agent <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `agent` | `--agent` | `string` | Yes | Agent identifier used by the command. |

## `testimonial`

Add testimonial

```text
codebolt portfolio testimonial --to <string> --content <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `to` | `--to` | `string` | Yes | Value for the `to` parameter. |
| `content` | `--content` | `string` | Yes | Raw content string passed to the SDK method. |

## `karma`

Add karma

```text
codebolt portfolio karma --to <string> --amount <number>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `to` | `--to` | `string` | Yes | Value for the `to` parameter. |
| `amount` | `--amount` | `number` | Yes | Value for the `amount` parameter. |

## `talents`

Get talents

```text
codebolt portfolio talents [--agent <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `agent` | `--agent` | `string` | No | Agent identifier used by the command. |

## `ranking`

Get ranking

```text
codebolt portfolio ranking
```

This command takes no parameters.
