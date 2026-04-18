---
sidebar_label: "Agent Event Queue"
title: "Agent Event Queue Pseudo CLI"
description: "Pseudo CLI reference for the Agent Event Queue module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `eventqueue` pseudo CLI module currently exposes 6 commands.


## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `add` | Add event to queue | `--params` |
| `send` | Send agent message | `--params` |
| `stats` | Get queue statistics | None |
| `pending` | Get pending queue events | None |
| `ack` | Acknowledge event | `--id` |
| `wait` | Wait for next queue event | None |

## `add`

Add event to queue

```text
codebolt eventqueue add --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `send`

Send agent message

```text
codebolt eventqueue send --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `stats`

Get queue statistics

```text
codebolt eventqueue stats
```

This command takes no parameters.

## `pending`

Get pending queue events

```text
codebolt eventqueue pending
```

This command takes no parameters.

## `ack`

Acknowledge event

```text
codebolt eventqueue ack --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `wait`

Wait for next queue event

```text
codebolt eventqueue wait
```

This command takes no parameters.
