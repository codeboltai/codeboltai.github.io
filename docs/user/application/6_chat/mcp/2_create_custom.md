# Create Custom MCP Tools

## Overview

Creating custom MCP tools allows you to extend Codebolt's AI capabilities with your own integrations and workflows. This guide walks you through building custom tools from scratch.

## Prerequisites

### Development Environment
- **Node.js**: Version 18 or higher
- **TypeScript**: For type safety and better development experience
- **Codebolt SDK**: Install the MCP development kit
- **API Documentation**: Access to the services you want to integrate

### Required Knowledge
- **JavaScript/TypeScript**: Basic programming skills
- **API Integration**: Understanding of REST APIs and HTTP requests
- **JSON Schema**: For defining tool parameters and responses
- **Async Programming**: Handling asynchronous operations

## Tool Architecture

### Core Components
```typescript
interface MCPTool {
  name: string;
  description: string;
  parameters: JSONSchema;
  handler: (params: any) => Promise<any>;
  authentication?: AuthConfig;
  permissions?: Permission[];
}
```

### Tool Structure
1. **Metadata**: Tool name, description, and version
2. **Parameters**: Input schema definition
3. **Handler**: Core logic implementation
4. **Authentication**: Security configuration
5. **Permissions**: Access control settings

## Step-by-Step Creation

### 1. Initialize Tool Project
```bash
# Create new MCP tool project
npx create-mcp-tool my-custom-tool
cd my-custom-tool

# Install dependencies
npm install
```

### 2. Define Tool Schema
```typescript
// src/schema.ts
export const toolSchema = {
  name: "my-database-query",
  description: "Execute SQL queries on the project database",
  parameters: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "SQL query to execute"
      },
      database: {
        type: "string",
        description: "Target database name",
        enum: ["development", "staging", "production"]
      },
      limit: {
        type: "number",
        description: "Maximum number of rows to return",
        default: 100,
        maximum: 1000
      }
    },
    required: ["query", "database"]
  }
};
```

### 3. Implement Tool Handler
```typescript
// src/handler.ts
import { Database } from './database';

export async function handleDatabaseQuery(params: any) {
  const { query, database, limit = 100 } = params;
  
  try {
    // Validate query safety
    if (!isValidQuery(query)) {
      throw new Error("Unsafe query detected");
    }
    
    // Connect to database
    const db = await Database.connect(database);
    
    // Execute query with limit
    const results = await db.query(query, { limit });
    
    return {
      success: true,
      data: results,
      rowCount: results.length,
      executionTime: Date.now()
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      timestamp: Date.now()
    };
  }
}

function isValidQuery(query: string): boolean {
  // Implement query validation logic
  const forbiddenKeywords = ['DROP', 'DELETE', 'TRUNCATE', 'ALTER'];
  const upperQuery = query.toUpperCase();
  
  return !forbiddenKeywords.some(keyword => 
    upperQuery.includes(keyword)
  );
}
```

### 4. Configure Authentication
```typescript
// src/auth.ts
export const authConfig = {
  type: "api-key",
  keyLocation: "header",
  keyName: "X-Database-Key",
  required: true,
  description: "Database API key for authentication"
};

// Alternative: OAuth configuration
export const oauthConfig = {
  type: "oauth2",
  authorizationUrl: "https://api.example.com/oauth/authorize",
  tokenUrl: "https://api.example.com/oauth/token",
  scopes: ["database:read", "database:write"],
  required: true
};
```

### 5. Set Up Permissions
```typescript
// src/permissions.ts
export const permissions = [
  {
    resource: "database",
    actions: ["read", "query"],
    conditions: {
      environment: ["development", "staging"]
    }
  },
  {
    resource: "files",
    actions: ["read"],
    conditions: {
      fileTypes: [".sql", ".json"]
    }
  }
];
```

### 6. Create Main Tool File
```typescript
// src/index.ts
import { MCPTool } from '@codebolt/mcp-sdk';
import { toolSchema } from './schema';
import { handleDatabaseQuery } from './handler';
import { authConfig } from './auth';
import { permissions } from './permissions';

export const databaseQueryTool: MCPTool = {
  ...toolSchema,
  handler: handleDatabaseQuery,
  authentication: authConfig,
  permissions: permissions
};

// Export for Codebolt registration
export default databaseQueryTool;
```

