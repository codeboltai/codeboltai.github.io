---
title: File System MCP
sidebar_label: codebolt.fs
sidebar_position: 8
---

# codebolt.fs

File system operations for reading, writing, and managing files and directories.

## Available Tools

- `read_file` - Read contents of a file
- `write_file` - Write content to a file
- `edit` - Edit a file by replacing text
- `ls` - List files and directories in a path
- `read_many_files` - Read multiple files at once

## Tool Parameters

### `read_file`

Reads and returns the content of a specified file. If the file is large, the content will be truncated.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| absolute_path | string | Yes | The absolute path to the file to read (e.g., '/home/user/project/file.txt'). Relative paths are not supported. |
| offset | number | No | For text files, the 0-based line number to start reading from. Use for paginating through large files. |
| limit | number | No | For text files, maximum number of lines to read. Use with 'offset' to paginate through large files. |

### `write_file`

Creates a new file or overwrites an existing file with the provided content.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| absolute_path | string | Yes | The absolute path to the file to write (e.g., '/home/user/project/file.txt'). Relative paths are not supported. |
| content | string | Yes | The content to write to the file. |

### `edit`

Edits a file by replacing specified text with new text. The tool finds all occurrences of 'old_string' in the file and replaces them with 'new_string'.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| absolute_path | string | Yes | The absolute path to the file to edit (e.g., '/home/user/project/file.txt'). |
| old_string | string | Yes | The exact text to find in the file. Must be unique enough to identify the correct location. |
| new_string | string | Yes | The text to replace old_string with. Can be empty to delete the old text. |
| expected_occurrences | number | No | The expected number of times old_string appears. If specified and the actual count differs, the edit will fail. |

### `ls`

Lists files and directories in a specified path. Returns information about directory contents including file names, types, and optionally sizes.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| path | string | Yes | The absolute path to the directory to list (e.g., '/home/user/project'). Relative paths are not supported. |
| ignore | string[] | No | Array of glob patterns for files/directories to ignore (e.g., ['node_modules', '*.log']). |
| show_hidden | boolean | No | Whether to show hidden files and directories (those starting with a dot). Defaults to false. |
| detailed | boolean | No | Whether to include detailed information like file sizes. Defaults to false. |
| limit | number | No | Maximum number of entries to return. Useful for large directories. |

### `read_many_files`

Reads multiple files at once based on file paths, directory paths, or glob patterns. Efficiently retrieves content from multiple files in a single operation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| paths | string[] | Yes | An array of file paths, directory paths, or glob patterns to read (e.g., ['/path/to/file.ts', '/path/to/dir', '**/*.json']). |
| include | string[] | No | Glob patterns for files to include (e.g., ['*.ts', '*.tsx']). |
| exclude | string[] | No | Glob patterns for files/directories to exclude (e.g., ['*.test.ts', 'node_modules']). |
| recursive | boolean | No | Whether to search recursively through subdirectories. Defaults to true. |
| use_default_excludes | boolean | No | Whether to use default exclusion patterns (node_modules, .git, etc.). Defaults to true. |
| max_files | number | No | Maximum number of files to read. Useful for limiting output size. |
| max_total_size | number | No | Maximum total size of content to read in bytes. |
| include_metadata | boolean | No | Whether to include file metadata (size, etc.) in output. |

## Sample Usage

```javascript
// Read a file
const readResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "read_file",
  { absolute_path: "/home/user/project/README.md" }
);

// Read a file with pagination
const readPaginatedResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "read_file",
  {
    absolute_path: "/home/user/project/large-file.txt",
    offset: 100,
    limit: 50
  }
);

// List files in a directory
const listResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "ls",
  {
    path: "/home/user/project",
    show_hidden: false,
    detailed: true
  }
);

// Write to a file
const writeResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "write_file",
  {
    absolute_path: "/home/user/project/test-fs-mcp.txt",
    content: "test content"
  }
);

// Edit a file
const editResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "edit",
  {
    absolute_path: "/home/user/project/config.json",
    old_string: '"version": "1.0.0"',
    new_string: '"version": "1.1.0"',
    expected_occurrences: 1
  }
);

// Read multiple files
const readManyResult = await codebolt.tools.executeTool(
  "codebolt.fs",
  "read_many_files",
  {
    paths: ["/home/user/project/src"],
    include: ["*.ts", "*.tsx"],
    exclude: ["*.test.ts"],
    recursive: true,
    max_files: 10
  }
);
```

:::info
This functionality provides file system operations through the MCP interface.
::: 