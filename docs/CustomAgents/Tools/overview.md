# MCP Tools Overview

MCP (Modular Component Plugin) Tools are the extension system that makes Codebolt AI Editor infinitely customizable and powerful. These tools integrate seamlessly with agents, workflows, and the core editor to provide specialized functionality, connect with external services, and extend Codebolt's capabilities far beyond its built-in features.

## Introduction

While Codebolt provides powerful built-in capabilities, every development team has unique needs, tools, and workflows. MCP Tools bridge this gap by providing a standardized way to:

- **Integrate with external services** (databases, APIs, cloud platforms)
- **Add custom AI models** and specialized processing capabilities  
- **Create domain-specific functionality** for your industry or use case
- **Connect with existing tools** in your development ecosystem
- **Extend agent capabilities** with new actions and data sources

Think of MCP Tools as plugins that speak the same language as Codebolt's AI agents, allowing for seamless integration and intelligent automation.

## How MCP Tools Work

### Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Codebolt      │    │   MCP Runtime    │    │   External      │
│   Agent/Editor  │◄──►│   Environment    │◄──►│   Service/Tool  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Core Components

#### MCP Runtime
The runtime environment that manages tool lifecycle:
- Tool discovery and registration
- Capability negotiation
- Message routing and protocol handling
- Security and sandboxing
- Resource management

#### Tool Interface
Standardized interface that all MCP Tools implement:
```typescript
interface MCPTool {
  name: string;
  version: string;
  capabilities: ToolCapabilities;
  
  initialize(config: ToolConfig): Promise<void>;
  execute(request: ToolRequest): Promise<ToolResponse>;
  cleanup(): Promise<void>;
}
```

#### Communication Protocol
JSON-based protocol for tool communication:
```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "database_query",
    "arguments": {
      "query": "SELECT * FROM users WHERE active = true",
      "database": "production"
    }
  },
  "id": 1
}
```

## Developing MCP Tools

### Basic Tool Structure

```typescript
import { MCPTool, ToolCapabilities, ToolConfig, ToolRequest, ToolResponse } from '@codebolt/mcp-sdk';

export class DatabaseQueryTool implements MCPTool {
  name = 'database_query';
  version = '1.0.0';
  capabilities: ToolCapabilities = {
    actions: ['query', 'schema', 'migrate'],
    inputs: ['sql', 'database_name'],
    outputs: ['query_result', 'schema_info'],
    requirements: ['database_connection']
  };
  
  private connection: DatabaseConnection | null = null;
  
  async initialize(config: ToolConfig): Promise<void> {
    this.connection = await createDatabaseConnection({
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.name
    });
    
    // Test connection
    await this.connection.ping();
  }
  
  async execute(request: ToolRequest): Promise<ToolResponse> {
    if (!this.connection) {
      throw new Error('Database connection not initialized');
    }
    
    switch (request.action) {
      case 'query':
        return await this.executeQuery(request.arguments);
      case 'schema':
        return await this.getSchema(request.arguments);
      case 'migrate':
        return await this.runMigration(request.arguments);
      default:
        throw new Error(`Unknown action: ${request.action}`);
    }
  }
  
  private async executeQuery(args: any): Promise<ToolResponse> {
    try {
      const result = await this.connection!.query(args.query);
      
      return {
        success: true,
        data: {
          rows: result.rows,
          rowCount: result.rowCount,
          fields: result.fields.map(f => ({ name: f.name, type: f.dataTypeID }))
        },
        metadata: {
          executionTime: result.executionTime,
          query: args.query
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error.message,
          code: error.code,
          severity: 'error'
        }
      };
    }
  }
  
  private async getSchema(args: any): Promise<ToolResponse> {
    const tables = await this.connection!.query(`
      SELECT table_name, column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_schema = $1
      ORDER BY table_name, ordinal_position
    `, [args.schema || 'public']);
    
    return {
      success: true,
      data: {
        schema: this.formatSchemaInfo(tables.rows)
      }
    };
  }
  
  async cleanup(): Promise<void> {
    if (this.connection) {
      await this.connection.close();
      this.connection = null;
    }
  }
}
```

### Tool Configuration