## Advanced Features

### Error Handling
```typescript
export class MCPError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: any
  ) {
    super(message);
    this.name = 'MCPError';
  }
}

// Usage in handler
try {
  const result = await performOperation();
  return result;
} catch (error) {
  throw new MCPError(
    "Operation failed",
    "OPERATION_ERROR",
    { originalError: error.message }
  );
}
```

### Caching
```typescript
import { Cache } from '@codebolt/mcp-sdk';

export async function handleWithCache(params: any) {
  const cacheKey = `query-${JSON.stringify(params)}`;
  
  // Check cache first
  const cached = await Cache.get(cacheKey);
  if (cached) {
    return { ...cached, fromCache: true };
  }
  
  // Execute operation
  const result = await executeOperation(params);
  
  // Cache result for 5 minutes
  await Cache.set(cacheKey, result, 300);
  
  return result;
}
```

### Streaming Responses
```typescript
export async function* handleStreamingResponse(params: any) {
  const stream = await createDataStream(params);
  
  for await (const chunk of stream) {
    yield {
      type: 'data',
      content: chunk,
      timestamp: Date.now()
    };
  }
  
  yield {
    type: 'complete',
    message: 'Stream finished',
    timestamp: Date.now()
  };
}
```

## Testing Your Tool

### Unit Testing
```typescript
// tests/handler.test.ts
import { handleDatabaseQuery } from '../src/handler';

describe('Database Query Handler', () => {
  test('should execute valid query', async () => {
    const params = {
      query: 'SELECT * FROM users',
      database: 'development',
      limit: 10
    };
    
    const result = await handleDatabaseQuery(params);
    
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
  
  test('should reject unsafe query', async () => {
    const params = {
      query: 'DROP TABLE users',
      database: 'development'
    };
    
    const result = await handleDatabaseQuery(params);
    
    expect(result.success).toBe(false);
    expect(result.error).toContain('Unsafe query');
  });
});
```

### Integration Testing
```typescript
// tests/integration.test.ts
import { MCPTestEnvironment } from '@codebolt/mcp-sdk/testing';
import { databaseQueryTool } from '../src/index';

describe('Integration Tests', () => {
  let testEnv: MCPTestEnvironment;
  
  beforeEach(async () => {
    testEnv = await MCPTestEnvironment.create();
    await testEnv.registerTool(databaseQueryTool);
  });
  
  test('should work with AI agent', async () => {
    const response = await testEnv.chat(
      'Show me the first 5 users from the development database'
    );
    
    expect(response.toolCalls).toHaveLength(1);
    expect(response.toolCalls[0].name).toBe('my-database-query');
  });
});
```

## Deployment

### Package Your Tool
```bash
# Build the tool
npm run build

# Create distribution package
npm pack
```

### Register with Codebolt
```typescript
// Register in your Codebolt instance
import { CodeboltMCP } from '@codebolt/mcp-sdk';
import { databaseQueryTool } from './my-custom-tool';

CodeboltMCP.registerTool(databaseQueryTool);
```

### Distribution Options
- **Local Installation**: Install directly in your Codebolt instance
- **Team Sharing**: Share with team members via internal registry
- **Marketplace**: Publish to Codebolt Marketplace
- **Private Registry**: Host on your private npm registry

## Best Practices

### Security
- **Input Validation**: Always validate and sanitize inputs
- **Permission Checks**: Implement proper authorization
- **Secret Management**: Never hardcode secrets
- **Rate Limiting**: Implement rate limiting for external APIs

### Performance
- **Async Operations**: Use async/await for non-blocking operations
- **Connection Pooling**: Reuse database and API connections
- **Caching**: Cache expensive operations when appropriate
- **Error Recovery**: Implement retry logic for transient failures

### Documentation
- **Clear Descriptions**: Write clear tool and parameter descriptions
- **Usage Examples**: Provide example use cases
- **Error Messages**: Include helpful error messages
- **Version Management**: Follow semantic versioning

## Next Steps

- [→ Configure MCP Tools](./3_configure.md)
- [→ Advanced MCP Workflows](./4_advanced_workflows.md)
- [→ Publishing to Marketplace](./5_publishing.md) 