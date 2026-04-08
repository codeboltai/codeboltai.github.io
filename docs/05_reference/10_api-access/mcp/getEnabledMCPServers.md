---
name: getEnabledMCPServers
cbbaseinfo:
  description: Gets the list of currently enabled MCP servers.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<GetEnabledToolBoxesResponse>"
    description: A promise that resolves with information about enabled MCP servers.
    typeArgs: []
data:
  name: getEnabledMCPServers
  category: mcp
  link: getEnabledMCPServers.md
---
# getEnabledMCPServers

```typescript
codebolt.mcp.getEnabledMCPServers(): Promise<GetEnabledToolBoxesResponse>
```

Gets the list of currently enabled MCP servers.
### Returns

- **`Promise<GetEnabledToolBoxesResponse>`**: A promise that resolves with information about enabled MCP servers.

### Example 1: Get Enabled Servers

```js
// Get list of enabled MCP servers
const enabledServers = await codebolt.mcp.getEnabledMCPServers();
console.log('Enabled MCP servers:', enabledServers);

// Response structure:
// {
//   toolboxes: [
//     { name: 'server1', enabled: true },
//     { name: 'server2', enabled: true }
//   ]
// }
```

### Example 2: Check Server Status

```js
// Check which servers are currently enabled
async function checkServerStatus() {
  const response = await codebolt.mcp.getEnabledMCPServers();

  console.log('Currently enabled servers:');

  if (response.toolboxes && response.toolboxes.length > 0) {
    response.toolboxes.forEach(server => {
      console.log(`- ${server.name}: ${server.enabled ? 'Enabled' : 'Disabled'}`);
    });
  } else {
    console.log('No servers are currently enabled');
  }

  return response;
}

// Usage
const status = await checkServerStatus();
```

### Example 3: Filter by Server Type

```js
// Get enabled servers and filter by type
async function getEnabledServersByType(type) {
  const response = await codebolt.mcp.getEnabledMCPServers();

  const filtered = response.toolboxes.filter(server => {
    return server.enabled && server.type === type;
  });

  console.log(`${type} servers:`, filtered);

  return filtered;
}

// Usage
const fileServers = await getEnabledServersByType('file-system');
const dbServers = await getEnabledServersByType('database');
```

### Example 4: Server Availability Check

```js
// Check if specific servers are enabled
async function areServersEnabled(serverNames) {
  const response = await codebolt.mcp.getEnabledMCPServers();

  const enabledNames = response.toolboxes
    .filter(server => server.enabled)
    .map(server => server.name);

  const status = {};

  serverNames.forEach(name => {
    status[name] = enabledNames.includes(name);
  });

  return status;
}

// Usage
const status = await areServersEnabled(['filesystem', 'database', 'github']);
console.log('Server availability:', status);
// Output: { filesystem: true, database: true, github: false }
```

### Example 5: Count Enabled Servers

```js
// Count and categorize enabled servers
async function analyzeEnabledServers() {
  const response = await codebolt.mcp.getEnabledMCPServers();

  const analysis = {
    total: response.toolboxes.length,
    enabled: response.toolboxes.filter(s => s.enabled).length,
    disabled: response.toolboxes.filter(s => !s.enabled).length,
    byType: {}
  };

  // Group by type
  response.toolboxes.forEach(server => {
    const type = server.type || 'unknown';
    if (!analysis.byType[type]) {
      analysis.byType[type] = { enabled: 0, total: 0 };
    }
    analysis.byType[type].total++;
    if (server.enabled) {
      analysis.byType[type].enabled++;
    }
  });

  console.log('Server analysis:', analysis);

  return analysis;
}

// Usage
const analysis = await analyzeEnabledServers();
console.log(`Enabled: ${analysis.enabled} of ${analysis.total}`);
```

### Example 6: Refresh Server List

```js
// Periodically refresh enabled server list
async function monitorServers(intervalMs = 30000) {
  console.log('Starting server monitor...');

  const monitor = setInterval(async () => {
    try {
      const response = await codebolt.mcp.getEnabledMCPServers();

      const enabledCount = response.toolboxes.filter(s => s.enabled).length;

      console.log(`[${new Date().toISOString()}] Enabled servers: ${enabledCount}`);

      // Do something with the updated list
      return response;
    } catch (error) {
      console.error('Error monitoring servers:', error);
    }
  }, intervalMs);

  // Return cleanup function
  return () => clearInterval(monitor);
}

// Usage
const stopMonitoring = await monitorServers(10000); // Check every 10 seconds

// Later, stop monitoring
// stopMonitoring();
```

### Explanation

The `codebolt.mcp.getEnabledMCPServers()` function retrieves the list of currently enabled MCP servers. This is useful for discovering which servers are available for tool execution and configuration.

**Key Points:**
- **No Parameters**: Requires no parameters
- **Server List**: Returns all configured servers with their status
- **Enabled Status**: Indicates which servers are currently active
- **Discovery**: Essential for discovering available functionality

**Return Value Structure:**
```js
{
  toolboxes: [
    {
      name: string,      // Server name
      enabled: boolean,  // Whether server is enabled
      type?: string,     // Server type (optional)
      // ... other server properties
    }
  ]
}
```

**Common Use Cases:**
- Checking which servers are available
- Validating server configuration
- Discovering available tools
- Monitoring server status
- Pre-filtering for tool execution

**Best Practices:**
1. Call before attempting tool execution
2. Cache results to reduce API calls
3. Handle empty server lists gracefully
4. Verify server status before use
5. Combine with other MCP functions

**Typical Workflow:**
```js
// 1. Get enabled servers
const servers = await codebolt.mcp.getEnabledMCPServers();

// 2. Filter for specific server
const targetServer = servers.toolboxes.find(s => s.name === 'filesystem');

// 3. Check if enabled
if (targetServer && targetServer.enabled) {
  // 4. Use the server
  const tools = await codebolt.mcp.getMcpTools(['filesystem']);
}
```

**Related Functions:**
- `getLocalMCPServers()`: Get local servers
- `getMcpList()`: Get all available servers
- `getAllMcpTools()`: Get tools from enabled servers
- `executeTool()`: Execute a tool from a server

**Notes:**
- Returns all configured servers, not just enabled ones
- Check the `enabled` property to filter
- Server list may vary based on configuration
- Some servers may require additional setup
- Use for discovery and validation