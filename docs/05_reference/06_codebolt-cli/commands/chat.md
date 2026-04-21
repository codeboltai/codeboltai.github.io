---
sidebar_label: "Chat"
title: "Chat CLI"
description: "Reference for the codebolt command chat command group."
---

Manage chat threads and messages

These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `list` | List all chat threads | 0 | 0 |
| `messages` | Get messages for a thread | 1 | 0 |
| `steps` | Get steps for a thread | 1 | 0 |
| `create` | Create a new chat thread | 0 | 0 |
| `delete` | Delete a chat thread | 1 | 0 |
| `clear-memory` | Clear all threads memory | 0 | 0 |

## `list`
List all chat threads
```text
codebolt command chat list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `messages`
Get messages for a thread
```text
codebolt command chat messages <threadId>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<threadId>` | Thread ID |
### Options
This command takes no options.

## `steps`
Get steps for a thread
```text
codebolt command chat steps <threadId>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<threadId>` | Thread ID |
### Options
This command takes no options.

## `create`
Create a new chat thread
```text
codebolt command chat create
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `delete`
Delete a chat thread
```text
codebolt command chat delete <threadId>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<threadId>` | Thread ID |
### Options
This command takes no options.

## `clear-memory`
Clear all threads memory
```text
codebolt command chat clear-memory
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
