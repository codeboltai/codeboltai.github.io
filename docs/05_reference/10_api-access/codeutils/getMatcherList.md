---
name: getMatcherList
cbbaseinfo:
  description: Retrieves the complete list of available problem matchers for various programming languages and tools.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<GetMatcherListTreeResponse>"
    description: A promise that resolves with a `GetMatcherListTreeResponse` object containing the list of all available matchers with their patterns and configurations.
data:
  name: getMatcherList
  category: codeutils
  link: getMatcherList.md
---
# getMatcherList

```typescript
codebolt.codeutils.getMatcherList(): Promise<GetMatcherListTreeResponse>
```

Retrieves the complete list of available problem matchers for various programming languages and tools. 
### Returns

- **`Promise<GetMatcherListTreeResponse>`**: A promise that resolves with a [`GetMatcherListTreeResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetMatcherListTreeResponse) object containing the list of all available matchers with their patterns and configurations.

### Response Structure

The method returns a Promise that resolves to a [`GetMatcherListTreeResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetMatcherListTreeResponse) object with the following properties:

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

// Example 5: Group matchers by language
const result = await codebolt.codeutils.getMatcherList();
if (result.matchers) {
  const byLanguage = result.matchers.reduce((acc, matcher) => {
    const lang = matcher.language || 'unknown';
    if (!acc[lang]) acc[lang] = [];
    acc[lang].push(matcher.name);
    return acc;
  }, {});

  console.log('Matchers by language:', byLanguage);
}

// Example 6: Create matcher selection UI
const result = await codebolt.codeutils.getMatcherList();
if (result.matchers) {
  const options = result.matchers.map(matcher => ({
    value: matcher.name,
    label: `${matcher.name} - ${matcher.description}`,
    language: matcher.language
  }));

  console.log('Matcher options:', options);
}

// Example 7: Validate matcher availability
async function ensureMatcherAvailable(matcherName) {
  const result = await codebolt.codeutils.getMatcherList();
  if (!result.matchers) {
    throw new Error('Could not retrieve matcher list');
  }

  const available = result.matchers.some(m =>
    m.name.toLowerCase() === matcherName.toLowerCase()
  );

  if (!available) {
    throw new Error(`Matcher '${matcherName}' is not available`);
  }

  return true;
}

// Example 8: Get matchers for specific ecosystem
const result = await codebolt.codeutils.getMatcherList();
if (result.matchers) {
  const pythonMatchers = result.matchers.filter(m =>
    m.language.toLowerCase().includes('python')
  );

  const ecosystemMatchers = {
    linting: pythonMatchers.filter(m => m.name.includes('lint')),
    formatting: pythonMatchers.filter(m => m.name.includes('format') || m.name.includes('black')),
    testing: pythonMatchers.filter(m => m.name.includes('pytest') || m.name.includes('unittest'))
  };

  console.log('Python ecosystem matchers:', ecosystemMatchers);
}
```

### Advanced Usage Patterns

#### Pattern 1: Intelligent Matcher Selection
```javascript
async function selectBestMatcher(errorOutput) {
  const result = await codebolt.codeutils.getMatcherList();
  if (!result.matchers) return null;

  // Analyze error output for clues
  const clues = {
    hasTsc: errorOutput.includes('TS') && errorOutput.includes('error TS'),
    hasEslint: errorOutput.includes('eslint') || /\d:\d\d\s+(error|warning)/.test(errorOutput),
    hasPython: errorOutput.includes('flake8') || errorOutput.includes('pylint'),
    hasJava: errorOutput.includes('.java:') && errorOutput.includes('error:')
  };

  // Select best matching matcher
  if (clues.hasTsc) return result.matchers.find(m => m.name === 'tsc');
  if (clues.hasEslint) return result.matchers.find(m => m.name.includes('eslint'));
  if (clues.hasPython) return result.matchers.find(m => m.name.includes('flake8'));
  if (clues.hasJava) return result.matchers.find(m => m.name === 'javac');

  return null;
}
```

#### Pattern 2: Build Custom Matcher Registry
```javascript
async function buildMatcherRegistry() {
  const result = await codebolt.codeutils.getMatcherList();
  if (!result.matchers) return {};

  const registry = {
    byName: {},
    byLanguage: {},
    byCategory: {}
  };

  for (const matcher of result.matchers) {
    // Index by name
    registry.byName[matcher.name] = matcher;

    // Index by language
    const lang = matcher.language || 'unknown';
    if (!registry.byLanguage[lang]) {
      registry.byLanguage[lang] = [];
    }
    registry.byLanguage[lang].push(matcher);

    // Index by category (inferred from name/description)
    const category = inferCategory(matcher);
    if (!registry.byCategory[category]) {
      registry.byCategory[category] = [];
    }
    registry.byCategory[category].push(matcher);
  }

  return registry;
}

