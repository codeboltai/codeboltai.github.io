---
sidebar_label: "Code Utils"
title: "Code Utils Pseudo CLI"
description: "Pseudo CLI reference for the Code Utils module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `codeutils` pseudo CLI module currently exposes 3 commands.

Related SDK docs: [Code Utils](../../10_api-access/codeutils/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `files-md` | Get all files as markdown | None |
| `matchers` | Get matcher list | None |
| `match-detail` | Get match detail | `--matcher` |

## `files-md`

Get all files as markdown

```text
codebolt codeutils files-md
```

This command takes no parameters.

## `matchers`

Get matcher list

```text
codebolt codeutils matchers
```

This command takes no parameters.

## `match-detail`

Get match detail

```text
codebolt codeutils match-detail --matcher <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `matcher` | `--matcher` | `string` | Yes | Value for the `matcher` parameter. |
