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
- `project_get_editor_status` - Get the editor status

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