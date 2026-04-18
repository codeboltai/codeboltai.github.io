---
title: Search MCP
sidebar_label: codebolt.search
sidebar_position: 25
---

# codebolt.search

Tools for searching files, code patterns, and discovering available MCP tools across the codebase.

## Available Tools

- `glob` - Finds files matching a glob pattern (e.g., `**/*.ts`, `src/**/*.js`)
- `grep` - Searches for text patterns in files using grep-like functionality with regex support
- `search_files` - Searches for content in files using regex patterns and returns matching lines
- `codebase_search` - Performs semantic search across the codebase using natural language queries
- `search_mcp_tool` - Searches for available MCP tools that can help with a specific task
- `list_code_definition_names` - Lists code definitions (functions, classes, interfaces) in a file or directory

## Tool Parameters

### `glob`
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| pattern | string | Yes | The glob pattern to match files (e.g., `**/*.ts`, `src/**/*.&#123;js,jsx&#125;`) |
| path | string | No | The directory to search in. If not specified, searches from project root |

---

### `grep`
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| path | string | Yes | The absolute path to search within. Can be a file or directory |
| pattern | string | Yes | The text pattern or regex to search for |
| include | string | No | Glob pattern for files to include (e.g., `*.ts`, `*.&#123;js,jsx,ts,tsx&#125;`) |
| exclude | string | No | Glob pattern for files/directories to exclude (e.g., 'node_modules/**') |
| case_sensitive | boolean | No | Whether the search is case sensitive. Defaults to true |

---

### `search_files`
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| path | string | Yes | The absolute path to the directory to search within |
| regex | string | Yes | The regex pattern to search for in file contents |
| file_pattern | string | No | Glob pattern to filter which files to search. Defaults to all files |

---

### `codebase_search`
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | string | Yes | Natural language description of what you're looking for |
| target_directories | array | No | Array of directory paths to limit the search scope |

---

### `search_mcp_tool`
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | string | Yes | Description of what you need a tool for |
| tags | array | No | Tags to filter results (e.g., ['database', 'api']) |

---

### `list_code_definition_names`
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| path | string | Yes | The absolute path to the file or directory to analyze for code definitions |

## Sample Usage

```javascript
// Find files matching a glob pattern
const globResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "glob",
  { pattern: "**/*.ts", path: "/project/src" }
);

// Find all test files
const testFilesResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "glob",
  { pattern: "**/*.{spec,test}.{ts,js}" }
);

// Search for text patterns with grep
const grepResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "grep",
  {
    path: "/project/src",
    pattern: "function\\s+handleAuth",
    include: "*.ts",
    exclude: "node_modules/**",
    case_sensitive: false
  }
);

// Search for import statements
const importResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "grep",
  {
    path: "/project/src",
    pattern: "import.*from.*react",
    include: "*.{ts,tsx}"
  }
);

// Search files using regex
const searchResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "search_files",
  {
    path: "/project/src",
    regex: "TODO|FIXME|HACK",
    file_pattern: "*.ts"
  }
);

// Semantic search across the codebase
const semanticResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "codebase_search",
  {
    query: "function that handles user authentication and token refresh",
    target_directories: ["/project/src/auth", "/project/src/api"]
  }
);

// Search for error handling patterns
const errorHandlingResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "codebase_search",
  { query: "error handling for API requests with retry logic" }
);

// Search for available MCP tools
const mcpToolsResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "search_mcp_tool",
  { query: "database query", tags: ["database", "sql"] }
);

// Find tools for file operations
const fileToolsResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "search_mcp_tool",
  { query: "file conversion and manipulation" }
);

// List code definitions in a file
const definitionsResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "list_code_definition_names",
  { path: "/project/src/utils/helpers.ts" }
);

// List definitions in a directory
const dirDefinitionsResult = await codebolt.tools.executeTool(
  "codebolt.search",
  "list_code_definition_names",
  { path: "/project/src/components" }
);
```

:::info
The search tools provide multiple strategies for finding code and files: use `glob` for file name patterns, `grep` for literal or regex text search, `search_files` for regex content search with file filtering, `codebase_search` for semantic/natural language queries, `search_mcp_tool` to discover available tools, and `list_code_definition_names` to understand code structure without reading full file contents.
:::
