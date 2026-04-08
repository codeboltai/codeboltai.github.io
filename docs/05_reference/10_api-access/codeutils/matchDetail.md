---
name: matchDetail
cbbaseinfo:
  description: Retrieves detailed configuration and pattern information for a specific problem matcher.
cbparameters:
  parameters:
    - name: matcher
      typeName: string
      description: "The name or identifier of the matcher to retrieve details for (e.g., 'xmllint', 'eslint-compact')."
  returns:
    signatureTypeName: "Promise<getMatchDetail>"
    description: A promise that resolves with a `getMatchDetail` object containing the detailed matcher configuration including patterns and rules.
data:
  name: matchDetail
  category: codeutils
  link: matchDetail.md
---
# matchDetail

```typescript
codebolt.codeutils.matchDetail(matcher: string): Promise<getMatchDetail>
```

Retrieves detailed configuration and pattern information for a specific problem matcher. 
### Parameters

- **`matcher`** (string): The name or identifier of the matcher to retrieve details for (e.g., 'xmllint', 'eslint-compact').

### Returns

- **`Promise<getMatchDetail>`**: A promise that resolves with a [`getMatchDetail`](/docs/api/11_doc-type-ref/types/interfaces/getMatchDetail) object containing the detailed matcher configuration including patterns and rules.

### Response Structure

The method returns a Promise that resolves to a [`getMatchDetail`](/docs/api/11_doc-type-ref/types/interfaces/getMatchDetail) object with the following properties:

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

// Example 5: Validate matcher before use
async function validateAndUseMatcher(matcherName) {
  const detail = await codebolt.codeutils.matchDetail(matcherName);

  if (!detail.matcher) {
    throw new Error(`Invalid matcher: ${detail.error}`);
  }

  // Check required fields
  if (!detail.matcher.pattern) {
    throw new Error(`Matcher ${matcherName} has no pattern defined`);
  }

  return detail.matcher;
}

// Example 6: Compare matchers
async function compareMatchers(matcherName1, matcherName2) {
  const [detail1, detail2] = await Promise.all([
    codebolt.codeutils.matchDetail(matcherName1),
    codebolt.codeutils.matchDetail(matcherName2)
  ]);

  if (!detail1.matcher || !detail2.matcher) {
    throw new Error('One or both matchers not found');
  }

  return {
    matcher1: {
      name: detail1.matcher.name,
      language: detail1.matcher.language,
      complexity: detail1.matcher.pattern?.length || 0
    },
    matcher2: {
      name: detail2.matcher.name,
      language: detail2.matcher.language,
      complexity: detail2.matcher.pattern?.length || 0
    },
    sameLanguage: detail1.matcher.language === detail2.matcher.language
  };
}

