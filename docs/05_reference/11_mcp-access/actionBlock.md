---
title: ActionBlock MCP
sidebar_label: codebolt.actionBlock
sidebar_position: 52
---

# codebolt.actionBlock

ActionBlock management tools for listing, inspecting, and starting ActionBlocks. ActionBlocks are reusable code execution units that can be triggered independently.

## Available Tools

- `actionBlock_list` - Lists all available ActionBlocks with optional type filtering
- `actionBlock_getDetail` - Gets detailed information about a specific ActionBlock
- `actionBlock_start` - Starts an ActionBlock by name with optional parameters

## Tool Parameters

### `actionBlock_list`

Retrieves a list of all available ActionBlocks in the system. Optionally filters by ActionBlock type to narrow down results.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filterType | string | No | Filter ActionBlocks by type. Supported values: 'filesystem', 'runtime', 'builtin'. If not specified, returns all ActionBlocks regardless of type. |
| explanation | string | No | Optional explanation or context for why this operation is being performed. Useful for debugging and logging purposes. |

### `actionBlock_getDetail`

Retrieves detailed information about a specific ActionBlock, including version, description, type, and file path.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| actionBlockName | string | Yes | The exact name of the ActionBlock to retrieve details for. Must match an existing ActionBlock name in the system. |
| explanation | string | No | Optional explanation or context for why this operation is being performed. Useful for debugging and logging purposes. |

### `actionBlock_start`

Executes an ActionBlock by name, optionally passing parameters that the ActionBlock may require. Returns the execution ID if the ActionBlock runs as a side execution.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| actionBlockName | string | Yes | The exact name of the ActionBlock to start. Must match an existing ActionBlock name in the system. |
| params | object | No | Optional parameters to pass to the ActionBlock during execution. The structure and requirements of this object depend on the specific ActionBlock being started. |
| explanation | string | No | Optional explanation or context for why this operation is being performed. Useful for debugging and logging purposes. |

## Sample Usage

```javascript
// List all ActionBlocks without filtering
const listResult = await codebolt.tools.executeTool(
  "codebolt.actionBlock",
  "actionBlock_list",
  {}
);

// List ActionBlocks filtered by type
const listFilteredResult = await codebolt.tools.executeTool(
  "codebolt.actionBlock",
  "actionBlock_list",
  { filterType: "filesystem" }
);

// Get detailed information about a specific ActionBlock
const detailResult = await codebolt.tools.executeTool(
  "codebolt.actionBlock",
  "actionBlock_getDetail",
  { actionBlockName: "my-custom-action" }
);

// Start an ActionBlock without parameters
const startResult = await codebolt.tools.executeTool(
  "codebolt.actionBlock",
  "actionBlock_start",
  { actionBlockName: "data-processor" }
);

// Start an ActionBlock with parameters
const startWithParamsResult = await codebolt.tools.executeTool(
  "codebolt.actionBlock",
  "actionBlock_start",
  {
    actionBlockName: "file-analyzer",
    params: {
      filePath: "/path/to/file.txt",
      analysisType: "full"
    }
  }
);
```

:::info
ActionBlock Types:
- **filesystem**: ActionBlocks that operate on the file system, performing file and directory operations
- **runtime**: ActionBlocks that execute runtime operations and manage system processes
- **builtin**: Pre-built, core ActionBlocks provided by the system for common operations
:::