```json
{
  "name": "database_query",
  "version": "1.0.0",
  "description": "Execute database queries and schema operations",
  "author": "Your Team",
  "license": "MIT",
  
  "capabilities": {
    "actions": ["query", "schema", "migrate"],
    "inputs": ["sql", "database_name", "migration_file"],
    "outputs": ["query_result", "schema_info", "migration_result"],
    "requirements": ["database_connection"]
  },
  
  "configuration": {
    "database": {
      "type": "object",
      "properties": {
        "host": { "type": "string", "required": true },
        "port": { "type": "number", "default": 5432 },
        "username": { "type": "string", "required": true },
        "password": { "type": "string", "required": true, "sensitive": true },
        "name": { "type": "string", "required": true },
        "ssl": { "type": "boolean", "default": true }
      }
    },
    "query_timeout": { "type": "number", "default": 30000 },
    "max_rows": { "type": "number", "default": 1000 }
  },
  
  "permissions": {
    "network": ["database.company.com:5432"],
    "files": ["read:migrations/*.sql"],
    "environment": ["DATABASE_*"]
  }
}
```

## Examples of MCP Tools

### Example 1: API Integration Tool

```typescript
export class RestAPITool implements MCPTool {
  name = 'rest_api';
  version = '1.0.0';
  capabilities = {
    actions: ['get', 'post', 'put', 'delete', 'patch'],
    inputs: ['url', 'headers', 'body', 'auth'],
    outputs: ['response_data', 'status_code', 'headers']
  };
  
  async execute(request: ToolRequest): Promise<ToolResponse> {
    const { url, method, headers, body, auth } = request.arguments;
    
    const requestConfig: RequestConfig = {
      url,
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };
    
    // Add authentication
    if (auth) {
      if (auth.type === 'bearer') {
        requestConfig.headers['Authorization'] = `Bearer ${auth.token}`;
      } else if (auth.type === 'basic') {
        const encoded = btoa(`${auth.username}:${auth.password}`);
        requestConfig.headers['Authorization'] = `Basic ${encoded}`;
      }
    }
    
    // Add body for POST/PUT/PATCH requests
    if (['POST', 'PUT', 'PATCH'].includes(requestConfig.method) && body) {
      requestConfig.body = JSON.stringify(body);
    }
    
    try {
      const response = await fetch(url, requestConfig);
      const responseData = await response.json();
      
      return {
        success: true,
        data: {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          data: responseData
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error.message,
          type: 'network_error'
        }
      };
    }
  }
}
```

### Example 2: Cloud Storage Tool

```typescript
export class CloudStorageTool implements MCPTool {
  name = 'cloud_storage';
  version = '1.0.0';
  capabilities = {
    actions: ['upload', 'download', 'list', 'delete', 'get_url'],
    inputs: ['file_path', 'bucket', 'key', 'content'],
    outputs: ['file_url', 'file_list', 'upload_result']
  };
  
  private s3Client: S3Client | null = null;
  
  async initialize(config: ToolConfig): Promise<void> {
    this.s3Client = new S3Client({
      region: config.aws.region,
      credentials: {
        accessKeyId: config.aws.accessKeyId,
        secretAccessKey: config.aws.secretAccessKey
      }
    });
  }
  
  async execute(request: ToolRequest): Promise<ToolResponse> {
    switch (request.action) {
      case 'upload':
        return await this.uploadFile(request.arguments);
      case 'download':
        return await this.downloadFile(request.arguments);
      case 'list':
        return await this.listFiles(request.arguments);
      case 'delete':
        return await this.deleteFile(request.arguments);
      case 'get_url':
        return await this.getSignedUrl(request.arguments);
      default:
        throw new Error(`Unknown action: ${request.action}`);
    }
  }
  
  private async uploadFile(args: any): Promise<ToolResponse> {
    try {
      const command = new PutObjectCommand({
        Bucket: args.bucket,
        Key: args.key,
        Body: args.content,
        ContentType: args.contentType || 'application/octet-stream'
      });
      
      const result = await this.s3Client!.send(command);
      
      return {
        success: true,
        data: {
          etag: result.ETag,
          location: `s3://${args.bucket}/${args.key}`,
          url: `https://${args.bucket}.s3.amazonaws.com/${args.key}`
        }
      };
    } catch (error) {
      return {
        success: false,
        error: { message: error.message, code: error.code }
      };
    }
  }
}
```

### Example 3: Code Analysis Tool

```typescript
export class CodeAnalysisTool implements MCPTool {
  name = 'code_analysis';
  version = '1.0.0';
  capabilities = {
    actions: ['analyze_complexity', 'find_issues', 'generate_metrics', 'suggest_improvements'],
    inputs: ['source_code', 'language', 'rules'],
    outputs: ['analysis_result', 'metrics', 'suggestions']
  };
  
