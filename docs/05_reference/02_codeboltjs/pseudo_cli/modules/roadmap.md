---
sidebar_label: "Roadmap"
title: "Roadmap Pseudo CLI"
description: "Pseudo CLI reference for the Roadmap module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `roadmap` pseudo CLI module currently exposes 7 commands.

Related SDK docs: [Roadmap](../../10_api-access/roadmap/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `get` | Get roadmap | None |
| `phases` | Get phases | None |
| `create-phase` | Create phase | `--data` |
| `features` | Get features for phase | `--phase` |
| `create-feature` | Create feature | `--phase`, `--data` |
| `ideas` | Get ideas | None |
| `create-idea` | Create idea | `--data` |

## `get`

Get roadmap

```text
codebolt roadmap get
```

This command takes no parameters.

## `phases`

Get phases

```text
codebolt roadmap phases
```

This command takes no parameters.

## `create-phase`

Create phase

```text
codebolt roadmap create-phase --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `features`

Get features for phase

```text
codebolt roadmap features --phase <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `phase` | `--phase` | `string` | Yes | Value for the `phase` parameter. |

## `create-feature`

Create feature

```text
codebolt roadmap create-feature --phase <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `phase` | `--phase` | `string` | Yes | Value for the `phase` parameter. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `ideas`

Get ideas

```text
codebolt roadmap ideas
```

This command takes no parameters.

## `create-idea`

Create idea

```text
codebolt roadmap create-idea --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |
