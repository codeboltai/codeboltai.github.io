# Quickstart Tutorial

Welcome to Codebolt AI Editor! This hands-on tutorial will get you up and running in just 15 minutes. By the end, you'll have created your first agent, used Inline Edit, and executed a basic command.

## What You'll Build

In this tutorial, you'll:
1. Create a simple "Code Reviewer" agent
2. Use Inline Edit to improve code quality
3. Run basic CLI commands
4. Experience the power of AI-assisted development

## Step 1: Launch Codebolt

Open Codebolt AI Editor and create a new project:

```bash
# Create a new project
codebolt create my-first-project
cd my-first-project

# Open in Codebolt
codebolt open .
```

## Step 2: Create Your First Agent

Let's create a simple agent that reviews code for best practices.

### Using the UI (Recommended for beginners)

1. **Open the Agent Panel**: Click the "Agents" tab in the sidebar
2. **Create New Agent**: Click the "+" button
3. **Configure the Agent**:
   - **Name**: "Code Reviewer"
   - **Description**: "Reviews code for best practices and suggests improvements"
   - **Trigger**: "On file save"
   - **Action**: "Analyze and suggest improvements"

4. **Save the Agent**: Click "Create Agent"

### Using Code (For developers who prefer configuration as code)

Create a new file `agents/code-reviewer.json`:

```json
{
  "name": "Code Reviewer",
  "description": "Reviews code for best practices and suggests improvements",
  "version": "1.0.0",
  "triggers": [
    {
      "type": "file_save",
      "patterns": ["*.js", "*.ts", "*.py", "*.java"]
    }
  ],
  "actions": [
    {
      "type": "analyze_code",
      "prompt": "Review this code for best practices, potential bugs, and suggest improvements. Focus on readability, performance, and maintainability.",
      "output": "suggestions"
    }
  ],
  "settings": {
    "auto_apply": false,
    "show_notifications": true
  }
}
```

Register the agent:
```bash
codebolt agent register agents/code-reviewer.json
```

## Step 3: Test Your Agent

Create a sample JavaScript file to test your agent:

```javascript
// sample.js
function calculateTotal(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total = total + items[i].price * items[i].quantity;
    }
    return total;
}

var cart = [
    { price: 10, quantity: 2 },
    { price: 15, quantity: 1 },
    { price: 8, quantity: 3 }
];

console.log("Total: $" + calculateTotal(cart));
```

Save the file and watch your Code Reviewer agent analyze it!

## Step 4: Use Inline Edit (Ctrl+K)

Now let's improve the code using Codebolt's powerful Inline Edit feature:

1. **Select the `calculateTotal` function**
2. **Press `Ctrl+K`** (or `Cmd+K` on macOS)
3. **Enter your prompt**: "Convert this to modern JavaScript with arrow functions and const/let"
4. **Press Enter** and watch the magic happen!

Expected result:
```javascript
const calculateTotal = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
```

### Try More Inline Edit Examples

Select different parts of your code and try these prompts:

- `"Add error handling for empty arrays"`
- `"Add JSDoc comments"`
- `"Convert to TypeScript with proper types"`
- `"Add input validation"`

## Step 5: Explore CLI Commands

Codebolt's CLI provides powerful automation capabilities:

```bash
# List all available agents
codebolt agent list

# Run an agent manually
codebolt agent run "Code Reviewer" --file sample.js

# Generate code from a prompt
codebolt generate function "Create a function that validates email addresses"

# Get project insights
codebolt analyze --type complexity

# Run all agents on the project
codebolt workflow run review-and-improve
```

## Step 6: Create a Simple Workflow

Let's create a workflow that combines multiple actions:

```bash
# Create a new workflow
codebolt workflow create code-improvement
```

Configure the workflow in `workflows/code-improvement.json`:

```json
{
  "name": "Code Improvement Workflow",
  "description": "Analyzes, improves, and documents code",
  "steps": [
    {
      "name": "analyze",
      "agent": "Code Reviewer",
      "input": "all_files"
    },
    {
      "name": "improve",
      "type": "inline_edit",
      "prompt": "Apply the suggested improvements from the previous step"
    },
    {
      "name": "document",
      "type": "generate",
      "prompt": "Generate JSDoc comments for all functions"
    }
  ]
}
```

Run the workflow:
```bash
codebolt workflow run code-improvement
```

## Step 7: Explore the Chat Interface

Open the Chat panel and try these example queries:

1. **Code Help**: "How can I optimize this function for better performance?"
2. **Architecture Questions**: "What's the best way to structure a React component?"
3. **Debugging**: "Why might this function be returning undefined?"
4. **Learning**: "Explain the difference between map() and forEach()"

## What You've Accomplished

Congratulations! In just 15 minutes, you've:

✅ Created your first AI agent
✅ Used Inline Edit to improve code
✅ Executed CLI commands for automation
✅ Built a simple workflow
✅ Experienced AI-assisted development

## Next Steps

Now that you've got the basics down, here's what to explore next:

### Immediate Next Steps
1. **Learn Core Concepts**: [concepts.md](concepts.md) - Understand the fundamentals
2. **Create Custom Agents**: [../core/agents/custom-agent.md](../core/agents/custom-agent.md)
3. **Explore Multi-Agent Workflows**: [../core/multi-agents/overview.md](../core/multi-agents/overview.md)

### Advanced Features
1. **MCP Tools**: [../core/mcp-tools/overview.md](../core/mcp-tools/overview.md) - Extend Codebolt's capabilities
2. **Task Flow Automation**: [../core/task-flow/overview.md](../core/task-flow/overview.md)
3. **TypeScript SDK**: [../core/typescript-sdk/overview.md](../core/typescript-sdk/overview.md) - Build custom integrations

### Real-World Projects
1. **End-to-End Tutorials**: [../tutorials.md](../tutorials.md) - Complete project walkthroughs

## Pro Tips for Success

1. **Start Small**: Begin with simple agents and gradually add complexity
2. **Use Descriptive Prompts**: The more specific your prompts, the better the results
3. **Iterate and Refine**: Agents improve with feedback and refinement
4. **Leverage Context**: Codebolt understands your project structure - use it!
5. **Join the Community**: Connect with other developers at [community.codebolt.ai](https://community.codebolt.ai)

## Troubleshooting

If something didn't work as expected:

- **Agent not triggering**: Check the trigger patterns match your file types
- **Inline Edit not working**: Ensure you have selected text before pressing Ctrl+K
- **CLI commands failing**: Verify you're in a Codebolt project directory
- **Need more help**: Check our [Troubleshooting Guide](../troubleshooting.md)

Ready to dive deeper? Let's explore the [Core Concepts](concepts.md) that power Codebolt AI Editor!
