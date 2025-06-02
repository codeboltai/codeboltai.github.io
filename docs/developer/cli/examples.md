---
sidebar_position: 7
---

# Examples

This guide provides practical examples of using the Codebolt CLI for common development scenarios. Each example includes step-by-step instructions and real-world use cases.

## Getting Started Examples

### Example 1: First-Time Setup

Complete setup for a new developer:

```bash
# 1. Install CLI globally
npm install -g codebolt-cli

# 2. Verify installation
codebolt-cli version

# 3. Login to your account
codebolt-cli login
# Follow prompts to enter email and password

# 4. Verify authentication
codebolt-cli listagents
# Should show your existing agents or empty list
```

### Example 2: Project Initialization

Setting up a new project with Codebolt:

```bash
# 1. Create project directory
mkdir my-awesome-project
cd my-awesome-project

# 2. Initialize npm project
npm init -y

# 3. Create your first agent
codebolt-cli createagent --name "Project Setup Agent"

# 4. Create a utility tool
codebolt-cli createtool --name "File Helper" --id "file-helper"

# 5. Verify structure
ls -la .codeboltAgents/
# Should show agents/ and tools/ directories
```

## Agent Development Examples

### Example 3: React Component Generator

Creating an agent that generates React components:

```bash
# 1. Create the agent
codebolt-cli createagent --name "React Component Generator"

# During interactive setup:
# - Unique ID: react-component-generator
# - Description: Generates React components with TypeScript
# - Tags: react, typescript, components
# - Supported Languages: javascript, typescript
# - Supported Frameworks: react, next.js
# - SDLC Steps: Code Generation
# - Actions: component, hook, page
```

**Agent Configuration** (`.codeboltAgents/agents/react-component-generator/codeboltagent.yaml`):

```yaml
title: "React Component Generator"
description: "Generates React components with TypeScript support"
unique_id: "react-component-generator"
tags: ["react", "typescript", "components"]
version: "1.0.0"

metadata:
  agent_routing:
    worksonblankcode: true
    worksonexistingcode: true
    supportedlanguages: ["javascript", "typescript"]
    supportedframeworks: ["react", "next.js", "vite"]
  
  sdlc_steps_managed:
    - name: "Code Generation"
      example_instructions:
        - "Create a new React component with props interface"
        - "Generate a custom hook for data fetching"
        - "Build a form component with validation"

actions:
  - name: "component"
    description: "Generate React component"
    detailDescription: "Creates a new React component with TypeScript interfaces"
    actionPrompt: "Generate a React component with the specified props and styling"
  
  - name: "hook"
    description: "Create custom hook"
    detailDescription: "Generates a reusable React hook"
    actionPrompt: "Create a custom React hook for the specified functionality"
```

**Testing and Publishing**:

```bash
# 1. Test the agent locally
codebolt-cli startagent ./.codeboltAgents/agents/react-component-generator

# 2. Publish to platform
codebolt-cli publishagent ./.codeboltAgents/agents/react-component-generator

# 3. Verify publication
codebolt-cli listagents
```

### Example 4: API Development Agent

Creating an agent for REST API development:

```bash
# 1. Create the agent
codebolt-cli createagent --name "API Builder"

# Configuration during setup:
# - Unique ID: api-builder
# - Description: Builds REST APIs with Express and TypeScript
# - Tags: api, express, typescript, backend
# - Languages: javascript, typescript
# - Frameworks: express, fastify, koa
# - SDLC Steps: API Development, Testing, Documentation
```

**Complete workflow**:

```bash
# 1. Create agent
codebolt-cli createagent --name "API Builder"

# 2. Create supporting tools
codebolt-cli createtool \
  --name "Database Schema Generator" \
  --id "db-schema-gen" \
  --description "Generates database schemas"

codebolt-cli createtool \
  --name "API Documentation Generator" \
  --id "api-doc-gen" \
  --description "Generates OpenAPI documentation"

# 3. Test locally
codebolt-cli startagent ./.codeboltAgents/agents/api-builder

# 4. Test tools
codebolt-cli runtool generate_schema ./.codeboltAgents/tools/db-schema-gen/index.js
codebolt-cli runtool generate_docs ./.codeboltAgents/tools/api-doc-gen/index.js

# 5. Publish everything
codebolt-cli publishagent ./.codeboltAgents/agents/api-builder
```