function inferCategory(matcher) {
  const name = matcher.name.toLowerCase();
  const desc = matcher.description.toLowerCase();

  if (name.includes('lint') || desc.includes('lint')) return 'linter';
  if (name.includes('compile') || name.includes('tsc') || desc.includes('compiler')) return 'compiler';
  if (name.includes('test') || desc.includes('test')) return 'testing';
  if (name.includes('format') || desc.includes('format')) return 'formatter';
  if (name.includes('type') || desc.includes('type')) return 'type-checker';

  return 'other';
}
```

#### Pattern 3: Auto-Configure Project Matchers
```javascript
async function autoConfigureMatchers(projectPath) {
  const [matcherList, projectMeta] = await Promise.all([
    codebolt.codeutils.getMatcherList(),
    codebolt.projectStructure.getMetadata()
  ]);

  if (!matcherList.matchers) return [];

  const configurations = [];
  const packages = projectMeta.metadata.packages || [];

  for (const pkg of packages) {
    const config = {
      package: pkg.name,
      matchers: []
    };

    // Determine appropriate matchers based on package type
    if (pkg.type === 'frontend' || pkg.language === 'typescript') {
      const tsc = matcherList.matchers.find(m => m.name === 'tsc');
      const eslint = matcherList.matchers.find(m => m.name.includes('eslint'));
      if (tsc) config.matchers.push({ name: tsc.name, priority: 1 });
      if (eslint) config.matchers.push({ name: eslint.name, priority: 2 });
    }

    if (pkg.type === 'backend' && pkg.language === 'python') {
      const flake8 = matcherList.matchers.find(m => m.name.includes('flake8'));
      const pylint = matcherList.matchers.find(m => m.name.includes('pylint'));
      if (flake8) config.matchers.push({ name: flake8.name, priority: 1 });
      if (pylint) config.matchers.push({ name: pylint.name, priority: 2 });
    }

    if (config.matchers.length > 0) {
      configurations.push(config);
    }
  }

  return configurations;
}
```

#### Pattern 4: Matcher Compatibility Checker
```javascript
async function checkMatcherCompatibility(matcherName) {
  const [matcherList, matcherDetail] = await Promise.all([
    codebolt.codeutils.getMatcherList(),
    codebolt.codeutils.matchDetail(matcherName)
  ]);

  if (!matcherList.matchers || !matcherDetail.matcher) {
    return { compatible: false, reason: 'Matcher not found' };
  }

  const compatibility = {
    compatible: true,
    warnings: [],
    info: {}
  };

  // Check if matcher has examples
  if (!matcherDetail.matcher.examples || matcherDetail.matcher.examples.length === 0) {
    compatibility.warnings.push('No usage examples available');
  }

  // Check language support
  const language = matcherDetail.matcher.language;
  const sameLanguageMatchers = matcherList.matchers.filter(
    m => m.language === language
  );

  compatibility.info.language = language;
  compatibility.info.alternatives = sameLanguageMatchers
    .filter(m => m.name !== matcherName)
    .map(m => m.name);

  // Check if matcher is commonly used
  if (sameLanguageMatchers.length > 5) {
    compatibility.info.note = `There are ${sameLanguageMatchers.length} matchers for ${language}`;
  }

  return compatibility;
}
```

### Error Handling Examples

#### Handle Empty Matcher List
```javascript
const result = await codebolt.codeutils.getMatcherList();

