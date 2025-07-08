---
name: getTools
cbbaseinfo:
  description: Gets detailed information about specific tools from configured toolboxes.
cbparameters:
  parameters:
    - name: tools
      typeName: array
      description: Array of objects containing toolbox and tool name pairs. Each object should have `toolbox` and `toolName` properties.
  returns:
    signatureTypeName: Promise<GetToolsResponse>
    description: A promise that resolves with a `GetToolsResponse` object containing detailed information about the requested tools.
data:
  name: getTools
  category: tool
  link: getTools.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetToolsResponse` object with the following properties:

- **`type`** (string): Always "getToolsResponse".
- **`tools`** (array, optional): Array of tool objects with detailed information including name, description, and parameters.
- **`serverName`** (string, optional): The name of the server/toolbox that provided the tools.
- **`data`** (array, optional): Additional data about the tools.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

Each tool in the `tools` array has the following structure:
- **`name`** (string): The name of the tool.
- **`description`** (string): A detailed description of the tool's functionality.
- **`parameters`** (object): An object specifying the parameters the tool accepts.

### Examples

```javascript
// Example 1: Get information about specific tools
const toolsInfo = await codebolt.mcp.getTools([
    { toolbox: 'filesystem', toolName: 'read_file' },
    { toolbox: 'sqlite', toolName: 'list_tables' }
]);
console.log("Response type:", toolsInfo.type); // "getToolsResponse"
console.log("Tools information:", toolsInfo.tools);

// Example 2: Get tools with detailed processing
const result = await codebolt.mcp.getTools([
    { toolbox: 'filesystem', toolName: 'write_file' }
]);

if (result.success && result.tools) {
    console.log("✅ Tools information retrieved successfully");
    
    result.tools.forEach(tool => {
        console.log(`Tool: ${tool.name}`);
        console.log(`Description: ${tool.description}`);
        console.log(`Parameters:`, tool.parameters);
    });
} else {
    console.error("❌ Failed to get tools information:", result.error);
}

// Example 3: Multiple toolbox tools
const multipleTools = await codebolt.mcp.getTools([
    { toolbox: 'filesystem', toolName: 'read_file' },
    { toolbox: 'filesystem', toolName: 'write_file' },
    { toolbox: 'sqlite', toolName: 'read_query' }
]);

if (multipleTools.success && multipleTools.tools) {
    console.log(`✅ Retrieved information for ${multipleTools.tools.length} tools`);
    console.log("Server:", multipleTools.serverName);
    console.log("Additional data:", multipleTools.data);
}

// Example 4: Error handling
try {
    const response = await codebolt.mcp.getTools([
        { toolbox: 'invalid-toolbox', toolName: 'invalid-tool' }
    ]);
    
    if (response.success && response.tools) {
        console.log('✅ Tools retrieved successfully');
        console.log('Tools:', response.tools);
    } else {
        console.error('❌ Failed to retrieve tools:', response.error);
    }
} catch (error) {
    console.error('Error getting tools information:', error);
}
```

### Notes

- The `tools` parameter must be an array of objects with `toolbox` and `toolName` properties.
- Each toolbox must be enabled and configured before requesting tool information.
- The response includes detailed parameter schemas for each tool, useful for understanding how to call them.
- Use this method to understand tool capabilities before executing them with `executeTool`.
- This operation communicates with the system via WebSocket for real-time processing.