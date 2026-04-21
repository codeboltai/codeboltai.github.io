---
sidebar_label: "Jobs"
title: "Jobs CLI"
description: "Reference for the codebolt command jobs command group."
---

Manage jobs

These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `list` | List all jobs | 0 | 1 |
| `get` | Get job details by ID | 1 | 0 |
| `create` | Create a new job | 0 | 3 |
| `delete` | Delete a job by ID | 1 | 0 |
| `stats` | Show job statistics | 0 | 0 |
| `ready` | List jobs that are ready to execute | 0 | 0 |
| `blocked` | List blocked jobs | 0 | 0 |

## `list`
List all jobs
```text
codebolt command jobs list [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--status <status>` | No | Filter by status |

## `get`
Get job details by ID
```text
codebolt command jobs get <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Job ID |
### Options
This command takes no options.

## `create`
Create a new job
```text
codebolt command jobs create [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--title <title>` | Yes | Job title |
| `--description <text>` | No | Job description |
| `--priority <level>` | No | Job priority |

## `delete`
Delete a job by ID
```text
codebolt command jobs delete <id>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<id>` | Job ID |
### Options
This command takes no options.

## `stats`
Show job statistics
```text
codebolt command jobs stats
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `ready`
List jobs that are ready to execute
```text
codebolt command jobs ready
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `blocked`
List blocked jobs
```text
codebolt command jobs blocked
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
