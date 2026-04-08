---
name: getMcpTools
cbbaseinfo:
  description: Gets MCP tools from the specified servers.
cbparameters:
  parameters:
    - name: mcpNames
      typeName: "string[]"
      description: Array of MCP server names to get tools from. If empty, gets tools from all servers.
      optional: true
  returns:
    signatureTypeName: "Promise<GetMcpToolsResponse>"
    description: A promise that resolves with MCP tools from specified servers.
    typeArgs: []
data:
  name: getMcpTools
  category: mcp
  link: getMcpTools.md
---
# getMcpTools

```typescript
codebolt.mcp.getMcpTools(mcpNames: string[]): Promise<GetMcpToolsResponse>
```

Gets MCP tools from the specified servers.
### Parameters

- **`mcpNames`** (string[]): Array of MCP server names to get tools from. If empty, gets tools from all servers.

### Returns

- **`Promise<GetMcpToolsResponse>`**: A promise that resolves with MCP tools from specified servers.

### Example 1: Get Tools from Specific Servers

```js
// Get tools from specific MCP servers
const tools = await codebolt.mcp.getMcpTools(['filesystem', 'database']);
console.log('Tools from specified servers:', tools);

// Response structure:
// {
//   tools: [
//     { name: 'readFile', server: 'filesystem', ... },
//     { name: 'writeFile', server: 'filesystem', ... },
//     { name: 'executeQuery', server: 'database', ... }
//   ]
// }
```

### Example 2: Get Tools from All Servers

```js
// Get tools from all available servers (no parameter)
const allTools = await codebolt.mcp.getMcpTools();
console.log('All MCP tools:', allTools);

// Equivalent to:
// const allTools = await codebolt.mcp.getMcpTools([]);
```

### Example 3: Selective Server Tool Discovery

```js
// Discover tools from specific server types
async function discoverToolsByServer(serverNames) {
  console.log(`Discovering tools from: ${serverNames.join(', ')}`);

  const response = await codebolt.mcp.getMcpTools(serverNames);

  const toolsByServer = {};

  response.tools.forEach(tool => {
    const server = tool.server || 'unknown';
    if (!toolsByServer[server]) {
      toolsByServer[server] = [];
    }
    toolsByServer[server].push({
      name: tool.name,
      description: tool.description
    });
  });

  return toolsByServer;
}

// Usage
const fsTools = await discoverToolsByServer(['filesystem']);
const dbTools = await discoverToolsByServer(['database']);
const combined = await discoverToolsByServer(['filesystem', 'database']);
```

### Example 4: Validate Server Tools

```js
// Check if specific tools exist on servers
async function validateServerTools(servers, requiredTools) {
  const response = await codebolt.mcp.getMcpTools(servers);

  const availableTools = new Set(response.tools.map(t => t.name));
  const validation = {};

  requiredTools.forEach(toolName => {
    validation[toolName] = availableTools.has(toolName);
  });

  console.log('Tool validation:', validation);

  const allAvailable = Object.values(validation).every(v => v);
  return {
    allAvailable,
    validation,
    totalTools: response.tools.length
  };
}

// Usage
const result = await validateServerTools(
  ['filesystem'],
  ['readFile', 'writeFile', 'deleteFile']
);

console.log('All required tools available:', result.allAvailable);
```

### Example 5: Compare Server Capabilities

```js
// Compare tools available on different servers
async function compareServers(serverNames) {
  const comparisons = {};

  for (const server of serverNames) {
    const response = await codebolt.mcp.getMcpTools([server]);

    const tools = response.tools
      .filter(t => t.server === server)
      .map(t => t.name);

    comparisons[server] = {
      toolCount: tools.length,
      tools: tools
    };
  }

  console.log('Server comparison:');
  Object.entries(comparisons).forEach(([server, info]) => {
    console.log(`${server}: ${info.toolCount} tools`);
  });

  return comparisons;
}

// Usage
const comparison = await compareServers([
  'filesystem',
  'database',
  'http-client'
]);
```

