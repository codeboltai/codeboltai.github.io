---
name: executeTool
cbbaseinfo:
  description: Executes a specific tool from a configured toolbox with provided parameters.
cbparameters:
  parameters:
    - name: toolbox
      typeName: string
      description: The name of the toolbox containing the tool.
    - name: toolName
      typeName: string
      description: The name of the tool to execute.
    - name: params
      typeName: object
      description: Parameters to pass to the tool execution (must match tool's input schema).
  returns:
    signatureTypeName: Promise<ExecuteToolResponse>
    description: A promise that resolves with an `ExecuteToolResponse` object containing the tool execution result.
data:
  name: executeTool
  category: tool
  link: executeTool.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `ExecuteToolResponse` object with the following properties:

- **`type`** (string): Always "executeToolResponse".
- **`toolName`** (string, optional): The name of the executed tool.
- **`serverName`** (string, optional): The name of the server/toolbox that executed the tool.
- **`params`** (object, optional): The parameters that were passed to the tool.
- **`data`** (array or object, optional): The result data from the tool execution. Can be `[boolean, any]` or `{ error?: string }`.
- **`result`** (any, optional): The execution result.
- **`status`** (string, optional): The execution status. Possible values: 'pending', 'executing', 'success', 'error', 'rejected'.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Execute a filesystem tool
const result = await codebolt.mcp.executeTool('filesystem', 'read_file', {
    path: './index.js'
});
console.log("Response type:", result.type); // "executeToolResponse"
console.log("Tool name:", result.toolName); // "filesystem--read_file"
console.log("Execution result:", result.data);

// Example 2: Execute tool with error handling
const fileResult = await codebolt.mcp.executeTool('filesystem', 'write_file', {
    path: './output.txt',
    content: 'Hello World'
});

if (fileResult.success && fileResult.status === 'success') {
    console.log("✅ File written successfully");
    console.log("Result:", fileResult.data);
} else {
    console.error("❌ Tool execution failed:", fileResult.error);
    console.error("Status:", fileResult.status);
}

// Example 3: Database tool execution
try {
    const dbResult = await codebolt.mcp.executeTool('sqlite', 'list_tables', {
        random_string: 'test'
    });
    
    if (dbResult.success && dbResult.data) {
        console.log('✅ Database query executed successfully');
        console.log('Tables:', dbResult.data);
        console.log('Server:', dbResult.serverName);
    } else {
        console.error('❌ Database query failed:', dbResult.error);
    }
} catch (error) {
    console.error('Error executing database tool:', error);
}

// Example 4: Multiple tool executions
const tools = [
    { toolbox: 'filesystem', tool: 'read_file', params: { path: './package.json' } },
    { toolbox: 'sqlite', tool: 'list_tables', params: { random_string: 'test' } }
];

for (const { toolbox, tool, params } of tools) {
    const result = await codebolt.mcp.executeTool(toolbox, tool, params);
    if (result.success) {
        console.log(`✅ ${toolbox}--${tool}: Success`);
    } else {
        console.log(`❌ ${toolbox}--${tool}: Failed - ${result.error}`);
    }
}
```

### Notes

- The `toolbox` parameter must be the name of an enabled and configured toolbox.
- The `toolName` parameter must be a valid tool within the specified toolbox.
- The `params` object must match the input schema expected by the target tool.
- Check the `status` property to determine if the tool execution completed successfully.
- This operation communicates with the system via WebSocket for real-time processing.

```js
// Read a file using filesystem toolbox
const fsResult = await codebolt.tools.executeTool('filesystem', 'read_file', {
  path: './index.js'
});

console.log('✅ Tool execution result:', JSON.stringify(fsResult, null, 2));
```

```js
// Different tools require different parameters

// Filesystem tools
await codebolt.tools.executeTool('filesystem', 'read_file', {
  path: './file.txt'
});

await codebolt.tools.executeTool('filesystem', 'write_file', {
  path: './output.txt',
  content: 'Hello World'
});

// SQLite tools
await codebolt.tools.executeTool('sqlite', 'list_tables', {
  random_string: 'test'
});

await codebolt.tools.executeTool('sqlite', 'read_query', {
  query: 'SELECT * FROM users LIMIT 5'
});