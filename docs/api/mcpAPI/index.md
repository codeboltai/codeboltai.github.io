---
title: MCP API Overview
sidebar_label: Overview
sidebar_position: 1
---

List of MCP APIs available in CodeboltAI.

<!-- 1. [Codebolt Basic](/docs/api/mcpAPI/codeboltbasic) - codebolt.basic
2. [Browser](/docs/api/mcpAPI/browser) - codebolt.browser
3. [File System](/docs/api/mcpAPI/fs) - codebolt.fs
4. [Git](/docs/api/mcpAPI/git) - codebolt.git
5. [Knowledge](/docs/api/mcpAPI/knowledge) - codebolt.knowledge
6. [Memory](/docs/api/mcpAPI/memory) - codebolt.memory
7. [Project](/docs/api/mcpAPI/project) - codebolt.project
8. [RAG](/docs/api/mcpAPI/rag) - codebolt.rag
9. [Terminal](/docs/api/mcpAPI/terminal) - codebolt.terminal
10. [Tokenizer](/docs/api/mcpAPI/tokenizer) - codebolt.tokenizer
11. [Toolbox](/docs/api/mcpAPI/toolbox) - codebolt.toolbox
12. [VectorDB](/docs/api/mcpAPI/vectordb) - codebolt.vectordb -->


Sample Usage:

const toolsList = await codeboltMCP.listToolsFromToolBoxes([
  "codebolt.basic",
  "codebolt.browser",
  "codebolt.git"
]);