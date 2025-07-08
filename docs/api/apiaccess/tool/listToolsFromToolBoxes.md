---
name: listToolsFromToolBoxes
cbbaseinfo:
  description: Lists all tools from the specified toolboxes with their capabilities and descriptions.
cbparameters:
  parameters:
    - name: toolBoxes
      typeName: array
      description: Array of toolbox names to list tools from.
  returns:
    signatureTypeName: Promise<ListToolsFromToolBoxesResponse>
    description: A promise that resolves with a `ListToolsFromToolBoxesResponse` object containing tools from the specified toolboxes.
data:
  name: listToolsFromToolBoxes
  category: tool
  link: listToolsFromToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `ListToolsFromToolBoxesResponse` object with the following properties:

- **`type`** (string): Always "listToolsFromToolBoxesResponse".
- **`data`** (array, optional): Array of tools from the specified toolboxes with their details.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: List tools from specific toolboxes
const tools = await codebolt.mcp.listToolsFromToolBoxes(['filesystem', 'sqlite']);
console.log("Response type:", tools.type); // "listToolsFromToolBoxesResponse"
console.log("Tools found:", tools.data);

// Example 2: List tools with detailed processing
const result = await codebolt.mcp.listToolsFromToolBoxes(['filesystem']);
if (result.success && result.data) {
    console.log("✅ Tools listed successfully");
    console.log(`Found ${result.data.length} tools`);
    
    result.data.forEach(tool => {
        console.log(`- ${tool.name}: ${tool.description || 'No description'}`);
    });
} else {
    console.error("❌ Failed to list tools:", result.error);
}

// Example 3: Multiple toolboxes
const multipleToolboxes = await codebolt.mcp.listToolsFromToolBoxes([
    'filesystem', 
    'sqlite', 
    'web-scraper'
]);

if (multipleToolboxes.success && multipleToolboxes.data) {
    console.log("✅ Tools from multiple toolboxes retrieved");
    
    // Group tools by toolbox
    const toolsByBox = {};
    multipleToolboxes.data.forEach(tool => {
        const toolboxName = tool.toolbox || 'unknown';
        if (!toolsByBox[toolboxName]) {
            toolsByBox[toolboxName] = [];
        }
        toolsByBox[toolboxName].push(tool);
    });
    
    Object.entries(toolsByBox).forEach(([toolbox, tools]) => {
        console.log(`\n${toolbox}: ${tools.length} tools`);
        tools.forEach(tool => console.log(`  - ${tool.name}`));
    });
}

// Example 4: Error handling
try {
    const response = await codebolt.mcp.listToolsFromToolBoxes(['invalid-toolbox']);
    
    if (response.success && response.data) {
        console.log('✅ Tools listed successfully');
        console.log('Tools:', response.data);
    } else {
        console.error('❌ Failed to list tools:', response.error);
    }
} catch (error) {
    console.error('Error listing tools:', error);
}
```

### Notes

- The `toolBoxes` parameter must be an array of valid toolbox names.
- Only enabled and configured toolboxes will return their tools.
- The response includes all available tools from the specified toolboxes with their metadata.
- Use this method to discover what tools are available before executing them.
- This operation communicates with the system via WebSocket for real-time processing.
