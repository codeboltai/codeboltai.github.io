# Overview

Welcome to the Codebolt CLI documentation. This CLI tool provides comprehensive functionality for managing Codebolt agents and MCP tools.

## Overview

The Codebolt CLI is a command-line interface that allows you to:
- Create and manage Codebolt agents
- Develop and publish MCP (Model Context Protocol) tools
- Create and manage providers
- Handle authentication and project management

## Quick Start

1. **Installation**: Ensure you have Node.js installed
2. **Authentication**: `codebolt login`
3. **Create your first project**: Choose from the command categories below

## Command Categories

### [Agent Commands](./agent.md)
Commands for creating, managing, and deploying Codebolt agents.

**Key Commands:**
- `createagent` - Create a new agent project
- `publishagent` - Publish an agent to the registry
- `startagent` - Start an agent locally
- `listagents` - List all your agents
- `cloneagent` - Clone an existing agent
- `pullagent` - Pull latest agent configuration

### [MCP Tools Commands](./tools.md)
Commands for developing and managing MCP (Model Context Protocol) tools.

**Key Commands:**
- `createtool` - Create a new MCP tool
- `publishtool` - Publish a tool to the registry
- `listtools` - List all your tools
- `runtool` - Execute a tool with parameters
- `inspecttool` - Inspect tool implementation
- `pulltool` - Pull latest tool configuration


### [Utility Commands](./utility.md)
General utility commands for CLI management.

**Key Commands:**
- `login` / `logout` - Authentication
- `version` - Check CLI version
- `init` - Initialize CLI configuration

## Getting Help

For detailed information about any command, use:
```bash
codebolt <command> --help
```

For specific category documentation, navigate to the respective folders above.

## Version

Current CLI Version: 1.0.1




