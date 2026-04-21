---
sidebar_label: "Agents"
title: "Agents CLI"
description: "Reference for the codebolt command agents command group."
---

Manage agents

These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `list` | List installed agents | 0 | 0 |
| `running` | List currently running agents | 0 | 0 |
| `local` | List locally installed agents | 0 | 0 |
| `featured` | List featured agents from the registry | 0 | 0 |
| `recommended` | List recommended agents | 0 | 0 |
| `config` | Get agent config by name | 1 | 0 |
| `start` | Start an agent | 0 | 2 |
| `stop` | Stop a running agent | 0 | 1 |

## `list`
List installed agents
```text
codebolt command agents list
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `running`
List currently running agents
```text
codebolt command agents running
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `local`
List locally installed agents
```text
codebolt command agents local
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `featured`
List featured agents from the registry
```text
codebolt command agents featured
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `recommended`
List recommended agents
```text
codebolt command agents recommended
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `config`
Get agent config by name
```text
codebolt command agents config <name>
```
### Arguments
| Argument | Description |
| --- | --- |
| `<name>` | Agent name |
### Options
This command takes no options.

## `start`
Start an agent
```text
codebolt command agents start [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--id <agentId>` | Yes | Agent ID |
| `--name <name>` | No | Agent name |

## `stop`
Stop a running agent
```text
codebolt command agents stop [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--id <agentId>` | Yes | Agent ID |
