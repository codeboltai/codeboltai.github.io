---
title: Problem Matcher MCP
sidebar_label: codebolt.problem_matcher
sidebar_position: 17
---

# codebolt.problem_matcher

Error and issue detection system for identifying and matching problems in code and output.

## Available Tools

- `problem_matcher_match` - Match problems against patterns
- `problem_matcher_init` - Initialize problem matcher with patterns

## Sample Usage

```javascript
// Initialize problem matcher with patterns
const initResult = await codeboltMCP.executeTool(
  "codebolt.problem_matcher",
  "problem_matcher_init",
  { 
    patterns: [
      {
        name: "typescript_errors",
        pattern: "^(.+)\\((\\d+),(\\d+)\\): error TS(\\d+): (.+)$",
        file: 1,
        line: 2,
        column: 3,
        code: 4,
        message: 5
      }
    ]
  }
);

// Match problems in output
const matchResult = await codeboltMCP.executeTool(
  "codebolt.problem_matcher",
  "problem_matcher_match",
  { 
    output: `
      src/index.ts(10,5): error TS2304: Cannot find name 'undefinedVariable'.
      src/utils.ts(25,12): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
    `,
    matcherName: "typescript_errors"
  }
);

// Match with custom severity
const severityMatchResult = await codeboltMCP.executeTool(
  "codebolt.problem_matcher",
  "problem_matcher_match",
  { 
    output: "Warning: Deprecated function used in line 42",
    options: {
      severity: "warning",
      source: "linter"
    }
  }
);
```

:::info
This functionality provides pattern-based problem detection for build tools, linters, and compilers.
::: 