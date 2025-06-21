---
name: performMatch
cbbaseinfo:
  description: Performs pattern matching on a list of problems using a specified matcher definition to extract structured error/warning information.
cbparameters:
  parameters:
    - name: matcherDefinition
      typeName: object
      description: The matcher configuration object containing owner and pattern definitions.
    - name: problemPatterns
      typeName: array
      description: Array of pattern objects defining how to match and extract information.
    - name: problems
      typeName: array
      description: Array of problem objects containing line text and source information to be matched.
  returns:
    signatureTypeName: Promise<MatchProblemResponse>
    description: A promise that resolves with structured problem information extracted from the input.
    typeArgs:
      - type: reference
        name: MatchProblemResponse
data:
  name: performMatch
  category: codeutils
  link: performMatch.md
---
<CBBaseInfo/> 
<CBParameters/>

## Description

The `performMatch` function applies pattern matching rules to a collection of problems (typically tool output or log entries) and extracts structured information such as file paths, line numbers, error messages, and severity levels.

## Usage

```javascript
const result = await codebolt.codeutils.performMatch(matcherDefinition, problemPatterns, problems);
```

## Examples

### ESLint Output Processing

```javascript
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
  { line: "This should not match", source: "test" }, // Invalid line
  {}, // Empty object
  { line: "src/file3.js: line 5, col 15, Info - Missing JSDoc comment (require-jsdoc)", source: "test" }
];

const performMatchResult = await codebolt.codeutils.performMatch(
  matcherDefinition, 
  matcherDefinition.pattern, 
  testProblems
);

console.log(performMatchResult);
// Output:
// {
//   payload: [
//     {
//       file: 'src/file1.js',
//       line: '10',
//       column: '5',
//       severity: 'Error',
//       message: 'Unexpected console statement',
//       code: 'no-console'
//     },
//     {
//       file: 'src/file2.js',
//       line: '25',
//       column: '8',
//       severity: 'Warning',
//       message: "'var' used instead of 'let' or 'const'",
//       code: 'no-var'
//     },
//     {
//       file: 'src/file3.js',
//       line: '5',
//       column: '15',
//       severity: 'Info',
//       message: 'Missing JSDoc comment',
//       code: 'require-jsdoc'
//     }
//   ],
//   type: 'matchProblemResponse'
// }
```

### Security Pattern Matching

```javascript
const complexMatcher = {
  name: 'security-checker',
  patterns: [
    'eval\\(',
    'innerHTML\\s*=',
    'document\\.write\\(',
    'setTimeout\\(.*string'
  ],
  severity: 'high',
  category: 'security'
};

const securityPatterns = [
  { pattern: 'eval\\(', message: 'Avoid using eval()' },
  { pattern: 'innerHTML\\s*=', message: 'Use textContent instead of innerHTML' }
];

const complexMatchResult = await codebolt.codeutils.performMatch(
  complexMatcher,
  securityPatterns,
  []
);

console.log(complexMatchResult);
// Output:
// {
//   payload: [],
//   type: 'matchProblemResponse'
// }
```

## Response Format

```javascript
{
  payload: [
    {
      file: 'string',       // File path where the issue was found
      line: 'string',       // Line number (as string)
      column: 'string',     // Column number (as string)
      severity: 'string',   // Severity level (Error/Warning/Info)
      message: 'string',    // Descriptive error message
      code: 'string'        // Error code or rule identifier
    }
  ],
  type: 'matchProblemResponse'
}
```

## Matcher Definition Structure

```javascript
{
  owner: 'string',          // Unique identifier for the matcher
  pattern: [
    {
      regexp: 'string',     // Regular expression pattern
      file: number,         // Capture group index for file path
      line: number,         // Capture group index for line number
      column: number,       // Capture group index for column number
      severity: number,     // Capture group index for severity
      message: number,      // Capture group index for message
      code: number          // Capture group index for error code
    }
  ]
}
```

## Problem Input Format

```javascript
[
  {
    line: 'string',         // Text line to be matched against patterns
    source: 'string'        // Source identifier (optional)
  }
]
```

## Pattern Matching Rules

1. **Regular Expression Matching**: Each problem line is tested against the provided regex pattern
2. **Capture Group Extraction**: Information is extracted based on capture group indices
3. **Invalid Line Handling**: Lines that don't match the pattern are ignored
4. **Empty Object Filtering**: Empty or malformed problem objects are skipped
5. **Structured Output**: Successfully matched problems are converted to structured format