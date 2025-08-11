---
sidebar_position: 2
sidebar_label: Installation & Setup
---

# Installation & Setup

This guide covers everything you need to know about installing and setting up the CodeboltJS TypeScript SDK for agent development.

## Prerequisites

Before installing the SDK, ensure you have the following:

### System Requirements
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (or yarn 1.22.0+)
- **TypeScript**: Version 4.5.0 or higher (recommended)
- **Operating System**: Windows, macOS, or Linux

### Codebolt Platform
- **Codebolt Application**: Latest version installed
- **Codebolt CLI**: For agent development and deployment

```bash
# Install Codebolt CLI globally
npm install -g codebolt-cli

# Verify installation
npx codebolt-cli --version
```

## Installation Methods

### Method 1: Using Codebolt CLI (Recommended)

The easiest way to get started is using the Codebolt CLI to create a new agent project:

```bash
# Create a new agent project
npx codebolt-cli createagent

# Follow the interactive prompts:
# - Agent name: my-awesome-agent
# - Description: My first Codebolt agent
# - Author: Your Name
# - Version: 1.0.0
```

This creates a complete agent project with:
- CodeboltJS SDK pre-installed
- TypeScript configuration
- Agent configuration file (`codeboltagent.yaml`)
- Sample agent implementation
- Development scripts

### Method 2: Manual Installation

For existing projects or custom setups:

```bash
# Install the SDK
npm install @codebolt/codeboltjs
```

## Project Structure

After installation, your project should have the following structure:

```
my-agent/
├── src/
│   ├── index.ts              # Main agent entry point
│   ├── handlers/             # Message handlers
│   └── utils/                # Utility functions
├── codeboltagent.yaml        # Agent configuration
├── package.json              # Node.js dependencies
├── tsconfig.json             # TypeScript configuration
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

## Configuration Files

### 1. Agent Configuration (`codeboltagent.yaml`)

This file contains essential agent metadata and configuration:

```yaml
# Agent Identity
name: "my-awesome-agent"
version: "1.0.0"
description: "A powerful agent for code analysis"
longDescription: "This agent provides comprehensive code analysis capabilities including syntax checking, performance optimization suggestions, and best practice recommendations."

# Connection Configuration
unique_connectionid: "agent-12345-abcde"
initial_message: "Hello! I'm ready to help with your development tasks."

# Agent Capabilities
sdlc_steps:
  - "Code Review"
  - "Testing"
  - "Documentation"

# Routing Configuration
routing:
  - pattern: "review*"
    action: "code_review"
  - pattern: "test*"
    action: "run_tests"
  - pattern: "document*"
    action: "generate_docs"

# LLM Configuration
llm_config:
  default_model: "gpt-4"
  temperature: 0.7
  max_tokens: 2000

# Tool Configuration
tools:
  enabled: true
  auto_discover: true
  toolboxes:
    - "codebolt"
    - "git"
    - "npm"
```

### 2. TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

### 3. Package.json Scripts

```json
{
  "name": "my-awesome-agent",
  "version": "1.0.0",
  "description": "A powerful Codebolt agent",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsc --watch",
    "test": "npm run build && node dist/index.js",
    "clean": "rm -rf dist",
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write src/**/*.ts"
  },
  "dependencies": {
    "@codebolt/codeboltjs": "^2.0.5",
    "ws": "^8.17.0",
    "js-yaml": "^4.1.0"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "@types/node": "^20.14.2",
    "@types/ws": "^8.5.10",
    "@types/js-yaml": "^4.0.9"
  }
}
```

## Environment Setup

### 1. Environment Variables

Create a `.env` file in your project root:

```bash
# Development Configuration
NODE_ENV=development
SOCKET_PORT=12345
Is_Dev=true

# Agent Configuration
agentId=my-awesome-agent
parentId=
parentAgentInstanceId=
agentTask=

# Logging
LOG_LEVEL=debug
```

### 2. Development vs Production

#### Development Setup
```bash
# Set development environment
export NODE_ENV=development
export Is_Dev=true

# Start in development mode
npm run dev
```

#### Production Setup
```bash
# Build for production
npm run build

# Set production environment
export NODE_ENV=production
export Is_Dev=false

# Start in production mode
npm start
```

## Basic Agent Implementation

Create your first agent in `src/index.ts`:

```typescript
import codebolt from '@codebolt/codeboltjs';

