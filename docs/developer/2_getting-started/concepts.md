# Core Concepts

Understanding these fundamental concepts will help you make the most of Codebolt AI Editor. Each concept builds upon the others to create a powerful, integrated development experience.

## Agents

**Agents** are AI-powered assistants that can understand your code and perform tasks autonomously. Think of them as specialized team members that work alongside you.

Agents can analyze code, suggest improvements, generate documentation, run tests, and much more. They're triggered by events (like saving a file) or can be invoked manually. Each agent has a specific purpose and can be customized to match your workflow and coding standards.

**Key Features:**
- Event-driven automation
- Context-aware analysis
- Customizable behavior
- Integration with your development tools

[Learn more about Agents →](../core/agents/overview.md)

## Multi-Agents

**Multi-Agents** systems coordinate multiple agents to tackle complex tasks that require different specializations. Like a well-organized development team, each agent contributes their expertise to achieve a common goal.

For example, you might have one agent analyze code quality, another handle testing, and a third generate documentation - all working together in a coordinated workflow to prepare your code for production.

**Key Features:**
- Agent coordination and communication
- Complex workflow orchestration
- Parallel and sequential task execution
- Shared context and data flow

[Learn more about Multi-Agents →](../core/multi-agents/overview.md)

## MCP Tools

**MCP (Modular Component Plugin) Tools** extend Codebolt's capabilities by adding new functionality through a standardized plugin system. These tools can integrate with external services, add new AI models, or provide specialized development utilities.

MCP Tools make Codebolt infinitely extensible, allowing you to integrate with your favorite tools and services seamlessly. Whether you need database connectivity, API testing, or custom visualization, there's likely an MCP Tool for that.

**Key Features:**
- Standardized plugin architecture
- Easy integration with external services
- Custom AI model support
- Community-driven ecosystem

[Learn more about MCP Tools →](../core/mcp-tools/overview.md)

## Inline Edit

**Inline Edit** is Codebolt's signature feature, accessible via Ctrl+K (Cmd+K on macOS), that allows you to make AI-powered code modifications directly in your editor. Simply select code, press the shortcut, describe what you want, and watch your code transform.

This feature bridges the gap between thinking about a change and implementing it, making code modification as natural as describing what you want in plain English.

**Key Features:**
- Instant code transformation
- Natural language prompts
- Context-aware suggestions
- Undo/redo support

[Learn more about Inline Edit →](../core/inline-edit/overview.md)

## Chats

**Chats** provide an AI-assisted conversational interface where you can ask questions, get coding help, and discuss implementation strategies. It's like having a knowledgeable senior developer available 24/7.

The chat interface understands your project context, can reference your code, and provides detailed explanations with code examples. It's perfect for learning new concepts, debugging issues, or exploring different approaches to a problem.

**Key Features:**
- Context-aware conversations
- Code-specific assistance
- Learning and exploration
- Integration with project files

[Learn more about Chats →](../core/chats/overview.md)

## Task Flow

**Task Flow** is Codebolt's workflow automation system that helps you create, manage, and execute complex development processes. Think of it as your personal DevOps pipeline that can be customized for any workflow.

Task Flow can automate everything from code generation and testing to deployment and monitoring. You can create flows that respond to events, run on schedules, or execute on-demand.

**Key Features:**
- Visual workflow builder
- Event-driven automation
- Integration with agents and tools
- Conditional logic and branching

[Learn more about Task Flow →](../core/task-flow/overview.md)

## Context

**Context** is how Codebolt understands your project structure, dependencies, coding patterns, and development preferences. The more context Codebolt has, the smarter and more helpful its suggestions become.

Context includes your file structure, import relationships, coding style, project configuration, and even your team's conventions. This deep understanding enables Codebolt to provide relevant, accurate assistance that feels tailored to your specific project.

**Key Features:**
- Project structure analysis
- Dependency mapping
- Code pattern recognition
- Team convention learning

[Learn more about Context →](../core/context/overview.md)

## CLI

**CLI (Command Line Interface)** provides powerful command-line tools for automation, scripting, and integration with your existing development workflows. The CLI is perfect for CI/CD pipelines, batch operations, and advanced automation scenarios.

Whether you're generating code, running agents, managing workflows, or analyzing projects, the CLI provides programmatic access to all of Codebolt's features.

**Key Features:**
- Comprehensive command set
- Scriptable automation
- CI/CD integration
- Batch operations

[Learn more about CLI →](../core/cli/overview.md)

## TypeScript SDK

**TypeScript SDK** enables developers to build custom extensions, integrations, and tools that extend Codebolt's functionality. With full TypeScript support, you get excellent developer experience with type safety and IntelliSense.

The SDK provides APIs for creating custom agents, MCP tools, workflow steps, and integrations with external services. It's the foundation for building powerful, type-safe extensions.

**Key Features:**
- Full TypeScript support
- Comprehensive API coverage
- Type-safe development
- Rich documentation and examples

[Learn more about TypeScript SDK →](../core/typescript-sdk/overview.md)

## How These Concepts Work Together

These concepts are designed to work seamlessly together:

1. **Agents** use **Context** to understand your project and make intelligent decisions
2. **Multi-Agents** coordinate multiple **Agents** through **Task Flow** workflows
3. **Inline Edit** leverages **Context** and can trigger **Agents** for complex transformations
4. **Chats** can invoke **Agents** and reference **Context** to provide better assistance
5. **MCP Tools** extend the capabilities of **Agents** and **Task Flow**
6. **CLI** provides programmatic access to all features for automation
7. **TypeScript SDK** enables custom development of all these components

## Getting Started with Each Concept

### For Beginners
Start with **Inline Edit** and **Chats** to get immediate value, then explore **Agents** for automation.

### For Intermediate Users
Dive into **Task Flow** and **Multi-Agents** to create sophisticated workflows.

### For Advanced Users
Explore **MCP Tools**, **CLI**, and **TypeScript SDK** to build custom solutions.

## Next Steps

Now that you understand the core concepts, you're ready to:

1. **Explore specific features** by following the links to detailed guides
2. **Try the hands-on tutorials** in [tutorials.md](../tutorials.md)
3. **Build your first custom solution** using the [TypeScript SDK](../core/typescript-sdk/overview.md)

Each concept has its own dedicated section in the [Core](../core/) documentation where you'll find detailed guides, examples, and best practices. Choose the concept that interests you most and dive in!
