---
sidebar_label: "Skill"
title: "Skill CLI"
description: "Reference for the codebolt action skill command group."
---

Manage skill extensions

These commands manage CodeBolt extensions. Most of them create a temporary local server context through `executeAction()` before calling the extension endpoints.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `create` | Create a new skill from a template | 0 | 7 |
| `publish` | Publish a skill to the CodeBolt registry | 0 | 2 |
| `list` | List all published skills | 0 | 0 |

## `create`
Create a new skill from a template
```text
codebolt action skill create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--name <name>` | No | Name for the new skill |
| `--path <path>` | No | Target directory |
| `--project <path>` | No | Project directory for server context |
| `--template <name>` | No | Template to use |
| `--id <id>` | No | Unique identifier |
| `--description <text>` | No | Description of the skill |
| `--skip-install` | No | Skip npm install after creation |

## `publish`
Publish a skill to the CodeBolt registry
```text
codebolt action skill publish [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--path <path>` | No | Path to skill directory |
| `--project <path>` | No | Project directory for server context |

## `list`
List all published skills
```text
codebolt action skill list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
