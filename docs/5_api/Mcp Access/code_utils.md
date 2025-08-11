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