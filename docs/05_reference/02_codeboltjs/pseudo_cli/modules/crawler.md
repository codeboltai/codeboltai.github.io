---
sidebar_label: "Crawler"
title: "Crawler Pseudo CLI"
description: "Pseudo CLI reference for the Crawler module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `crawler` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [Crawler](../../10_api-access/crawler/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `start` | Start crawler | None |
| `screenshot` | Take crawler screenshot | None |
| `navigate` | Navigate crawler to URL | `--url` |
| `scroll` | Scroll crawler page | `--direction` |
| `click` | Click element in crawler | `--id` |

## `start`

Start crawler

```text
codebolt crawler start
```

This command takes no parameters.

## `screenshot`

Take crawler screenshot

```text
codebolt crawler screenshot
```

This command takes no parameters.

## `navigate`

Navigate crawler to URL

```text
codebolt crawler navigate --url <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `url` | `--url` | `string` | Yes | URL used for browser or repository operations. |

## `scroll`

Scroll crawler page

```text
codebolt crawler scroll --direction <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `direction` | `--direction` | `string` | Yes | Scroll direction or similar directional option. |

## `click`

Click element in crawler

```text
codebolt crawler click --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
