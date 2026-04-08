---
name: configureMCPServer
cbbaseinfo:
  description: Configures a specific MCP server with provided configuration.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The name of the MCP server to configure.
    - name: config
      typeName: MCPConfiguration
      description: Configuration object for the server.
  returns:
    signatureTypeName: "Promise<ConfigureToolBoxResponse>"
    description: A promise that resolves with the configuration result.
    typeArgs: []
data:
  name: configureMCPServer
  category: mcp
  link: configureMCPServer.md
---
# configureMCPServer

```typescript
codebolt.mcp.configureMCPServer(name: string, config: MCPConfiguration): Promise<ConfigureToolBoxResponse>
```

Configures a specific MCP server with provided configuration.
### Parameters

- **`name`** (string): The name of the MCP server to configure.
- **`config`** (MCPConfiguration): Configuration object for the server.

### Returns

- **`Promise<ConfigureToolBoxResponse>`**: A promise that resolves with the configuration result.

### Example 1: Basic Server Configuration

```js
// Configure an MCP server with basic settings
const result = await codebolt.mcp.configureMCPServer('filesystem', {
  rootPath: '/home/user/projects',
  permissions: ['read', 'write'],
  maxFileSize: 10485760
});

console.log('Server configuration result:', result);

// Response structure:
// {
//   success: true,
//   server: 'filesystem',
//   config: { /* applied configuration */ }
// }
```

### Example 2: Database Server Configuration

```js
// Configure database server with connection details
async function setupDatabaseServer(config) {
  const result = await codebolt.mcp.configureMCPServer('database', {
    host: config.host,
    port: config.port,
    database: config.database,
    username: config.username,
    password: config.password,
    maxConnections: config.maxConnections || 10,
    timeout: config.timeout || 30000
  });

  if (result.success) {
    console.log('Database server configured successfully');

    // Test the configuration
    const testResult = await codebolt.mcp.executeTool(
      'database',
      'testConnection',
      {}
    );

    return testResult.success;
  }

  return false;
}

// Usage
const configured = await setupDatabaseServer({
  host: 'localhost',
  port: 5432,
  database: 'myapp',
  username: 'user',
  password: 'pass'
});
```

### Example 3: HTTP Client Configuration

```js
// Configure HTTP client server
async function configureHttpClient(settings) {
  const result = await codebolt.mcp.configureMCPServer('http-client', {
    baseURL: settings.baseURL,
    timeout: settings.timeout || 10000,
    maxRetries: settings.maxRetries || 3,
    headers: settings.headers || {},
    auth: settings.auth || null
  });

  console.log('HTTP client configured:', result.success);

  return result;
}

// Usage
await configureHttpClient({
  baseURL: 'https://api.example.com',
  timeout: 15000,
  maxRetries: 5,
  headers: {
    'User-Agent': 'MyApp/1.0'
  }
});
```

### Example 4: Multiple Server Setup

```js
// Configure multiple servers in sequence
async function setupAllServers(configurations) {
  const results = {};

  for (const [serverName, config] of Object.entries(configurations)) {
    console.log(`Configuring ${serverName}...`);

    try {
      const result = await codebolt.mcp.configureMCPServer(serverName, config);

      results[serverName] = {
        success: result.success,
        error: result.error
      };

      if (result.success) {
        console.log(`✓ ${serverName} configured`);
      } else {
        console.error(`✗ ${serverName} failed: ${result.error}`);
      }
    } catch (error) {
      results[serverName] = {
        success: false,
        error: error.message
      };
    }
  }

  const successCount = Object.values(results).filter(r => r.success).length;
  console.log(`Configuration complete: ${successCount}/${Object.keys(configurations).length} successful`);

  return results;
}

// Usage
const results = await setupAllServers({
  filesystem: {
    rootPath: '/data',
    permissions: ['read', 'write', 'delete']
  },
  database: {
    host: 'localhost',
    port: 5432,
    database: 'production'
  },
  'http-client': {
    baseURL: 'https://api.example.com',
    timeout: 10000
  }
});
```

### Example 5: Configuration Validation

```js
// Validate and apply server configuration
async function validateAndConfigure(serverName, config, schema) {
  // Validate against schema
  const validation = validateConfig(config, schema);

  if (!validation.valid) {
    console.error('Configuration validation failed:', validation.errors);
    return { success: false, errors: validation.errors };
  }

  // Apply configuration
  console.log(`Applying configuration to ${serverName}...`);
  const result = await codebolt.mcp.configureMCPServer(serverName, config);

  if (result.success) {
    console.log('Configuration applied successfully');

    // Test the configuration
    const testResult = await testServerConfiguration(serverName);
    result.testResult = testResult;
  }

  return result;
}

function validateConfig(config, schema) {
  // Basic validation implementation
  const errors = [];

  for (const [key, rule] of Object.entries(schema)) {
    if (rule.required && !config.hasOwnProperty(key)) {
      errors.push(`Missing required field: ${key}`);
    }
    if (rule.type && typeof config[key] !== rule.type) {
      errors.push(`Invalid type for ${key}: expected ${rule.type}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