// Example 7: Extract pattern information
const tscDetail = await codebolt.codeutils.matchDetail('tsc');
if (tscDetail.matcher && tscDetail.matcher.pattern) {
  const patternInfo = {
    regexp: tscDetail.matcher.pattern,
    captureGroups: tscDetail.matcher.pattern.match(/\(/g)?.length || 0,
    hasLookaheads: /\?!=/.test(tscDetail.matcher.pattern),
    hasLookbehinds: /\?<=/.test(tscDetail.matcher.pattern)
  };

  console.log('Pattern analysis:', patternInfo);
}

// Example 8: Test matcher with examples
const eslintDetail = await codebolt.codeutils.matchDetail('eslint-compact');
if (eslintDetail.matcher && eslintDetail.matcher.examples) {
  console.log('Testing with provided examples:');

  for (const example of eslintDetail.matcher.examples) {
    const result = await codebolt.codeutils.performMatch(
      { owner: eslintDetail.matcher.name, pattern: eslintDetail.matcher.pattern },
      eslintDetail.matcher.pattern,
      [{ line: example, source: 'test' }]
    );

    console.log(`Example: "${example}"`);
    console.log(`Matches: ${result.matches?.length || 0}`);
  }
}
```

### Advanced Usage Patterns

#### Pattern 1: Dynamic Matcher Builder
```javascript
async function buildMatcherFromName(matcherName) {
  const detail = await codebolt.codeutils.matchDetail(matcherName);

  if (!detail.matcher) {
    throw new Error(`Matcher '${matcherName}' not found`);
  }

  return {
    definition: {
      owner: detail.matcher.name,
      pattern: detail.matcher.pattern
    },
    test: async (problems) => {
      return await codebolt.codeutils.performMatch(
        { owner: detail.matcher.name, pattern: detail.matcher.pattern },
        detail.matcher.pattern,
        problems.map(p => ({ line: p, source: 'test' }))
      );
    },
    info: {
      name: detail.matcher.name,
      language: detail.matcher.language,
      description: detail.matcher.description
    }
  };
}

// Usage
const eslint = await buildMatcherFromName('eslint-compact');
const results = await eslint.test([
  'file.js: line 10, col 5, Error - Unexpected console (no-console)'
]);
```

#### Pattern 2: Matcher Validation Framework
```javascript
async function validateMatcher(matcherName) {
  const detail = await codebolt.codeutils.matchDetail(matcherName);

  if (!detail.matcher) {
    return { valid: false, error: detail.error };
  }

  const validation = {
    valid: true,
    warnings: [],
    errors: []
  };

  // Check for required fields
  if (!detail.matcher.name) {
    validation.errors.push('Missing name');
    validation.valid = false;
  }

  if (!detail.matcher.pattern) {
    validation.errors.push('Missing pattern');
    validation.valid = false;
  }

  // Validate regex pattern
  if (detail.matcher.pattern) {
    try {
      new RegExp(detail.matcher.pattern);
    } catch (error) {
      validation.errors.push(`Invalid regex: ${error.message}`);
      validation.valid = false;
    }
  }

  // Check for examples
  if (!detail.matcher.examples || detail.matcher.examples.length === 0) {
    validation.warnings.push('No examples provided for testing');
  }

  return validation;
}
```

#### Pattern 3: Matcher Comparison Tool
```javascript
async function findAlternativeMatchers(matcherName) {
  const [detail, list] = await Promise.all([
    codebolt.codeutils.matchDetail(matcherName),
    codebolt.codeutils.getMatcherList()
  ]);

  if (!detail.matcher || !list.matchers) {
    return { error: 'Could not retrieve matcher information' };
  }

  const language = detail.matcher.language;
  const alternatives = list.matchers.filter(m =>
    m.language === language && m.name !== matcherName
  );

  return {
    original: {
      name: detail.matcher.name,
      description: detail.matcher.description
    },
    alternatives: alternatives.map(m => ({
      name: m.name,
      description: m.description
    })),
    language
  };
}
```

#### Pattern 4: Interactive Matcher Explorer
```javascript
async function exploreMatcher(matcherName) {
  const detail = await codebolt.codeutils.matchDetail(matcherName);

  if (!detail.matcher) {
    console.error(`❌ Matcher '${matcherName}' not found`);
    return;
  }

  console.log('\n=== Matcher Details ===');
  console.log(`Name: ${detail.matcher.name}`);
  console.log(`Language: ${detail.matcher.language}`);
  console.log(`Description: ${detail.matcher.description}`);

  if (detail.matcher.pattern) {
    console.log('\n=== Pattern ===');
    console.log(detail.matcher.pattern);
  }

  if (detail.matcher.examples && detail.matcher.examples.length > 0) {
    console.log('\n=== Examples ===');
    detail.matcher.examples.forEach((ex, i) => {
      console.log(`${i + 1}. ${ex}`);
    });
  }

  console.log('\n=== Capabilities ===');
  const capabilities = {
    hasPattern: !!detail.matcher.pattern,
    hasExamples: !!(detail.matcher.examples?.length),
    canTest: !!(detail.matcher.pattern && detail.matcher.examples?.length)
  };

  Object.entries(capabilities).forEach(([key, value]) => {
    console.log(`${key}: ${value ? '✅' : '❌'}`);
  });
}
```

### Error Handling Examples

#### Handle Invalid Matcher Name
```javascript
async function safeGetMatcherDetail(matcherName) {
  try {
    const detail = await codebolt.codeutils.matchDetail(matcherName);

    if (!detail.matcher) {
      // Suggest similar matchers
      const list = await codebolt.codeutils.getMatcherList();
      const suggestions = list.matchers
        .filter(m => m.name.toLowerCase().includes(matcherName.toLowerCase()))
        .map(m => m.name)
        .slice(0, 5);

      throw new Error(
        `Matcher '${matcherName}' not found. ` +
        `Did you mean: ${suggestions.join(', ') || 'none'}?`
      );
    }

    return detail.matcher;
  } catch (error) {
    console.error('Error getting matcher detail:', error.message);
    throw error;
  }
}
```

#### Handle Malformed Patterns
```javascript
async function validateMatcherPattern(matcherName) {
  const detail = await codebolt.codeutils.matchDetail(matcherName);

  if (!detail.matcher || !detail.matcher.pattern) {
    return { valid: false, reason: 'No pattern found' };
  }

  try {
    // Test if pattern is valid regex
    new RegExp(detail.matcher.pattern);

    // Test with examples if available
    if (detail.matcher.examples) {
      for (const example of detail.matcher.examples) {
        const match = example.match(detail.matcher.pattern);
        if (!match) {
          console.warn(`Example doesn't match pattern: ${example}`);
        }
      }
    }

    return { valid: true };
  } catch (error) {
    return { valid: false, reason: error.message };
  }
}
```

### Performance Considerations

1. **Caching Strategy**:
   - Matcher details rarely change
   - Cache indefinitely until application restart
   - Use a Map for O(1) lookups

2. **Batch Requests**:
   - When getting details for multiple matchers, use `Promise.all()`
   - Avoid sequential await in loops
   - Consider rate limiting for large batches

3. **Pattern Compilation**:
   - Pre-compile regex patterns from matcher details
   - Reuse compiled patterns for multiple operations
   - Store compiled patterns in cache

4. **Memory Management**:
   - Matcher detail objects are small (\<1KB each)
   - Safe to keep 50+ matchers in memory
   - Clear cache when switching projects

### Common Pitfalls

#### Pitfall 1: Not Validating Pattern Before Use
```javascript
// ❌ Incorrect
const detail = await codebolt.codeutils.matchDetail('custom-matcher');
await codebolt.codeutils.performMatch(
  { owner: 'custom-matcher', pattern: detail.matcher.pattern },
  detail.matcher.pattern,
  problems
); // May fail if pattern is invalid

// ✅ Correct
const detail = await codebolt.codeutils.matchDetail('custom-matcher');
try {
  new RegExp(detail.matcher.pattern); // Validate pattern
  await codebolt.codeutils.performMatch(/* ... */);
} catch (error) {
  console.error('Invalid pattern:', error.message);
}
```

#### Pitfall 2: Ignoring Language Compatibility
```javascript
// ❌ Incorrect
const pythonMatcher = await codebolt.codeutils.matchDetail('flake8');
const jsErrors = await codebolt.codeutils.performMatch(
  { owner: 'flake8', pattern: pythonMatcher.matcher.pattern },
  pythonMatcher.matcher.pattern,
  jsErrors // JavaScript errors with Python matcher
); // Won't work correctly

// ✅ Correct
const projectLang = await detectProjectLanguage();
const matcherName = languageToMatcher(projectLang);
const detail = await codebolt.codeutils.matchDetail(matcherName);
```

#### Pitfall 3: Not Testing with Examples
```javascript
// ❌ Incorrect - assumes pattern works
const detail = await codebolt.codeutils.matchDetail('tsc');
await codebolt.codeutils.performMatch(/* ... */);

// ✅ Correct - test with examples first
const detail = await codebolt.codeutils.matchDetail('tsc');
if (detail.matcher.examples) {
  const testResult = await codebolt.codeutils.performMatch(
    { owner: 'tsc', pattern: detail.matcher.pattern },
    detail.matcher.pattern,
    [{ line: detail.matcher.examples[0], source: 'test' }]
  );

  if (!testResult.matches || testResult.matches.length === 0) {
    console.warn('Pattern may not work correctly');
  }
}
```

### Integration Examples

#### With GetMatcherList
```javascript
async function getMatcherWithAlternatives(matcherName) {
  const [detail, list] = await Promise.all([
    codebolt.codeutils.matchDetail(matcherName),
    codebolt.codeutils.getMatcherList()
  ]);

  if (!detail.matcher) {
    return { error: 'Matcher not found' };
  }

  const alternatives = list.matchers.filter(
    m => m.language === detail.matcher.language && m.name !== matcherName
  );

  return {
    matcher: detail.matcher,
    alternatives: alternatives.map(m => ({
      name: m.name,
      description: m.description
    })),
    recommendation: alternatives.length > 0
      ? `Consider ${alternatives[0].name} as an alternative`
      : 'No alternatives available'
  };
}
```

#### With PerformMatch
```javascript
async function matchWithErrorHandling(matcherName, problemLines) {
  // Get matcher details
  const detail = await codebolt.codeutils.matchDetail(matcherName);

  if (!detail.matcher) {
    throw new Error(`Matcher '${matcherName}' not found: ${detail.error}`);
  }

  // Validate pattern
  try {
    new RegExp(detail.matcher.pattern);
  } catch (error) {
    throw new Error(`Invalid pattern in ${matcherName}: ${error.message}`);
  }

  // Perform match
  const result = await codebolt.codeutils.performMatch(
    { owner: detail.matcher.name, pattern: detail.matcher.pattern },
    detail.matcher.pattern,
    problemLines.map(line => ({ line, source: matcherName }))
  );

  return {
    matches: result.matches || [],
    matcherUsed: detail.matcher.name,
    language: detail.matcher.language
  };
}
```

#### With CodebaseSearch
```javascript
async function findAndMatchErrors(searchQuery) {
  // Find relevant files
  const searchResults = await codebolt.codebaseSearch.search(searchQuery);

  // Get appropriate matcher based on file types
  const hasTypeScript = searchResults.results.some(r =>
    r.file.endsWith('.ts') || r.file.endsWith('.tsx')
  );

  const matcherName = hasTypeScript ? 'tsc' : 'eslint-compact';
  const detail = await codebolt.codeutils.matchDetail(matcherName);

  if (!detail.matcher) {
    throw new Error(`Could not load ${matcherName} matcher`);
  }

  return {
    files: searchResults.results.map(r => r.file),
    recommendedMatcher: matcherName,
    matcherDescription: detail.matcher.description,
    pattern: detail.matcher.pattern
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