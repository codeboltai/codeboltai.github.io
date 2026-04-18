---
title: getMcpList
---

# `getMcpList`

```typescript
plugin.mcp.getMcpList(): Promise<GetMcpListResponse>
```

Gets the list of available MCP servers.

## Parameters

_No parameters._

## Returns

`Promise<GetMcpListResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.getMcpList();
console.log(result);
```