### Example 6: Dynamic Tool Loading

```js
// Load tools dynamically based on availability
async function loadToolCapabilities(requiredCapabilities) {
  const servers = Object.keys(requiredCapabilities);

  console.log('Loading tools from servers:', servers);

  const response = await codebolt.mcp.getMcpTools(servers);

  const capabilities = {};

  servers.forEach(server => {
    const serverTools = response.tools.filter(t => t.server === server);
    const required = requiredCapabilities[server];

    capabilities[server] = {
      available: serverTools.map(t => t.name),
      required: required,
      satisfied: required.every(r => serverTools.some(t => t.name === r))
    };
  });

  console.log('Capability loading complete');

  return capabilities;
}

// Usage
const capabilities = await loadToolCapabilities({
  filesystem: ['readFile', 'writeFile', 'listDirectory'],
  database: ['executeQuery', 'beginTransaction'],
  'http-client': ['get', 'post', 'put']
});

// Check if all capabilities are satisfied
const allSatisfied = Object.values(capabilities).every(c => c.satisfied);
console.log('All capabilities satisfied:', allSatisfied);
```

### Explanation

The `codebolt.mcp.getMcpTools(mcpNames)` function retrieves tools from specified MCP servers. This allows selective tool discovery rather than getting all tools from all servers.

**Key Points:**
- **Optional Parameter**: Can specify servers or get all
- **Selective Discovery**: More efficient than getting all tools
- **Server-Specific**: Returns tools only from specified servers
- **Flexible**: Use with specific servers or without parameter for all

**Parameters:**
- **mcpNames** (string[], optional): Array of server names
  - If provided: Gets tools only from these servers
  - If omitted/empty: Gets tools from all servers

**Return Value Structure:**
```js
{
  tools: [
    {
      name: string,           // Tool name
      server: string,         // Source server
      description?: string,   // Tool description
      parameters?: object     // Parameter schema
    }
  ]
}
```

**Common Use Cases:**
- Getting tools from specific servers
- Selective tool discovery
- Server capability validation
- Comparing server features
- Optimized tool loading
- Building server-specific registries

**Best Practices:**
1. Specify servers when possible for better performance
2. Use for targeted tool discovery
3. Combine with server validation
4. Cache results for frequently used servers
5. Update periodically for changes

**Usage Patterns:**

**Specific Servers:**
```js
// Get tools from specific servers
const tools = await codebolt.mcp.getMcpTools(['filesystem', 'database']);
```

**All Servers:**
```js
// Get tools from all servers
const tools = await codebolt.mcp.getMcpTools();
// or
const tools = await codebolt.mcp.getMcpTools([]);
```

**Single Server:**
```js
// Get tools from one server
const tools = await codebolt.mcp.getMcpTools(['filesystem']);
```

**Typical Workflow:**
```js
// 1. Define required servers
const servers = ['filesystem', 'database'];

// 2. Get tools from those servers
const response = await codebolt.mcp.getMcpTools(servers);

// 3. Filter by server
const fsTools = response.tools.filter(t => t.server === 'filesystem');

// 4. Use tools
if (fsTools.length > 0) {
  console.log('Filesystem tools available');
}
```

**Performance Considerations:**
- Faster than getAllMcpTools() for specific servers
- Reduces unnecessary data transfer
- Use when you know which servers you need
- Consider caching for repeated access

**Comparison with Other Functions:**
- `getAllMcpTools()`: Gets tools from ALL enabled servers
- `getMcpTools([server])`: Gets tools from SPECIFIED servers
- `getTools()`: Gets detailed info about specific tools

**Related Functions:**
- `getEnabledMCPServers()`: Check which servers are enabled
- `getAllMcpTools()`: Get all tools from all servers
- `executeTool()`: Execute a discovered tool
- `getTools()`: Get detailed tool information

**Notes:**
- Server must be enabled to return tools
- Empty array returns tools from all servers
- Tools are returned regardless of permissions
- Use for discovery, not execution
- More efficient than getAllMcpTools() for specific needs