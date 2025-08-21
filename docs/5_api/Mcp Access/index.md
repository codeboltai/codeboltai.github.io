---
title: MCP API Overview
sidebar_label: Overview
sidebar_position: 1
---

# MCP API Overview

List of MCP APIs available in CodeboltAI. These MCPs are wrappers on top of APIs that allow agents to directly call the APIs as MCP rather than calling an API directly.

## Available MCP Servers

1. [Browser](/docs/api/mcp%20access/browser) - `codebolt.browser` - Browser automation and web interaction tools
2. [Git](/docs/api/mcp%20access/git) - `codebolt.git` - Git repository management and version control
3. [Terminal](/docs/api/mcp%20access/terminal) - `codebolt.terminal` - Command execution and terminal operations
4. [File System](/docs/api/mcp%20access/fs) - `codebolt.fs` - File and directory operations
5. [Codebase](/docs/api/mcp%20access/codebase) - `codebolt.codebase` - Code search and analysis tools
6. [Agent](/docs/api/mcp%20access/agent) - `codebolt.agent` - Agent management and lifecycle operations
7. [Memory](/docs/api/mcp%20access/memory) - `codebolt.memory` - Memory storage and retrieval
8. [Vector](/docs/api/mcp%20access/vector) - `codebolt.vector` - Vector database operations
9. [RAG](/docs/api/mcp%20access/rag) - `codebolt.rag` - Retrieval Augmented Generation tools
10. [Notification](/docs/api/mcp%20access/notification) - `codebolt.notification` - Notification and messaging system
11. [Debug](/docs/api/mcp%20access/debug) - `codebolt.debug` - Debugging and logging utilities
12. [State](/docs/api/mcp%20access/state) - `codebolt.state` - Application state management
13. [Task](/docs/api/mcp%20access/task) - `codebolt.task` - Task management and tracking
14. [Tokenizer](/docs/api/mcp%20access/tokenizer) - `codebolt.tokenizer` - Text tokenization utilities
15. [Chat](/docs/api/mcp%20access/chat) - `codebolt.chat` - Chat and conversation management
16. [Problem Matcher](/docs/api/mcp%20access/problem_matcher) - `codebolt.problem_matcher` - Error and issue detection
17. [Config](/docs/api/mcp%20access/config) - `codebolt.config` - Configuration management
18. [Project](/docs/api/mcp%20access/project) - `codebolt.project` - Project management operations
19. [Message](/docs/api/mcp%20access/message) - `codebolt.message` - Message processing and communication
20. [Code Utils](/docs/api/mcp%20access/code_utils) - `codebolt.code_utils` - Code analysis and utility functions

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