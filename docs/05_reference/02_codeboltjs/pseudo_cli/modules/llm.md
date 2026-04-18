---
sidebar_label: "LLM"
title: "LLM Pseudo CLI"
description: "Pseudo CLI reference for the LLM module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `llm` pseudo CLI module currently exposes 2 commands.

Related SDK docs: [LLM](../../10_api-access/llm/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `inference` | Run LLM inference | `--params` |
| `config` | Get model configuration | None |

## `inference`

Run LLM inference

```text
codebolt llm inference --params <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `params` | `--params` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `config`

Get model configuration

```text
codebolt llm config [--model <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `model` | `--model` | `string` | No | Model identifier used by the LLM operation. |
