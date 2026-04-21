---
sidebar_label: "System"
title: "System CLI"
description: "Reference for the codebolt command system command group."
---

System status and utilities

These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `health` | Check if the server is healthy | 0 | 0 |
| `check-cli` | Check CLI installation status | 0 | 0 |
| `open-folder` | Open a folder in the file manager | 1 | 1 |

## `health`
Check if the server is healthy
```text
codebolt command system health
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `check-cli`
Check CLI installation status
```text
codebolt command system check-cli
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `open-folder`
Open a folder in the file manager
```text
codebolt command system open-folder [path] [options]
```
### Arguments
| Argument | Description |
| --- | --- |
| `[path]` | Folder path |
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--path <path>` | No | Folder path |
