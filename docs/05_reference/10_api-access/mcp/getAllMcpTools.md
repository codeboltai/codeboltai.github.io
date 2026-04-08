---
name: getAllMcpTools
cbbaseinfo:
  description: Gets all tools from all enabled MCP servers.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<GetAllMCPToolsResponse>"
    description: A promise that resolves with all tools from enabled servers.
    typeArgs: []
data:
  name: getAllMcpTools
  category: mcp
  link: getAllMcpTools.md
---
# getAllMcpTools

```typescript
codebolt.mcp.getAllMcpTools(): Promise<GetAllMCPToolsResponse>
```

Gets all tools from all enabled MCP servers.
### Returns

- **`Promise<GetAllMCPToolsResponse>`**: A promise that resolves with all tools from enabled servers.

### Example 1: Get All Available Tools

```js
// Get all tools from all enabled servers
const allTools = await codebolt.mcp.getAllMcpTools();
console.log('All available tools:', allTools);

// Response structure:
// {
//   tools: [
//     {
//       name: 'readFile',
//       server: 'filesystem',
//       description: 'Read file contents',
//       parameters: { /* schema */ }
//     },
//     // ... more tools
//   ]
// }
```

### Example 2: Discover Tool Categories

```js
// Categorize tools by server
async function categorizeTools() {
  const response = await codebolt.mcp.getAllMcpTools();

  const categories = {};

  response.tools.forEach(tool => {
    const server = tool.server || 'unknown';
    if (!categories[server]) {
      categories[server] = [];
    }
    categories[server].push(tool);
  });

  console.log('Tool categories:');
  Object.entries(categories).forEach(([server, tools]) => {
    console.log(`\n${server}:`);
    tools.forEach(tool => {
      console.log(`  - ${tool.name}: ${tool.description}`);
    });
  });

  return categories;
}

// Usage
const categories = await categorizeTools();
```

### Example 3: Search for Specific Tools

```js
// Find tools by name or description
async function findTools(keyword) {
  const response = await codebolt.mcp.getAllMcpTools();

  const matched = response.tools.filter(tool => {
    const name = tool.name.toLowerCase();
    const desc = tool.description?.toLowerCase() || '';
    const search = keyword.toLowerCase();

    return name.includes(search) || desc.includes(search);
  });

  console.log(`Tools matching "${keyword}":`, matched);

  return matched;
}

// Usage
const fileTools = await findTools('file');
const dbTools = await findTools('database');
const httpTools = await findTools('http');
```

### Example 4: Build Tool Registry

```js
// Create a searchable tool registry
async function buildToolRegistry() {
  const response = await codebolt.mcp.getAllMcpTools();

  const registry = {
    byName: {},
    byServer: {},
    all: response.tools
  };

  // Index by name
  response.tools.forEach(tool => {
    registry.byName[tool.name] = tool;

    // Index by server
    const server = tool.server || 'unknown';
    if (!registry.byServer[server]) {
      registry.byServer[server] = [];
    }
    registry.byServer[server].push(tool);
  });

  console.log('Tool registry built:', Object.keys(registry.byName).length, 'tools');

  return registry;
}

// Usage
const registry = await buildToolRegistry();

// Find tool by name
const readFile = registry.byName['readFile'];
console.log('Read file tool:', readFile);

// Get all tools from a server
const fsTools = registry.byServer['filesystem'];
console.log('Filesystem tools:', fsTools);
```

### Example 5: Validate Tool Availability

```js
// Check if required tools are available
async function validateTools(requiredTools) {
  const response = await codebolt.mcp.getAllMcpTools();

  const availableNames = new Set(response.tools.map(t => t.name));
  const validation = {};

  requiredTools.forEach(toolName => {
    const available = availableNames.has(toolName);
    validation[toolName] = {
      available,
      tool: available ? response.tools.find(t => t.name === toolName) : null
    };
  });

  console.log('Tool validation:');
  Object.entries(validation).forEach(([name, status]) => {
    console.log(`${name}: ${status.available ? '✓' : '✗'}`);
  });

  return validation;
}

// Usage
const validation = await validateTools([
  'readFile',
  'writeFile',
  'executeQuery',
  'makeRequest',
  'nonExistentTool'
]);

// Check if all required tools are available
const allAvailable = Object.values(validation).every(v => v.available);
console.log('All required tools available:', allAvailable);
```

