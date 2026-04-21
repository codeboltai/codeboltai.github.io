---
sidebar_label: "Executor"
title: "Executor CLI"
description: "Reference for the codebolt action executor command group."
---

Manage executor extensions

These commands manage CodeBolt extensions. Most of them create a temporary local server context through `executeAction()` before calling the extension endpoints.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `create` | Create a new executor from a template | 0 | 7 |
| `publish` | Publish an executor to the CodeBolt registry | 0 | 2 |
| `list` | List all published executors | 0 | 0 |

## `create`
Create a new executor from a template
```text
codebolt action executor create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--name <name>` | No | Name for the new executor |
| `--path <path>` | No | Target directory |
| `--project <path>` | No | Project directory for server context |
| `--template <name>` | No | Template to use |
| `--id <id>` | No | Unique identifier |
| `--description <text>` | No | Description of the executor |
| `--skip-install` | No | Skip npm install after creation |

## `publish`
Publish an executor to the CodeBolt registry
```text
codebolt action executor publish [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--path <path>` | No | Path to executor directory |
| `--project <path>` | No | Project directory for server context |

## `list`
List all published executors
```text
codebolt action executor list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
