---
sidebar_position: 1.5
sidebar_label: Quickstart
---

# Quickstart

This guide will walk you through creating your first Codebolt tool in under 10 minutes. For detailed explanations, see the [complete documentation](./tools.md).

## Prerequisites

- Node.js 14+ installed
- Codebolt CLI installed: `npm install -g codebolt-cli`
- Codebolt account (sign up at [portal.codebolt.ai](https://portal.codebolt.ai))

## Step 1: Login and Create Tool

Go the the main directory of your project and run the following commands:

```bash
# Login to Codebolt
npx codebolt-cli login

# Create a new tool
npx codebolt-cli createtool --name "Hello World Tool" --id "hello-world-tool"
```

This will create a new tool directory in the `.codeboltAgents/tools` directory. 

```bash
# Navigate to tool directory
cd .codeboltAgents/tools/hello-world-tool
```


## Step 2: Configure Your Tool

The tool details are written in [`codebolttool.yaml`](`codebolttool.yaml`). Edit `codebolttool.yaml`:

```yaml
name: "Hello World Tool"
description: "A simple greeting tool"
version: "1.0.0"
uniqueName: "hello-world-tool"

parameters:
  name:
    type: "string"
    description: "Name to greet"
    default: "World"
```

## Step 3: Implement Tool Logic

The Tool Logic is written using [ToolBox class](./tools.md#toolbox-class). Replace `index.js` content:

```javascript
const { ToolBox } = require('@codebolt/toolbox');

class HelloWorldTool {
  constructor(config) {
    this.toolbox = new ToolBox({
      name: 'Hello World Tool',
      version: '1.0.0'
    });
    
    this.setupTools();
  }

  setupTools() {
    this.toolbox.addTool({
      name: 'greet',
      description: 'Generate a greeting message',
      parameters: {
        name: {
          type: 'string',
          description: 'Name to greet',
          default: 'World'
        }
      },
      execute: this.greet.bind(this)
    });
  }

  async greet(args, context) {
    const { name = 'World' } = args;
    
    context.log.info(`Generating greeting for ${name}`);
    
    return {
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString()
    };
  }

  async start() {
    await this.toolbox.start();
  }
}

module.exports = HelloWorldTool;
```

## Step 4: Test Your Tool

[Codebolt CLI](../cli/overview.md) provides a way to test the tool locally.

```bash
# Test the greet function
npx codebolt-cli runtool greet ./index.js

# When prompted, enter: {"name": "Developer"}
# Expected output: {"message": "Hello, Developer!", "timestamp": "..."}
```

You can also use the interactive inspector to debug the tool.
```bash
# Use interactive inspector for debugging
npx codebolt-cli inspecttool ./index.js
```

## Step 5: Test Your Tool in Codebolt Application

Open the Codebolt Application and open the current project.



## Step 6: Publish Your Tool

```bash
# Publish to registry
codebolt-cli publishtool

# Follow the prompts:
# - GitHub URL (optional)
# - Category: "Utility"
# - Tags: "greeting,hello,demo"
# - Requires API key: No
```

## Step 7: Use Your Tool

```bash
# Install your published tool
codebolt-cli installtool hello-world-tool

# Use in another project
codebolt-cli runtool greet hello-world-tool
```

## Quick Commands Reference

```bash
# Tool Management
codebolt-cli createtool                    # Create new tool
codebolt-cli runtool <function> <file>     # Test tool function
codebolt-cli inspecttool <file>           # Debug tool interactively
codebolt-cli publishtool                  # Publish to registry

# Registry Operations
codebolt-cli searchtools <query>          # Search tools
codebolt-cli installtool <tool-name>      # Install tool
codebolt-cli listtools --installed       # List installed tools
codebolt-cli updatetool <tool-name>       # Update tool
```

## Example Use Cases

### API Integration Tool
```bash
codebolt-cli createtool --name "Weather Tool" --id "weather-tool"
# Add API key parameter and fetch weather data
```

### File Processing Tool
```bash
codebolt-cli createtool --name "CSV Parser" --id "csv-parser"
# Add file reading and CSV parsing logic
```

### Data Transformation Tool
```bash
codebolt-cli createtool --name "JSON Formatter" --id "json-formatter"
# Add JSON validation and formatting functions
```

## Next Steps

Now that you've created your first tool, explore:

- **[Complete Tools Guide](./tools.md)** - Detailed concepts and patterns
- **[Testing Guide](./testlocalmcp.md)** - Comprehensive testing strategies
- **[Publishing Guide](./publish_tool.md)** - Advanced publishing features
- **[Tool Registry](./tool_registry.md)** - Discover and manage tools

## Troubleshooting

**Tool not working?**
```bash
# Check configuration
cat codebolttool.yaml

# Validate tool
codebolt-cli runtool greet ./index.js
```

**Publishing failed?**
```bash
# Check authentication
codebolt-cli whoami

# Verify unique name
codebolt-cli searchtools hello-world-tool
```

**Need help?**
```bash
# Get help
codebolt-cli help

# Check tool status
codebolt-cli toolstatus hello-world-tool
```

---

🎉 **Congratulations!** You've created, tested, and published your first Codebolt tool. Start building more complex tools by exploring the detailed documentation.