## Tool Development Examples

### Example 5: File Management Tool

Creating a comprehensive file management tool:

```bash
# 1. Create the tool with parameters
codebolt-cli createtool \
  --name "Advanced File Manager" \
  --id "advanced-file-manager" \
  --description "Comprehensive file operations with security" \
  --parameters '{
    "rootPath": "./",
    "allowedExtensions": [".js", ".ts", ".json", ".md"],
    "maxFileSize": 10485760,
    "readOnly": false
  }'
```

**Tool Implementation** (`.codeboltAgents/tools/advanced-file-manager/index.js`):

```javascript
const fs = require('fs').promises;
const path = require('path');

class AdvancedFileManager {
  constructor(config) {
    this.rootPath = config.parameters?.rootPath || './';
    this.allowedExtensions = config.parameters?.allowedExtensions || [];
    this.maxFileSize = config.parameters?.maxFileSize || 10485760; // 10MB
    this.readOnly = config.parameters?.readOnly || false;
  }

  async listFiles(params) {
    const { directory = this.rootPath, pattern, recursive = false } = params;
    
    try {
      const files = await this.scanDirectory(directory, { pattern, recursive });
      return {
        success: true,
        files: files.map(file => ({
          name: file.name,
          path: file.path,
          size: file.size,
          modified: file.modified,
          extension: path.extname(file.name)
        }))
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async readFile(params) {
    const { filePath, encoding = 'utf8' } = params;
    
    if (!this.isFileAllowed(filePath)) {
      return { success: false, error: 'File access not allowed' };
    }

    try {
      const content = await fs.readFile(filePath, encoding);
      const stats = await fs.stat(filePath);
      
      return {
        success: true,
        content,
        size: stats.size,
        modified: stats.mtime,
        encoding
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async writeFile(params) {
    if (this.readOnly) {
      return { success: false, error: 'Tool is in read-only mode' };
    }

    const { filePath, content, encoding = 'utf8' } = params;
    
    if (!this.isFileAllowed(filePath)) {
      return { success: false, error: 'File access not allowed' };
    }

    try {
      await fs.writeFile(filePath, content, encoding);
      return { success: true, message: 'File written successfully' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  isFileAllowed(filePath) {
    const ext = path.extname(filePath);
    const normalizedPath = path.normalize(filePath);
    
    // Check extension
    if (this.allowedExtensions.length > 0 && !this.allowedExtensions.includes(ext)) {
      return false;
    }
    
    // Check path traversal
    if (normalizedPath.includes('..')) {
      return false;
    }
    
    return true;
  }

  async scanDirectory(directory, options = {}) {
    const { pattern, recursive } = options;
    const files = [];
    
    const entries = await fs.readdir(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isFile()) {
        if (!pattern || entry.name.match(pattern)) {
          const stats = await fs.stat(fullPath);
          files.push({
            name: entry.name,
            path: fullPath,
            size: stats.size,
            modified: stats.mtime
          });
        }
      } else if (entry.isDirectory() && recursive) {
        const subFiles = await this.scanDirectory(fullPath, options);
        files.push(...subFiles);
      }
    }
    
    return files;
  }
}

module.exports = AdvancedFileManager;
```

**Testing the tool**:

```bash
# 1. Test file listing
codebolt-cli runtool listFiles ./.codeboltAgents/tools/advanced-file-manager/index.js

# 2. Test file reading
codebolt-cli runtool readFile ./.codeboltAgents/tools/advanced-file-manager/index.js

# 3. Interactive debugging
codebolt-cli inspecttool ./.codeboltAgents/tools/advanced-file-manager/index.js
```

### Example 6: Database Query Tool

Creating a secure database query tool:

```bash
# 1. Create tool with database parameters
codebolt-cli createtool \
  --name "Database Query Tool" \
  --id "db-query-tool" \
  --description "Executes safe database queries" \
  --parameters '{
    "connectionString": "sqlite://./database.db",
    "queryTimeout": 30,
    "allowedTables": ["users", "posts", "comments"],
    "readOnly": true
  }'
```

## Team Collaboration Examples

