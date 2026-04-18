---
sidebar_label: "Calendar"
title: "Calendar Pseudo CLI"
description: "Pseudo CLI reference for the Calendar module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `calendar` pseudo CLI module currently exposes 7 commands.

Related SDK docs: [Calendar](../../10_api-access/calendar/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create calendar event | `--params` |
| `update` | Update calendar event | `--params` |
| `delete` | Delete calendar event | `--params` |
| `get` | Get calendar event | `--params` |
| `list` | List calendar events | None |
| `upcoming` | Get upcoming events | None |
| `status` | Get calendar status | None |

## `create`

Create calendar event

```text
codebolt calendar create --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update`

Update calendar event

```text
codebolt calendar update --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `delete`

Delete calendar event

```text
codebolt calendar delete --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `get`

Get calendar event

```text
codebolt calendar get --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `list`

List calendar events

```text
codebolt calendar list
```

This command takes no parameters.

## `upcoming`

Get upcoming events

```text
codebolt calendar upcoming
```

This command takes no parameters.

## `status`

Get calendar status

```text
codebolt calendar status
```

This command takes no parameters.
