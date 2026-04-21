---
sidebar_label: "Todos"
title: "Todos CLI"
description: "Reference for the codebolt command todos command group."
---

Manage todo items

These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `list` | List all todos | 0 | 0 |
| `get` | Get a todo by ID | 1 | 0 |
| `create` | Create a todo | 0 | 2 |
| `update` | Update a todo | 1 | 3 |
| `delete` | Delete a todo by ID | 1 | 0 |
| `stats` | Show todo statistics | 0 | 0 |
| `clear-completed` | Delete all completed todos | 0 | 0 |

## `list`
List all todos
```text
codebolt command todos list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `get`
Get a todo by ID
```text
codebolt command todos get <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Todo ID |
### Options
This command takes no options.

## `create`
Create a todo
```text
codebolt command todos create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--title <title>` | Yes | Todo title |
| `--description <text>` | No | Todo description |

## `update`
Update a todo
```text
codebolt command todos update <id> [options]
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Todo ID |
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--status <status>` | No | New status |
| `--title <title>` | No | New title |
| `--description <text>` | No | New description |

## `delete`
Delete a todo by ID
```text
codebolt command todos delete <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Todo ID |
### Options
This command takes no options.

## `stats`
Show todo statistics
```text
codebolt command todos stats
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `clear-completed`
Delete all completed todos
```text
codebolt command todos clear-completed
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
