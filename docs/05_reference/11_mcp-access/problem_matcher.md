---
title: Problem Matcher MCP
sidebar_label: codebolt-problem
sidebar_position: 17
---

# codebolt-problem

Error and issue detection system for identifying and matching problems in code and output.

## Available Tools

- `problem_matcher_analyze` - Analyze content for problems
- `problem_matcher_get_patterns` - Get problem matcher patterns for a language
- `problem_matcher_add_pattern` - Add a custom problem matcher pattern
- `problem_matcher_remove_pattern` - Remove a custom problem matcher pattern
- `problem_matcher_list_problems` - List problems in files

## Tool Parameters

### `problem_matcher_analyze`

Analyzes content (such as error output or build logs) for problems using pattern matching. Extracts structured problem information from raw text.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| content | string | Yes | The content to analyze for problems (e.g., error messages, build output) |
| language | string | Yes | The programming language context (e.g., "javascript", "typescript", "python") |
| filePath | string | Yes | The file path associated with the content being analyzed |
| expectedSeverity | string | No | Expected severity level for filtering: `error`, `warning`, `info`, `hint` |

### `problem_matcher_get_patterns`

Retrieves the problem matcher patterns configured for a specific programming language.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| language | string | Yes | The programming language to get patterns for (e.g., "javascript", "typescript", "python", "java", "csharp", "cpp") |

### `problem_matcher_add_pattern`

Adds a custom problem matcher pattern for a specific language. Allows extending the problem detection capabilities.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Unique name for the custom pattern (e.g., "custom-error-pattern") |
| language | string | Yes | The programming language this pattern applies to |
| pattern | object | Yes | The pattern definition object |
| pattern.regexp | string | Yes | Regular expression for matching problem lines |
| pattern.file | number | No | Capture group index for file path extraction |
| pattern.line | number | No | Capture group index for line number extraction |
| pattern.column | number | No | Capture group index for column number extraction |
| pattern.severity | number | No | Capture group index for severity level extraction |
| pattern.message | number | No | Capture group index for error message extraction |

### `problem_matcher_remove_pattern`

Removes a custom problem matcher pattern from a specific language configuration.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the pattern to remove |
| language | string | Yes | The programming language the pattern belongs to |

### `problem_matcher_list_problems`

Lists all detected problems in files, optionally filtered by path, severity, or language.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filePath | string | No | File or directory path to filter problems (e.g., "./src") |
| severity | string | No | Filter by severity level: `error`, `warning`, `info`, `hint`, or `all` |
| language | string | No | Filter by programming language |
| limit | number | No | Maximum number of problems to return |

## Sample Usage

```javascript
// Analyze content for problems
const analyzeResult = await codebolt.tools.executeTool(
  "codebolt-problem",
  "problem_matcher_analyze",
  {
    content: 'Error: Cannot find module "express"\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)',
    language: 'javascript',
    filePath: './src/app.js'
  }
);

// Get problem matcher patterns for a language
const getPatternsResult = await codebolt.tools.executeTool(
  "codebolt-problem",
  "problem_matcher_get_patterns",
  { language: 'javascript' }
);

// Add a custom problem matcher pattern
const addPatternResult = await codebolt.tools.executeTool(
  "codebolt-problem",
  "problem_matcher_add_pattern",
  {
    name: 'custom-error-pattern',
    language: 'javascript',
    pattern: {
      regexp: '^(.*?):(\\d+):(\\d+):\\s+(error|warning):\\s+(.*)$',
      file: 1,
      line: 2,
      column: 3,
      severity: 4,
      message: 5
    }
  }
);

// Remove a custom problem matcher pattern
const removePatternResult = await codebolt.tools.executeTool(
  "codebolt-problem",
  "problem_matcher_remove_pattern",
  {
    name: 'custom-error-pattern',
    language: 'javascript'
  }
);

// List problems in files
const listProblemsResult = await codebolt.tools.executeTool(
  "codebolt-problem",
  "problem_matcher_list_problems",
  {
    filePath: './src',
    severity: 'error'
  }
);
```

:::info
This functionality provides pattern-based problem detection for build tools, linters, and compilers through the MCP interface.
::: 