---
sidebar_label: "Git"
title: "Git Pseudo CLI"
description: "Pseudo CLI reference for the Git module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `git` pseudo CLI module currently exposes 11 commands.

Related SDK docs: [Git](../../10_api-access/git/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `init` | Initialize a new Git repository | `--path` |
| `status` | Show working tree status | None |
| `add` | Add all changes to staging | None |
| `commit` | Commit staged changes | `--message` |
| `push` | Push commits to remote | None |
| `pull` | Pull changes from remote | None |
| `checkout` | Checkout a branch | `--branch` |
| `branch` | Create a new branch | `--branch` |
| `logs` | Show commit logs | `--path` |
| `diff` | Show diff for a commit | `--commit` |
| `clone` | Clone a remote repository | `--url` |

## `init`

Initialize a new Git repository

```text
codebolt git init --path <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |

## `status`

Show working tree status

```text
codebolt git status
```

This command takes no parameters.

## `add`

Add all changes to staging

```text
codebolt git add
```

This command takes no parameters.

## `commit`

Commit staged changes

```text
codebolt git commit --message <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `message` | `--message` | `string` | Yes | Human-readable message text sent to the SDK method. |

## `push`

Push commits to remote

```text
codebolt git push
```

This command takes no parameters.

## `pull`

Pull changes from remote

```text
codebolt git pull
```

This command takes no parameters.

## `checkout`

Checkout a branch

```text
codebolt git checkout --branch <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `branch` | `--branch` | `string` | Yes | Git branch name for the operation. |

## `branch`

Create a new branch

```text
codebolt git branch --branch <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `branch` | `--branch` | `string` | Yes | Git branch name for the operation. |

## `logs`

Show commit logs

```text
codebolt git logs --path <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |

## `diff`

Show diff for a commit

```text
codebolt git diff --commit <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `commit` | `--commit` | `string` | Yes | Commit hash or commit reference for the git operation. |

## `clone`

Clone a remote repository

```text
codebolt git clone --url <string> [--path <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `url` | `--url` | `string` | Yes | URL used for browser or repository operations. |
| `path` | `--path` | `string` | No | Filesystem or workspace path used by the command. |
