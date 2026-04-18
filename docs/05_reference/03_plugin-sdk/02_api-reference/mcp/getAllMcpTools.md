---
title: getAllMcpTools
---

# `getAllMcpTools`

```typescript
plugin.mcp.getAllMcpTools(): Promise<GetAllMCPToolsResponse>
```

Gets all tools from all enabled MCP servers.

## Parameters

_No parameters._

## Returns

`Promise<GetAllMCPToolsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.getAllMcpTools();
console.log(result);
```
