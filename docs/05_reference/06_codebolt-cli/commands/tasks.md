---
sidebar_label: "Tasks"
title: "Tasks CLI"
description: "Reference for the codebolt command tasks command group."
---

Manage tasks

These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `list` | List / search tasks | 0 | 2 |
| `get` | Get task details by ID | 1 | 0 |
| `create` | Create a new task | 0 | 3 |
| `delete` | Delete a task by ID | 1 | 0 |
| `stats` | Show task statistics | 0 | 0 |

## `list`
List / search tasks
```text
codebolt command tasks list [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--status <status>` | No | Filter by status |
| `--limit <number>` | No | Max results |

## `get`
Get task details by ID
```text
codebolt command tasks get <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Task ID |
### Options
This command takes no options.

## `create`
Create a new task
```text
codebolt command tasks create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--title <title>` | Yes | Task title |
| `--description <text>` | No | Task description |
| `--priority <level>` | No | Task priority |

## `delete`
Delete a task by ID
```text
codebolt command tasks delete <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Task ID |
### Options
This command takes no options.

## `stats`
Show task statistics
```text
codebolt command tasks stats
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
