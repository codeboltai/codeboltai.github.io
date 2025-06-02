---
title: Code Utils MCP
sidebar_label: codebolt.code_utils
sidebar_position: 21
---

# codebolt.code_utils

Code analysis and utility functions for processing and understanding code structures.

## Available Tools

- `code_utils_get_files_markdown` - Get files content in markdown format
- `code_utils_get_js_tree` - Get JavaScript/TypeScript AST tree
- `code_utils_perform_match` - Perform pattern matching on code
- `code_utils_get_matcher_list` - Get list of available matchers
- `code_utils_get_match_detail` - Get detailed match information

## Sample Usage

```javascript
// Get files content in markdown format
const markdownResult = await codeboltMCP.executeTool(
  "codebolt.code_utils",
  "code_utils_get_files_markdown",
  { 
    files: ["src/index.js", "src/utils.js"],
    includeLineNumbers: true,
    syntax: "javascript"
  }
);

// Get JavaScript AST tree
const astResult = await codeboltMCP.executeTool(
  "codebolt.code_utils",
  "code_utils_get_js_tree",
  { 
    filePath: "src/components/Button.tsx",
    includeComments: true,
    includeLocations: true
  }
);

// Perform pattern matching on code
const matchResult = await codeboltMCP.executeTool(
  "codebolt.code_utils",
  "code_utils_perform_match",
  { 
    pattern: "function.*\\(",
    files: ["src/**/*.js"],
    matchType: "regex"
  }
);

// Get list of available matchers
const matchersResult = await codeboltMCP.executeTool(
  "codebolt.code_utils",
  "code_utils_get_matcher_list",
  { 
    category: "javascript",
    includeDescriptions: true
  }
);

// Get detailed match information
const detailResult = await codeboltMCP.executeTool(
  "codebolt.code_utils",
  "code_utils_get_match_detail",
  { 
    matchId: "match-123",
    includeContext: true,
    contextLines: 5
  }
);

// Advanced code analysis
const analysisResult = await codeboltMCP.executeTool(
  "codebolt.code_utils",
  "code_utils_get_js_tree",
  { 
    filePath: "src/api/auth.js",
    analysis: {
      extractFunctions: true,
      extractClasses: true,
      extractImports: true,
      extractExports: true
    }
  }
);
```

:::info
This functionality is similar to the [codeutils API](/docs/api/apiaccess/codeutils) and provides code analysis through MCP interface.
::: 