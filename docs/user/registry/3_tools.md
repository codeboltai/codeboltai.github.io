# Tools

The MCP (Model Context Protocol) Marketplace is your comprehensive resource for discovering and integrating powerful MCP tools that extend the capabilities of your CodeBolt environment. These tools provide specialized functionality through the Model Context Protocol framework, enabling seamless integration with AI agents and development workflows.

## What are CodeBolt Tools?

CodeBolt Tools are MCP-compatible utilities built on the Model Context Protocol (MCP) standard. They are custom utilities that extend the capabilities of AI agents by providing specialized functionality, allowing you to integrate external services, automate tasks, and create domain-specific capabilities that agents can use when solving problems.

### Key Characteristics

- **MCP Compatibility**: Built on the Model Context Protocol standard, ensuring full backward compatibility with existing MCP implementations
- **Agent Integration**: Provide specialized functions that agents can call during problem-solving
- **Reusable**: Can be shared across multiple agents and projects
- **Configurable**: Accept parameters for customization and flexibility
- **Universal**: Work in both Codebolt Application and via CLI
- **Shareable**: Can be published to and used from the tool registry

## Why Use CodeBolt Tools?

Tools are essential for extending agent capabilities in several key areas:

### External Integrations
- Connect to APIs, databases, and external services
- Integrate with third-party platforms and services
- Handle authentication and secure connections

### File Operations
- Read, write, and manipulate files safely
- Process different file formats and types
- Manage file system operations

### Data Processing
- Transform and analyze data efficiently
- Handle complex data structures and formats
- Perform calculations and data validation

### Automation
- Automate repetitive development tasks
- Create custom workflows and processes
- Schedule and manage task execution

### Domain-Specific Logic
- Implement business rules and specialized workflows
- Create industry-specific functionality
- Handle complex domain requirements

## Accessing the MCP Marketplace

Navigate to the MCP Marketplace at `registry.codebolt.ai/mcp-tools`. The marketplace features an intuitive interface with search functionality, sorting options, and detailed tool listings.

![agents](/registry/agents.png)

## Tool Architecture

### Core Components

Every CodeBolt tool consists of four essential components:

1. **Configuration File** (`codebolttool.yaml`): Defines tool metadata, parameters, and settings
2. **Implementation** (`index.js`): Contains the tool's core functionality and logic
3. **Documentation** (`README.md`): Explains how to use the tool effectively
4. **Dependencies** (`package.json`): Lists required Node.js packages and versions

### Tool Structure

```
my-tool/
├── codebolttool.yaml     # Tool configuration and metadata
├── package.json          # Node.js dependencies
├── index.js             # Main implementation
├── README.md            # Documentation
└── src/                 # Additional source files (optional)
    ├── handlers/        # Function handlers
    └── utils/           # Utility functions
```

## How CodeBolt Tools Work

### 1. Tool Definition

Tools are defined in `codebolttool.yaml` for identification in the registry and CodeBolt application:

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

Tools are implemented using the ToolBox class from CodeBolt's utilities, providing MCP-compatible functionality:

```javascript
import { ToolBox } from '@codebolt/codeboltjs/utils';
import { z } from 'zod';

const toolbox = new ToolBox({
  name: 'File Manager',
  version: '1.0.0'
});

toolbox.addTool({
  name: 'list_files',
  description: 'List files in a directory',
  parameters: z.object({
    path: z.string().describe('Directory path').default('./')
  }),
  execute: async (args, context) => {
    const { path } = args;
    // Implementation logic here
    context.log.info(`Listing files in ${path}`);
    return { files: [] };
  }
});

async function main() {
  try {
    await toolbox.activate();
    console.log('File Manager toolbox is running!');
  } catch (error) {
    console.error('Failed to start toolbox:', error);
  }
}

main();
```

### 3. Agent Integration

Agents can seamlessly use tools to perform specific tasks. The toolbox automatically handles the MCP protocol communication:

