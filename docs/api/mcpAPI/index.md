List of MCP APIs available in CodeboltAI.

1. [Codebolt Basic](/docs/api/mcpAPI/codeboltbasic) - codebolt.basic
2. [Browser](/docs/api/mcpAPI/browser) - codebolt.browser
3. [File System](/docs/api/mcpAPI/fstool) - codebolt.fs

:::note
More MCP API documentation is coming soon. The following APIs are available but documentation is being prepared:
- Git (codebolt.git)
- Knowledge (codebolt.knowledge)
- Memory (codebolt.memory)
- Project (codebolt.project)
- RAG (codebolt.rag)
- Terminal (codebolt.terminal)
- Tokenizer (codebolt.tokenizer)
- Toolbox (codebolt.toolbox)
- VectorDB (codebolt.vectordb)
:::


Sample Usage:

const toolsList = await codeboltMCP.listToolsFromToolBoxes([
  "codebolt.basic",
  "codebolt.browser",
  "codebolt.git"
]);