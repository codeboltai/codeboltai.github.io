# Tools Overview

Codebolt Tools are custom utilities that extend the capabilities of AI agents by providing specialized functionality. Built on the Model Context Protocol (MCP) standard, these tools allow you to integrate external services, automate tasks, and create domain-specific capabilities that agents can use when solving problems.

## What are Codebolt Tools?

Codebolt Tools are MCP-compatible utilities that:

- **Extend Agent Capabilities**: Provide specialized functions that agents can call
- **Follow MCP Standard**: Implement the Model Context Protocol for seamless integration
- **Are Reusable**: Can be shared across multiple agents and projects
- **Support Configuration**: Accept parameters for customization
- **Work Everywhere**: Can be used in Codebolt Application or via CLI
- **Are Shareable**: Can be published to and used from the tool registry

## Why Use Tools?

Tools are essential for:

- **External Integrations**: Connect to APIs, databases, and external services
- **File Operations**: Read, write, and manipulate files safely
- **Data Processing**: Transform and analyze data
- **Automation**: Automate repetitive development tasks
- **Domain-Specific Logic**: Implement business rules and specialized workflows

## Tool Architecture

### Core Components

Every Codebolt tool consists of:

1. **Configuration File** (`codebolttool.yaml`): Defines tool metadata and parameters
2. **Implementation** (`index.js`): Contains the tool's functionality
3. **Documentation** (`README.md`): Explains how to use the tool
4. **Dependencies** (`package.json`): Lists required Node.js packages

### Tool Structure

```
my-tool/
├── codebolttool.yaml     # Tool configuration
├── package.json          # Node.js dependencies
├── index.js             # Main implementation
├── README.md            # Documentation
└── src/                 # Additional source files (optional)
    ├── handlers/        # Function handlers
    └── utils/           # Utility functions
```

## How Tools Work

### 1. Tool Definition

Tools are defined in `codebolttool.yaml`:

```yaml
name: "File Manager"
description: "Safely manages file operations"
version: "1.0.0"
uniqueName: "file-manager-tool"

parameters:
  rootPath:
    type: "string"
    description: "Root directory for operations"
    default: "./"
  
  allowedExtensions:
    type: "array"
    description: "Allowed file extensions"
    default: [".js", ".ts", ".json", ".md"]
```

### 2. Tool Implementation

Tools implement MCP-compatible functions:

```javascript
// index.js
const { ToolBox } = require('@codebolt/toolbox');

class FileManagerTool {
  constructor(config) {
    this.config = config;
    this.toolbox = new ToolBox({
      name: 'File Manager',
      version: '1.0.0'
    });
    
    this.setupTools();
  }

  setupTools() {
    this.toolbox.addTool({
      name: 'list_files',
      description: 'List files in a directory',
      parameters: {
        path: { type: 'string', description: 'Directory path' }
      },
      execute: this.listFiles.bind(this)
    });
  }

  async listFiles(args, context) {
    const { path = './' } = args;
    // Implementation here
    return { files: [] };
  }

  async start() {
    await this.toolbox.start();
  }
}

module.exports = FileManagerTool;
```

### 3. Tool Usage

Agents can use tools to perform specific tasks:

```javascript
// In an agent
const files = await this.tools.fileManager.listFiles({
  path: './src/components'
});
```

## Creating Tools

You can create tools in two ways:

### Option 1: Using Codebolt Application

1. Open Codebolt Application
2. Navigate to Tools section
3. Click "Create New Tool"
4. Fill in tool details and configuration
5. Implement tool functions in the editor
6. Test and save your tool

### Option 2: Using CLI

```bash
# Create a new tool
codebolt-cli createtool

# Or create with options
codebolt-cli createtool \
  --name "My Tool" \
  --id "my-tool" \
  --description "Tool description"
```

## Tool Configuration

### Basic Configuration

The `codebolttool.yaml` file defines your tool:

```yaml
# Required fields
name: "Weather API Tool"
description: "Fetches weather information"
version: "1.0.0"
uniqueName: "weather-api-tool"

# Optional metadata
author: "Your Name"
category: "API"
tags: ["weather", "api", "data"]

# Tool parameters
parameters:
  apiKey:
    type: "string"
    description: "Weather API key"
    required: true
    sensitive: true
  
  units:
    type: "string"
    description: "Temperature units"
    default: "celsius"
    enum: ["celsius", "fahrenheit"]
  
  timeout:
    type: "number"
    description: "Request timeout in seconds"
    default: 30
    minimum: 1
    maximum: 300
```

### Parameter Types

Supported parameter types:

- **string**: Text values
- **number**: Numeric values
- **boolean**: True/false values
- **array**: Lists of values
- **object**: Complex data structures

### Parameter Properties

- `type`: Data type (required)
- `description`: Human-readable description
- `required`: Whether parameter is mandatory
- `default`: Default value if not provided
- `sensitive`: Hide value in logs (for API keys)
- `enum`: List of allowed values
- `minimum`/`maximum`: Range for numbers

## Tool Implementation Patterns

### Simple Function Tool

```javascript
class CalculatorTool {
  setupTools() {
    this.toolbox.addTool({
      name: 'add',
      description: 'Add two numbers',
      parameters: {
        a: { type: 'number', required: true },
        b: { type: 'number', required: true }
      },
      execute: async (args) => {
        return { result: args.a + args.b };
      }
    });
  }
}
```

### API Integration Tool

