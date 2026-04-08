---
name: getMcpList
cbbaseinfo:
  description: Gets the list of available MCP servers.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<GetMcpListResponse>"
    description: A promise that resolves with the list of available MCP servers.
    typeArgs: []
data:
  name: getMcpList
  category: mcp
  link: getMcpList.md
---
# getMcpList

```typescript
codebolt.mcp.getMcpList(): Promise<GetMcpListResponse>
```

Gets the list of available MCP servers.
### Returns

- **`Promise<GetMcpListResponse>`**: A promise that resolves with the list of available MCP servers.

### Example 1: Get All Available MCP Servers

```js
// Get list of all available MCP servers
const serverList = await codebolt.mcp.getMcpList();
console.log('Available MCP servers:', serverList);

// Response structure:
// {
//   servers: [
//     { name: 'filesystem', type: 'file-operations', enabled: true },
//     { name: 'database', type: 'database', enabled: true },
//     { name: 'http-client', type: 'network', enabled: false }
//   ]
// }
```

### Example 2: Server Discovery

```js
// Discover and categorize available servers
async function discoverServers() {
  const response = await codebolt.mcp.getMcpList();

  const servers = {
    enabled: [],
    disabled: [],
    byType: {}
  };

  response.servers.forEach(server => {
    // Categorize by status
    if (server.enabled) {
      servers.enabled.push(server.name);
    } else {
      servers.disabled.push(server.name);
    }

    // Group by type
    const type = server.type || 'unknown';
    if (!servers.byType[type]) {
      servers.byType[type] = [];
    }
    servers.byType[type].push(server.name);
  });

  console.log('Server Discovery:');
  console.log(`  Enabled: ${servers.enabled.length}`);
  console.log(`  Disabled: ${servers.disabled.length}`);
  console.log(`  Types: ${Object.keys(servers.byType).length}`);

  return servers;
}

// Usage
const discovery = await discoverServers();
```

### Example 3: Filter Servers by Type

```js
// Find servers of specific type
async function findServersByType(type) {
  const response = await codebolt.mcp.getMcpList();

  const matching = response.servers.filter(
    server => server.type === type
  );

  console.log(`${type} servers:`, matching.map(s => s.name));

  return matching;
}

// Usage
const dbServers = await findServersByType('database');
const fsServers = await findServersByType('file-operations');
const netServers = await findServersByType('network');
```

### Example 4: Server Status Report

```js
// Generate comprehensive server status report
async function generateServerReport() {
  const response = await codebolt.mcp.getMcpList();

  const report = {
    total: response.servers.length,
    enabled: response.servers.filter(s => s.enabled).length,
    disabled: response.servers.filter(s => !s.enabled).length,
    servers: {}
  };

  // Build detailed server info
  response.servers.forEach(server => {
    report.servers[server.name] = {
      type: server.type,
      status: server.enabled ? 'enabled' : 'disabled',
      version: server.version || 'unknown',
      capabilities: server.capabilities || []
    };
  });

  console.log('Server Status Report:');
  console.log(`  Total: ${report.total}`);
  console.log(`  Enabled: ${report.enabled}`);
  console.log(`  Disabled: ${report.disabled}`);

  return report;
}

// Usage
const report = await generateServerReport();
console.log('Report:', report);
```

### Example 5: Verify Server Availability

```js
// Check if specific servers are available
async function verifyServerAvailability(serverNames) {
  const response = await codebolt.mcp.getMcpList();

  const availableNames = new Set(response.servers.map(s => s.name));
  const verification = {};

  serverNames.forEach(name => {
    const server = response.servers.find(s => s.name === name);
    verification[name] = {
      available: availableNames.has(name),
      enabled: server ? server.enabled : false,
      type: server ? server.type : null
    };
  });

  console.log('Server availability verification:');
  Object.entries(verification).forEach(([name, status]) => {
    console.log(`  ${name}: ${status.available ? '✓' : '✗'} (${status.enabled ? 'enabled' : 'disabled'})`);
  });

  return verification;
}

// Usage
const verification = await verifyServerAvailability([
  'filesystem',
  'database',
  'http-client',
  'nonexistent-server'
]);
```

### Example 6: Server Comparison

```js
// Compare server lists over time
async function compareServerLists() {
  const initial = await codebolt.mcp.getMcpList();
  const initialNames = new Set(initial.servers.map(s => s.name));

  console.log('Initial server list:', Array.from(initialNames));

  // Later, get updated list
  await new Promise(resolve => setTimeout(resolve, 30000));
  const updated = await codebolt.mcp.getMcpList();
  const updatedNames = new Set(updated.servers.map(s => s.name));

  // Find differences
  const added = [...updatedNames].filter(n => !initialNames.has(n));
  const removed = [...initialNames].filter(n => !updatedNames.has(n));

  const comparison = {
    initial: initial.servers.length,
    updated: updated.servers.length,
    added,
    removed,
    changed: added.length > 0 || removed.length > 0
  };

  console.log('Server list changes:', comparison);

  return comparison;
}

// Usage
const comparison = await compareServerLists();
if (comparison.changed) {
  console.log('Servers added:', comparison.added);
  console.log('Servers removed:', comparison.removed);
}
```

### Explanation

The `codebolt.mcp.getMcpList()` function retrieves a list of all available MCP servers. This is useful for server discovery, availability checks, and system monitoring.

**Key Points:**
- **Complete List**: Returns all configured servers
- **Status Information**: Includes enabled/disabled status
- **Server Metadata**: Provides type and other properties
- **Discovery**: Essential for discovering available functionality

**Return Value Structure:**
```js
{
  servers: [
    {
      name: string,           // Server name/identifier
      type: string,           // Server type/category
      enabled: boolean,       // Whether server is enabled
      version?: string,       // Optional version info
      capabilities?: array    // Optional capabilities list
    }
  ]
}
```

**Common Use Cases:**
- Server discovery
- Availability verification
- System monitoring
- Server categorization
- Status reporting
- Change tracking

**Best Practices:**
1. Cache results to reduce API calls
2. Verify server availability before use
3. Monitor server list changes
4. Use for system documentation
5. Combine with getMcpTools() for full picture

**Typical Workflow:**
```js
// 1. Get server list
const response = await codebolt.mcp.getMcpList();

// 2. Filter for enabled servers
const enabledServers = response.servers.filter(s => s.enabled);

// 3. Get tools from enabled servers
const serverNames = enabledServers.map(s => s.name);
const tools = await codebolt.mcp.getMcpTools(serverNames);

// 4. Use available servers and tools
```

**Server Types:**
Common server types may include:
- **file-operations**: File system operations
- **database**: Database operations
- **network**: Network/HTTP operations
- **utility**: General utilities
- **custom**: Custom server types

**Related Functions:**
- `getEnabledMCPServers()`: Get only enabled servers
- `getMcpTools()`: Get tools from specific servers
- `getAllMcpTools()`: Get all tools from all servers
- `executeTool()`: Execute tools on servers

**Comparison:**
- `getMcpList()`: All servers, enabled or not
- `getEnabledMCPServers()`: Only enabled servers
- `getLocalMCPServers()`: Local server information

**Notes:**
- Returns all configured servers
- Check enabled property before using
- Server list may vary based on configuration
- Some servers may require setup
- Use for discovery and monitoring
- Combine with tool discovery for full picture
- Consider caching for performance
- Monitor changes over time