  async execute(request: ToolRequest): Promise<ToolResponse> {
    const { source_code, language, rules } = request.arguments;
    
    switch (request.action) {
      case 'analyze_complexity':
        return await this.analyzeComplexity(source_code, language);
      case 'find_issues':
        return await this.findIssues(source_code, language, rules);
      case 'generate_metrics':
        return await this.generateMetrics(source_code, language);
      case 'suggest_improvements':
        return await this.suggestImprovements(source_code, language);
      default:
        throw new Error(`Unknown action: ${request.action}`);
    }
  }
  
  private async analyzeComplexity(code: string, language: string): Promise<ToolResponse> {
    const parser = this.getParser(language);
    const ast = parser.parse(code);
    
    const complexity = this.calculateCyclomaticComplexity(ast);
    const maintainabilityIndex = this.calculateMaintainabilityIndex(ast);
    
    return {
      success: true,
      data: {
        cyclomaticComplexity: complexity,
        maintainabilityIndex,
        recommendation: complexity > 10 ? 'Consider refactoring' : 'Acceptable complexity',
        details: {
          functions: this.getFunctionComplexities(ast),
          classes: this.getClassComplexities(ast)
        }
      }
    };
  }
  
  private async findIssues(code: string, language: string, rules: any[]): Promise<ToolResponse> {
    const issues: CodeIssue[] = [];
    
    // Run various analysis rules
    for (const rule of rules) {
      const ruleIssues = await this.runRule(code, language, rule);
      issues.push(...ruleIssues);
    }
    
    return {
      success: true,
      data: {
        issues: issues.map(issue => ({
          type: issue.type,
          severity: issue.severity,
          message: issue.message,
          line: issue.line,
          column: issue.column,
          rule: issue.rule,
          suggestion: issue.suggestion
        })),
        summary: {
          total: issues.length,
          critical: issues.filter(i => i.severity === 'critical').length,
          warning: issues.filter(i => i.severity === 'warning').length,
          info: issues.filter(i => i.severity === 'info').length
        }
      }
    };
  }
}
```

### Example 4: Visualization Tool

```typescript
export class VisualizationTool implements MCPTool {
  name = 'visualization';
  version = '1.0.0';
  capabilities = {
    actions: ['create_chart', 'generate_diagram', 'create_dashboard'],
    inputs: ['data', 'chart_type', 'options'],
    outputs: ['chart_url', 'diagram_svg', 'dashboard_html']
  };
  
  async execute(request: ToolRequest): Promise<ToolResponse> {
    switch (request.action) {
      case 'create_chart':
        return await this.createChart(request.arguments);
      case 'generate_diagram':
        return await this.generateDiagram(request.arguments);
      case 'create_dashboard':
        return await this.createDashboard(request.arguments);
      default:
        throw new Error(`Unknown action: ${request.action}`);
    }
  }
  
  private async createChart(args: any): Promise<ToolResponse> {
    const { data, chart_type, options } = args;
    
    // Create chart using a charting library (e.g., Chart.js, D3.js)
    const chartConfig = {
      type: chart_type,
      data: {
        labels: data.labels,
        datasets: data.datasets
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: options.title || 'Chart'
          }
        },
        ...options
      }
    };
    
    // Generate chart image or return configuration
    const chartUrl = await this.generateChartImage(chartConfig);
    
    return {
      success: true,
      data: {
        chart_url: chartUrl,
        config: chartConfig,
        type: chart_type
      }
    };
  }
  
  private async generateDiagram(args: any): Promise<ToolResponse> {
    const { diagram_type, nodes, edges, options } = args;
    
    let svg: string;
    
    switch (diagram_type) {
      case 'flowchart':
        svg = await this.createFlowchart(nodes, edges, options);
        break;
      case 'sequence':
        svg = await this.createSequenceDiagram(nodes, edges, options);
        break;
      case 'class':
        svg = await this.createClassDiagram(nodes, edges, options);
        break;
      default:
        throw new Error(`Unsupported diagram type: ${diagram_type}`);
    }
    
    return {
      success: true,
      data: {
        svg,
        diagram_type,
        nodes: nodes.length,
        edges: edges.length
      }
    };
  }
}
```

## Integrating MCP Tools with Agents

### Agent Tool Usage

```typescript
class DataAnalysisAgent extends CodeboltAgent {
  private dbTool: MCPTool;
  private chartTool: MCPTool;
  