if (!result.matchers || result.matchers.length === 0) {
  console.warn('No matchers available. Check Codebolt configuration.');
  return [];
}
```

#### Handle Network/Service Errors
```javascript
async function getMatcherListWithRetry(maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const result = await codebolt.codeutils.getMatcherList();
      if (result.matchers) {
        return result;
      }
      throw new Error(result.error || 'Unknown error');
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      console.warn(`Retry ${i + 1}/${maxRetries}:`, error.message);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

#### Validate Matcher Data
```javascript
const result = await codebolt.codeutils.getMatcherList();

if (result.matchers) {
  const validMatchers = result.matchers.filter(matcher => {
    const isValid = matcher.name &&
                    typeof matcher.name === 'string' &&
                    matcher.name.length > 0;

    if (!isValid) {
      console.warn('Invalid matcher found:', matcher);
    }

    return isValid;
  });

  console.log(`Found ${validMatchers.length} valid matchers`);
}
```

### Performance Considerations

1. **Caching**: Matcher list changes infrequently
   - Cache the results for extended periods (hours/days)
   - Implement a refresh mechanism for manual updates
   - Store in memory or persistent cache for quick access

2. **Memory Usage**:
   - The matcher list is typically small (\<100 items)
   - Memory footprint is minimal
   - Safe to keep in memory for the session

3. **Network Latency**:
   - First call may take longer (~100-500ms)
   - Subsequent calls benefit from caching
   - Consider prefetching on application startup

4. **Batch Operations**:
   - Retrieve once and share across the application
   - Avoid multiple redundant calls
   - Use a singleton pattern for matcher registry

### Common Pitfalls

#### Pitfall 1: Assuming Matcher Availability
```javascript
// ❌ Incorrect
const result = await codebolt.codeutils.performMatch(
  { name: 'eslint' },
  pattern,
  problems
); // May fail if eslint matcher doesn't exist

// ✅ Correct
const matcherList = await codebolt.codeutils.getMatcherList();
const hasEslint = matcherList.matchers?.some(m => m.name === 'eslint');

if (hasEslint) {
  const result = await codebolt.codeutils.performMatch(
    { name: 'eslint' },
    pattern,
    problems
  );
} else {
  console.error('ESLint matcher not available');
}
```

#### Pitfall 2: Not Handling Case Sensitivity
```javascript
// ❌ Incorrect
const matcher = matcherList.matchers.find(m => m.name === 'ESLint');

// ✅ Correct
const matcher = matcherList.matchers.find(m =>
  m.name.toLowerCase() === 'eslint'
);
```

#### Pitfall 3: Ignoring Language Mismatches
```javascript
// ❌ Incorrect - uses any Python matcher for any project
const pythonMatcher = matcherList.matchers.find(m => m.language === 'python');

// ✅ Correct - validates project language first
const projectLang = await detectProjectLanguage();
const pythonMatchers = matcherList.matchers.filter(m =>
  m.language.toLowerCase() === projectLang.toLowerCase()
);
```

### Integration Examples

#### With PerformMatch
```javascript
async function smartMatch(problems) {
  const [matcherList, bestMatch] = await Promise.all([
    codebolt.codeutils.getMatcherList(),
    selectBestMatcher(problems.join('\n'))
  ]);

  if (!bestMatch) {
    console.error('No suitable matcher found');
    return [];
  }

  const matcherDetail = await codebolt.codeutils.matchDetail(bestMatch.name);
  if (!matcherDetail.matcher) {
    throw new Error(`Could not get details for ${bestMatch.name}`);
  }

  return await codebolt.codeutils.performMatch(
    { name: bestMatch.name },
    matcherDetail.matcher.pattern,
    problems.map(line => ({ line, source: 'auto' }))
  );
}
```

#### With Project Structure
```javascript
async function configureProjectMatchers() {
  const [matcherList, projectMeta] = await Promise.all([
    codebolt.codeutils.getMatcherList(),
    codebolt.projectStructure.getMetadata()
  ]);

  const configuration = {
    projectId: projectMeta.metadata.id,
    matchers: []
  };

  for (const pkg of projectMeta.metadata.packages) {
    const languageMatchers = matcherList.matchers.filter(
      m => m.language.toLowerCase() === pkg.language.toLowerCase()
    );

    configuration.matchers.push({
      package: pkg.name,
      available: languageMatchers.map(m => ({
        name: m.name,
        description: m.description
      }))
    });
  }

  return configuration;
}
```

#### With MatchDetail
```javascript
async function getComprehensiveMatcherInfo(matcherName) {
  const [list, detail] = await Promise.all([
    codebolt.codeutils.getMatcherList(),
    codebolt.codeutils.matchDetail(matcherName)
  ]);

  if (!detail.matcher) {
    return { error: 'Matcher not found' };
  }

  // Find related matchers
  const related = list.matchers.filter(m =>
    m.language === detail.matcher.language &&
    m.name !== matcherName
  );

  return {
    matcher: detail.matcher,
    relatedMatchers: related,
    totalLanguageMatchers: list.matchers.filter(
      m => m.language === detail.matcher.language
    ).length
  };
}
```

### Notes

- The function returns a comprehensive list of all available problem matchers in the system.
- These matchers are used to parse and identify issues from various development tools, linters, compilers, and formatters.
- Each matcher includes information about the programming language it supports and the pattern used for matching.
- The matchers can be used with the `performMatch` function to process tool output and extract structured problem information.
- The list includes matchers for popular tools like ESLint, TypeScript compiler, Python linters, and many others.
- If the operation fails, check the `error` property for details about what went wrong.