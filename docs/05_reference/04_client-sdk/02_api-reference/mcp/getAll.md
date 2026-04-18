---
name: getAll
cbbaseinfo:
  description: "Retrieves all MCP servers currently registered in the workspace.

Returns every MCP server regardless of its enabled/disabled status, including
connection details, available tools, and current health information."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<McpServer[]>"
    description: A promise that resolves to an array of all registered MCP servers
data:
  name: getAll
  category: mcp
  link: getAll.md
---
# getAll

```typescript
client.mcp.getAll(): Promise<McpServer[]>
```

Retrieves all MCP servers currently registered in the workspace.

Returns every MCP server regardless of its enabled/disabled status, including
connection details, available tools, and current health information.

## Parameters

_None_

## Returns

**`Promise<McpServer[]>`** — A promise that resolves to an array of all registered MCP servers

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.getAll();
```
