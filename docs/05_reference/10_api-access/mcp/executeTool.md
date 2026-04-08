---
name: executeTool
cbbaseinfo:
  description: Executes a specific tool with provided parameters.
cbparameters:
  parameters:
    - name: toolbox
      typeName: string
      description: The name of the toolbox/server containing the tool.
    - name: toolName
      typeName: string
      description: The name of the tool to execute.
    - name: params
      typeName: ToolParameters
      description: "Parameters to pass to the tool (key-value pairs)."
  returns:
    signatureTypeName: "Promise<ExecuteToolResponse>"
    description: A promise that resolves with the tool execution result.
    typeArgs: []
data:
  name: executeTool
  category: mcp
  link: executeTool.md
---
# executeTool

```typescript
codebolt.mcp.executeTool(toolbox: string, toolName: string, params: ToolParameters): Promise<ExecuteToolResponse>
```

Executes a specific tool with provided parameters.
### Parameters

- **`toolbox`** (string): The name of the toolbox/server containing the tool.
- **`toolName`** (string): The name of the tool to execute.
- **`params`** (ToolParameters): Parameters to pass to the tool (key-value pairs).

### Returns

- **`Promise<ExecuteToolResponse>`**: A promise that resolves with the tool execution result.

### Example 1: Basic Tool Execution

```js
// Execute a simple tool
const result = await codebolt.mcp.executeTool(
  'filesystem',
  'readFile',
  { path: '/path/to/file.txt' }
);

console.log('Tool execution result:', result);

// Response structure:
// {
//   success: true,
//   result: { /* tool-specific data */ },
//   error?: string
// }
```

### Example 2: File Operations

```js
// Execute file system tools
async function fileOperations(filePath, content) {
  // Write file
  const writeResult = await codebolt.mcp.executeTool(
    'filesystem',
    'writeFile',
    { path: filePath, content: content }
  );

  console.log('Write result:', writeResult);

  // Read file back
  const readResult = await codebolt.mcp.executeTool(
    'filesystem',
    'readFile',
    { path: filePath }
  );

  console.log('Read result:', readResult);

  return { writeResult, readResult };
}

// Usage
const results = await fileOperations('/tmp/test.txt', 'Hello, World!');
```

### Example 3: Database Operations

```js
// Execute database tools
async function databaseQuery(query, params) {
  const result = await codebolt.mcp.executeTool(
    'database',
    'executeQuery',
    {
      query: query,
      parameters: params
    }
  );

  if (result.success) {
    console.log('Query results:', result.result);
    return result.result;
  } else {
    console.error('Query failed:', result.error);
    throw new Error(result.error);
  }
}

// Usage
const data = await databaseQuery(
  'SELECT * FROM users WHERE id = ?',
  [123]
);
```

### Example 4: API Request Tools

```js
// Execute HTTP request tools
async function makeRequest(url, method, body) {
  const result = await codebolt.mcp.executeTool(
    'http-client',
    'request',
    {
      url: url,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : undefined
    }
  );

  console.log('Request completed:', result.success);
  console.log('Response status:', result.result?.status);
  console.log('Response data:', result.result?.data);

  return result;
}

// Usage
const response = await makeRequest(
  'https://api.example.com/users',
  'POST',
  { name: 'John', email: 'john@example.com' }
);
```

### Example 5: Tool Execution with Error Handling

```js
// Execute tool with comprehensive error handling
async function safeExecuteTool(toolbox, toolName, params, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Execution attempt ${attempt}: ${toolbox}.${toolName}`);

      const result = await codebolt.mcp.executeTool(
        toolbox,
        toolName,
        params
      );

      if (result.success) {
        console.log('Tool executed successfully');
        return {
          success: true,
          data: result.result,
          attempts: attempt
        };
      } else {
        console.error(`Tool execution failed: ${result.error}`);

        if (attempt === retries) {
          return {
            success: false,
            error: result.error,
            attempts: attempt
          };
        }
      }
    } catch (error) {
      console.error(`Attempt ${attempt} error:`, error.message);

      if (attempt === retries) {
        return {
          success: false,
          error: error.message,
          attempts: attempt
        };
      }
    }

    // Wait before retry
    await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
  }
}

// Usage
const result = await safeExecuteTool(
  'filesystem',
  'readFile',
  { path: '/tmp/file.txt' }
);

