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