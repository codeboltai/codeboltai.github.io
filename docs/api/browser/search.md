---
name: search
cbbaseinfo:
  description: Performs a search on the current page using a specified query.
cbparameters:
  parameters:
    - name: elementid
      typeName: string
      description: The ID of the element to perform the search in.
    - name: query
      typeName: string
      description: The search query.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the search results.
    typeArgs:
      - type: intrinsic
        name: unknown
data:
  name: search
  category: browser
  link: search.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Examples: 

```js

// Perform a search using the search box element with ID "searchBox" and query "example query"
const searchResults = await codebolt.browser.search("searchBox", "example query");

// Process the search results (e.g., validate or extract data)
console.log(searchResults);

```

### Explanation: 

The codebolt.browser.search(elementid: string, query: string) function is used to perform a search on the current page using a specified query. This function allows automation scripts to search for specific content or elements within the page.