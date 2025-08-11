---
title: MCP API Overview
sidebar_label: Overview
sidebar_position: 1
---

# MCP API Overview

List of MCP APIs available in CodeboltAI. These MCPs are wrappers on top of APIs that allow agents to directly call the APIs as MCP rather than calling an API directly.

## Available MCP Servers

1. [Browser](/docs/api/mcpAPI/browser) - `codebolt.browser` - Browser automation and web interaction tools
2. [Git](/docs/api/mcpAPI/git) - `codebolt.git` - Git repository management and version control
3. [Terminal](/docs/api/mcpAPI/terminal) - `codebolt.terminal` - Command execution and terminal operations
4. [File System](/docs/api/mcpAPI/fs) - `codebolt.fs` - File and directory operations
5. [Codebase](/docs/api/mcpAPI/codebase) - `codebolt.codebase` - Code search and analysis tools
6. [Agent](/docs/api/mcpAPI/agent) - `codebolt.agent` - Agent management and lifecycle operations
7. [Memory](/docs/api/mcpAPI/memory) - `codebolt.memory` - Memory storage and retrieval
8. [Vector](/docs/api/mcpAPI/vector) - `codebolt.vector` - Vector database operations
9. [RAG](/docs/api/mcpAPI/rag) - `codebolt.rag` - Retrieval Augmented Generation tools
10. [Notification](/docs/api/mcpAPI/notification) - `codebolt.notification` - Notification and messaging system
11. [Debug](/docs/api/mcpAPI/debug) - `codebolt.debug` - Debugging and logging utilities
12. [State](/docs/api/mcpAPI/state) - `codebolt.state` - Application state management
13. [Task](/docs/api/mcpAPI/task) - `codebolt.task` - Task management and tracking
14. [Tokenizer](/docs/api/mcpAPI/tokenizer) - `codebolt.tokenizer` - Text tokenization utilities
15. [Chat](/docs/api/mcpAPI/chat) - `codebolt.chat` - Chat and conversation management
16. [Problem Matcher](/docs/api/mcpAPI/problem_matcher) - `codebolt.problem_matcher` - Error and issue detection
17. [Config](/docs/api/mcpAPI/config) - `codebolt.config` - Configuration management
18. [Project](/docs/api/mcpAPI/project) - `codebolt.project` - Project management operations
19. [Message](/docs/api/mcpAPI/message) - `codebolt.message` - Message processing and communication
20. [Code Utils](/docs/api/mcpAPI/code_utils) - `codebolt.code_utils` - Code analysis and utility functions

## Sample Usage

```javascript
// List available tools from multiple MCP servers
const toolsList = await codeboltMCP.listToolsFromToolBoxes([
  "codebolt.browser",
  "codebolt.git",
  "codebolt.fs"
]);

// Execute a specific tool from an MCP server
const result = await codeboltMCP.executeTool(
  "codebolt.browser",
  "launch",
  { url: "https://example.com" }
);