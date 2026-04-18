---
sidebar_label: "Terminal"
title: "Terminal Pseudo CLI"
description: "Pseudo CLI reference for the Terminal module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `terminal` pseudo CLI module currently exposes 1 command.

Related SDK docs: [Terminal](../../10_api-access/terminal/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `exec` | Execute a shell command | `--command` |

## `exec`

Execute a shell command

```text
codebolt terminal exec --command <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `command` | `--command` | `string` | Yes | Shell command string to execute. |
