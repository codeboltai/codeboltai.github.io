---
sidebar_label: "LLM"
title: "LLM CLI"
description: "Reference for the codebolt command llm command group."
---

Manage LLM providers and models

These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `providers` | List available LLM providers | 0 | 0 |
| `models` | List all models | 0 | 0 |
| `get-models` | Get models for a provider | 0 | 1 |
| `set-default` | Set default LLM | 0 | 2 |
| `update-key` | Update API key for a provider | 0 | 2 |
| `pricing` | Show model pricing info | 0 | 0 |
| `local-models` | List downloaded local models | 0 | 0 |
| `embedding-providers` | List embedding-capable providers | 0 | 0 |

## `providers`
List available LLM providers
```text
codebolt command llm providers
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `models`
List all models
```text
codebolt command llm models
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `get-models`
Get models for a provider
```text
codebolt command llm get-models [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--provider <name>` | Yes | Provider name |

## `set-default`
Set default LLM
```text
codebolt command llm set-default [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--provider <name>` | Yes | Provider name |
| `--model <model>` | Yes | Model name |

## `update-key`
Update API key for a provider
```text
codebolt command llm update-key [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--provider <name>` | Yes | Provider name |
| `--key <key>` | Yes | API key |

## `pricing`
Show model pricing info
```text
codebolt command llm pricing
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `local-models`
List downloaded local models
```text
codebolt command llm local-models
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `embedding-providers`
List embedding-capable providers
```text
codebolt command llm embedding-providers
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
