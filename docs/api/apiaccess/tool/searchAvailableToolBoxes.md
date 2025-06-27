---
name: searchAvailableToolBoxes
cbbaseinfo:
  description: Searches available toolboxes by name or description using a query string.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: Search string to match against toolbox metadata (name, description, tags)
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an array of matching toolbox configurations
    typeArgs:
      - type: array
data:
  name: searchAvailableToolBoxes
  category: tool
  link: searchAvailableToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>


### Example
```js
// Search for filesystem-related toolboxes
const results = await codeboltMCP.searchAvailableToolBoxes("filesystem");
console.log("Search Results:", results);
console.log("Found toolboxes:", results?.length || 0);

// Display search results
results?.forEach(toolbox => {
  console.log(`\nFound: ${toolbox.name}`);
  if (toolbox.description) console.log(`  Description: ${toolbox.description}`);
  if (toolbox.version) console.log(`  Version: ${toolbox.version}`);
  if (toolbox.matchScore) console.log(`  Match Score: ${toolbox.matchScore}`);
});

// Search for data processing tools
const dataResults = await codeboltMCP.searchAvailableToolBoxes("data processing");
console.log("Data processing toolboxes found:", dataResults?.map(tb => tb.name) || []);
```

### Advanced Search Examples
```js
// Search with different query types
const queries = ["sqlite", "database", "web scraping", "analytics"];

for (const query of queries) {
  try {
    const searchResults = await codeboltMCP.searchAvailableToolBoxes(query);
    console.log(`\nQuery: "${query}" - Found ${searchResults?.length || 0} toolboxes`);
    searchResults?.slice(0, 3).forEach(tb => {
      console.log(`  - ${tb.name}: ${tb.description || 'No description'}`);
    });
  } catch (error) {
    console.error(`Search failed for "${query}":`, error.message);
  }
}
```

### Error Handling
```js
try {
  const results = await codeboltMCP.searchAvailableToolBoxes("filesystem");
  if (results && results.length > 0) {
    console.log("Search successful, found results");
  } else {
    console.log("No toolboxes found matching the query");
  }
} catch (error) {
  console.error("Toolbox search failed:", error.message);
}
```