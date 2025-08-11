# Developer Documentation Structure

```
developer/

Get Started 
    ├── welcom.md              # Main landing page with component overview
    ├── installation.md                  # AI Agent development
    ├── quickStart.md/                   # MCP Tool development  
    ├── concept/
            |── Agents # Small Introduction
            |── Multi-Agents # Small Introduction
            |── MCP Tools # Small Introduction
            |── Inline Edit (Control+K) # Small Introduction
            |── Chats  # Small Introduction
            |── Task Flow # Small Introduction
            |── Context  # Small Introduction
            |── CLI # Small Introduction
            |── typeScriptSdk # Small Introduction
Core 
  |── Agents/
            |── Overview.md
                |── introdcution
                |── How Agents Works
                |── Agent Architecture
                |── Agent Flow
                |── Its Type
            |── CustomAgent.md
                |── Introduction
                |── how to create (Explain All Code)
                |── Way of creation
            |── RemixAgent.md
                |──Introduction
                |──how to make it Remix Agent 

    |── Multi-Agents 
            |── Introcution basic
    |── Inline Edit
            Introduction 
            Example 

```

developer/
├── index.md # Welcome page
├── getting-started/  # Onboarding section:
│   ├── installation.md 
│   ├── quickstart.md 
│   └── concepts.md   # Single file with concise introductions (1-2 paragraphs each) to core concepts: Agents, Multi-Agents, MCP Tools, Inline Edit, Chats, Task Flow, Context, CLI, and TypeScript SDK. Each section includes a link to the corresponding detailed page in the Core section for deeper exploration.

├── core/  # In-depth guides: 
│   ├── agents/  # Directory for Agents
│   │   ├── overview.md    # Detailed overview of Agents: 
│   │   ├── custom-agent.md   # Guide to creating custom agents:
│   │   └── remix-agent.md    # Guide to remixing agents: 
│   ├── multi-agents/         # Directory for Multi-Agents
│   │   └── overview.md       # Comprehensive guide: 
│   ├── inline-edit/          # Directory for Inline Edit: 
│   │   └── overview.md       # In-depth guide:
│   ├── mcp-tools/            # Directory for MCP Tools:
│   │   └── overview.md       # Detailed guide:
│   ├── chats/                # Directory for Chats
│   │   └── overview.md       # In-depth guide:
│   ├── task-flow/            # Directory for Task Flow
│   │   └── overview.md       # Detailed guide:
│   ├── context/              # Directory for Context
│   │   └── overview.md       # In-depth guide:
│   ├── cli/                  # Directory for CLI
│   │   └── overview.md       # Detailed guide
│   └── typescript-sdk/        # Directory for TypeScript SDK
│       └── overview.md       # In-depth guide:
├── tutorials.md              # End-to-end tutorials
├── api-reference.md          # API documentation: 
├── troubleshooting.md        # Support section
├── contributing.md           # Contribution guidelines