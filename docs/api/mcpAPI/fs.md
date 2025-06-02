---
title: File System MCP
sidebar_label: codebolt.fs
sidebar_position: 5
---

# codebolt.fs

File system operations for reading, writing, and managing files and directories.

## Available Tools

- `read_file` - Read file contents
- `write_file` - Write content to file
- `list_files` - List files in directory
- `list_code_definitions` - List code definitions in files
- `search_files` - Search for files by name or pattern
- `grep_search` - Search for text content within files

## Sample Usage

```javascript
// Read a file
const readResult = await codeboltMCP.executeTool(
  "codebolt.fs",
  "read_file",
  { path: "src/index.js" }
);

// Write to a file
const writeResult = await codeboltMCP.executeTool(
  "codebolt.fs",
  "write_file",
  { 
    path: "output.txt",
    content: "Hello, World!"
  }
);

// List files in directory
const listResult = await codeboltMCP.executeTool(
  "codebolt.fs",
  "list_files",
  { path: "src/" }
);

// Search for files
const searchResult = await codeboltMCP.executeTool(
  "codebolt.fs",
  "search_files",
  { pattern: "*.js", directory: "src/" }
);

// Search text within files
const grepResult = await codeboltMCP.executeTool(
  "codebolt.fs",
  "grep_search",
  { 
    pattern: "function",
    files: ["src/**/*.js"]
  }
);

// List code definitions
const defsResult = await codeboltMCP.executeTool(
  "codebolt.fs",
  "list_code_definitions",
  { file: "src/utils.js" }
);
```

:::info
This functionality is similar to the [fs API](/docs/api/apiaccess/fs) and provides file system operations through MCP interface.
::: 