```javascript
// In an agent
const files = await this.tools.fileManager.listFiles({
  path: './src/components'
});

// The tool responds with the expected format
console.log(files); // { files: [...] }
```

## Search and Filtering

The marketplace provides powerful discovery capabilities:

- **Search Functionality**: Find specific MCP tools by name or functionality
- **Sort Options**: Sort tools by "Most Stars" to see the most popular tools first
- **Display Options**: Choose how many tools to show per page (12 tools default)
- **Category Filtering**: Browse tools by specific categories and use cases
- **Tag-based Discovery**: Find tools using relevant keywords and tags

## Available MCP Tools

### GitHub
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: Integrates GitHub functionality into your development workflow
- **Capabilities**: Access GitHub repositories, manage issues and pull requests, handle collaboration features, automate GitHub workflows

### Git
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: Provides comprehensive Git version control capabilities
- **Capabilities**: Execute Git commands, manage repositories, track changes, handle branching and merging operations

### Sqlite
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: SQLite database integration and management
- **Capabilities**: Query databases, manage schemas, handle transactions, perform data operations through MCP interface

### Fetch
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: HTTP request and web data fetching capabilities
- **Capabilities**: Make HTTP requests, fetch web content, handle API interactions, manage request/response cycles

### Sentry
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: Error tracking and application monitoring integration
- **Capabilities**: Monitor application errors, track performance metrics, manage error reporting and alerting

### EverArt
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: Artistic and creative content generation
- **Capabilities**: Generate and manipulate artistic content using AI-powered tools and creative algorithms

### Memory
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: Persistent memory and data storage capabilities
- **Capabilities**: Store, retrieve, and manage persistent data across sessions, maintain context and state

### Brave Search
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: Web search functionality through Brave Search engine
- **Capabilities**: Perform web searches, retrieve search results, access web information with privacy focus

### Puppeteer
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: Web browser automation and control
- **Capabilities**: Automate web browsers, perform web scraping, control browser interactions, generate PDFs and screenshots

### PostgreSQL
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: PostgreSQL database integration and management
- **Capabilities**: Connect to databases, execute queries, manage schemas, handle complex database operations

### Filesystem
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: File system operations and management
- **Capabilities**: Read, write, create, delete files and directories, manage file permissions, handle file operations safely

### Slack
**By modelcontextprotocol**
- **Category**: Model Context Protocol Servers
- **Status**: ✅ Verified
- **Purpose**: Slack workspace integration and communication
- **Capabilities**: Send messages, manage channels, interact with Slack workspaces, automate communication workflows

## Tool Categories

The marketplace organizes MCP tools into functional categories:

### Version Control
- **Git**: Complete version control operations
- **GitHub**: Repository and collaboration management
- Advanced branching, merging, and workflow automation

### Database Integration
- **SQLite**: Lightweight database operations
- **PostgreSQL**: Enterprise database connectivity
- Schema management and complex query execution

### Web Operations
- **Fetch**: HTTP requests and API interactions
- **Brave Search**: Privacy-focused web search
- **Puppeteer**: Browser automation and web scraping

### Communication & Collaboration
- **Slack**: Team communication and workspace integration
- Message automation and channel management

### File Management
- **Filesystem**: Comprehensive file operations
- Safe file handling and directory management

### Monitoring & Analytics
- **Sentry**: Error tracking and performance monitoring
- Application health and debugging assistance

### Creative & AI Tools
- **EverArt**: Creative content generation
- **Memory**: Persistent data and context management

## Creating Your Own Tools

### Getting Started with Tool Development

#### Option 1: Using Codebolt Application
1. Open Codebolt Application
2. Navigate to Tools section
3. Click "Create New Tool"
4. Fill in tool details and configuration
5. Implement tool functions in the editor
6. Test and save your tool

#### Option 2: Using CLI
```bash
# Install Codebolt CLI
npm install -g codebolt-cli

# Login to your account
npx codebolt-cli login

# Create a new tool
npx codebolt-cli createtool --name "My Tool" --id "my-tool"
```

