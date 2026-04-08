---
name: search
cbbaseinfo:
  description: Performs a search operation for the given query string.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The search query string to search for.
  returns:
    signatureTypeName: "Promise<string>"
    description: A promise that resolves with the search results as a string.
    typeArgs: []
data:
  name: search
  category: search
  link: search.md
---
# search

```typescript
codebolt.search.search(query: string): Promise<string>
```

Performs a search operation for the given query string.
### Parameters

- **`query`** (string): The search query string to search for.

### Returns

- **`Promise<string>`**: A promise that resolves with the search results as a string.

### Example 1: Basic Search

```js
// Initialize the search module
await codebolt.search.init();

// Perform a simple search
const results = await codebolt.search.search('JavaScript array methods');
console.log('Search results:', results);

// Results will contain search result data as a string
console.log('Results length:', results.length);
```

### Example 2: Technical Documentation Search

```js
// Search for technical documentation
async function findDocs(topic) {
  await codebolt.search.init('google');

  // Search with specific query
  const query = `${topic} official documentation`;
  const results = await codebolt.search.search(query);

  console.log(`Documentation search results for ${topic}:`);
  console.log(results);

  return results;
}

// Usage
const docs = await findDocs('React hooks');
```

### Example 3: Research Aggregation

```js
// Perform multiple related searches
async function comprehensiveResearch(mainTopic) {
  await codebolt.search.init();

  const searches = [
    `${mainTopic} tutorial`,
    `${mainTopic} best practices`,
    `${mainTopic} examples`,
    `${mainTopic} common issues`
  ];

  const results = [];

  for (const query of searches) {
    const result = await codebolt.search.search(query);
    results.push({ query, result });
    console.log(`Completed search: ${query}`);
  }

  return results;
}

// Usage
const research = await comprehensiveResearch('TypeScript decorators');
```

### Example 4: Search with Error Handling

```js
// Robust search function with error handling
async function safeSearch(query, maxRetries = 3) {
  await codebolt.search.init();

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Search attempt ${attempt} for: ${query}`);

      const results = await codebolt.search.search(query);

      // Validate results
      if (results && results.length > 0) {
        console.log('Search successful');
        return { success: true, data: results };
      } else {
        console.warn('Empty results, retrying...');
      }
    } catch (error) {
      console.error(`Search attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        return { success: false, error: error.message };
      }
    }
  }

  return { success: false, error: 'Max retries exceeded' };
}

// Usage
const result = await safeSearch('machine learning algorithms');
if (result.success) {
  console.log('Results:', result.data);
} else {
  console.error('Search failed:', result.error);
}
```

### Example 5: Search Result Processing

```js
// Process and analyze search results
async function searchAndAnalyze(query) {
  await codebolt.search.init();

  // Perform search
  const rawResults = await codebolt.search.search(query);

  // Process results
  const analysis = {
    query: query,
    resultLength: rawResults.length,
    hasResults: rawResults.length > 0,
    timestamp: new Date().toISOString(),
    data: rawResults
  };

  console.log('Search analysis:', analysis);

  return analysis;
}

// Usage
const analysis = await searchAndAnalyze('Node.js performance optimization');
console.log('Analysis complete:', analysis.hasResults);
```

### Example 6: Batch Search Processing

```js
// Process multiple search queries efficiently
async function batchSearch(queries, delayBetweenSearches = 1000) {
  await codebolt.search.init();

  const results = [];

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];

    console.log(`Processing query ${i + 1}/${queries.length}: ${query}`);

    const result = await codebolt.search.search(query);
    results.push({
      query,
      result,
      index: i
    });

    // Add delay between searches to avoid rate limiting
    if (i < queries.length - 1) {
      await new Promise(resolve => setTimeout(resolve, delayBetweenSearches));
    }
  }

  return results;
}

// Usage
const searchResults = await batchSearch([
  'JavaScript promises',
  'async await patterns',
  'error handling best practices'
]);

console.log('Batch search complete:', searchResults.length);
```

### Explanation

The `codebolt.search.search(query)` function performs a web search using the configured search engine and returns the search results as a string.

**Key Points:**
- **Query Parameter**: Accepts any search query string
- **Return Type**: Returns a `Promise<string>` with search results
- **Synchronous Operation**: Waits for search to complete before resolving
- **Engine Dependency**: Results format depends on the initialized search engine

**Return Value Structure:**
```js
{
  string: "Search results for [query]"
}
```

**Common Use Cases:**
- Web research and information gathering
- Finding documentation and tutorials
- Discovering relevant resources
- Automated data collection
- Content aggregation

**Best Practices:**
1. Always initialize the search module before calling search()
2. Use specific, well-formed queries for better results
3. Implement error handling for network issues
4. Add delays between multiple searches to avoid rate limiting
5. Process and validate results before using them

**Advanced Patterns:**
- Batch processing multiple queries
- Implementing retry logic for failed searches
- Combining with get_first_link() for quick access
- Parsing and analyzing search results

**Notes:**
- Search results are returned as a string format
- The exact format may vary based on the search engine
- Consider rate limiting when performing multiple searches
- Network connectivity is required for search operations