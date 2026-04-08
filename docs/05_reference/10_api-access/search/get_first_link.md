---
name: get_first_link
cbbaseinfo:
  description: Retrieves the first link from search results for a given query.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The search query to find the first link for.
  returns:
    signatureTypeName: "Promise<string>"
    description: A promise that resolves with the first search result link as a string.
    typeArgs: []
data:
  name: get_first_link
  category: search
  link: get_first_link.md
---
# get_first_link

```typescript
codebolt.search.get_first_link(query: string): Promise<string>
```

Retrieves the first link from search results for a given query.
### Parameters

- **`query`** (string): The search query to find the first link for.

### Returns

- **`Promise<string>`**: A promise that resolves with the first search result link as a string.

### Example 1: Basic First Link Retrieval

```js
// Initialize search module
await codebolt.search.init();

// Get the first link for a query
const firstLink = await codebolt.search.get_first_link('React official documentation');
console.log('First result link:', firstLink);

// Output: "First Link for React official documentation"
```

### Example 2: Quick Navigation

```js
// Use get_first_link to quickly navigate to top resources
async function navigateToTopResult(topic) {
  await codebolt.search.init('google');

  // Get the top link
  const topLink = await codebolt.search.get_first_link(topic);

  console.log(`Top result for "${topic}": ${topLink}`);

  // You could then use this link with browser automation
  // await codebolt.browser.goToPage(topLink);

  return topLink;
}

// Usage
const docsLink = await navigateToTopResult('TypeScript handbook');
```

### Example 3: Finding Official Documentation

```js
// Pattern for finding official docs quickly
async function findOfficialDocs(library) {
  await codebolt.search.init();

  const query = `${library} official documentation`;
  const docsLink = await codebolt.search.get_first_link(query);

  console.log(`Official documentation for ${library}:`, docsLink);

  return docsLink;
}

// Usage
const reactDocs = await findOfficialDocs('React');
const vueDocs = await findOfficialDocs('Vue.js');
const angularDocs = await findOfficialDocs('Angular');
```

### Example 4: Comparison with Full Search

```js
// Compare first link with full search results
async function searchComparison(query) {
  await codebolt.search.init();

  // Get first link only
  const firstLink = await codebolt.search.get_first_link(query);

  // Get full search results
  const fullResults = await codebolt.search.search(query);

  return {
    query,
    topLink: firstLink,
    allResults: fullResults,
    firstLinkLength: firstLink.length,
    fullResultsLength: fullResults.length
  };
}

// Usage
const comparison = await searchComparison('Next.js tutorial');
console.log('Quick access:', comparison.topLink);
console.log('Full results available:', comparison.allResults.length > 0);
```

### Example 5: Link Validation

```js
// Get and validate first link
async function getValidatedLink(query) {
  await codebolt.search.init();

  try {
    const link = await codebolt.search.get_first_link(query);

    // Basic validation
    if (link && link.length > 0) {
      console.log('Valid link retrieved:', link);

      // Check if it's a URL
      const isUrl = link.startsWith('http://') || link.startsWith('https://');

      return {
        success: true,
        link,
        isUrl,
        query
      };
    } else {
      return {
        success: false,
        error: 'No link found',
        query
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      query
    };
  }
}

// Usage
const result = await getValidatedLink('Node.js best practices');
if (result.success) {
  console.log('Retrieved link:', result.link);
}
```

### Example 6: Batch Link Discovery

```js
// Discover first links for multiple queries
async function discoverTopLinks(topics) {
  await codebolt.search.init();

  const links = [];

  for (const topic of topics) {
    console.log(`Finding top link for: ${topic}`);

    const link = await codebolt.search.get_first_link(topic);

    links.push({
      topic,
      link,
      timestamp: new Date().toISOString()
    });

    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return links;
}

// Usage
const resources = await discoverTopLinks([
  'JavaScript MDN',
  'React tutorial',
  'TypeScript handbook',
  'Node.js documentation'
]);

console.log('Discovered resources:');
resources.forEach(r => console.log(`${r.topic}: ${r.link}`));
```

### Explanation

The `codebolt.search.get_first_link(query)` function quickly retrieves the first search result link for a given query, without returning all search results. This is useful when you only need the top result.

**Key Points:**
- **Quick Access**: Returns only the first link, not full results
- **Top Result**: Typically the most relevant search result
- **Efficient**: Faster than getting full search results when you only need one link
- **Direct Link**: Returns the URL as a string

**Return Value Structure:**
```js
{
  string: "First Link for [query]"
}
```

**Common Use Cases:**
- Quick access to top search results
- Finding official documentation URLs
- Navigating to the most relevant resource
- Building link collections
- Fast resource discovery

**Best Practices:**
1. Use when you only need the top result
2. Combine with browser automation for navigation
3. Validate the returned link before using
4. Add delays between multiple calls to avoid rate limiting
5. Consider using full search() if you need multiple results

**When to Use vs search():**
- **Use get_first_link()**: When you only need the top/first result
- **Use search()**: When you need multiple results or more context

**Advanced Patterns:**
- Batch link discovery for multiple topics
- Combining with browser goToPage() for automation
- Building resource collections
- Quick documentation lookups
- URL validation and processing

**Notes:**
- Returns a string, not a URL object
- The link format may vary based on search engine
- Not all search engines may support this function
- Network connectivity is required
- Consider error handling for failed searches