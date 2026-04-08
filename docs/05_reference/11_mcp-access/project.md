---
title: Project MCP
sidebar_label: codebolt.project
sidebar_position: 15
---

# codebolt.project

Project management operations for retrieving project information.

## Available Tools

- `project_get_path` - Get the project path
- `project_get_settings` - Get project settings
- `project_get_repo_map` - Get the repository map
- `project_run` - Run the current project
- `project_get_editor_status` - Get the editor status

## Tool Parameters

### `project_get_path`

Retrieves the path of the current project. Returns the absolute file system path where the project is located.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *None* | - | - | This tool requires no parameters. |

### `project_get_settings`

Retrieves the project settings from the server. Returns configuration and settings information for the current project.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *None* | - | - | This tool requires no parameters. |

### `project_get_repo_map`

Retrieves the repository map for the current project. Returns a structured representation of the project repository, optionally filtered by the provided message parameter.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| message | any | No | Optional message parameter for filtering or configuring the repo map retrieval. |

### `project_run`

Runs the current project. Executes the project run command configured for the project.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *None* | - | - | This tool requires no parameters. |

### `project_get_editor_status`

Retrieves the current editor file status. Returns information about files currently open or modified in the editor.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *None* | - | - | This tool requires no parameters. |

## Sample Usage

```javascript
// Get project path
const pathResult = await codebolt.tools.executeTool(
  "codebolt.project",
  "project_get_path",
  {}
);

// Get project settings
const settingsResult = await codebolt.tools.executeTool(
  "codebolt.project",
  "project_get_settings",
  {}
);

// Get repository map
const repoMapResult = await codebolt.tools.executeTool(
  "codebolt.project",
  "project_get_repo_map",
  {}
);

// Get editor status
const editorStatusResult = await codebolt.tools.executeTool(
  "codebolt.project",
  "project_get_editor_status",
  {}
);
```

:::info
This functionality provides project information retrieval through the MCP interface.
::: 