---
name: getMatcherList
cbbaseinfo:
  description: Retrieves the complete list of available problem matchers for various programming languages and tools.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetMatcherListTreeResponse>
    description: A promise that resolves with a `GetMatcherListTreeResponse` object containing the list of all available matchers with their patterns and configurations.
data:
  name: getMatcherList
  category: codeutils
  link: getMatcherList.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetMatcherListTreeResponse` object with the following properties:

- **`type`** (string): Always "getMatcherListTreeResponse".
- **`matchers`** (array, optional): An array of matcher objects with the following structure:
  - **`name`** (string): The name or identifier of the matcher.
  - **`description`** (string): A description of what the matcher is used for.
  - **`language`** (string): The programming language this matcher supports.
  - **`pattern`** (string): The regex pattern or configuration used for matching.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Get all available matchers
const matcherListResult = await codebolt.codeutils.getMatcherList();
if (matcherListResult.matchers) {
  console.log("Available matchers:", matcherListResult.matchers.length);
  matcherListResult.matchers.forEach(matcher => {
    console.log(`${matcher.name} (${matcher.language}): ${matcher.description}`);
  });
} else {
  console.error("Failed to retrieve matchers:", matcherListResult.error);
}

// Example 2: Filter matchers by language
const result = await codebolt.codeutils.getMatcherList();
if (result.matchers) {
  const javascriptMatchers = result.matchers.filter(matcher => 
    matcher.language.toLowerCase().includes('javascript')
  );
  console.log("JavaScript matchers:", javascriptMatchers);
}

// Example 3: Error handling
try {
  const result = await codebolt.codeutils.getMatcherList();
  if (result.success) {
    console.log("Successfully retrieved matcher list");
    console.log("Total matchers available:", result.matchers?.length || 0);
  } else {
    console.error("Failed to get matcher list:", result.error);
  }
} catch (error) {
  console.error("Error:", error);
}

// Example 4: Find specific matcher by name
const result = await codebolt.codeutils.getMatcherList();
if (result.matchers) {
  const eslintMatcher = result.matchers.find(matcher => 
    matcher.name.toLowerCase().includes('eslint')
  );
  if (eslintMatcher) {
    console.log("ESLint matcher found:", eslintMatcher);
  }
}
```

### Notes

- The function returns a comprehensive list of all available problem matchers in the system.
- These matchers are used to parse and identify issues from various development tools, linters, compilers, and formatters.
- Each matcher includes information about the programming language it supports and the pattern used for matching.
- The matchers can be used with the `performMatch` function to process tool output and extract structured problem information.
- The list includes matchers for popular tools like ESLint, TypeScript compiler, Python linters, and many others.
- If the operation fails, check the `error` property for details about what went wrong.

