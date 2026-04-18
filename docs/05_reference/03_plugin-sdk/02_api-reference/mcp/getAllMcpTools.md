---
name: getAllMcpTools
cbbaseinfo:
  description: Gets all tools from all enabled MCP servers.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetAllMCPToolsResponse>"
    description: ""
data:
  name: getAllMcpTools
  category: mcp
  link: getAllMcpTools.md
---
# getAllMcpTools

```typescript
plugin.mcp.getAllMcpTools(): Promise<GetAllMCPToolsResponse>
```

Gets all tools from all enabled MCP servers.

## Parameters

_None_

## Returns

**`Promise<GetAllMCPToolsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.getAllMcpTools();
```
