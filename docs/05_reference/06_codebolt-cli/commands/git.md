---
sidebar_label: "Git"
title: "Git CLI"
description: "Reference for the codebolt command git command group."
---

Git operations on the project

These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.

## Subcommands

| Subcommand | Description | Args | Options |
| --- | --- | ---: | ---: |
| `status` | Show working directory status | 0 | 0 |
| `branches` | List branches | 0 | 0 |
| `diff` | Show current diff | 0 | 1 |
| `remote` | Show remote URL | 0 | 0 |
| `log` | Show commit history | 0 | 1 |
| `commit` | Create a commit | 0 | 1 |
| `checkout` | Checkout a branch | 1 | 1 |
| `create-branch` | Create a new branch | 1 | 1 |
| `push` | Push to remote | 0 | 0 |
| `pull` | Pull from remote | 0 | 0 |

## `status`
Show working directory status
```text
codebolt command git status
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `branches`
List branches
```text
codebolt command git branches
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `diff`
Show current diff
```text
codebolt command git diff [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--file <path>` | No | Diff a specific file |

## `remote`
Show remote URL
```text
codebolt command git remote
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `log`
Show commit history
```text
codebolt command git log [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--limit <number>` | No | Number of commits (default: 20) |

## `commit`
Create a commit
```text
codebolt command git commit [options]
```
### Arguments
This command takes no positional arguments.
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--message <msg>` | Yes | Commit message |

## `checkout`
Checkout a branch
```text
codebolt command git checkout [branch] [options]
```
### Arguments
| Argument | Description |
| --- | --- |
| `[branch]` | Branch name |
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--branch <name>` | No | Branch name |

## `create-branch`
Create a new branch
```text
codebolt command git create-branch [name] [options]
```
### Arguments
| Argument | Description |
| --- | --- |
| `[name]` | Branch name |
### Options
| Flags | Required | Description |
| --- | --- | --- |
| `--name <name>` | No | Branch name |

## `push`
Push to remote
```text
codebolt command git push
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.

## `pull`
Pull from remote
```text
codebolt command git pull
```
### Arguments
This command takes no positional arguments.
### Options
This command takes no options.
