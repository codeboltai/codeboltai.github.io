---
name: search
cbbaseinfo:
  description: Performs a search on the current page using a specified query.
cbparameters:
  parameters:
    - name: elementid
      typeName: string
      description: The ID of the search input element.
    - name: query
      typeName: string
      description: The search query.
  returns:
    signatureTypeName: Promise<SearchResponse>
    description: A promise that resolves with the search results.
    typeArgs: []
data:
  name: search
  category: browser
  link: search.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js
// Navigate to a page with a search feature
await codebolt.browser.goToPage("https://example.com");
await new Promise(resolve => setTimeout(resolve, 2000));

// Perform a search using the search input element
const searchResult = await codebolt.browser.search("search-input", "test query");
console.log('✅ Search performed:', searchResult);

// Example with different search queries
await codebolt.browser.search("searchBox", "codebolt browser automation");
await codebolt.browser.search("q", "JavaScript tutorials");
```

### Important Note

The `search()` function requires the target search input element to have a specific ID and be present on the page. Interactive tests like `search()` require specific element IDs which may not be available on all pages. Ensure that the search input element exists and is functional before calling this function.

### Explanation

The `codebolt.browser.search(elementid, query)` function performs a search operation on the current page using a specified search input element and query. The function takes two parameters: an element ID (string) identifying the search input field and a query (string) containing the search terms. It returns a promise that resolves when the search action is complete. This function is useful for automating search operations on websites, testing search functionality, and performing content discovery tasks through programmatic search queries.