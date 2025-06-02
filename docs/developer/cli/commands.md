---
sidebar_position: 6
---

# Command Reference

This is the complete reference for all Codebolt CLI commands. Each command includes syntax, options, examples, and usage notes.

## Global Options

All commands support these global options:

```bash
--help, -h      Show help information
--version, -v   Show version information
```

## Authentication Commands

### `login`

Authenticate with your Codebolt account.

```bash
codebolt-cli login
```

**Description**: Initiates the login process with interactive prompts for email and password.

**Interactive Flow**:
- Prompts for email address
- Prompts for password (hidden input)
- Stores authentication token securely
- Confirms successful login

**Examples**:
```bash
# Basic login
codebolt-cli login

# Example output
? Email: user@example.com
? Password: [hidden]
✓ Successfully logged in!
```

**Related Commands**: [`logout`](#logout)

---

### `logout`

End your current session.

```bash
codebolt-cli logout
```

**Description**: Clears stored authentication data and ends the current session.

**Examples**:
```bash
codebolt-cli logout
# Output: Successfully logged out!
```

**Related Commands**: [`login`](#login)

---

## Agent Commands

### `createagent`

Create a new Codebolt agent.

```bash
codebolt-cli createagent [options]
```

**Options**:
- `-n, --name <name>` - Name of the agent
- `--quick` - Create agent with default settings

**Description**: Creates a new agent with interactive configuration or quick setup.

**Interactive Mode**:
1. Basic Information (name, description, unique ID, tags)
2. Agent Routing (languages, frameworks, compatibility)
3. SDLC Steps (development phases managed)
4. Actions (shortcut commands)

**Examples**:
```bash
# Interactive creation
codebolt-cli createagent

# Quick creation with name
codebolt-cli createagent --name "My Agent" --quick

# Named creation (still interactive for other options)
codebolt-cli createagent --name "React Generator"
```

**Output**: Creates agent directory in `.codeboltAgents/agents/`

**Related Commands**: [`publishagent`](#publishagent), [`startagent`](#startagent)

---

### `publishagent`

Publish an agent to the Codebolt platform.

```bash
codebolt-cli publishagent [folderPath]
```

**Parameters**:
- `folderPath` (optional) - Path to agent directory (defaults to current directory)

**Description**: Validates, packages, and uploads an agent to make it available on the platform.

**Requirements**:
- Valid `codeboltagent.yaml` configuration
- Authentication (must be logged in)
- All required files present

**Examples**:
```bash
# Publish from current directory
codebolt-cli publishagent

# Publish specific agent
codebolt-cli publishagent ./my-agent

# Publish from agents directory
codebolt-cli publishagent ./.codeboltAgents/agents/my-agent
```

**Process**:
1. Validates agent configuration
2. Packages agent files
3. Uploads to platform
4. Returns publication status

**Related Commands**: [`createagent`](#createagent), [`listagents`](#listagents)

---

### `listagents`

List all your published agents.

```bash
codebolt-cli listagents
```

**Description**: Displays all agents you've created and published to the platform.

**Requirements**: Authentication (must be logged in)

**Output Format**:
- Agent name and description
- Unique identifier
- Publication status
- Last update timestamp
- Tags and metadata

**Examples**:
```bash
codebolt-cli listagents

# Example output
┌─────────────────────┬──────────────────────┬─────────────────┬─────────────┐
│ Name                │ Description          │ Unique ID       │ Updated     │
├─────────────────────┼──────────────────────┼─────────────────┼─────────────┤
│ React Generator     │ Creates React comps  │ react-gen       │ 2 days ago  │
│ API Builder         │ Builds REST APIs     │ api-builder     │ 1 week ago  │
└─────────────────────┴──────────────────────┴─────────────────┴─────────────┘
```

**Related Commands**: [`publishagent`](#publishagent), [`cloneagent`](#cloneagent)

---

### `startagent`

Start an agent in a working directory.

```bash
codebolt-cli startagent [workingDir]
```

**Parameters**:
- `workingDir` (optional) - Directory to start agent in (defaults to current directory)

**Description**: Starts an agent locally for development and testing.

**Requirements**:
- Valid agent directory with `codeboltagent.yaml`
- Node.js dependencies installed

**Examples**:
```bash
# Start in current directory
codebolt-cli startagent

# Start in specific directory
codebolt-cli startagent ./my-agent

# Start with specific working directory
codebolt-cli startagent ./.codeboltAgents/agents/my-agent
```

**Related Commands**: [`createagent`](#createagent), [`pullagent`](#pullagent)

---

### `pullagent`

Pull the latest agent configuration from the server.

```bash
codebolt-cli pullagent [workingDir]
```

**Parameters**:
- `workingDir` (optional) - Directory to pull agent to (defaults to current directory)

**Description**: Synchronizes local agent with the latest version from the platform.

**Requirements**: Authentication (must be logged in)

**Examples**:
```bash
# Pull to current directory
codebolt-cli pullagent

# Pull to specific directory
codebolt-cli pullagent ./my-agent
```

**Process**:
1. Identifies agent from local configuration
2. Downloads latest version from platform
3. Updates local files
4. Preserves local modifications where possible

**Related Commands**: [`publishagent`](#publishagent), [`startagent`](#startagent)

---

### `cloneagent`

Clone an existing agent using its unique identifier.

```bash
codebolt-cli cloneagent <unique_id> [targetDir]
```

**Parameters**:
- `unique_id` (required) - Unique identifier of the agent to clone
- `targetDir` (optional) - Target directory (defaults to current directory)

**Description**: Downloads and creates a local copy of an existing agent for customization.

**Examples**:
```bash
# Clone to current directory
codebolt-cli cloneagent react-component-generator

# Clone to specific directory
codebolt-cli cloneagent react-component-generator ./my-custom-agent

# Clone to agents directory
codebolt-cli cloneagent api-builder ./.codeboltAgents/agents/my-api-builder
```

**Output**: Creates complete agent directory with all files and configuration.

**Related Commands**: [`listagents`](#listagents), [`createagent`](#createagent)

---

## Tool Commands

### `createtool`

Create a new Codebolt tool.

```bash
codebolt-cli createtool [options]
```

**Options**:
- `-n, --name <name>` - Tool display name
- `-i, --id <unique-id>` - Unique identifier (no spaces, lowercase)
- `-d, --description <description>` - Tool description
- `-p, --parameters <json>` - Tool parameters in JSON format

**Description**: Creates a new tool with MCP compatibility.

**Examples**:
```bash
# Interactive creation
codebolt-cli createtool

# With all options
codebolt-cli createtool \
  --name "File Manager" \
  --id "file-manager" \
  --description "Manages file operations" \
  --parameters '{"rootPath": "./", "extensions": [".js", ".ts"]}'

# Partial options (prompts for missing)
codebolt-cli createtool --name "Database Tool" --id "db-tool"
```

**Validation**:
- Unique ID cannot contain spaces
- Parameters must be valid JSON
- ID is automatically converted to lowercase

**Output**: Creates tool directory in `.codeboltAgents/tools/`

**Related Commands**: [`runtool`](#runtool), [`inspecttool`](#inspecttool)

---

### `runtool`

Run a tool with a specific command.

```bash
codebolt-cli runtool <command> <file>
```

**Parameters**:
- `command` (required) - Tool command to execute
- `file` (required) - Path to tool file

**Description**: Executes a specific tool command for testing and development.

**Examples**:
```bash
# Run list_files command
codebolt-cli runtool list_files ./my-tool/index.js

# Run read_file command
codebolt-cli runtool read_file ./my-tool/index.js

# Run custom command
codebolt-cli runtool process_data ./my-tool/index.js
```

**Requirements**:
- Valid tool implementation
- Tool must export the specified command handler

**Related Commands**: [`createtool`](#createtool), [`inspecttool`](#inspecttool)

---

### `inspecttool`

Inspect a tool using the MCP inspector.

```bash
codebolt-cli inspecttool <file>
```

**Parameters**:
- `file` (required) - Path to tool file

**Description**: Opens an interactive MCP inspector for debugging and testing tools.

**Features**:
- Interactive command testing
- Parameter inspection
- Response debugging
- Performance monitoring

**Examples**:
```bash
# Inspect tool
codebolt-cli inspecttool ./my-tool/index.js

# Inspect with specific configuration
codebolt-cli inspecttool ./.codeboltAgents/tools/file-manager/index.js
```

**Requirements**:
- Tool must be MCP-compatible
- Node.js environment

**Related Commands**: [`createtool`](#createtool), [`runtool`](#runtool)

---

## Utility Commands

### `version`

Display the CLI version.

```bash
codebolt-cli version
```

**Description**: Shows the current version of the Codebolt CLI.

**Examples**:
```bash
codebolt-cli version
# Output: Codebolt CLI version 1.1.35
```

---

## Command Patterns

### Directory Structure Commands

Commands that work with the `.codeboltAgents` directory structure:

```
your-project/
├── .codeboltAgents/
│   ├── agents/
│   │   ├── agent-1/
│   │   └── agent-2/
│   └── tools/
│       ├── tool-1/
│       └── tool-2/
└── your-files...
```

**Affected Commands**:
- `createagent` - Creates in `.codeboltAgents/agents/`
- `createtool` - Creates in `.codeboltAgents/tools/`
- `startagent` - Looks for agents in current or specified directory
- `cloneagent` - Can target any directory

### Authentication Required

Commands that require login:

- `publishagent` - Upload agents to platform
- `listagents` - List your published agents
- `pullagent` - Sync with platform
- `cloneagent` - Access to private agents

### Local Development

Commands that work offline:

- `createagent` - Create local agents
- `createtool` - Create local tools
- `startagent` - Run agents locally
- `runtool` - Test tools locally
- `inspecttool` - Debug tools locally
- `version` - Show CLI version

## Error Handling

### Common Error Patterns

#### Authentication Errors
```bash
Error: Not authenticated. Please run 'codebolt-cli login' first.
```

**Solution**: Run `codebolt-cli login`

#### File Not Found
```bash
Error: Agent configuration not found in current directory.
```

**Solution**: Ensure you're in the correct directory or specify the path

#### Validation Errors
```bash
Error: Invalid codeboltagent.yaml format
```

**Solution**: Check YAML syntax and required fields

#### Network Errors
```bash
Error: Unable to connect to Codebolt platform
```

**Solution**: Check internet connection and try again

### Debug Mode

Enable verbose logging for troubleshooting:

```bash
DEBUG=codebolt:* codebolt-cli <command>
```

## Configuration Files

### Agent Configuration (`codeboltagent.yaml`)

Required for agent commands:

```yaml
title: "Agent Name"
description: "Agent description"
unique_id: "agent-unique-id"
tags: ["tag1", "tag2"]
version: "1.0.0"

metadata:
  agent_routing:
    worksonblankcode: true
    worksonexistingcode: true
    supportedlanguages: ["javascript"]
    supportedframeworks: ["react"]
  
  sdlc_steps_managed:
    - name: "Code Generation"
      example_instructions: ["Generate component"]

actions:
  - name: "action-name"
    description: "Action description"
```

### Tool Configuration (`codebolttool.yaml`)

Required for tool commands:

```yaml
name: "Tool Name"
description: "Tool description"
version: "1.0.0"
uniqueName: "tool-unique-name"

parameters:
  param1:
    type: "string"
    description: "Parameter description"
    default: "default-value"
```

## Best Practices

### Command Usage

1. **Always authenticate first** for platform operations
2. **Use descriptive names** for agents and tools
3. **Test locally** before publishing
4. **Keep unique IDs consistent** across environments
5. **Use version control** for your agents and tools

### Directory Organization

```bash
# Recommended project structure
your-project/
├── .codeboltAgents/
│   ├── agents/
│   │   └── my-agent/
│   └── tools/
│       └── my-tool/
├── src/
├── package.json
└── README.md
```

### Development Workflow

1. **Create** agent/tool locally
2. **Test** with `startagent`/`runtool`
3. **Debug** with `inspecttool` if needed
4. **Publish** when ready
5. **List** to verify publication
6. **Pull** to sync updates

## Examples

### Complete Agent Workflow

```bash
# 1. Create agent
codebolt-cli createagent --name "My Agent"

# 2. Test locally
codebolt-cli startagent ./.codeboltAgents/agents/my-agent

# 3. Publish
codebolt-cli publishagent ./.codeboltAgents/agents/my-agent

# 4. Verify
codebolt-cli listagents
```

### Complete Tool Workflow

```bash
# 1. Create tool
codebolt-cli createtool --name "My Tool" --id "my-tool"

# 2. Test command
codebolt-cli runtool test_command ./.codeboltAgents/tools/my-tool/index.js

# 3. Debug if needed
codebolt-cli inspecttool ./.codeboltAgents/tools/my-tool/index.js
```

### Multi-Agent Project

```bash
# Create multiple agents
codebolt-cli createagent --name "Frontend Agent"
codebolt-cli createagent --name "Backend Agent"
codebolt-cli createagent --name "Database Agent"

# Create shared tools
codebolt-cli createtool --name "File Utils" --id "file-utils"
codebolt-cli createtool --name "API Client" --id "api-client"

# Publish all
codebolt-cli publishagent ./.codeboltAgents/agents/frontend-agent
codebolt-cli publishagent ./.codeboltAgents/agents/backend-agent
codebolt-cli publishagent ./.codeboltAgents/agents/database-agent
``` 