  async initialize(): Promise<void> {
    this.dbTool = await this.loadTool('database_query');
    this.chartTool = await this.loadTool('visualization');
  }
  
  async analyzeUserMetrics(request: AnalysisRequest): Promise<AnalysisResult> {
    // Query database for user metrics
    const queryResult = await this.dbTool.execute({
      action: 'query',
      arguments: {
        query: 'SELECT date, active_users, new_signups FROM user_metrics WHERE date >= $1',
        params: [request.startDate]
      }
    });
    
    if (!queryResult.success) {
      throw new Error(`Database query failed: ${queryResult.error.message}`);
    }
    
    // Create visualization
    const chartResult = await this.chartTool.execute({
      action: 'create_chart',
      arguments: {
        chart_type: 'line',
        data: {
          labels: queryResult.data.rows.map(row => row.date),
          datasets: [
            {
              label: 'Active Users',
              data: queryResult.data.rows.map(row => row.active_users),
              borderColor: 'blue'
            },
            {
              label: 'New Signups',
              data: queryResult.data.rows.map(row => row.new_signups),
              borderColor: 'green'
            }
          ]
        },
        options: {
          title: 'User Metrics Over Time'
        }
      }
    });
    
    return {
      metrics: queryResult.data.rows,
      chart_url: chartResult.data.chart_url,
      insights: await this.generateInsights(queryResult.data.rows)
    };
  }
}
```

### Multi-Tool Workflows

```typescript
class DeploymentAgent extends CodeboltAgent {
  async deployApplication(config: DeploymentConfig): Promise<DeploymentResult> {
    const results: any[] = [];
    
    // 1. Run tests using test runner tool
    const testResult = await this.useTool('test_runner', {
      action: 'run_tests',
      arguments: { test_suite: 'full', coverage: true }
    });
    
    if (!testResult.success || testResult.data.coverage < config.minCoverage) {
      throw new Error('Tests failed or insufficient coverage');
    }
    
    // 2. Build application using build tool
    const buildResult = await this.useTool('build_system', {
      action: 'build',
      arguments: { environment: config.environment, optimize: true }
    });
    
    if (!buildResult.success) {
      throw new Error(`Build failed: ${buildResult.error.message}`);
    }
    
    // 3. Upload to cloud storage
    const uploadResult = await this.useTool('cloud_storage', {
      action: 'upload',
      arguments: {
        bucket: config.deploymentBucket,
        key: `releases/${config.version}/app.tar.gz`,
        content: buildResult.data.artifact
      }
    });
    
    // 4. Deploy to infrastructure
    const deployResult = await this.useTool('infrastructure', {
      action: 'deploy',
      arguments: {
        artifact_url: uploadResult.data.url,
        environment: config.environment,
        replicas: config.replicas
      }
    });
    
    // 5. Notify team via communication tool
    await this.useTool('notifications', {
      action: 'send_message',
      arguments: {
        channel: '#deployments',
        message: `Successfully deployed ${config.version} to ${config.environment}`
      }
    });
    
    return {
      success: true,
      version: config.version,
      environment: config.environment,
      deployment_url: deployResult.data.url
    };
  }
}
```

## Tool Discovery and Management

### Tool Registry

```typescript
class MCPToolRegistry {
  private tools: Map<string, MCPTool> = new Map();
  private toolConfigs: Map<string, ToolConfig> = new Map();
  
  async registerTool(toolPath: string, config: ToolConfig): Promise<void> {
    const tool = await this.loadTool(toolPath);
    
    // Validate tool interface
    this.validateTool(tool);
    
    // Initialize tool
    await tool.initialize(config);
    
    this.tools.set(tool.name, tool);
    this.toolConfigs.set(tool.name, config);
  }
  
