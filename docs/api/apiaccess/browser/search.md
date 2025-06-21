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
