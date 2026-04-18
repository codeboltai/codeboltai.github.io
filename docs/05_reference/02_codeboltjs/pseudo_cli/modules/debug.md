---
sidebar_label: "Debug"
title: "Debug Pseudo CLI"
description: "Pseudo CLI reference for the Debug module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `debug` pseudo CLI module currently exposes 2 commands.

Related SDK docs: [Debug](../../10_api-access/debug/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `log` | Add debug log | `--message`, `--type` |
| `browser` | Open debug browser | `--url`, `--port` |

## `log`

Add debug log

```text
codebolt debug log --message <string> --type <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `message` | `--message` | `string` | Yes | Human-readable message text sent to the SDK method. |
| `type` | `--type` | `string` | Yes | Type discriminator used by the underlying SDK method. |

## `browser`

Open debug browser

```text
codebolt debug browser --url <string> --port <number>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `url` | `--url` | `string` | Yes | URL used for browser or repository operations. |
| `port` | `--port` | `number` | Yes | Value for the `port` parameter. |
