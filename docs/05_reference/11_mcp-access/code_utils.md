---
title: Code Utils MCP
sidebar_label: codebolt.code_utils
sidebar_position: 21
---

# codebolt.code_utils

Code analysis and utility functions for processing and understanding code structures.

## Available Tools

- `get_files_markdown` - Get files content in markdown format
- `get_js_tree` - Get JavaScript/TypeScript AST tree
- `perform_match` - Perform pattern matching on code
- `get_matcher_list` - Get list of available matchers
- `get_match_detail` - Get detailed match information

## Tool Parameters

### `get_files_markdown`

Retrieves all project files content formatted as Markdown. Useful for generating documentation or getting an overview of the codebase.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

### `get_js_tree`

Parses a JavaScript or TypeScript file and returns its Abstract Syntax Tree (AST) representation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filePath | string | Yes | The path to the JavaScript/TypeScript file to parse |

### `perform_match`

Performs pattern matching on code using a matcher definition. Useful for finding specific patterns, errors, or issues in code output.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| matcherDefinition | object | Yes | The definition of the matcher containing owner and pattern configuration |
| matcherDefinition.owner | string | Yes | Identifier for the matcher (e.g., "eslint-compact") |
| matcherDefinition.pattern | array | Yes | Array of pattern objects defining the regex and capture groups |
| pattern | array | Yes | Array of pattern objects with regex definitions |
| pattern[].regexp | string | Yes | Regular expression pattern for matching |
| pattern[].file | number | No | Capture group index for file path |
| pattern[].line | number | No | Capture group index for line number |
| pattern[].column | number | No | Capture group index for column number |
| pattern[].severity | number | No | Capture group index for severity level |
| pattern[].message | number | No | Capture group index for message |
| pattern[].code | number | No | Capture group index for error code |
| problems | array | Yes | Array of problem objects to match against |
| problems[].line | string | No | The line content to match |
| problems[].source | string | No | The source identifier |

### `get_matcher_list`

Retrieves a list of all available problem matchers in the system.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

### `get_match_detail`

Gets detailed information about a specific problem matcher by its identifier.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| matcherId | string | Yes | The unique identifier of the matcher to get details for (e.g., "xmllint") |

## Sample Usage

```javascript
// Get files content in markdown format
const markdownResult = await codebolt.tools.executeTool(
  "codebolt.code_utils",
  "get_files_markdown",
  {}
);

// Get JavaScript AST tree
const astResult = await codebolt.tools.executeTool(
  "codebolt.code_utils",
  "get_js_tree",
  { filePath: "./tests/terminal-test.js" }
);

// Perform pattern matching on code
const matcherDefinition = {
  owner: "eslint-compact",
  pattern: [{
    regexp: "^(.+):\\sline\\s(\\d+),\\scol\\s(\\d+),\\s(Error|Warning|Info)\\s-\\s(.+)\\s\\((.+)\\)$",
    file: 1,
    line: 2,
    column: 3,
    severity: 4,
    message: 5,
    code: 6
  }]
};
const testProblems = [
  { line: "src/file1.js: line 10, col 5, Error - Unexpected console statement (no-console)", source: "test" },
  { line: "src/file2.js: line 25, col 8, Warning - 'var' used instead of 'let' or 'const' (no-var)", source: "test" },
  { line: "This should not match", source: "test" },
  {},
  { line: "src/file3.js: line 5, col 15, Info - Missing JSDoc comment (require-jsdoc)", source: "test" }
];
const matchResult = await codebolt.tools.executeTool(
  "codebolt.code_utils",
  "perform_match",
  { matcherDefinition, pattern: matcherDefinition.pattern, problems: testProblems }
);

// Get list of available matchers
const matchersResult = await codebolt.tools.executeTool(
  "codebolt.code_utils",
  "get_matcher_list",
  {}
);

// Get detailed match information
const detailResult = await codebolt.tools.executeTool(
  "codebolt.code_utils",
  "get_match_detail",
  { matcherId: 'xmllint' }
);
```

:::info
This functionality provides code analysis through the MCP interface.
::: 