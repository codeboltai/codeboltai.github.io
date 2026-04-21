---
sidebar_label: "Plugin"
title: "Plugin CLI"
description: "Reference for the codebolt action plugin command group."
---

Manage plugin extensions

These commands manage CodeBolt extensions. Most of them create a temporary local server context through `executeAction()` before calling the extension endpoints.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `create` | Create a new plugin from a template | 0 | 7 |
| `publish` | Publish a plugin to the CodeBolt registry | 0 | 2 |
| `list` | List all published plugins | 0 | 0 |

## `create`
Create a new plugin from a template
```text
codebolt action plugin create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--name <name>` | No | Name for the new plugin |
| `--path <path>` | No | Target directory |
| `--project <path>` | No | Project directory for server context |
| `--template <name>` | No | Template to use |
| `--id <id>` | No | Unique identifier |
| `--description <text>` | No | Description of the plugin |
| `--skip-install` | No | Skip npm install after creation |

## `publish`
Publish a plugin to the CodeBolt registry
```text
codebolt action plugin publish [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--path <path>` | No | Path to plugin directory |
| `--project <path>` | No | Project directory for server context |

## `list`
List all published plugins
```text
codebolt action plugin list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