```javascript
class WeatherTool {
  constructor(config) {
    this.apiKey = config.parameters?.apiKey;
    this.setupTools();
  }

  setupTools() {
    this.toolbox.addTool({
      name: 'get_weather',
      description: 'Get current weather',
      parameters: {
        city: { type: 'string', required: true }
      },
      execute: this.getWeather.bind(this)
    });
  }

  async getWeather(args, context) {
    try {
      const response = await fetch(
        `https://api.weather.com/v1/current?key=${this.apiKey}&q=${args.city}`
      );
      const data = await response.json();
      
      context.log.info(`Fetched weather for ${args.city}`);
      
      return {
        city: args.city,
        temperature: data.current.temp_c,
        condition: data.current.condition.text
      };
    } catch (error) {
      context.log.error('Weather API error', { error: error.message });
      throw new Error(`Failed to get weather: ${error.message}`);
    }
  }
}
```

### File Processing Tool

```javascript
class FileProcessorTool {
  setupTools() {
    this.toolbox.addTool({
      name: 'process_file',
      description: 'Process a file',
      parameters: {
        filePath: { type: 'string', required: true },
        operation: { 
          type: 'string', 
          enum: ['count_lines', 'extract_functions', 'format_code']
        }
      },
      execute: this.processFile.bind(this)
    });
  }

  async processFile(args, context) {
    const { filePath, operation } = args;
    
    // Security check
    if (!this.isPathSafe(filePath)) {
      throw new Error('Invalid file path');
    }

    const fs = require('fs').promises;
    const content = await fs.readFile(filePath, 'utf8');
    
    switch (operation) {
      case 'count_lines':
        return { lines: content.split('\n').length };
      
      case 'extract_functions':
        const functions = this.extractFunctions(content);
        return { functions };
      
      case 'format_code':
        const formatted = await this.formatCode(content);
        return { formatted };
      
      default:
        throw new Error(`Unknown operation: ${operation}`);
    }
  }
}
```

## Testing Tools

### Local Testing with CLI

```bash
# Test a specific function
codebolt-cli runtool get_weather ./weather-tool/index.js

# Debug with inspector
codebolt-cli inspecttool ./weather-tool/index.js
```

### Unit Testing

```javascript
// test/weather-tool.test.js
const WeatherTool = require('../index.js');

describe('WeatherTool', () => {
  let tool;

  beforeEach(() => {
    tool = new WeatherTool({
      parameters: { apiKey: 'test-key' }
    });
  });

  test('should get weather for city', async () => {
    const result = await tool.getWeather(
      { city: 'London' },
      { log: { info: jest.fn(), error: jest.fn() } }
    );
    
    expect(result).toHaveProperty('temperature');
    expect(result.city).toBe('London');
  });
});
```

## Publishing and Sharing Tools

### Publishing to Registry

```bash
# Publish your tool
codebolt-cli publishtool

# Or publish from specific directory
codebolt-cli publishtool ./my-tool
```

### Using Tools from Registry

```bash
# List available tools
codebolt-cli listtools

# Pull tool updates
codebolt-cli pulltools
```

### Tool Registry Features

- **Version Management**: Track tool versions and updates
- **Discovery**: Find tools by category and tags
- **Documentation**: Access tool documentation and examples
- **Ratings**: See community feedback and usage statistics

## Best Practices

### Security

1. **Validate Inputs**: Always validate and sanitize parameters
2. **Limit Access**: Restrict file system and network access
3. **Handle Secrets**: Use sensitive parameters for API keys
4. **Error Handling**: Don't expose sensitive information in errors

```javascript
// Good: Input validation
async executeCommand(args, context) {
  if (!args.command || typeof args.command !== 'string') {
    throw new Error('Invalid command parameter');
  }
  
  // Sanitize command
  const safeCommand = args.command.replace(/[;&|`$]/g, '');
  // ... execute safely
}
```

### Performance

1. **Async Operations**: Use async/await for I/O operations
2. **Caching**: Cache expensive operations
3. **Timeouts**: Set reasonable timeouts for external calls
4. **Resource Cleanup**: Clean up resources properly

```javascript
// Good: Caching expensive operations
class DataTool {
  constructor() {
    this.cache = new Map();
  }

  async fetchData(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    
    const data = await this.expensiveOperation(key);
    this.cache.set(key, data);
    return data;
  }
}
```

### Documentation

1. **Clear Descriptions**: Write clear tool and parameter descriptions
2. **Examples**: Provide usage examples
3. **Error Messages**: Use helpful error messages
4. **README**: Include comprehensive README files

## Common Use Cases

### 1. API Integration Tools

Connect to external services:
- Weather APIs
- Database queries
- Cloud services
- Third-party integrations

### 2. File Management Tools

Handle file operations:
- Read/write files
- Process documents
- Generate reports
- Manage directories

### 3. Development Tools

Automate development tasks:
- Code formatting
- Test execution
- Build processes
- Deployment scripts

### 4. Data Processing Tools

Transform and analyze data:
- CSV processing
- JSON manipulation
- Data validation
- Report generation

## Troubleshooting

### Common Issues

**Tool Not Loading**
```
Error: Tool configuration not found
```
- Check `codebolttool.yaml` exists and is valid
- Verify required fields are present

**Parameter Validation Errors**
```
Error: Parameter 'apiKey' is required
```
- Check parameter definitions in configuration
- Ensure required parameters are provided

**MCP Protocol Errors**
```
Error: Invalid MCP response
```
- Ensure tool functions return proper response format
- Check parameter types match definitions

### Debug Mode

Enable detailed logging:

```bash
DEBUG=codebolt:tools codebolt-cli runtool function_name ./tool/index.js
```

## Next Steps

- [Create Your First Tool](./2_create_tool.md) - Step-by-step tool creation
- [Test Tools Locally](./3_testlocalmcp.md) - Testing and debugging
- [Publish Tools](./4_publish_tool.md) - Share your tools
- [CLI Tool Commands](../cli/tools.md) - CLI reference


