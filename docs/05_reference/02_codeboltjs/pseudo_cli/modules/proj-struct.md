---
sidebar_label: "Project Structure"
title: "Project Structure Pseudo CLI"
description: "Pseudo CLI reference for the Project Structure module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `proj-struct` pseudo CLI module currently exposes 21 commands.

Related SDK docs: [Project Structure](../../10_api-access/projectStructure/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `metadata` | Get project structure metadata | None |
| `update-metadata` | Update project structure metadata | `--updates` |
| `packages` | Get all packages | None |
| `get-package` | Get package by ID | `--id` |
| `create-package` | Create a package | `--data` |
| `update-package` | Update a package | `--id`, `--updates` |
| `delete-package` | Delete a package | `--id` |
| `add-route` | Add API route to package | `--package`, `--route` |
| `update-route` | Update API route | `--package`, `--route-id`, `--updates` |
| `delete-route` | Delete API route | `--package`, `--route-id` |
| `add-table` | Add database table to package | `--package`, `--table` |
| `update-table` | Update database table | `--package`, `--table-id`, `--updates` |
| `delete-table` | Delete database table | `--package`, `--table-id` |
| `add-dep` | Add dependency to package | `--package`, `--dep` |
| `update-dep` | Update dependency | `--package`, `--dep-id`, `--updates` |
| `delete-dep` | Delete dependency | `--package`, `--dep-id` |
| `add-command` | Add run command to package | `--package`, `--command` |
| `update-command` | Update run command | `--package`, `--command-id`, `--updates` |
| `delete-command` | Delete run command | `--package`, `--command-id` |
| `update-git` | Update git info | `--git` |
| `update-section` | Update project structure section | `--package`, `--section`, `--data` |

## `metadata`

Get project structure metadata

```text
codebolt proj-struct metadata
```

This command takes no parameters.

## `update-metadata`

Update project structure metadata

```text
codebolt proj-struct update-metadata --updates <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `updates` | `--updates` | `json` | Yes | Value for the `updates` parameter. |

## `packages`

Get all packages

```text
codebolt proj-struct packages
```

This command takes no parameters.

## `get-package`

Get package by ID

```text
codebolt proj-struct get-package --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `create-package`

Create a package

```text
codebolt proj-struct create-package --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |

## `update-package`

Update a package

```text
codebolt proj-struct update-package --id <string> --updates <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |
| `updates` | `--updates` | `json` | Yes | Value for the `updates` parameter. |

## `delete-package`

Delete a package

```text
codebolt proj-struct delete-package --id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | `--id` | `string` | Yes | Identifier of the target resource. |

## `add-route`

Add API route to package

```text
codebolt proj-struct add-route --package <string> --route <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `route` | `--route` | `json` | Yes | Value for the `route` parameter. |

## `update-route`

Update API route

```text
codebolt proj-struct update-route --package <string> --route-id <string> --updates <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `route-id` | `--route-id` | `string` | Yes | Value for the `route-id` parameter. |
| `updates` | `--updates` | `json` | Yes | Value for the `updates` parameter. |

## `delete-route`

Delete API route

```text
codebolt proj-struct delete-route --package <string> --route-id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `route-id` | `--route-id` | `string` | Yes | Value for the `route-id` parameter. |

## `add-table`

Add database table to package

```text
codebolt proj-struct add-table --package <string> --table <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `table` | `--table` | `json` | Yes | Value for the `table` parameter. |

## `update-table`

Update database table

```text
codebolt proj-struct update-table --package <string> --table-id <string> --updates <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `table-id` | `--table-id` | `string` | Yes | Value for the `table-id` parameter. |
| `updates` | `--updates` | `json` | Yes | Value for the `updates` parameter. |

## `delete-table`

Delete database table

```text
codebolt proj-struct delete-table --package <string> --table-id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `table-id` | `--table-id` | `string` | Yes | Value for the `table-id` parameter. |

## `add-dep`

Add dependency to package

```text
codebolt proj-struct add-dep --package <string> --dep <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `dep` | `--dep` | `json` | Yes | Value for the `dep` parameter. |

## `update-dep`

Update dependency

```text
codebolt proj-struct update-dep --package <string> --dep-id <string> --updates <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `dep-id` | `--dep-id` | `string` | Yes | Value for the `dep-id` parameter. |
| `updates` | `--updates` | `json` | Yes | Value for the `updates` parameter. |

## `delete-dep`

Delete dependency

```text
codebolt proj-struct delete-dep --package <string> --dep-id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `dep-id` | `--dep-id` | `string` | Yes | Value for the `dep-id` parameter. |

## `add-command`

Add run command to package

```text
codebolt proj-struct add-command --package <string> --command <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `command` | `--command` | `json` | Yes | Shell command string to execute. |

## `update-command`

Update run command

```text
codebolt proj-struct update-command --package <string> --command-id <string> --updates <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `command-id` | `--command-id` | `string` | Yes | Value for the `command-id` parameter. |
| `updates` | `--updates` | `json` | Yes | Value for the `updates` parameter. |

## `delete-command`

Delete run command

```text
codebolt proj-struct delete-command --package <string> --command-id <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `command-id` | `--command-id` | `string` | Yes | Value for the `command-id` parameter. |

## `update-git`

Update git info

```text
codebolt proj-struct update-git --git <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `git` | `--git` | `json` | Yes | Value for the `git` parameter. |

## `update-section`

Update project structure section

```text
codebolt proj-struct update-section --package <string> --section <string> --data <json>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `package` | `--package` | `string` | Yes | Value for the `package` parameter. |
| `section` | `--section` | `string` | Yes | Value for the `section` parameter. |
| `data` | `--data` | `json` | Yes | Structured JSON payload passed through to the underlying SDK method. |
