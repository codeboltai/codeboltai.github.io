---
sidebar_label: "Threads"
title: "Threads CLI"
description: "Reference for the codebolt command threads command group."
---

Manage execution threads

These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `list` | List all threads | 0 | 0 |
| `get` | Get thread details by ID | 1 | 0 |
| `create` | Create a new thread | 0 | 1 |
| `delete` | Delete a thread by ID | 1 | 0 |
| `steps` | Show steps for a thread | 1 | 0 |
| `messages` | Show messages for a thread | 1 | 0 |

## `list`
List all threads
```text
codebolt command threads list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `get`
Get thread details by ID
```text
codebolt command threads get <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Thread ID |
### Options
This command takes no options.

## `create`
Create a new thread
```text
codebolt command threads create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--name <name>` | Yes | Thread name |

## `delete`
Delete a thread by ID
```text
codebolt command threads delete <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Thread ID |
### Options
This command takes no options.

## `steps`
Show steps for a thread
```text
codebolt command threads steps <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Thread ID |
### Options
This command takes no options.

## `messages`
Show messages for a thread
```text
codebolt command threads messages <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Thread ID |
### Options
This command takes no options.
