---
title: getMcpTools
---

# `getMcpTools`

```typescript
plugin.mcp.getMcpTools(mcpNames?: string[]): Promise<GetMcpToolsResponse>
```

Gets MCP tools from the specified servers.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `mcpNames` | `string[]` | No |  |

## Returns

`Promise<GetMcpToolsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.getMcpTools();
console.log(result);
```
