---
title: Codebase MCP
sidebar_label: codebolt.codebase
sidebar_position: 6
---

# codebolt.codebase

Code search and analysis tools for exploring and understanding codebases.

## Available Tools

- `codebase_search` - Search through codebase for specific patterns or content
- `search_mcp_tool` - Search for MCP tools and their definitions

## Sample Usage

```javascript
// Search codebase for specific content
const searchResult = await codeboltMCP.executeTool(
  "codebolt.codebase",
  "codebase_search",
  { 
    query: "function authenticate",
    fileTypes: ["js", "ts"]
  }
);

// Search for MCP tools
const mcpSearchResult = await codeboltMCP.executeTool(
  "codebolt.codebase",
  "search_mcp_tool",
  { 
    toolName: "browser",
    category: "automation"
  }
);
```

:::info
This functionality provides semantic search capabilities for understanding and navigating large codebases.
::: 