async function main() {
    try {
        // Wait for WebSocket connection
        await codebolt.waitForConnection();
        console.log('✅ Connected to Codebolt platform');

        // Set up message handler
        codebolt.onMessage(async (userMessage) => {
            console.log('📨 Received message:', userMessage);

            try {
                // Process the user's request
                const response = await handleUserRequest(userMessage);
                
                // Send response back to user
                await codebolt.chat.sendMessage(response);
                
                return response;
            } catch (error) {
                console.error('❌ Error processing request:', error);
                await codebolt.chat.sendMessage(`Error: ${error.message}`);
                throw error;
            }
        });

        console.log('🤖 Agent is ready and listening for messages');

    } catch (error) {
        console.error('💥 Failed to initialize agent:', error);
        process.exit(1);
    }
}

async function handleUserRequest(message: any): Promise<string> {
    const content = message.content || message.message || '';
    
    if (content.toLowerCase().includes('hello')) {
        return 'Hello! I\'m your Codebolt agent. How can I help you today?';
    }
    
    if (content.toLowerCase().includes('files')) {
        const files = await codebolt.fs.listFile('./', true);
        return `I found ${files.length} files in your project.`;
    }
    
    if (content.toLowerCase().includes('status')) {
        const gitStatus = await codebolt.git.status();
        return `Git status: ${JSON.stringify(gitStatus, null, 2)}`;
    }
    
    return 'I received your message. Let me help you with that!';
}

// Start the agent
main().catch(console.error);
```

## Testing Your Setup

### 1. Build and Test

```bash
# Build the TypeScript code
npm run build

# Test the agent locally
npm test
```

### 2. Integration Testing

```bash
# Start the agent in development mode
npm run dev

# In another terminal, test with Codebolt CLI
npx codebolt-cli startagent my-awesome-agent
```

### 3. Debugging

Enable debug logging:

```typescript
import codebolt from '@codebolt/codeboltjs';

// Enable debug mode
codebolt.debug.setLevel('debug');

// Add debug logging
codebolt.debug.log('Agent starting up...');
```

## Common Issues and Solutions

### 1. WebSocket Connection Issues

**Problem**: Agent fails to connect to Codebolt platform

**Solution**:
```typescript
// Add connection retry logic
async function connectWithRetry(maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            await codebolt.waitForConnection();
            return;
        } catch (error) {
            console.log(`Connection attempt ${i + 1} failed, retrying...`);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
    throw new Error('Failed to connect after maximum retries');
}
```

### 2. TypeScript Compilation Errors

**Problem**: Type errors during compilation

**Solution**:
```bash
# Install missing type definitions
npm install -D @types/node @types/ws

# Update TypeScript configuration
# Ensure "skipLibCheck": true in tsconfig.json
```

### 3. Module Resolution Issues

**Problem**: Cannot find module '@codebolt/codeboltjs'

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### 4. Agent Configuration Issues

**Problem**: Agent not recognized by Codebolt platform

**Solution**:
- Verify `codeboltagent.yaml` is in the project root
- Check `unique_connectionid` is unique
- Ensure agent name matches directory name

## Next Steps

Now that you have the SDK installed and configured:

1. **[Core Modules](./core-modules.md)** - Learn about essential SDK modules
2. **[Agent Framework](./agent-framework.md)** - Build sophisticated agents
3. **[API Reference](./api-reference.md)** - Explore all available functions
4. **[Examples](./examples.md)** - See practical implementations

## Advanced Configuration

### Custom WebSocket Configuration

```typescript
// Custom WebSocket settings
process.env.SOCKET_PORT = '8080';
process.env.WEBSOCKET_TIMEOUT = '30000';

// Initialize with custom settings
await codebolt.waitForConnection();
```

### Performance Optimization

```typescript
// Enable connection pooling
codebolt.websocket.setMaxListeners(100);

// Configure message batching
codebolt.messageManager.setBatchSize(10);
```

### Security Configuration

```typescript
// Enable secure WebSocket (WSS)
process.env.WEBSOCKET_SECURE = 'true';

// Set authentication token
process.env.AUTH_TOKEN = 'your-auth-token';
```

---

You're now ready to start building powerful Codebolt agents with the TypeScript SDK! 