### Example 7: Multi-Developer Project

Setting up a project for team collaboration:

```bash
# Project lead setup
mkdir team-project
cd team-project

# 1. Create shared agents
codebolt-cli createagent --name "Frontend Standards Agent"
codebolt-cli createagent --name "Backend Standards Agent"
codebolt-cli createagent --name "Testing Agent"

# 2. Create shared tools
codebolt-cli createtool --name "Code Formatter" --id "code-formatter"
codebolt-cli createtool --name "Linter" --id "project-linter"
codebolt-cli createtool --name "Test Runner" --id "test-runner"

# 3. Publish for team access
codebolt-cli publishagent ./.codeboltAgents/agents/frontend-standards-agent
codebolt-cli publishagent ./.codeboltAgents/agents/backend-standards-agent
codebolt-cli publishagent ./.codeboltAgents/agents/testing-agent

# 4. Share agent IDs with team
codebolt-cli listagents
```

**Team member setup**:

```bash
# Each team member runs:
mkdir my-workspace
cd my-workspace

# Clone shared agents
codebolt-cli cloneagent frontend-standards-agent
codebolt-cli cloneagent backend-standards-agent
codebolt-cli cloneagent testing-agent

# Start working with agents
codebolt-cli startagent ./.codeboltAgents/agents/frontend-standards-agent
```

### Example 8: Agent Customization

Customizing a cloned agent for specific needs:

```bash
# 1. Clone base agent
codebolt-cli cloneagent react-component-generator ./my-custom-react-agent

# 2. Modify configuration
cd my-custom-react-agent
# Edit codeboltagent.yaml to add custom actions or modify behavior

# 3. Test customizations
codebolt-cli startagent ./my-custom-react-agent

# 4. Publish as new agent (optional)
# Update unique_id in codeboltagent.yaml first
codebolt-cli publishagent ./my-custom-react-agent
```

## Advanced Workflow Examples

### Example 9: CI/CD Integration

Using CLI in continuous integration:

```bash
#!/bin/bash
# ci-deploy-agents.sh

# 1. Install CLI in CI environment
npm install -g codebolt-cli

# 2. Login using environment variables
echo "$CODEBOLT_EMAIL" | codebolt-cli login --email-stdin
echo "$CODEBOLT_PASSWORD" | codebolt-cli login --password-stdin

# 3. Deploy agents
for agent_dir in .codeboltAgents/agents/*/; do
  echo "Deploying agent: $agent_dir"
  codebolt-cli publishagent "$agent_dir"
done

# 4. Verify deployments
codebolt-cli listagents
```

### Example 10: Development Environment Setup

Automated development environment setup:

```bash
#!/bin/bash
# setup-dev-env.sh

echo "Setting up Codebolt development environment..."

# 1. Create project structure
mkdir -p .codeboltAgents/{agents,tools}

# 2. Create development agents
codebolt-cli createagent \
  --name "Development Helper" \
  --quick

codebolt-cli createagent \
  --name "Code Review Agent" \
  --quick

# 3. Create utility tools
codebolt-cli createtool \
  --name "Project Analyzer" \
  --id "project-analyzer" \
  --description "Analyzes project structure and dependencies"

codebolt-cli createtool \
  --name "Code Quality Checker" \
  --id "code-quality-checker" \
  --description "Checks code quality and standards"

# 4. Test everything
echo "Testing agents..."
for agent_dir in .codeboltAgents/agents/*/; do
  echo "Testing: $agent_dir"
  codebolt-cli startagent "$agent_dir" &
  sleep 2
  kill $!
done

echo "Testing tools..."
for tool_dir in .codeboltAgents/tools/*/; do
  tool_file="$tool_dir/index.js"
  if [ -f "$tool_file" ]; then
    echo "Testing: $tool_file"
    codebolt-cli inspecttool "$tool_file" &
    sleep 2
    kill $!
  fi
done

echo "Development environment setup complete!"
```

## Debugging Examples

### Example 11: Troubleshooting Agent Issues

Debugging a problematic agent:

