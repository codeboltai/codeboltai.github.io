---
cbapicategory:
  - name: init
    link: /docs/api/apiaccess/search/init
    description: Initializes the search module with a specified search engine.
  - name: search
    link: /docs/api/apiaccess/search/execute
    description: Performs a search operation for a given query string.
  - name: get_first_link
    link: /docs/api/apiaccess/search/get_first_link
    description: Retrieves the first search result link for a query.
---

# Search API

The Search API provides web search capabilities, allowing you to perform searches using different search engines and retrieve search results programmatically.

## Overview

The search module enables you to:
- **Initialize Search**: Configure the search engine to use (default: Bing)
- **Perform Searches**: Execute search queries and retrieve results
- **Quick Links**: Get the first search result link directly

## Quick Start Example

```js
// Initialize the search module
await codebolt.search.init();

// Perform a search
const results = await codebolt.search.search('TypeScript tutorials');
console.log('Search results:', results);

// Get the first link
const firstLink = await codebolt.search.get_first_link('best JavaScript frameworks');
console.log('First result:', firstLink);
```

## Common Use Cases

### Web Research
Automate web research by searching for topics and extracting the most relevant results:

```js
async function researchTopic(topic) {
  await codebolt.search.init();

  // Get general search results
  const results = await codebolt.search.search(topic);

  // Get top resource
  const topResource = await codebolt.search.get_first_link(topic);

  return { results, topResource };
}
```

### Link Discovery
Find relevant links for specific queries:

```js
async function findDocumentation(query) {
  await codebolt.search.init('google');
  const docsLink = await codebolt.search.get_first_link(`${query} documentation`);
  return docsLink;
}
```

## Response Structure

Search API functions return responses with different structures:

**search() returns:**
- String containing search results

**get_first_link() returns:**
- String containing the first search result URL

<CBAPICategory />
