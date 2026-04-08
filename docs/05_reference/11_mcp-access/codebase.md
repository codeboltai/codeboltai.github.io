---
title: Codebase MCP
sidebar_label: codebolt.codebase
sidebar_position: 6
---

# codebolt.codebase

Code search tools for exploring and understanding codebases.

## Available Tools

- `codebase_search` - Search through codebase for specific patterns or content
- `search_mcp_tool` - Search for MCP tools

## Tool Parameters

### `codebase_search`

Performs semantic search across the codebase. Use natural language to describe what you're looking for - it understands code concepts, not just literal text matches. Great for finding implementations, understanding patterns, or locating relevant code.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | string | Yes | Natural language description of what you're looking for (e.g., 'function that handles user authentication', 'error handling for API requests'). |
| target_directories | array | No | Optional array of directory paths to limit the search scope. |

### `search_mcp_tool`

Searches for available MCP (Model Context Protocol) tools that can help with a task. Use this to discover what tools are available and their capabilities.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | string | Yes | Description of what you need a tool for (e.g., 'send email', 'database query', 'file conversion'). |
| tags | array | No | Optional tags to filter results (e.g., ['database', 'api']). |

## Sample Usage

```javascript
// Search codebase for specific content
const searchResult = await codebolt.tools.executeTool(
  "codebolt.codebase",
  "codebase_search",
  { query: "function testCodebaseMCPTools" }
);

// Search for MCP tools
const mcpSearchResult = await codebolt.tools.executeTool(
  "codebolt.codebase",
  "search_mcp_tool",
  { query: "test" }
);
```

:::info
This functionality provides search capabilities for exploring codebases through the MCP interface.
::: 