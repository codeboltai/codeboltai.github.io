---
title: File System MCP
sidebar_label: codebolt.fs
sidebar_position: 8
---

# codebolt.fs

File system operations for reading, writing, and managing files and directories.

## Available Tools

- `read_file` - Read contents of a file
- `list_files` - List files in a directory
- `write_file` - Write content to a file
- `grep_search` - Search for text patterns in files
- `search_files` - Search for files by pattern
- `list_code_definitions` - List code definitions in a file

## Sample Usage

```javascript
// Read a file
const readResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "read_file",
  { path: "./README.md" }
);

// List files in a directory
const listResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "list_files",
  { path: "./" }
);

// Write to a file
const writeResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "write_file",
  { 
    path: "./test-fs-mcp.txt",
    content: "test"
  }
);

// Search for text in files
const grepResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "grep_search",
  { 
    pattern: "test",
    path: "./"
  }
);

// Search for files
const searchResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "search_files",
  { 
    pattern: "test",
    path: "./"
  }
);

// List code definitions
const definitionsResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "list_code_definitions",
  { path: "./src/index.js" }
);
```

:::info
This functionality provides file system operations through the MCP interface.
::: 