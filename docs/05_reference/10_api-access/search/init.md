---
name: init
cbbaseinfo:
  description: Initializes the search module with the specified search engine.
cbparameters:
  parameters:
    - name: engine
      typeName: string
      description: "The search engine to use (default: \"bing\"). Supported engines include \"bing\", \"google\", etc."
      optional: true
  returns:
    signatureTypeName: void
    description: No return value.
    typeArgs: []
data:
  name: init
  category: search
  link: init.md
---
# init

```typescript
codebolt.search.init(engine: string): void
```

Initializes the search module with the specified search engine.
### Parameters

- **`engine`** (string): The search engine to use (default: "bing"). Supported engines include "bing", "google", etc.

### Returns

- **`void`**: No return value.

### Example 1: Initialize with Default Engine

```js
// Initialize with default Bing search engine
await codebolt.search.init();
console.log('Search module initialized with Bing');
```

### Example 2: Initialize with Google

```js
// Initialize with Google search engine
await codebolt.search.init('google');
console.log('Search module initialized with Google');

// Now perform searches using Google
const results = await codebolt.search.search('JavaScript async await');
console.log('Google search results:', results);
```

### Example 3: Initialize and Search Pattern

```js
// Common pattern: initialize before searching
async function performSearch(query, engine = 'bing') {
  // Initialize with preferred engine
  await codebolt.search.init(engine);

  // Perform the search
  const results = await codebolt.search.search(query);

  return results;
}

// Usage
const data = await performSearch('React hooks tutorial', 'google');
console.log('Search completed:', data);
```

### Example 4: Multiple Search Sessions

```js
// Search with different engines for comparison
async function compareEngines(query) {
  // Search with Bing
  await codebolt.search.init('bing');
  const bingResults = await codebolt.search.search(query);

  // Search with Google
  await codebolt.search.init('google');
  const googleResults = await codebolt.search.search(query);

  return {
    bing: bingResults,
    google: googleResults
  };
}

const comparison = await compareEngines('TypeScript vs JavaScript');
console.log('Engine comparison:', comparison);
```

### Example 5: Conditional Initialization

```js
// Initialize based on environment or configuration
async function setupSearch(config) {
  const engine = config.preferredEngine || 'bing';

  try {
    await codebolt.search.init(engine);
    console.log(`Initialized with ${engine}`);
    return true;
  } catch (error) {
    console.error('Failed to initialize search:', error);
    return false;
  }
}

// Usage
const success = await setupSearch({ preferredEngine: 'google' });
if (success) {
  const results = await codebolt.search.search('web development');
  console.log(results);
}
```

### Example 6: Re-initialization Pattern

```js
// Re-initialize to switch search engines
async function switchEngine(newEngine) {
  console.log(`Switching to ${newEngine}...`);

  // Re-initialize with new engine
  await codebolt.search.init(newEngine);

  // Verify by performing a test search
  const testResult = await codebolt.search.search('test');

  return testResult;
}

// Start with Bing
await codebolt.search.init('bing');

// Later switch to Google
await switchEngine('google');
```

### Explanation

The `codebolt.search.init(engine)` function initializes the search module with a specified search engine. This is typically the first function you call before performing any search operations.

**Key Points:**
- **Default Engine**: If no engine is specified, defaults to "bing"
- **Supported Engines**: Common engines include "bing", "google" (availability depends on configuration)
- **Re-initialization**: You can call init() again to switch search engines
- **No Return Value**: The function returns void, so you cannot verify initialization success from the return value

**Common Use Cases:**
- Setting up the search module before use
- Switching between different search engines
- Configuring search behavior based on user preferences or requirements

**Best Practices:**
1. Always initialize before performing searches
2. Consider error handling if initialization fails
3. Choose the appropriate engine for your use case
4. Re-initialize only when you need to change engines

**Notes:**
- The exact list of supported search engines may vary based on configuration
- Some search engines may require additional API keys or configuration
- Initialization failures may not throw errors; validate with a test search