```bash
# 1. Enable debug mode
DEBUG=codebolt:* codebolt-cli startagent ./problematic-agent

# 2. Validate configuration
codebolt-cli validate ./problematic-agent

# 3. Check agent structure
ls -la ./problematic-agent/
cat ./problematic-agent/codeboltagent.yaml

# 4. Test individual components
node ./problematic-agent/index.js

# 5. Check dependencies
cd ./problematic-agent
npm list
npm audit
```

### Example 12: Tool Debugging

Debugging tool issues:

```bash
# 1. Inspect tool interactively
codebolt-cli inspecttool ./my-tool/index.js

# 2. Test specific commands
codebolt-cli runtool test_command ./my-tool/index.js

# 3. Enable verbose logging
DEBUG=codebolt:tools codebolt-cli runtool list_files ./my-tool/index.js

# 4. Check tool configuration
cat ./my-tool/codebolttool.yaml

# 5. Validate tool structure
node -e "
const Tool = require('./my-tool/index.js');
const tool = new Tool({});
console.log('Tool loaded successfully');
console.log('Available methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(tool)));
"
```

## Production Examples

### Example 13: Production Deployment

Deploying agents to production:

```bash
# 1. Prepare production configuration
cp codeboltagent.yaml codeboltagent.prod.yaml
# Edit production-specific settings

# 2. Test in staging
codebolt-cli startagent ./staging-agent

# 3. Deploy to production
codebolt-cli publishagent ./production-agent

# 4. Monitor deployment
codebolt-cli listagents | grep "production-agent"

# 5. Rollback if needed
codebolt-cli pullagent ./backup-agent
codebolt-cli publishagent ./backup-agent
```

### Example 14: Monitoring and Maintenance

Regular maintenance tasks:

```bash
#!/bin/bash
# maintenance.sh

echo "Running Codebolt maintenance..."

# 1. Update CLI
npm update -g codebolt-cli

# 2. Check authentication
if ! codebolt-cli listagents > /dev/null 2>&1; then
  echo "Authentication expired, please login"
  codebolt-cli login
fi

# 3. Pull latest agent updates
for agent_dir in .codeboltAgents/agents/*/; do
  echo "Updating: $agent_dir"
  codebolt-cli pullagent "$agent_dir"
done

# 4. Test all agents
for agent_dir in .codeboltAgents/agents/*/; do
  echo "Testing: $agent_dir"
  timeout 30s codebolt-cli startagent "$agent_dir" || echo "Test failed for $agent_dir"
done

# 5. Generate status report
echo "=== Agent Status Report ===" > status-report.txt
codebolt-cli listagents >> status-report.txt
echo "Maintenance completed at $(date)" >> status-report.txt
```

## Best Practices Examples

### Example 15: Project Organization

Recommended project structure:

```
my-project/
├── .codeboltAgents/
│   ├── agents/
│   │   ├── frontend-agent/
│   │   │   ├── codeboltagent.yaml
│   │   │   ├── package.json
│   │   │   ├── index.js
│   │   │   └── src/
│   │   ├── backend-agent/
│   │   └── testing-agent/
│   └── tools/
│       ├── file-manager/
│       ├── code-formatter/
│       └── test-runner/
├── src/
├── tests/
├── docs/
├── package.json
├── README.md
└── .gitignore
```

**Setup script**:

```bash
#!/bin/bash
# setup-project-structure.sh

# Create directory structure
mkdir -p {src,tests,docs}
mkdir -p .codeboltAgents/{agents,tools}

# Initialize package.json
npm init -y

# Create .gitignore
cat > .gitignore << EOF
node_modules/
.env
*.log
.DS_Store
EOF

# Create README
cat > README.md << EOF
# My Project

## Codebolt Agents

This project uses Codebolt agents for development automation:

- **Frontend Agent**: Handles React component generation
- **Backend Agent**: Manages API development
- **Testing Agent**: Automates test creation

## Setup

1. Install Codebolt CLI: \`npm install -g codebolt-cli\`
2. Login: \`codebolt-cli login\`
3. Start agents: \`codebolt-cli startagent .codeboltAgents/agents/[agent-name]\`

## Usage

See individual agent documentation in \`.codeboltAgents/agents/\` directories.
EOF

echo "Project structure created successfully!"
```

These examples provide a comprehensive guide to using the Codebolt CLI effectively in various scenarios, from simple agent creation to complex team workflows and production deployments. 