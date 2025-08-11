---
name: matchDetail
cbbaseinfo:
  description: Retrieves detailed configuration and pattern information for a specific problem matcher.
cbparameters:
  parameters:
    - name: matcher
      typeName: string
      description: The name or identifier of the matcher to retrieve details for (e.g., 'xmllint', 'eslint-compact').
  returns:
    signatureTypeName: Promise<getMatchDetail>
    description: A promise that resolves with a `getMatchDetail` object containing the detailed matcher configuration including patterns and rules.
data:
  name: matchDetail
  category: codeutils
  link: matchDetail.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `getMatchDetail` object with the following properties:

- **`type`** (string): Always "getMatchDetailResponse".
- **`matcher`** (object, optional): The detailed matcher configuration with the following structure:
  - **`name`** (string): The name or identifier of the matcher.
  - **`description`** (string): A description of what the matcher is used for.
  - **`language`** (string): The programming language this matcher supports.
  - **`pattern`** (string): The regex pattern or configuration used for matching.
  - **`examples`** (array, optional): An array of example strings that demonstrate the matcher's usage.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Get details for a specific matcher
const xmllintDetail = await codebolt.codeutils.matchDetail('xmllint');
if (xmllintDetail.matcher) {
  console.log("Matcher Name:", xmllintDetail.matcher.name);
  console.log("Description:", xmllintDetail.matcher.description);
  console.log("Language:", xmllintDetail.matcher.language);
  console.log("Pattern:", xmllintDetail.matcher.pattern);
  if (xmllintDetail.matcher.examples) {
    console.log("Examples:", xmllintDetail.matcher.examples);
  }
} else {
  console.error("Failed to get matcher details:", xmllintDetail.error);
}

// Example 2: Error handling for non-existent matcher
const nonExistentDetail = await codebolt.codeutils.matchDetail('non-existent-matcher');
if (nonExistentDetail.error) {
  console.error("Matcher not found:", nonExistentDetail.error);
}

// Example 3: Testing multiple matchers
const matcherNames = ['eslint-compact', 'tsc', 'flake8', 'black'];
for (const matcherName of matcherNames) {
  try {
    const result = await codebolt.codeutils.matchDetail(matcherName);
    if (result.matcher) {
      console.log(`✅ ${matcherName}: ${result.matcher.description}`);
    } else {
      console.log(`⚠️ ${matcherName}: ${result.error}`);
    }
  } catch (error) {
    console.log(`❌ ${matcherName}: Error - ${error.message}`);
  }
}

// Example 4: Using matcher details with performMatch
const eslintDetail = await codebolt.codeutils.matchDetail('eslint-compact');
if (eslintDetail.matcher) {
  // Use the matcher details to understand the pattern structure
  console.log("ESLint pattern:", eslintDetail.matcher.pattern);
  
  // You can then use this information with performMatch
  const matcherDefinition = {
    owner: eslintDetail.matcher.name,
    pattern: [/* pattern based on the details */]
  };
}
```

### Common Matchers

You can retrieve details for various popular matchers:

- **ESLint**: `'eslint-compact'` - For parsing ESLint compact output format
- **TypeScript**: `'tsc'` - For parsing TypeScript compiler errors
- **Python**: `'flake8'`, `'black'` - For Python linting and formatting tools
- **XML**: `'xmllint'` - For XML validation and linting
- **Java**: `'javac'` - For Java compiler errors
- **C/C++**: `'gcc'`, `'clang'` - For C/C++ compiler errors

### Notes

- The function retrieves comprehensive configuration details for a specific problem matcher.
- The matcher details include pattern definitions, regular expressions, and field mappings used to parse tool output.
- Each matcher contains information about which programming language it supports and how to extract structured information from tool output.
- The `examples` array (when available) provides sample strings that demonstrate how the matcher works.
- These details are useful for understanding how to use the matcher with the `performMatch` function.
- If a matcher with the specified name doesn't exist, the function returns an error.
- The pattern information helps you understand how the matcher extracts file paths, line numbers, severity levels, and error messages from tool output.
