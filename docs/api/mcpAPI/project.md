---
title: Project MCP
sidebar_label: codebolt.project
sidebar_position: 19
---

# codebolt.project

Project management operations for creating, opening, and managing development projects.

## Available Tools

- `project_create` - Create a new project
- `project_open` - Open an existing project
- `project_close` - Close the current project
- `project_settings` - Get or update project settings

## Sample Usage

```javascript
// Create a new project
const createResult = await codeboltMCP.executeTool(
  "codebolt.project",
  "project_create",
  { 
    name: "My Web App",
    path: "/path/to/project",
    template: "react-typescript",
    settings: {
      language: "typescript",
      framework: "react"
    }
  }
);

// Open an existing project
const openResult = await codeboltMCP.executeTool(
  "codebolt.project",
  "project_open",
  { 
    path: "/path/to/existing/project"
  }
);

// Get project settings
const settingsResult = await codeboltMCP.executeTool(
  "codebolt.project",
  "project_settings",
  { action: "get" }
);

// Update project settings
const updateResult = await codeboltMCP.executeTool(
  "codebolt.project",
  "project_settings",
  { 
    action: "update",
    settings: {
      buildCommand: "npm run build",
      testCommand: "npm test",
      linting: {
        enabled: true,
        rules: "strict"
      }
    }
  }
);

// Close the current project
const closeResult = await codeboltMCP.executeTool(
  "codebolt.project",
  "project_close",
  { saveChanges: true }
);
```

:::info
This functionality is similar to the [project API](/docs/api/apiaccess/project) and provides project management through MCP interface.
::: 