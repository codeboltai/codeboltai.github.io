---
name: getEnabledToolBoxes
cbbaseinfo:
  description: Retrieves the list of currently enabled toolboxes that are available for use.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetEnabledToolBoxesResponse>
    description: A promise that resolves with a `GetEnabledToolBoxesResponse` object containing the enabled toolbox configurations.
data:
  name: getEnabledToolBoxes
  category: tool
  link: getEnabledToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetEnabledToolBoxesResponse` object with the following properties:

- **`type`** (string): Always "getEnabledToolBoxesResponse".
- **`data`** (array, optional): Array of enabled toolbox configurations with their details.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Get all enabled toolboxes
const enabledToolBoxes = await codebolt.mcp.getEnabledToolBoxes();
console.log("Response type:", enabledToolBoxes.type); // "getEnabledToolBoxesResponse"
console.log("Enabled toolboxes:", enabledToolBoxes.data);

// Example 2: Check specific toolbox status
const result = await codebolt.mcp.getEnabledToolBoxes();
if (result.success && result.data) {
    console.log("✅ Successfully retrieved enabled toolboxes");
    console.log("Number of enabled toolboxes:", result.data.length);
    
    result.data.forEach(toolbox => {
        console.log(`- ${toolbox.name || 'Unknown'}: ${toolbox.description || 'No description'}`);
    });
} else {
    console.error("❌ Failed to get enabled toolboxes:", result.error);
}

// Example 3: Error handling
try {
    const response = await codebolt.mcp.getEnabledToolBoxes();
    
    if (response.success && response.data) {
        console.log('✅ Enabled toolboxes retrieved successfully');
        console.log('Toolboxes:', response.data);
    } else {
        console.error('❌ Failed to retrieve toolboxes:', response.error);
    }
} catch (error) {
    console.error('Error getting enabled toolboxes:', error);
}
```

### Notes

- This method requires no parameters and returns all currently enabled toolboxes.
- The `data` array contains toolbox configurations that are currently active and available for use.
- Use this method to check which toolboxes are available before attempting to use their tools.
- This operation communicates with the system via WebSocket for real-time processing.