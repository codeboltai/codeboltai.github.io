# Agents

The Agent Marketplace is your central hub for discovering, exploring, and managing AI agents within the CodeBolt platform. CodeBolt agents are intelligent AI assistants that leverage CodeBolt's APIs to interact with your code editor, providing capabilities far beyond traditional code editors.

## What Makes CodeBolt Agents Unique?

Unlike other editors that provide a single core agent or only allow prompt customization, CodeBolt agents are fundamentally different:

- **Code-Based Agents**: Write custom code that includes any process, workflows, and agentic AI logic
- **Full Editor Control**: Access to complete editor APIs for comprehensive control over the development environment
- **Custom Workflows**: Create complex, multi-step automation processes tailored to your needs
- **Tool Integration**: Seamless integration with various development tools and services

## Accessing the Agent Marketplace

Navigate to the Agent Marketplace through the CodeBolt registry at `registry.codebolt.ai`. The marketplace provides an intuitive interface with search functionality, sorting options, and detailed agent listings.


![agents](/registry/agents.png)

## Types of CodeBolt Agents

### 1. Custom Code-Based Agents
The real power of CodeBolt comes with custom code-based agents that provide:
- **Complete Editor APIs**: Full access to file manipulation, code editing, and task automation
- **Custom Logic**: Write sophisticated agent behaviors and workflows using JavaScript/TypeScript
- **Tool Utilization**: Integrate with any available tools and APIs
- **LLM Integration**: Leverage large language models for intelligent decision making
- **Persistent State**: Maintain state across agent interactions

### 2. Remix Agents
A simpler, cursor-style agent creation method that allows:
- **Model Flexibility**: Change the underlying AI model used by the agent
- **MCP Configuration**: Modify Model Context Protocol settings
- **Real-time Adjustments**: Make changes without deploying new agent versions
- **Local MCP Support**: Use local computing resources for enhanced privacy and control

## How CodeBolt Agents Work

CodeBolt agents operate through an agentic process flow:

1. **User Intent Understanding**: Parse and interpret user requests
2. **Task Planning**: Break down complex tasks into actionable steps
3. **Tool Utilization**: Use available tools and APIs to accomplish tasks
4. **Code Manipulation**: Read, write, and modify code files intelligently
5. **Decision Making**: Use LLM reasoning to make intelligent choices
6. **Result Delivery**: Provide feedback and results to users

## Search and Filtering

- **Search Bar**: Use the "Please Enter Agent" search functionality to find specific agents by name or functionality
- **Sort Options**: Sort agents by "Highest Rating" to see the most popular and well-reviewed agents first
- **Display Options**: Choose how many agents to show per page (12 agents default)

## Featured Agents

- Documentation Agent
- CodeBolt Web Deployment
- CodeBolt Web Generator
- CodeBolt Aider
- CodeBolt CRM DEV
- CodeBolt Slides Maker
- CodeBolt App Installer1
- CodeBolt-Devika
- Ask
- CodeBolt App Installer
- CodeBolt Pilot
- CodeBolt Test

## Agent Capabilities by Category

### Code Generation & Modification
- Generate code based on specifications and requirements
- Modify existing code intelligently while maintaining quality
- Create entire applications, components, or modules
- Refactor code following best practices

### Documentation & Analysis
- Create comprehensive project documentation
- Generate API documentation automatically
- Analyze codebases and provide insights
- Update documentation based on code changes

### Deployment & DevOps
- Streamline application deployment processes
- Handle configuration management across environments
- Automate CI/CD workflows and pipelines
- Manage containerization and orchestration

### Testing & Quality Assurance
- Generate test cases automatically based on code analysis
- Run and analyze test results with detailed reporting
- Implement quality gates and code review processes
- Performance testing and optimization recommendations

### Development Workflow
- Automate repetitive development tasks
- Handle complex multi-step workflows
- Integrate with external services and APIs
- Manage project dependencies and environments

## Creating Your Own Agents

### Getting Started with Agent Development

1. **Install CodeBolt CLI**: `npm install -g codebolt-cli`
2. **Login**: `npx codebolt-cli login`
3. **Create Agent**: `npx codebolt-cli createagent --name "Your Agent Name"`

### Agent Development Options

#### Custom Code-Based Agents
- Full access to CodeBolt's editor APIs
- Write sophisticated agent logic in JavaScript/TypeScript
- Create complex workflows and integrations
- Maximum flexibility and control

#### Remix Agents
- Quick customization of existing agents
- Modify models and MCP configurations
- Real-time adjustments without redeployment
- Perfect for rapid prototyping

### Publishing to Registry

```bash
# Publish your agent to the marketplace
npx codebolt-cli publishagent

# Make it available to the community
# Include GitHub URL, category, and description
```

## Navigation

The marketplace interface includes:
- **Home**: Return to the main CodeBolt homepage
- **Portal**: Access the CodeBolt portal dashboard
- **Docs**: View comprehensive documentation
- **MCP Tools**: Browse available MCP tools

The Agent Marketplace serves as your gateway to enhancing productivity and automating development workflows through specialized AI agents. Whether you're using pre-built agents or creating your own custom solutions, the marketplace provides the foundation for intelligent, automated development workflows tailored to your specific needs.