  async discoverTools(directory: string): Promise<ToolInfo[]> {
    const toolFiles = await this.findToolFiles(directory);
    const tools: ToolInfo[] = [];
    
    for (const file of toolFiles) {
      try {
        const manifest = await this.loadToolManifest(file);
        tools.push({
          name: manifest.name,
          version: manifest.version,
          description: manifest.description,
          capabilities: manifest.capabilities,
          path: file
        });
      } catch (error) {
        console.warn(`Failed to load tool from ${file}:`, error.message);
      }
    }
    
    return tools;
  }
  
  getTool(name: string): MCPTool | undefined {
    return this.tools.get(name);
  }
  
  listTools(): ToolInfo[] {
    return Array.from(this.tools.values()).map(tool => ({
      name: tool.name,
      version: tool.version,
      capabilities: tool.capabilities
    }));
  }
}
```

### CLI Tool Management

```bash
# List available tools
codebolt mcp list

# Install a tool
codebolt mcp install database-query-tool

# Configure a tool
codebolt mcp configure database-query-tool --config config.json

# Test a tool
codebolt mcp test database-query-tool --action query --args '{"query": "SELECT 1"}'

# Remove a tool
codebolt mcp remove database-query-tool

# Update all tools
codebolt mcp update
```

## Best Practices

### Security Considerations

```typescript
// Implement proper input validation
export class SecureAPITool implements MCPTool {
  async execute(request: ToolRequest): Promise<ToolResponse> {
    // Validate input
    const validation = this.validateInput(request.arguments);
    if (!validation.valid) {
      return {
        success: false,
        error: {
          message: 'Invalid input',
          details: validation.errors
        }
      };
    }
    
    // Sanitize inputs
    const sanitizedArgs = this.sanitizeInputs(request.arguments);
    
    // Execute with rate limiting
    await this.checkRateLimit(request.source);
    
    // Perform the operation
    return await this.performOperation(sanitizedArgs);
  }
  
  private validateInput(args: any): ValidationResult {
    // Implement comprehensive input validation
  }
  
  private sanitizeInputs(args: any): any {
    // Sanitize all inputs to prevent injection attacks
  }
}
```

### Error Handling

```typescript
export class RobustTool implements MCPTool {
  async execute(request: ToolRequest): Promise<ToolResponse> {
    try {
      return await this.performOperation(request);
    } catch (error) {
      if (error instanceof ValidationError) {
        return this.handleValidationError(error);
      } else if (error instanceof NetworkError) {
        return this.handleNetworkError(error);
      } else if (error instanceof TimeoutError) {
        return this.handleTimeoutError(error);
      } else {
        return this.handleUnknownError(error);
      }
    }
  }
  
  private handleValidationError(error: ValidationError): ToolResponse {
    return {
      success: false,
      error: {
        type: 'validation_error',
        message: error.message,
        details: error.validationErrors
      }
    };
  }
}
```

### Performance Optimization

```typescript
export class OptimizedTool implements MCPTool {
  private cache = new LRUCache<string, any>({ max: 1000, ttl: 300000 }); // 5 min TTL
  private rateLimiter = new RateLimiter({ requests: 100, per: 60000 }); // 100 req/min
  
