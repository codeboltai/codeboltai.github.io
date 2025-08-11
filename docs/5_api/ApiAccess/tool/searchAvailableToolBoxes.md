---
name: searchAvailableToolBoxes
cbbaseinfo:
  description: Searches available toolboxes by name or description using a query string.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: Search string to match against toolbox metadata (name, description, tags).
  returns:
    signatureTypeName: Promise<SearchAvailableToolBoxesResponse>
    description: A promise that resolves with a `SearchAvailableToolBoxesResponse` object containing matching toolbox configurations.
data:
  name: searchAvailableToolBoxes
  category: tool
  link: searchAvailableToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `SearchAvailableToolBoxesResponse` object with the following properties:

- **`type`** (string): Always "searchAvailableToolBoxesResponse".
- **`data`** (object, optional): Object containing search results and metadata.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Search for filesystem-related toolboxes
const results = await codebolt.mcp.searchAvailableToolBoxes("filesystem");
console.log("Response type:", results.type); // "searchAvailableToolBoxesResponse"
console.log("Search results:", results.data);

// Example 2: Search with result processing
const searchResult = await codebolt.mcp.searchAvailableToolBoxes("database");
if (searchResult.success && searchResult.data) {
    console.log("✅ Search completed successfully");
    console.log("Found toolboxes:", searchResult.data);
    
    // Process search results if they're in array format
    if (Array.isArray(searchResult.data)) {
        searchResult.data.forEach(toolbox => {
            console.log(`- ${toolbox.name}: ${toolbox.description || 'No description'}`);
        });
    }
} else {
    console.error("❌ Search failed:", searchResult.error);
}

// Example 3: Multiple search queries
const queries = ["sqlite", "web scraping", "analytics"];

for (const query of queries) {
    try {
        const result = await codebolt.mcp.searchAvailableToolBoxes(query);
        
        if (result.success && result.data) {
            console.log(`✅ Query "${query}": Found results`);
            console.log(`   Data:`, result.data);
        } else {
            console.log(`❌ Query "${query}": No results found`);
        }
    } catch (error) {
        console.error(`Error searching for "${query}":`, error);
    }
}

// Example 4: Error handling
try {
    const response = await codebolt.mcp.searchAvailableToolBoxes("machine learning");
    
    if (response.success && response.data) {
        console.log('✅ Search completed successfully');
        console.log('Results:', response.data);
    } else {
        console.error('❌ Search failed:', response.error);
    }
} catch (error) {
    console.error('Error performing search:', error);
}
```

### Notes

- The `query` parameter should be a descriptive string related to the functionality you're looking for.
- Search results are returned in the `data` property and may contain toolbox metadata and match scores.
- Use this method to discover available toolboxes before configuring or using them.
- This operation communicates with the system via WebSocket for real-time processing.