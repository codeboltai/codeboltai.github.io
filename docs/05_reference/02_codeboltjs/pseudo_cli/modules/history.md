---
sidebar_label: "History"
title: "History Pseudo CLI"
description: "Pseudo CLI reference for the History module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `history` pseudo CLI module currently exposes 2 commands.

Related SDK docs: [History](../../10_api-access/history/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `summarize-all` | Summarize all chat history | None |
| `summarize` | Summarize messages | `--messages`, `--depth` |

## `summarize-all`

Summarize all chat history

```text
codebolt history summarize-all
```

This command takes no parameters.

## `summarize`

Summarize messages

```text
codebolt history summarize --messages <json> --depth <number>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `messages` | `--messages` | `json` | Yes | Value for the `messages` parameter. |
| `depth` | `--depth` | `number` | Yes | Value for the `depth` parameter. |
