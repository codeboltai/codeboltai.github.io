---
name: getLocalMcpList
cbbaseinfo:
  description: "Retrieves the list of locally defined MCP servers.

Returns MCP servers that are defined in the local workspace configuration rather than
installed from the marketplace. These are typically custom or development servers."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<McpServer[]>"
    description: A promise that resolves to an array of local MCP servers
data:
  name: getLocalMcpList
  category: mcp
  link: getLocalMcpList.md
---
# getLocalMcpList

```typescript
client.mcp.getLocalMcpList(): Promise<McpServer[]>
```

Retrieves the list of locally defined MCP servers.

Returns MCP servers that are defined in the local workspace configuration rather than
installed from the marketplace. These are typically custom or development servers.

## Parameters

_None_

## Returns

**`Promise<McpServer[]>`** — A promise that resolves to an array of local MCP servers

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.getLocalMcpList();
```
