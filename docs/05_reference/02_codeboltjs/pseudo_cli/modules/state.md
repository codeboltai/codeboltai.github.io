---
sidebar_label: "State"
title: "State Pseudo CLI"
description: "Pseudo CLI reference for the State module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `state` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [State](../../10_api-access/state/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `app` | Get application state | None |
| `project` | Get project state | None |
| `agent` | Get agent state | None |
| `add-agent` | Add to agent state | `--key`, `--value` |
| `update-project` | Update project state | `--key`, `--value` |

## `app`

Get application state

```text
codebolt state app
```

This command takes no parameters.

## `project`

Get project state

```text
codebolt state project
```

This command takes no parameters.

## `agent`

Get agent state

```text
codebolt state agent
```

This command takes no parameters.

## `add-agent`

Add to agent state

```text
codebolt state add-agent --key <string> --value <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |
| `value` | `--value` | `string` | Yes | Value stored or updated by the operation. |

## `update-project`

Update project state

```text
codebolt state update-project --key <string> --value <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | `--key` | `string` | Yes | Key value used to address stored data. |
| `value` | `--value` | `string` | Yes | Value stored or updated by the operation. |
