---
sidebar_label: "Tool"
title: "Tool CLI"
description: "Reference for the codebolt action tool command group."
---

Manage tool extensions

These commands manage CodeBolt extensions. Most of them create a temporary local server context through `executeAction()` before calling the extension endpoints.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `create` | Create a new tool from a template | 0 | 7 |
| `publish` | Publish a tool to the CodeBolt registry | 0 | 2 |
| `list` | List all published tools | 0 | 0 |

## `create`
Create a new tool from a template
```text
codebolt action tool create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--name <name>` | No | Name for the new tool |
| `--path <path>` | No | Target directory |
| `--project <path>` | No | Project directory for server context |
| `--template <name>` | No | Template to use |
| `--id <id>` | No | Unique identifier |
| `--description <text>` | No | Description of the tool |
| `--skip-install` | No | Skip npm install after creation |

## `publish`
Publish a tool to the CodeBolt registry
```text
codebolt action tool publish [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--path <path>` | No | Path to tool directory |
| `--project <path>` | No | Project directory for server context |

## `list`
List all published tools
```text
codebolt action tool list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
