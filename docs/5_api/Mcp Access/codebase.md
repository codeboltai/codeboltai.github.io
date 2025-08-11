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