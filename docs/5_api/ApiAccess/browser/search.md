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

### Response Structure

The method returns a Promise that resolves to a `BrowserActionResponseData` object with the following properties:

- **`type`** (string): Always "searchResponse".
- **`payload`** (object, optional): Contains the response data including:
  - **`action`** (string, optional): The action that was performed
  - **`success`** (boolean, optional): Indicates if the search was successful
  - **`content`** (string, optional): Additional content information
  - **`viewport`** (object, optional): Current viewport information
- **`eventId`** (string, optional): Event identifier for the search action
- **`success`** (boolean, optional): Indicates if the operation was successful
- **`message`** (string, optional): A message with additional information
- **`error`** (string, optional): Error details if the operation failed
- **`messageId`** (string, optional): A unique identifier for the message
- **`threadId`** (string, optional): The thread identifier

### Example

```js
// Navigate to a page with a search feature
await codebolt.browser.goToPage("https://example.com");
await new Promise(resolve => setTimeout(resolve, 2000));

// Perform a search using the search input element
const searchResult = await codebolt.browser.search("search-input", "test query");
console.log('✅ Search performed:', searchResult);

// Check if the search was successful
if (searchResult.success) {
  console.log('Search query executed successfully');
} else {
  console.error('Search failed:', searchResult.error);
}

// Example with different search queries
await codebolt.browser.search("searchBox", "codebolt browser automation");
await codebolt.browser.search("q", "JavaScript tutorials");
```

### Notes

- The `elementid` parameter must correspond to a valid search input element on the page
- The search function types the query into the specified element and may trigger search automatically
- This method is useful for automating search functionality on websites
