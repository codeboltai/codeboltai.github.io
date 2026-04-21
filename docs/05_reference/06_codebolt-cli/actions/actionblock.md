---
sidebar_label: "Action Block"
title: "Action Block CLI"
description: "Reference for the codebolt action actionblock command group."
---

Manage actionblock extensions

These commands manage CodeBolt extensions. Most of them create a temporary local server context through `executeAction()` before calling the extension endpoints.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `create` | Create a new actionblock from a template | 0 | 7 |
| `publish` | Publish an actionblock to the CodeBolt registry | 0 | 2 |
| `list` | List all published actionblocks | 0 | 0 |

## `create`
Create a new actionblock from a template
```text
codebolt action actionblock create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--name <name>` | No | Name for the new actionblock |
| `--path <path>` | No | Target directory |
| `--project <path>` | No | Project directory for server context |
| `--template <name>` | No | Template to use |
| `--id <id>` | No | Unique identifier |
| `--description <text>` | No | Description of the actionblock |
| `--skip-install` | No | Skip npm install after creation |

## `publish`
Publish an actionblock to the CodeBolt registry
```text
codebolt action actionblock publish [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--path <path>` | No | Path to actionblock directory |
| `--project <path>` | No | Project directory for server context |

## `list`
List all published actionblocks
```text
codebolt action actionblock list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
