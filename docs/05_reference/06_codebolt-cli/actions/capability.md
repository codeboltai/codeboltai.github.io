---
sidebar_label: "Capability"
title: "Capability CLI"
description: "Reference for the codebolt action capability command group."
---

Manage capability extensions

These commands manage CodeBolt extensions. Most of them create a temporary local server context through `executeAction()` before calling the extension endpoints.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `create` | Create a new capability from a template | 0 | 7 |
| `publish` | Publish a capability to the CodeBolt registry | 0 | 2 |
| `list` | List all published capabilities | 0 | 0 |

## `create`
Create a new capability from a template
```text
codebolt action capability create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--name <name>` | No | Name for the new capability |
| `--path <path>` | No | Target directory |
| `--project <path>` | No | Project directory for server context |
| `--template <name>` | No | Template to use |
| `--id <id>` | No | Unique identifier |
| `--description <text>` | No | Description of the capability |
| `--skip-install` | No | Skip npm install after creation |

## `publish`
Publish a capability to the CodeBolt registry
```text
codebolt action capability publish [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--path <path>` | No | Path to capability directory |
| `--project <path>` | No | Project directory for server context |

## `list`
List all published capabilities
```text
codebolt action capability list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