// Usage
const result = await validateAndConfigure('database', {
  host: 'localhost',
  port: 5432,
  database: 'mydb'
}, {
  host: { required: true, type: 'string' },
  port: { required: true, type: 'number' },
  database: { required: true, type: 'string' }
});
```

### Example 6: Configuration Backup and Restore

```js
// Backup and restore server configurations
async function backupServerConfigurations(serverNames) {
  const backups = {};

  // Backup current configurations
  for (const name of serverNames) {
    // Note: This would require a getConfiguration method
    // For now, we'll store the configuration we're about to apply
    console.log(`Backing up ${name}...`);
    backups[name] = { timestamp: Date.now() };
  }

  return backups;
}

async function restoreServerConfigurations(backups) {
  const results = {};

  for (const [name, backup] of Object.entries(backups)) {
    console.log(`Restoring ${name}...`);

    try {
      const result = await codebolt.mcp.configureMCPServer(
        name,
        backup.config
      );

      results[name] = {
        success: result.success,
        restored: true
      };
    } catch (error) {
      results[name] = {
        success: false,
        error: error.message
      };
    }
  }

  return results;
}

// Usage with backup
async function safeConfigure(serverName, newConfig) {
  // Backup current state (conceptual)
  const backup = { timestamp: Date.now() };

  try {
    // Apply new configuration
    const result = await codebolt.mcp.configureMCPServer(serverName, newConfig);

    if (!result.success) {
      // Restore backup on failure
      console.log('Configuration failed, restoring backup...');
      await restoreServerConfigurations({ [serverName]: backup });
    }

    return result;
  } catch (error) {
    // Restore backup on error
    console.log('Error occurred, restoring backup...');
    await restoreServerConfigurations({ [serverName]: backup });
    throw error;
  }
}
```

### Explanation

The `codebolt.mcp.configureMCPServer(name, config)` function configures a specific MCP server with provided settings. This allows customization of server behavior and capabilities.

**Key Points:**
- **Server-Specific**: Configures a named server
- **Flexible Config**: Accepts various configuration properties
- **Runtime Changes**: Applies configuration at runtime
- **Validation**: Server validates configuration
- **Persistent**: Changes persist until reconfigured

**Parameters:**
1. **name** (string): The MCP server name to configure
2. **config** (MCPConfiguration): Configuration object (varies by server)

**Return Value Structure:**
```js
{
  success: boolean,        // Whether configuration succeeded
  server: string,          // Server name
  config: object,          // Applied configuration
  error?: string,          // Error message if failed
  previousConfig?: object  // Optional previous configuration
}
```

**Common Use Cases:**
- Initial server setup
- Connection configuration
- Authentication setup
- Performance tuning
- Feature enabling/disabling
- Runtime behavior changes

**Best Practices:**
1. Validate configuration before applying
2. Test configuration after applying
3. Backup existing configurations
4. Use appropriate error handling
5. Document configuration changes
6. Monitor server behavior after changes

**Configuration Patterns:**

**Database Server:**
```js
{
  host: string,
  port: number,
  database: string,
  username: string,
  password: string,
  maxConnections: number,
  timeout: number
}
```

**HTTP Client:**
```js
{
  baseURL: string,
  timeout: number,
  maxRetries: number,
  headers: object,
  auth: object
}
```

**File System:**
```js
{
  rootPath: string,
  permissions: string[],
  maxFileSize: number,
  allowedExtensions: string[]
}
```

**Typical Workflow:**
```js
// 1. Prepare configuration
const config = {
  host: 'localhost',
  port: 5432
};

// 2. Apply configuration
const result = await codebolt.mcp.configureMCPServer('database', config);

// 3. Check result
if (result.success) {
  // 4. Test configuration
  await codebolt.mcp.executeTool('database', 'test', {});
}
```

**Advanced Patterns:**
- Batch configuration
- Configuration validation
- Backup and restore
- Environment-specific configs
- Configuration templates
- Dynamic configuration

**Related Functions:**
- `getMcpList()`: Get available servers
- `getEnabledMCPServers()`: Check enabled servers
- `configureMcpTool()`: Configure specific tools
- `executeTool()`: Test configuration

**Notes:**
- Configuration structure varies by server
- Some changes may require server restart
- Invalid configurations will be rejected
- Test after configuration changes
- Document configuration for reference
- Consider security for sensitive data
- Some settings may be read-only
- Configuration validation is server-specific