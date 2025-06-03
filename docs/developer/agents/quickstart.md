---
sidebar_position: 2
sidebar_label: QuickStart
---

# QuickStart

This guide will walk you through creating your first Codebolt agent in under 10 minutes. For detailed explanations, see the [complete documentation](./1_agentarchitecture.md).

## Prerequisites

- Node.js 14+ installed
- Codebolt CLI installed: `npm install -g codebolt-cli`
- Codebolt account (sign up at [portal.codebolt.ai](https://portal.codebolt.ai))
- Basic understanding of JavaScript/TypeScript

## Step 1: Login and Create Agent

Go to the main directory of your project and run the following commands:

```bash
# Login to Codebolt
npx codebolt-cli login

# Create a new agent
npx codebolt-cli createagent --name "Hello World Agent"
```

This will create a new agent directory in the `.codeboltAgents` directory and start an interactive setup process.

```bash
# Navigate to agent directory
cd .codeboltAgents/hello-world-agent
```

## Step 2: Configure Your Agent

During the interactive setup, you'll be prompted for:

### Basic Information
- **Agent Name**: "Hello World Agent"
- **Description**: "A simple greeting agent for learning Codebolt"
- **Tags**: "hello, demo, learning"
- **Unique ID**: "hello-world-agent" (auto-generated)

### Agent Routing Configuration
- **Works on blank code**: Yes
- **Works on existing code**: Yes
- **Supported languages**: JavaScript, TypeScript
- **Supported frameworks**: Node.js, React

### SDLC Steps Managed
Choose what development steps your agent handles:
- **Code Generation**: "Generate a greeting function", "Create a hello world component"
- **Testing**: "Test the greeting functionality"

### Actions
Define shortcuts users can invoke with `\` commands:
- **Action Name**: "greet"
- **Description**: "Generate a personalized greeting"
- **Action Prompt**: "Create a greeting for the user"

## Step 3: Understand Agent Structure

Your agent will have this structure:

```
.codeboltAgents/hello-world-agent/
├── codeboltagent.yaml    # Agent configuration
├── agent.yaml           # System prompts and behavior
├── task.yaml           # Task execution templates
├── index.js            # Main agent logic
├── package.json        # Dependencies
└── webpack.config.js   # Build configuration
```

## Step 4: Customize Agent Behavior

### Edit System Prompt (`agent.yaml`)

```yaml
system_prompt: |
  You are a friendly greeting agent. Your job is to:
  1. Generate personalized greetings
  2. Help users learn about Codebolt
  3. Provide helpful responses about agent development
  
  Always be polite, helpful, and encouraging.

tools_instruction: |
  Use the available tools to help users with their requests.
  When greeting, make it personal and warm.
```

### Update Agent Logic (`index.js`)

The basic structure is already provided, but you can customize it:

```javascript
const codebolt = require('@codebolt/codeboltjs').default;
const { UserMessage, SystemPrompt, TaskInstruction, Agent } = require("@codebolt/codeboltjs/utils");

codebolt.chat.onActionMessage().on("userMessage", async (req, response) => {
    try {
        // Create user message from request
        const userMessage = new UserMessage(req.message);
        
        // Load system prompt from agent.yaml
        const systemPrompt = new SystemPrompt("./agent.yaml", "system_prompt");
        
        // Get available tools
        const agentTools = await codebolt.tools.listToolsFromToolBoxes(["codebolt"]);
        
        // Create task instruction
        const task = new TaskInstruction(agentTools, userMessage, "./task.yaml", "main_task");
        
        // Initialize agent
        const agent = new Agent(agentTools, systemPrompt);
        
        // Run the agent
        const { message, success, error } = await agent.run(task);
        
        // Send response
        response(message ? message : error);

    } catch (error) {
        console.log("Agent error:", error);
        response("Sorry, I encountered an error processing your request.");
    }
});
```

## Step 5: Test Your Agent Locally

```bash
# Install dependencies
npm install

# Start the agent locally
npx codebolt-cli startagent

# The agent will start on localhost with socket connection
# You should see: "Agent process started..."
```

## Step 6: Test in Codebolt Application

1. **Open Codebolt Application** and navigate to your project
2. **Enable the Agent**: Go to Agent settings and enable your local agent
3. **Test Basic Functionality**:
   ```
   User: Hello, can you greet me?
   Agent: Hello! Welcome to Codebolt. I'm your friendly greeting agent, ready to help you learn and build amazing things!
   ```

4. **Test Action Commands**:
   ```
   User: \greet
   Agent: [Executes the greet action you defined]
   ```

## Step 7: Publish Your Agent

Once your agent works locally, publish it to the registry:

```bash
# Publish to registry
npx codebolt-cli publishagent

# Follow the prompts:
# - GitHub URL (optional)
# - Category: "Utility"
# - Make it public: Yes
```

## Step 8: Use Your Published Agent

```bash
# Clone your published agent in another project
npx codebolt-cli cloneagent hello-world-agent

# Or others can clone it using your unique ID
npx codebolt-cli cloneagent hello-world-agent ./my-project
```

## Quick Commands Reference

```bash
# Agent Management
npx codebolt-cli createagent                    # Create new agent
npx codebolt-cli startagent [dir]              # Start agent locally
npx codebolt-cli publishagent [dir]            # Publish to registry
npx codebolt-cli pullagent [dir]               # Pull latest config

# Registry Operations
npx codebolt-cli listagents                    # List your agents
npx codebolt-cli cloneagent <id> [dir]         # Clone agent
```

## Example Agent Configurations

### Simple Code Generator Agent

```yaml
# codeboltagent.yaml
title: "Code Generator Agent"
description: "Generates boilerplate code for common patterns"
metadata:
  sdlc_steps_managed:
    - name: codegeneration
      example_instructions:
        - "Generate a React component"
        - "Create an API endpoint"
        - "Build a database model"
```

### Testing Assistant Agent

```yaml
# codeboltagent.yaml  
title: "Testing Assistant"
description: "Helps write and run tests"
metadata:
  sdlc_steps_managed:
    - name: testing
      example_instructions:
        - "Write unit tests for this function"
        - "Create integration tests"
        - "Generate test data"
```

### Deployment Helper Agent

```yaml
# codeboltagent.yaml
title: "Deployment Helper"
description: "Assists with deployment tasks"
metadata:
  sdlc_steps_managed:
    - name: deployment
      example_instructions:
        - "Deploy to Vercel"
        - "Set up CI/CD pipeline"
        - "Configure environment variables"
```

## Agent Development Tips

### 1. Start Simple
Begin with basic functionality and gradually add complexity:

```javascript
// Simple greeting logic
if (userMessage.content.toLowerCase().includes('hello')) {
    return "Hello! How can I help you today?";
}
```

### 2. Use Tools Effectively
Leverage available tools for enhanced functionality:

```javascript
// Get available tools
const tools = await codebolt.tools.listToolsFromToolBoxes(["codebolt", "custom"]);

// Use specific tools in your agent logic
const fileTools = tools.filter(tool => tool.name.includes('file'));
```

### 3. Handle Errors Gracefully
Always provide helpful error messages:

```javascript
try {
    const result = await agent.run(task);
    return result.message;
} catch (error) {
    return "I encountered an issue. Please try rephrasing your request.";
}
```

## Next Steps

Now that you've created your first agent, explore:

- **[Agent Architecture](./1_agentarchitecture.md)** - Deep dive into agent concepts
- **[Using Agents](./2_usingagents.md)** - Advanced usage patterns  
- **[Custom Agents](./3_customagents.md)** - Building specialized agents
- **[Tools Integration](../tools/quickstart.md)** - Add tools to your agents

## Troubleshooting

**Agent not starting?**
```bash
# Check if dependencies are installed
npm install

# Verify configuration
cat codeboltagent.yaml

# Check for syntax errors
npm run build
```

**Agent not responding in app?**
```bash
# Ensure agent is running
npx codebolt-cli startagent

# Check agent is enabled in Codebolt Application
# Verify socket connection (default port 12345)
```

**Publishing failed?**
```bash
# Check authentication
npx codebolt-cli login

# Verify unique ID is not taken
npx codebolt-cli listagents
```

**Need help?**
```bash
# Get help
npx codebolt-cli --help

# Check agent status
ps aux | grep node
```

---

🎉 **Congratulations!** You've created, tested, and published your first Codebolt agent. Start building more sophisticated agents by exploring the detailed documentation and integrating tools for enhanced functionality.