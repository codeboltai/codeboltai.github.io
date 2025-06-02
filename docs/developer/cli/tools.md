---
sidebar_position: 5
---

# Tool Development with CLI

The Codebolt CLI provides commands for creating, testing, and managing MCP (Model Context Protocol) tools. Tools are specialized utilities that extend agent capabilities and can be integrated into agents or used standalone.

## What are Codebolt Tools?

Codebolt Tools are MCP-compatible utilities that:

- **Follow MCP Standard**: Implement the Model Context Protocol
- **Extend Agent Capabilities**: Provide specialized functionality to agents
- **Are Reusable**: Can be shared across multiple agents and projects
- **Support Parameters**: Accept configuration and runtime parameters
- **Are Testable**: Can be debugged and tested independently

For detailed information about tool architecture and development concepts, see the [Tools Documentation](../../tools/).

## CLI Commands for Tools

### Creating Tools

Create a new tool with the interactive wizard:

```bash
codebolt-cli createtool
```

Create a tool with command-line options:

```bash
codebolt-cli createtool \
  --name "File Manager" \
  --id "file-manager" \
  --description "Manages file operations" \
  --parameters '{"rootPath": "./", "extensions": [".js", ".ts"]}'
```

**Command Options**:
```bash
codebolt-cli createtool [options]

Options:
  -n, --name <name>              Tool display name
  -i, --id <unique-id>          Unique identifier (no spaces)
  -d, --description <desc>       Tool description
  -p, --parameters <json>        Parameters in JSON format
  -h, --help                    Display help information
```

### Testing Tools

Execute a tool with a specific command:

```bash
codebolt-cli runtool <command> <file>

# Examples
codebolt-cli runtool list_files ./my-tool/index.js
codebolt-cli runtool read_file ./my-tool/index.js
codebolt-cli runtool process_data ./my-tool/index.js
```

### Debugging Tools

Use the MCP inspector for interactive debugging:

```bash
codebolt-cli inspecttool <file>

# Example
codebolt-cli inspecttool ./my-tool/index.js
```

The inspector provides:
- Interactive command testing
- Parameter validation
- Response debugging
- Performance monitoring

## Tool Configuration

### Basic Configuration File

Tools use `codebolttool.yaml` for configuration:

```yaml
name: "File Manager Tool"
description: "Manages file operations safely"
version: "1.0.0"
uniqueName: "file-manager-tool"

parameters:
  rootPath:
    type: "string"
    description: "Root directory path"
    default: "./"
  
  allowedExtensions:
    type: "array"
    description: "Allowed file extensions"
    default: [".js", ".ts", ".json"]
```

### Directory Structure

The CLI creates this structure for tools:

```
.codeboltAgents/tools/my-tool/
├── codebolttool.yaml     # Tool configuration
├── package.json          # Node.js dependencies
├── index.js             # Main tool implementation
├── README.md            # Tool documentation
└── src/                 # Source code (optional)
    ├── handlers/        # MCP handlers
    └── utils/           # Utility functions
```

## Tool Implementation

### Basic Tool Structure

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
      description: 'List files in directory',
      parameters: {
        path: { type: 'string', description: 'Directory path' }
      },
      execute: this.listFiles.bind(this)
    });

    this.toolbox.addTool({
      name: 'read_file',
      description: 'Read file content',
      parameters: {
        filePath: { type: 'string', description: 'File path' }
      },
      execute: this.readFile.bind(this)
    });
  }

  async listFiles(args, context) {
    // Implementation for listing files
    const { path = './' } = args;
    // ... file listing logic
    return { files: [] };
  }

  async readFile(args, context) {
    // Implementation for reading files
    const { filePath } = args;
    // ... file reading logic
    return { content: '' };
  }

  async start() {
    await this.toolbox.start();
  }
}

module.exports = FileManagerTool;
```

## Integration with Agents

### Using Tools in Agents

Tools can be integrated into agents for enhanced functionality:

```javascript
// In agent code
const FileManagerTool = require('./tools/file-manager');

class MyAgent extends Agent {
  constructor(config) {
    super(config);
    this.setupTools();
  }

  setupTools() {
    // Register tool
    this.registerTool('fileManager', new FileManagerTool({
      parameters: {
        rootPath: this.config.projectPath,
        allowedExtensions: ['.js', '.ts', '.json', '.md']
      }
    }));
  }

  async generateComponent(params) {
    // Use tool in agent action
    const files = await this.tools.fileManager.listFiles({
      path: './src/components'
    });

    // Process files and generate component
    // ...
  }
}
```

## Publishing Tools

### Publishing to Platform

```bash
codebolt-cli publishtool [folderPath]
```

This command:
1. Validates tool configuration
2. Packages tool files
3. Uploads to the platform
4. Makes tool available for use

### Listing Your Tools

```bash
codebolt-cli listtools
```

### Pulling Tool Updates

```bash
codebolt-cli pulltools [workingDir]
```

## Best Practices

### CLI Usage

1. **Test Locally First**: Always test tools with `runtool` before publishing
2. **Use Inspector**: Debug complex tools with `inspecttool`
3. **Validate Configuration**: Ensure `codebolttool.yaml` is properly formatted
4. **Version Control**: Keep tools in version control
5. **Document Usage**: Include clear README files

### Tool Development

1. **Follow MCP Standards**: Ensure compatibility with MCP protocol
2. **Handle Errors Gracefully**: Implement proper error handling
3. **Validate Inputs**: Always validate parameters
4. **Provide Clear Responses**: Return structured, meaningful responses
5. **Keep Tools Focused**: Each tool should have a single responsibility

## Troubleshooting

### Common CLI Issues

#### Tool Not Found
```bash
Error: Tool file not found
```
**Solution**: Verify file path and ensure tool exists

#### Configuration Errors
```bash
Error: Invalid codebolttool.yaml format
```
**Solution**: Check YAML syntax and required fields

#### MCP Protocol Errors
```bash
Error: Invalid MCP response format
```
**Solution**: Ensure tool follows MCP specification

### Debug Mode

Enable debug logging:

```bash
DEBUG=codebolt:tools codebolt-cli runtool list_files ./my-tool/index.js
```

## Examples

### Simple File Tool

```bash
# Create tool
codebolt-cli createtool --name "Simple File Tool" --id "simple-file-tool"

# Test functionality
codebolt-cli runtool list_files ./.codeboltAgents/tools/simple-file-tool/index.js

# Debug if needed
codebolt-cli inspecttool ./.codeboltAgents/tools/simple-file-tool/index.js
```

### Database Tool

```bash
# Create with parameters
codebolt-cli createtool \
  --name "Database Tool" \
  --id "database-tool" \
  --parameters '{"connectionString": "sqlite://./db.sqlite", "timeout": 30}'

# Test database operations
codebolt-cli runtool query ./.codeboltAgents/tools/database-tool/index.js
```

## Next Steps

- [Learn about detailed tool development](../../tools/)
- [Explore MCP protocol documentation](https://modelcontextprotocol.io/)
- [See agent integration examples](./agents.md)
- [Review complete command reference](./commands.md)
- [Check practical examples](./examples.md) 