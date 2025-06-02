---
title: Config MCP
sidebar_label: codebolt.config
sidebar_position: 18
---

# codebolt.config

Configuration management system for managing MCP and application settings.

## Available Tools

- `configure_mcp` - Configure MCP settings and parameters

## Sample Usage

```javascript
// Configure MCP settings
const configResult = await codeboltMCP.executeTool(
  "codebolt.config",
  "configure_mcp",
  { 
    mcpName: "codebolt.browser",
    settings: {
      timeout: 30000,
      headless: true,
      viewport: {
        width: 1920,
        height: 1080
      }
    }
  }
);

// Configure multiple MCP tools
const multiConfigResult = await codeboltMCP.executeTool(
  "codebolt.config",
  "configure_mcp",
  { 
    configurations: [
      {
        mcpName: "codebolt.git",
        settings: {
          defaultBranch: "main",
          autoCommit: false
        }
      },
      {
        mcpName: "codebolt.terminal",
        settings: {
          shell: "/bin/bash",
          timeout: 60000
        }
      }
    ]
  }
);

// Configure with environment-specific settings
const envConfigResult = await codeboltMCP.executeTool(
  "codebolt.config",
  "configure_mcp",
  { 
    mcpName: "codebolt.debug",
    settings: {
      logLevel: "debug",
      enableVerbose: true
    },
    environment: "development"
  }
);
```

:::info
This functionality provides centralized configuration management for all MCP tools and services.
::: 