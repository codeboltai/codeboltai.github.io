---
name: configureToolBox
cbbaseinfo:
  description: Configures a specific toolbox with provided configuration settings.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The name of the toolbox to configure.
    - name: config
      typeName: object
      description: Configuration object containing settings specific to the toolbox.
  returns:
    signatureTypeName: Promise<ConfigureToolBoxResponse>
    description: A promise that resolves with a `ConfigureToolBoxResponse` object containing the configuration result.
data:
  name: configureToolBox
  category: tool
  link: configureToolBox.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `ConfigureToolBoxResponse` object with the following properties:

- **`type`** (string): Always "configureToolBoxResponse".
- **`configuration`** (object, optional): The configuration object that was applied to the toolbox.
- **`data`** (any, optional): Additional data related to the configuration process.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Configure a database toolbox
const dbConfig = await codebolt.mcp.configureToolBox('sqlite', {
    database_path: './data/myapp.db',
    timeout: 30000,
    readonly: false
});
console.log("Response type:", dbConfig.type); // "configureToolBoxResponse"
console.log("Configuration applied:", dbConfig.configuration);

// Example 2: Configure with error handling
const result = await codebolt.mcp.configureToolBox('filesystem', {
    base_path: '/home/user/projects',
    permissions: ['read', 'write'],
    max_file_size: '10MB'
});

if (result.success) {
    console.log("✅ Toolbox configured successfully");
    console.log("Configuration:", result.configuration);
    console.log("Additional data:", result.data);
} else {
    console.error("❌ Configuration failed:", result.error);
}

// Example 3: Configure web scraping toolbox
const webConfig = await codebolt.mcp.configureToolBox('web-scraper', {
    user_agent: 'MyApp/1.0',
    timeout: 15000,
    max_retries: 3,
    rate_limit: {
        requests_per_minute: 60
    }
});

if (webConfig.success && webConfig.configuration) {
    console.log("✅ Web scraper configured");
    console.log("User agent:", webConfig.configuration.user_agent);
    console.log("Rate limit:", webConfig.configuration.rate_limit);
}

// Example 4: Error handling
try {
    const response = await codebolt.mcp.configureToolBox('analytics', {
        api_key: 'your-api-key',
        endpoint: 'https://api.analytics.com',
        version: 'v2'
    });
    
    if (response.success && response.configuration) {
        console.log('✅ Analytics toolbox configured successfully');
        console.log('Configuration:', response.configuration);
    } else {
        console.error('❌ Configuration failed:', response.error);
    }
} catch (error) {
    console.error('Error configuring toolbox:', error);
}
```

### Notes

- The `name` parameter must be a valid toolbox name that is available in the system.
- The `config` object structure depends on the specific requirements of each toolbox.
- Configuration settings typically include API keys, endpoints, file paths, and operational parameters.
- Successfully configured toolboxes become available for tool execution.
- This operation communicates with the system via WebSocket for real-time processing.

### Simple Example
```js
// Basic SQLite toolbox configuration
const result = await codebolt.tools.configureToolBox('sqlite', {
  database_path: './my-database.db',
  read_only: true
});

console.log('Configuration successful:', result?.success);
```

