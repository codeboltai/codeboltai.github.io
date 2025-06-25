---
name: matchDetail
cbbaseinfo:
  description: Retrieves detailed configuration and pattern information for a specific problem matcher.
cbparameters:
  parameters:
    - name: matcher
      typeName: string
      description: The name/owner of the matcher to retrieve details for (e.g., 'xmllint', 'eslint-compact').
  returns:
    signatureTypeName: Promise<getMatchDetail>
    description: A promise that resolves with the detailed matcher configuration including patterns and rules.
    typeArgs:
      - type: reference
        name: getMatchDetail
data:
  name: matchDetail
  category: codeutils
  link: matchDetail.md
---
<CBBaseInfo/> 
<CBParameters/>

## Description

The `matchDetail` function retrieves comprehensive configuration details for a specific problem matcher. This includes the pattern definitions, regular expressions, and field mappings used to parse tool output and identify code issues.

## Usage

```javascript
const matchDetailResult = await codebolt.codeutils.matchDetail(matcherName);
```

## Examples

### Getting XML Lint Matcher Details

```javascript
const matchDetailResult = await codebolt.codeutils.matchDetail('xmllint');
console.log(matchDetailResult.payload);
// Output:
// {
//   owner: 'xmllint',
//   pattern: {
//     pattern: [
//       {
//         // Regular expression patterns for parsing xmllint output
//         // Field mappings for file, line, column, severity, message, etc.
//       }
//     ]
//   }
// }
```

### Testing Multiple Language Matchers

```javascript
const languageMatchers = [
  { name: 'js-matcher', language: 'javascript' },
  { name: 'ts-matcher', language: 'typescript' },
  { name: 'py-matcher', language: 'python' },
  { name: 'java-matcher', language: 'java' }
];

for (const matcher of languageMatchers) {
  try {
    const langMatchResult = await codebolt.codeutils.matchDetail(matcher.name);
    console.log(`✅ ${matcher.language} matcher result:`, !!langMatchResult);
  } catch (error) {
    console.log(`⚠️ ${matcher.language} matcher failed:`, error.message);
  }
}
```

## Response Format

```javascript
{
  payload: {
    owner: 'string',        // Name of the matcher
    pattern: {
      pattern: [            // Array of pattern configurations
        {
          regexp: 'string', // Regular expression for matching
          file: number,     // Capture group index for file path
          line: number,     // Capture group index for line number
          column: number,   // Capture group index for column number
          severity: number, // Capture group index for severity level
          message: number,  // Capture group index for error message
          code: number      // Capture group index for error code
          // Additional fields may vary by matcher
        }
      ]
    }
  }
}
```

## Common Matchers

### ESLint Compact Format
```javascript
const eslintMatcher = await codebolt.codeutils.matchDetail('eslint-compact');
// Returns patterns for parsing ESLint compact output format
```

### TypeScript Compiler
```javascript
const tscMatcher = await codebolt.codeutils.matchDetail('tsc');
// Returns patterns for parsing TypeScript compiler errors
```

### Python Tools
```javascript
const flake8Matcher = await codebolt.codeutils.matchDetail('flake8');
const blackMatcher = await codebolt.codeutils.matchDetail('black');
// Returns patterns for Python linting and formatting tools
```

## Pattern Structure

Each matcher contains patterns with specific field mappings:

- **file**: Index of regex capture group containing the file path
- **line**: Index of regex capture group containing the line number
- **column**: Index of regex capture group containing the column number
- **severity**: Index of regex capture group containing severity (Error/Warning/Info)
- **message**: Index of regex capture group containing the error message
- **code**: Index of regex capture group containing the error code