### Tool Development Process

1. **Configure**: Define tool metadata in `codebolttool.yaml`
2. **Implement**: Write tool logic using the ToolBox class
3. **Test**: Use CLI testing tools to verify functionality
4. **Document**: Create comprehensive README and usage examples
5. **Publish**: Share your tool with the community

### Quick Example

```javascript
import { ToolBox } from '@codebolt/codeboltjs/utils';
import { z } from 'zod';

const toolbox = new ToolBox({
  name: "Hello World Tool",
  version: "1.0.0"
});

toolbox.addTool({
  name: "greet",
  description: "Generate a greeting message",
  parameters: z.object({
    name: z.string().describe("Name to greet").default("World")
  }),
  execute: async (args, context) => {
    const { name } = args;
    context.log.info(`Generating greeting for ${name}`);
    return {
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString()
    };
  }
});

async function main() {
  try {
    await toolbox.activate();
    console.log('Hello World toolbox is running!');
  } catch (error) {
    console.error('Failed to start toolbox:', error);
  }
}

main();
```

## Tool Management


### Managing Installed Tools

```bash
# List installed tools
codebolt-cli listtools
```

## Tool Verification and Quality Assurance

### Verification Process

All tools in the marketplace display a **✅ Verified** status, indicating they have been:

- **Compatibility Tested**: Verified to work with the MCP framework
- **Security Reviewed**: Assessed for security vulnerabilities and best practices
- **Performance Optimized**: Tested for efficiency and resource usage
- **Documentation Validated**: Ensured comprehensive and accurate documentation
- **Community Approved**: Reviewed and approved by the CodeBolt team

### Quality Standards

- **Standardized Protocol**: All tools follow MCP standards for consistency
- **Comprehensive Testing**: Automated and manual testing procedures
- **Regular Updates**: Maintained by trusted developers with continuous improvements
- **Community Feedback**: Ratings and reviews from real users
- **Support Channels**: Available documentation and community support

## Integration Benefits

### Seamless Workflow Integration
- **Direct Integration**: Tools integrate directly with CodeBolt's development environment
- **Standardized Interface**: Consistent interface across all MCP tools
- **Agent Compatibility**: Designed to work seamlessly with AI agents
- **Context Awareness**: Tools understand and work within development contexts

### Enhanced Productivity
- **Task Automation**: Automate repetitive and complex tasks
- **Workflow Streamlining**: Reduce manual work and context switching
- **Error Reduction**: Built-in error handling and validation
- **Time Savings**: Focus on core development activities

### Extensibility and Flexibility
- **Custom Configurations**: Adapt tools to specific project needs
- **Parameter Customization**: Configure tools for different use cases
- **Integration Options**: Connect with various external services and APIs
- **Scalable Architecture**: Tools grow with your project requirements

## Developer Information

### Tool Maintainers

All MCP tools in the marketplace are developed and maintained by **modelcontextprotocol**, ensuring:

- **Consistent Quality**: Uniform standards across all tools
- **Regular Maintenance**: Continuous updates and improvements
- **Comprehensive Documentation**: Detailed guides and examples
- **Community Support**: Active support and contribution channels
- **Long-term Stability**: Reliable and sustainable tool ecosystem

### Contributing to the Ecosystem

- **Create Custom Tools**: Build tools for specific use cases and domains
- **Share with Community**: Publish tools to help other developers
- **Provide Feedback**: Rate and review tools to improve quality
- **Report Issues**: Help maintain tool quality through bug reports
- **Contribute Documentation**: Improve tool documentation and examples

The MCP Marketplace serves as your gateway to extending CodeBolt's functionality through powerful, verified tools that integrate seamlessly with your development workflow. Whether you're using existing tools or creating custom solutions, the marketplace provides a robust foundation for intelligent, automated development processes through the Model Context Protocol framework.
