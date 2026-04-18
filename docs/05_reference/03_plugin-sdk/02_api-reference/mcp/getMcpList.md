---
name: getMcpList
cbbaseinfo:
  description: Gets the list of available MCP servers.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetMcpListResponse>"
    description: ""
data:
  name: getMcpList
  category: mcp
  link: getMcpList.md
---
# getMcpList

```typescript
plugin.mcp.getMcpList(): Promise<GetMcpListResponse>
```

Gets the list of available MCP servers.

## Parameters

_None_

## Returns

**`Promise<GetMcpListResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mcp.getMcpList();
```