if (result.success) {
  console.log('File content:', result.data);
} else {
  console.error('Failed to read file:', result.error);
}
```

### Example 6: Batch Tool Execution

```js
// Execute multiple tools in sequence
async function executeToolWorkflow(workflowSteps) {
  const results = [];

  for (let i = 0; i < workflowSteps.length; i++) {
    const step = workflowSteps[i];
    console.log(`Executing step ${i + 1}/${workflowSteps.length}`);

    try {
      const result = await codebolt.mcp.executeTool(
        step.toolbox,
        step.toolName,
        step.params
      );

      results.push({
        step: i + 1,
        tool: step.toolName,
        success: result.success,
        result: result.result,
        error: result.error
      });

      // Stop if step failed
      if (!result.success && step.stopOnFailure) {
        console.error(`Workflow stopped at step ${i + 1}`);
        break;
      }
    } catch (error) {
      results.push({
        step: i + 1,
        tool: step.toolName,
        success: false,
        error: error.message
      });
    }
  }

  return results;
}

// Usage
const workflowResults = await executeToolWorkflow([
  {
    toolbox: 'filesystem',
    toolName: 'writeFile',
    params: { path: '/tmp/data.json', content: '{"test": true}' },
    stopOnFailure: true
  },
  {
    toolbox: 'filesystem',
    toolName: 'readFile',
    params: { path: '/tmp/data.json' },
    stopOnFailure: true
  },
  {
    toolbox: 'json-parser',
    toolName: 'parse',
    params: { data: '{{previous_result}}' }, // Would need substitution
    stopOnFailure: false
  }
]);

console.log('Workflow results:', workflowResults);
```

### Explanation

The `codebolt.mcp.executeTool(toolbox, toolName, params)` function executes a specific tool from an MCP server with provided parameters. This is the primary function for interacting with MCP tools.

**Key Points:**
- **Three Parameters**: toolbox name, tool name, and parameters
- **Typed Parameters**: Parameters must match tool's expected schema
- **Promise Return**: Returns execution result asynchronously
- **Error Handling**: Check success property for errors

**Parameters:**
1. **toolbox** (string): The MCP server/toolbox name
2. **toolName** (string): The specific tool to execute
3. **params** (ToolParameters): Key-value pairs of parameters

**Return Value Structure:**
```js
{
  success: boolean,        // Whether execution succeeded
  result: any,            // Tool-specific result data
  error?: string,         // Error message if failed
  metadata?: {            // Optional execution metadata
    executionTime: number,
    toolbox: string,
    toolName: string
  }
}
```

**Common Use Cases:**
- File system operations
- Database queries
- API requests
- Data processing
- System operations
- Custom business logic

**Best Practices:**
1. Validate parameters before execution
2. Check success property before using results
3. Implement error handling and retry logic
4. Use type-safe parameter objects
5. Log execution results for debugging
6. Handle tool-specific error messages

**Typical Workflow:**
```js
// 1. Prepare parameters
const params = { path: '/file.txt', encoding: 'utf-8' };

// 2. Execute tool
const result = await codebolt.mcp.executeTool('filesystem', 'readFile', params);

// 3. Check success
if (result.success) {
  // 4. Use result
  console.log('File content:', result.result);
} else {
  // 5. Handle error
  console.error('Execution failed:', result.error);
}
```

**Tool Categories:**
- **File System**: readFile, writeFile, deleteFile, listDirectory
- **Database**: executeQuery, transaction, bulkInsert
- **HTTP**: request, get, post, put, delete
- **Data Processing**: parse, transform, validate
- **Utilities**: hash, encrypt, compress

**Error Scenarios:**
- Tool not found
- Invalid parameters
- Server not available
- Permission denied
- Timeout
- Network errors

**Advanced Patterns:**
- Batch execution workflows
- Transaction management
- Result chaining
- Parallel execution
- Fallback strategies

**Related Functions:**
- `getTools()`: Get tool information and schema
- `getMcpTools()`: List available tools
- `configureMcpTool()`: Configure tool settings
- `getEnabledMCPServers()`: Check server availability

**Notes:**
- Tool availability depends on enabled servers
- Parameter validation is tool-specific
- Some tools may have side effects
- Execution time varies by tool
- Check tool documentation for parameter format
- Consider timeout for long-running operations
- Some tools may require special permissions