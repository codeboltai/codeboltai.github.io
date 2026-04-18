---
sidebar_label: "Requirement Plan"
title: "Requirement Plan Pseudo CLI"
description: "Pseudo CLI reference for the Requirement Plan module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `reqplan` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [Requirement Plan](../../10_api-access/requirementPlan/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `create` | Create requirement plan | `--file` |
| `get` | Get requirement plan | `--file` |
| `list` | List requirement plans | None |
| `update` | Update requirement plan | `--file`, `--content` |
| `review` | Review requirement plan | `--file` |

## `create`

Create requirement plan

```text
codebolt reqplan create --file <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `file` | `--file` | `string` | Yes | Value for the `file` parameter. |

## `get`

Get requirement plan

```text
codebolt reqplan get --file <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `file` | `--file` | `string` | Yes | Value for the `file` parameter. |

## `list`

List requirement plans

```text
codebolt reqplan list
```

This command takes no parameters.

## `update`

Update requirement plan

```text
codebolt reqplan update --file <string> --content <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `file` | `--file` | `string` | Yes | Value for the `file` parameter. |
| `content` | `--content` | `string` | Yes | Raw content string passed to the SDK method. |

## `review`

Review requirement plan

```text
codebolt reqplan review --file <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `file` | `--file` | `string` | Yes | Value for the `file` parameter. |