  async execute(request: ToolRequest): Promise<ToolResponse> {
    // Check rate limiting
    if (!await this.rateLimiter.tryConsume()) {
      return {
        success: false,
        error: {
          type: 'rate_limit_exceeded',
          message: 'Too many requests'
        }
      };
    }
    
    // Check cache
    const cacheKey = this.generateCacheKey(request);
    const cached = this.cache.get(cacheKey);
    if (cached) {
      return cached;
    }
    
    // Execute operation
    const result = await this.performOperation(request);
    
    // Cache successful results
    if (result.success) {
      this.cache.set(cacheKey, result);
    }
    
    return result;
  }
}
```

## Testing MCP Tools

### Unit Testing

```typescript
describe('DatabaseQueryTool', () => {
  let tool: DatabaseQueryTool;
  let mockConnection: jest.Mocked<DatabaseConnection>;
  
  beforeEach(() => {
    tool = new DatabaseQueryTool();
    mockConnection = createMockDatabaseConnection();
  });
  
  test('should execute simple query', async () => {
    mockConnection.query.mockResolvedValue({
      rows: [{ id: 1, name: 'Test' }],
      rowCount: 1
    });
    
    const result = await tool.execute({
      action: 'query',
      arguments: {
        query: 'SELECT * FROM users LIMIT 1'
      }
    });
    
    expect(result.success).toBe(true);
    expect(result.data.rows).toHaveLength(1);
    expect(result.data.rows[0]).toEqual({ id: 1, name: 'Test' });
  });
  
  test('should handle query errors', async () => {
    mockConnection.query.mockRejectedValue(new Error('Connection failed'));
    
    const result = await tool.execute({
      action: 'query',
      arguments: {
        query: 'SELECT * FROM invalid_table'
      }
    });
    
    expect(result.success).toBe(false);
    expect(result.error.message).toBe('Connection failed');
  });
});
```

### Integration Testing

```typescript
describe('DatabaseQueryTool Integration', () => {
  let tool: DatabaseQueryTool;
  let testDb: TestDatabase;
  
  beforeAll(async () => {
    testDb = await createTestDatabase();
    tool = new DatabaseQueryTool();
    await tool.initialize({
      database: testDb.getConnectionConfig()
    });
  });
  
  afterAll(async () => {
    await tool.cleanup();
    await testDb.cleanup();
  });
  
  test('should work with real database', async () => {
    // Insert test data
    await testDb.insert('users', { name: 'John Doe', email: 'john@example.com' });
    
    // Query using tool
    const result = await tool.execute({
      action: 'query',
      arguments: {
        query: 'SELECT * FROM users WHERE name = $1',
        params: ['John Doe']
      }
    });
    
    expect(result.success).toBe(true);
    expect(result.data.rows).toHaveLength(1);
    expect(result.data.rows[0].email).toBe('john@example.com');
  });
});
```

## Publishing and Distribution

### Tool Packaging

```json
{
  "name": "database-query-tool",
  "version": "1.0.0",
  "description": "Execute database queries and schema operations",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  
  "codebolt": {
    "tool": true,
    "capabilities": ["query", "schema", "migrate"],
    "requirements": ["database_connection"]
  },
  
  "files": [
    "dist/",
    "README.md",
    "LICENSE",
    "tool-manifest.json"
  ],
  
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "package": "codebolt mcp package"
  },
  
  "dependencies": {
    "@codebolt/mcp-sdk": "^1.0.0",
    "pg": "^8.8.0"
  },
  
  "peerDependencies": {
    "@codebolt/core": "^1.0.0"
  }
}
```

### Publishing to Registry

```bash
# Build and test the tool
npm run build
npm test

# Package the tool
codebolt mcp package

# Publish to Codebolt registry
codebolt mcp publish --registry https://registry.codebolt.ai

# Or publish to npm for community distribution
npm publish
```

## Next Steps

Ready to create your own MCP Tools? Here's your development path:

1. **Start with Simple Tools**: Create basic tools for common tasks
2. **Learn the SDK**: Master the MCP Tool SDK and interfaces
3. **Integrate with Agents**: Use your tools in agent workflows
4. **Add Error Handling**: Implement robust error handling and validation
5. **Optimize Performance**: Add caching, rate limiting, and monitoring
6. **Share with Community**: Publish useful tools for others to use

## Related Documentation

- [TypeScript SDK](CustomAgents/core/typescript-sdk/overview.md) - Build tools with full TypeScript support
- [Agents](CustomAgents/agents/overview.md) - Use MCP Tools in intelligent agents
- [Task Flow](CustomAgents/core/task-flow/overview.md) - Integrate tools into automated workflows
- [API Reference](../../api-reference.md) - Complete MCP Tool API documentation

## Community Resources

- **Tool Registry**: Browse and install community tools
- **Templates**: Start with pre-built tool templates
- **Examples**: Learn from real-world tool implementations
- **Support Forum**: Get help with tool development

MCP Tools are the key to making Codebolt truly your own. Start with simple integrations and gradually build more sophisticated tools as you become comfortable with the development patterns and best practices.
