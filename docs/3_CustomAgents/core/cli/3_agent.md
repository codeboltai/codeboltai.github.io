# Agent Commands

This section covers all commands related to creating, managing, and deploying Codebolt agents.

## Overview

Agent commands allow you to create, publish, manage, and run Codebolt agents. Agents are AI-powered applications that can perform specific tasks and interact with users.

## Commands

### Create Agent
Create a new Codebolt Agent project.

```bash
codebolt-cli createagent [options]
```

**Options:**
- `-n, --name <name>`: Specify the name of the project
- `--quick`: Create agent quickly with default settings

**Examples:**
```bash
# Create agent with custom name
codebolt-cli createagent --name my-agent

# Create agent with quick setup
codebolt-cli createagent --quick

# Interactive creation
codebolt-cli createagent
```

![createagent](/customagent/createagent.png)



**What it does:**
- Creates a new agent project structure
- Sets up webpack configuration
- Generates necessary YAML configuration files
- Creates package.json with required dependencies

### Publish Agent
Upload and publish an agent to the registry.

```bash
codebolt-cli publishagent [folderPath]
```

**Description:** Upload a folder containing an agent to the Codebolt registry.


![publishagent](/customagent/publishagent.png)

**Examples:**
```bash
# Publish agent in current directory
codebolt-cli publishagent

# Publish agent from specific folder
codebolt-cli publishagent ./my-agent-folder
```

**What it does:**
- Validates agent configuration
- Packages the agent for distribution
- Uploads to the Codebolt registry
- Makes the agent available for use

### List Agents
Display all agents created and uploaded by the current user.

```bash
codebolt-cli listagents
```

**Description:** List all the agents created and uploaded by you.

**Output:** Shows agent names, IDs, creation dates, and status.

### Start Agent
Start an agent in the specified working directory.

```bash
codebolt-cli startagent [workingDir]
```

**Description:** Start an agent in the specified working directory.

**Examples:**
```bash
# Start agent in current directory
codebolt-cli startagent

# Start agent in specific directory
codebolt-cli startagent ./my-agent
```

**What it does:**
- Loads agent configuration
- Starts the agent server
- Provides local development environment

### Pull Agent
Pull the latest agent configuration from the server.

```bash
codebolt-cli pullagent [workingDir]
```

**Description:** Pull the latest agent configuration from server.

**Examples:**
```bash
# Pull agent in current directory
codebolt-cli pullagent

# Pull agent from specific directory
codebolt-cli pullagent ./my-agent
```

**What it does:**
- Downloads latest configuration
- Updates local files
- Syncs with remote changes

### Clone Agent
Clone an agent using its unique ID to the specified directory.

```bash
codebolt-cli cloneagent <unique_id> [targetDir]
```

**Description:** Clone an agent using its unique_id to the specified directory (defaults to current directory).

**Examples:**
```bash
# Clone agent to current directory
codebolt-cli cloneagent abc123

# Clone agent to specific directory
codebolt-cli cloneagent abc123 ./cloned-agent
```

**What it does:**
- Downloads agent source code
- Sets up local development environment
- Preserves agent configuration

## Agent Project Structure

When you create an agent, the following structure is generated:

```
my-agent/
├── agent.yaml          # Agent configuration
├── codeboltagent.yaml  # Codebolt-specific config
├── task.yaml          # Task definitions
├── index.js           # Main agent code
├── package.json       # Dependencies
├── webpack.config.js  # Build configuration
└── .gitignore        # Git ignore rules
```

## Best Practices

1. **Naming**: Use descriptive names for your agents
2. **Configuration**: Keep agent configuration in YAML files
3. **Testing**: Test agents locally before publishing
4. **Versioning**: Use semantic versioning for agent updates
5. **Documentation**: Include clear descriptions in your agent configs

## Troubleshooting

- **Publish Issues**: Ensure all required files are present
- **Start Issues**: Check if dependencies are installed
- **Clone Issues**: Verify the unique ID is correct
- **Configuration Issues**: Validate YAML syntax
