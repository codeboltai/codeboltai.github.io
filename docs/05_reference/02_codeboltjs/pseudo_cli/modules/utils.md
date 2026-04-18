---
sidebar_label: "Utils"
title: "Utils Pseudo CLI"
description: "Pseudo CLI reference for the Utils module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `utils` pseudo CLI module currently exposes 1 command.

Related SDK docs: [Utils](../../10_api-access/utils/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `apply-diff` | Edit file and apply diff with AI | `--path`, `--diff`, `--diff-id`, `--prompt` |

## `apply-diff`

Edit file and apply diff with AI

```text
codebolt utils apply-diff --path <string> --diff <string> --diff-id <string> --prompt <string> [--model <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |
| `diff` | `--diff` | `string` | Yes | Value for the `diff` parameter. |
| `diff-id` | `--diff-id` | `string` | Yes | Value for the `diff-id` parameter. |
| `prompt` | `--prompt` | `string` | Yes | Value for the `prompt` parameter. |
| `model` | `--model` | `string` | No | Model identifier used by the LLM operation. |
