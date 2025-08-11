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
      description: Array of pattern objects defining how to match and extract information from problem text.
    - name: problems
      typeName: array
      description: "Optional: Array of problem objects containing line text and source information to be matched. Defaults to an empty array."
  returns:
    signatureTypeName: Promise<MatchProblemResponse>
    description: A promise that resolves with a `MatchProblemResponse` object containing structured problem information extracted from the input.
data:
  name: performMatch
  category: codeutils
  link: performMatch.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `MatchProblemResponse` object with the following properties:

- **`type`** (string): Always "matchProblemResponse".
- **`matches`** (array, optional): An array of matched problem objects with the following structure:
  - **`file`** (string): The file path where the issue was found.
  - **`line`** (number): The line number where the issue occurred.
  - **`column`** (number): The column number where the issue occurred.
  - **`message`** (string): Descriptive error or warning message.
  - **`severity`** (string): The severity level ("error", "warning", or "info").
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: ESLint output processing
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

const problemPatterns = matcherDefinition.pattern;

const testProblems = [
  { line: "src/file1.js: line 10, col 5, Error - Unexpected console statement (no-console)", source: "test" },
  { line: "src/file2.js: line 25, col 8, Warning - 'var' used instead of 'let' or 'const' (no-var)", source: "test" }
];

const result = await codebolt.codeutils.performMatch(matcherDefinition, problemPatterns, testProblems);
console.log("Matched problems:", result.matches);

// Example 2: Error handling
try {
  const result = await codebolt.codeutils.performMatch(null, [], []);
  if (result.success) {
    console.log("Pattern matching successful");
    console.log("Found matches:", result.matches?.length || 0);
  } else {
    console.error("Pattern matching failed:", result.error);
  }
} catch (error) {
  console.error("Error:", error);
}

// Example 3: Processing compiler output
const compilerMatcher = {
  owner: "typescript-compiler",
  pattern: [{
    regexp: "^(.+)\\((\\d+),(\\d+)\\):\\s(error|warning)\\s(.+)$",
    file: 1,
    line: 2,
    column: 3,
    severity: 4,
    message: 5
  }]
};

const compilerProblems = [
  { line: "src/index.ts(15,8): error TS2304: Cannot find name 'unknownVariable'.", source: "tsc" },
  { line: "src/utils.ts(22,15): warning TS6133: 'unusedParam' is declared but never used.", source: "tsc" }
];

const compilerResult = await codebolt.codeutils.performMatch(
  compilerMatcher, 
  compilerMatcher.pattern, 
  compilerProblems
);
console.log("Compiler issues found:", compilerResult.matches);
```

### Matcher Definition Structure

The `matcherDefinition` parameter should follow this structure:

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
      code: number          // Capture group index for error code (optional)
    }
  ]
}
```

### Problem Input Format

The `problems` parameter should be an array of objects with this structure:

```javascript
[
  {
    line: 'string',         // Text line to be matched against patterns
    source: 'string'        // Source identifier (optional)
  }
]
```

### Notes

- The function applies regular expression patterns to extract structured information from unstructured text.
- Each problem line is tested against the provided regex pattern in the matcher definition.
- Information is extracted based on capture group indices specified in the pattern.
- Lines that don't match the pattern are ignored.
- Empty or malformed problem objects are automatically skipped.
- Successfully matched problems are converted to a structured format with file, line, column, severity, and message information.
- The function is commonly used to process output from linters, compilers, and other development tools.