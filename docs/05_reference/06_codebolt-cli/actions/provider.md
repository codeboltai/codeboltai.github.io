---
sidebar_label: "Provider"
title: "Provider CLI"
description: "Reference for the codebolt action provider command group."
---

Manage provider extensions

These commands manage CodeBolt extensions. Most of them create a temporary local server context through `executeAction()` before calling the extension endpoints.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `create` | Create a new provider from a template | 0 | 7 |
| `publish` | Publish a provider to the CodeBolt registry | 0 | 2 |
| `list` | List all published providers | 0 | 0 |

## `create`
Create a new provider from a template
```text
codebolt action provider create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--name <name>` | No | Name for the new provider |
| `--path <path>` | No | Target directory |
| `--project <path>` | No | Project directory for server context |
| `--template <name>` | No | Template to use |
| `--id <id>` | No | Unique identifier |
| `--description <text>` | No | Description of the provider |
| `--skip-install` | No | Skip npm install after creation |

## `publish`
Publish a provider to the CodeBolt registry
```text
codebolt action provider publish [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--path <path>` | No | Path to provider directory |
| `--project <path>` | No | Project directory for server context |

## `list`
List all published providers
```text
codebolt action provider list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
