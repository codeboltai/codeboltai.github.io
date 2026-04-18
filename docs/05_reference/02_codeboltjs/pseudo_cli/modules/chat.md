---
sidebar_label: "Chat"
title: "Chat Pseudo CLI"
description: "Pseudo CLI reference for the Chat module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `chat` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [Chat](../../10_api-access/chat/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `send` | Send a chat message | `--message` |
| `ask` | Send message and wait for reply | `--message` |
| `confirm` | Send confirmation request | `--message` |
| `notify` | Send notification event | `--message`, `--type` |
| `history` | Get chat history | `--thread` |

## `send`

Send a chat message

```text
codebolt chat send --message <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `message` | `--message` | `string` | Yes | Human-readable message text sent to the SDK method. |

## `ask`

Send message and wait for reply

```text
codebolt chat ask --message <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `message` | `--message` | `string` | Yes | Human-readable message text sent to the SDK method. |

## `confirm`

Send confirmation request

```text
codebolt chat confirm --message <string> [--buttons <json>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `message` | `--message` | `string` | Yes | Human-readable message text sent to the SDK method. |
| `buttons` | `--buttons` | `json` | No | JSON array describing confirmation button options. |

## `notify`

Send notification event

```text
codebolt chat notify --message <string> --type <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `message` | `--message` | `string` | Yes | Human-readable message text sent to the SDK method. |
| `type` | `--type` | `string` | Yes | Type discriminator used by the underlying SDK method. |

## `history`

Get chat history

```text
codebolt chat history --thread <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `thread` | `--thread` | `string` | Yes | Thread identifier for chat history operations. |
