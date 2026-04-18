---
sidebar_label: "Output Parsers"
title: "Output Parsers Pseudo CLI"
description: "Pseudo CLI reference for the Output Parsers module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `parse` pseudo CLI module currently exposes 5 commands.

Related SDK docs: [Output Parsers](../../10_api-access/outputparsers/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `json` | Parse JSON string | `--input` |
| `xml` | Parse XML string | `--input` |
| `csv` | Parse CSV string | `--input` |
| `text` | Parse text into lines | `--input` |
| `errors` | Parse error output | `--input` |

## `json`

Parse JSON string

```text
codebolt parse json --input <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `input` | `--input` | `string` | Yes | Value for the `input` parameter. |

## `xml`

Parse XML string

```text
codebolt parse xml --input <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `input` | `--input` | `string` | Yes | Value for the `input` parameter. |

## `csv`

Parse CSV string

```text
codebolt parse csv --input <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `input` | `--input` | `string` | Yes | Value for the `input` parameter. |

## `text`

Parse text into lines

```text
codebolt parse text --input <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `input` | `--input` | `string` | Yes | Value for the `input` parameter. |

## `errors`

Parse error output

```text
codebolt parse errors --input <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `input` | `--input` | `string` | Yes | Value for the `input` parameter. |
