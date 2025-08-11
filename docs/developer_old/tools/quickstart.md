---
sidebar_position: 1.5
sidebar_label: Quickstart
---

# Quickstart

This guide will walk you through creating your first Codebolt tool in under 10 minutes. For detailed explanations, see the [complete documentation](./overview.md).

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

The tool details are written in `codebolttool.yaml`. Edit `codebolttool.yaml`:

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

The Tool Logic is written using [ToolBox class](./overview.md#tool-implementation-patterns). Replace `index.js` content:

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

- Open the Codebolt Application and open the current project.
- Make Sure the Tool is enabled for the Current Agent (see [Agent Configuration](../cli/agents.md#agent-configuration)).
- In the Chat, ask the AI Agent with the following message:
```
User: Ask Greet Hello World tool to greet Alex.
```
The AI agent should respond with 
```
Agent: Hello, Alex!
```



## Step 6: Publish Your Tool

Publish the tool to the Codebolt Registry. This will make the tool available to other users or agents.

```bash
# Publish to registry
npx codebolt-cli publishtool

# Follow the prompts:
# - GitHub URL (optional)
# - Category: "Utility"
# - Tags: "greeting,hello,demo"
# - Requires API key: No
```

## Step 7: Use Your Tool

Now you can use the tool in other projects from the registry.

```bash
# Install your published tool
npx codebolt-cli installtool hello-world-tool

# Use in another project
npx codebolt-cli runtool greet hello-world-tool
```

---

🎉 **Congratulations!** You've created, tested, and published your first Codebolt tool. Start building more complex tools by exploring the detailed documentation.

## Quick Commands Reference

```bash
# Tool Management
npx codebolt-cli createtool                    # Create new tool
npx codebolt-cli runtool <function> <file>     # Test tool function
npx codebolt-cli inspecttool <file>           # Debug tool interactively
npx codebolt-cli publishtool                  # Publish to registry

# Registry Operations
npx codebolt-cli searchtools <query>          # Search tools
npx codebolt-cli installtool <tool-name>      # Install tool
npx codebolt-cli listtools --installed       # List installed tools
npx codebolt-cli updatetool <tool-name>       # Update tool
```



## Next Steps

Now that you've created your first tool, explore:

- **[Complete Tools Guide](./overview.md)** - Detailed concepts and patterns
- **[Testing Guide](./testlocalmcp.md)** - Comprehensive testing strategies
- **[Publishing Guide](./publish_tool.md)** - Advanced publishing features
- **[Tool Registry](./tool_registry.md)** - Discover and manage tools
- **[Examples](./examples.md)** - Example use cases