### Example 6: Tool Documentation Generator

```js
// Generate documentation for all tools
async function generateToolDocs() {
  const response = await codebolt.mcp.getAllMcpTools();

  const docs = {
    generatedAt: new Date().toISOString(),
    totalTools: response.tools.length,
    servers: {},
    tools: []
  };

  // Group by server
  response.tools.forEach(tool => {
    const server = tool.server || 'unknown';
    if (!docs.servers[server]) {
      docs.servers[server] = {
        toolCount: 0,
        tools: []
      };
    }
    docs.servers[server].toolCount++;
    docs.servers[server].tools.push(tool.name);

    // Add to tools list
    docs.tools.push({
      name: tool.name,
      server: server,
      description: tool.description,
      parameters: tool.parameters
    });
  });

  console.log('Tool documentation generated');
  console.log(`Servers: ${Object.keys(docs.servers).length}`);
  console.log(`Tools: ${docs.totalTools}`);

  return docs;
}

// Usage
const docs = await generateToolDocs();

// Output documentation
console.log(JSON.stringify(docs, null, 2));
```

### Explanation

The `codebolt.mcp.getAllMcpTools()` function retrieves all available tools from all enabled MCP servers. This is essential for tool discovery, validation, and building tool registries.

**Key Points:**
- **No Parameters**: Automatically queries all enabled servers
- **Complete List**: Returns all tools from all sources
- **Tool Metadata**: Includes descriptions and parameter schemas
- **Discovery**: Primary method for discovering available functionality

**Return Value Structure:**
```js
{
  tools: [
    {
      name: string,           // Tool name
      server: string,         // MCP server name
      description?: string,   // Tool description
      parameters?: {          // Parameter schema
        type: 'object',
        properties: { /* ... */ },
        required: string[]
      }
    }
  ]
}
```

**Common Use Cases:**
- Discovering all available tools
- Building tool registries
- Validating tool availability
- Generating documentation
- Creating tool search indexes
- Dynamic tool selection

**Best Practices:**
1. Cache results to reduce API calls
2. Build indexes for efficient lookups
3. Validate tool availability before execution
4. Use for documentation generation
5. Update registry periodically
6. Handle empty tool lists gracefully

**Typical Workflow:**
```js
// 1. Get all tools
const response = await codebolt.mcp.getAllMcpTools();

// 2. Build index
const toolsByName = {};
response.tools.forEach(tool => {
  toolsByName[tool.name] = tool;
});

// 3. Check tool availability
if (toolsByName['readFile']) {
  // 4. Execute tool
  const result = await codebolt.mcp.executeTool(
    'filesystem',
    'readFile',
    { path: '/file.txt' }
  );
}
```

**Tool Information Included:**
- Tool name and identifier
- Source server
- Description (if available)
- Parameter schema
- Required parameters
- Optional parameters

**Indexing Strategies:**
```js
// By name
const byName = new Map(response.tools.map(t => [t.name, t]));

// By server
const byServer = response.tools.reduce((acc, tool) => {
  if (!acc[tool.server]) acc[tool.server] = [];
  acc[tool.server].push(tool);
  return acc;
}, {});

// By category (if available)
const byCategory = response.tools.filter(t => t.category === 'file');
```

**Related Functions:**
- `getMcpTools()`: Get tools from specific servers
- `getTools()`: Get detailed tool information
- `getEnabledMCPServers()`: Check enabled servers
- `executeTool()`: Execute a discovered tool

**Performance Considerations:**
- Cache results when possible
- Update periodically, not on every call
- Consider server load for frequent calls
- Use selective queries when possible

**Notes:**
- Only returns tools from enabled servers
- Tool availability may change over time
- Parameter schemas may be incomplete
- Some tools may require special permissions
- Use for discovery, not execution
- Combine with getTools() for detailed info