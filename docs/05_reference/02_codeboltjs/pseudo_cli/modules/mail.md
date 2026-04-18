---
sidebar_label: "Mail"
title: "Mail Pseudo CLI"
description: "Pseudo CLI reference for the Mail module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `mail` pseudo CLI module currently exposes 7 commands.

Related SDK docs: [Mail](../../10_api-access/mail/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `register` | Register agent for mail | `--params` |
| `inbox` | Fetch inbox | `--params` |
| `send` | Send mail message | `--params` |
| `reply` | Reply to mail message | `--params` |
| `threads` | List mail threads | None |
| `thread` | Get mail thread | `--params` |
| `search` | Search mail | `--params` |

## `register`

Register agent for mail

```text
codebolt mail register --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `inbox`

Fetch inbox

```text
codebolt mail inbox --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `send`

Send mail message

```text
codebolt mail send --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `reply`

Reply to mail message

```text
codebolt mail reply --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `threads`

List mail threads

```text
codebolt mail threads
```

This command takes no parameters.

## `thread`

Get mail thread

```text
codebolt mail thread --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `search`

Search mail

```text
codebolt mail search --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |
