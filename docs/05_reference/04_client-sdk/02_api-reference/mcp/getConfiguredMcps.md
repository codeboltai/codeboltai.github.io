---
name: getConfiguredMcps
cbbaseinfo:
  description: "Retrieves all MCP servers that have been configured in the workspace.

Returns only servers that have been explicitly set up (installed and configured),
as opposed to all available servers in the catalog."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<McpServer[]>"
    description: A promise that resolves to an array of configured MCP servers
data:
  name: getConfiguredMcps
  category: mcp
  link: getConfiguredMcps.md
---
# getConfiguredMcps

```typescript
client.mcp.getConfiguredMcps(): Promise<McpServer[]>
```

Retrieves all MCP servers that have been configured in the workspace.

Returns only servers that have been explicitly set up (installed and configured),
as opposed to all available servers in the catalog.

## Parameters

_None_

## Returns

**`Promise<McpServer[]>`** — A promise that resolves to an array of configured MCP servers

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mcp.getConfiguredMcps();
```
