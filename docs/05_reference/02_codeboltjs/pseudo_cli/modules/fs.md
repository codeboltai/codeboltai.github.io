---
sidebar_label: "Filesystem"
title: "Filesystem Pseudo CLI"
description: "Pseudo CLI reference for the Filesystem module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `fs` pseudo CLI module currently exposes 14 commands.

Related SDK docs: [Filesystem](../../10_api-access/fs/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `read` | Read file contents | `--path` |
| `write` | Write content to a file | `--path`, `--content` |
| `create-file` | Create a new file | `--name`, `--source`, `--path` |
| `create-folder` | Create a new folder | `--name`, `--path` |
| `update` | Update file contents | `--name`, `--path`, `--content` |
| `delete-file` | Delete a file | `--name`, `--path` |
| `delete-folder` | Delete a folder | `--name`, `--path` |
| `list` | List files in a directory | `--path` |
| `list-dir` | List directory contents | `--path` |
| `search` | Search files with regex | `--path`, `--regex`, `--pattern` |
| `grep` | Grep search in files | `--path`, `--query` |
| `find` | Fuzzy file search | `--query` |
| `read-many` | Read multiple files | `--paths` |
| `code-defs` | List code definition names | `--path` |

## `read`

Read file contents

```text
codebolt fs read --path <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |

## `write`

Write content to a file

```text
codebolt fs write --path <string> --content <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |
| `content` | `--content` | `string` | Yes | Raw content string passed to the SDK method. |

## `create-file`

Create a new file

```text
codebolt fs create-file --name <string> --source <string> --path <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `source` | `--source` | `string` | Yes | Source content or source path used when creating a resource. |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |

## `create-folder`

Create a new folder

```text
codebolt fs create-folder --name <string> --path <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |

## `update`

Update file contents

```text
codebolt fs update --name <string> --path <string> --content <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |
| `content` | `--content` | `string` | Yes | Raw content string passed to the SDK method. |

## `delete-file`

Delete a file

```text
codebolt fs delete-file --name <string> --path <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |

## `delete-folder`

Delete a folder

```text
codebolt fs delete-folder --name <string> --path <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | `--name` | `string` | Yes | Name of the target resource to create, update, or delete. |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |

## `list`

List files in a directory

```text
codebolt fs list --path <string> [--recursive | --no-recursive]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |
| `recursive` | `--recursive` | `boolean` | No | Boolean flag that enables recursive traversal. |

## `list-dir`

List directory contents

```text
codebolt fs list-dir --path <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |

## `search`

Search files with regex

```text
codebolt fs search --path <string> --regex <string> --pattern <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |
| `regex` | `--regex` | `string` | Yes | Regular expression pattern used by the search operation. |
| `pattern` | `--pattern` | `string` | Yes | File glob or match pattern used with the search operation. |

## `grep`

Grep search in files

```text
codebolt fs grep --path <string> --query <string> [--include <string>] [--exclude <string>]
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |
| `query` | `--query` | `string` | Yes | Search query string used by the command. |
| `include` | `--include` | `string` | No | Optional include filter passed to the search operation. |
| `exclude` | `--exclude` | `string` | No | Optional exclude filter passed to the search operation. |

## `find`

Fuzzy file search

```text
codebolt fs find --query <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `query` | `--query` | `string` | Yes | Search query string used by the command. |

## `read-many`

Read multiple files

```text
codebolt fs read-many --paths <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `paths` | `--paths` | `json` | Yes | Value for the `paths` parameter. |

## `code-defs`

List code definition names

```text
codebolt fs code-defs --path <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `path` | `--path` | `string` | Yes | Filesystem or workspace path used by the command. |
