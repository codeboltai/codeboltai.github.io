---
title: getTools
---

# `getTools`

```typescript
plugin.mcp.getTools(toolRequests: object[]): Promise<GetToolsResponse>
```

Gets detailed information about specific tools.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `toolRequests` | `object[]` | Yes |  |

## Returns

`Promise<GetToolsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.getTools(/* object[] */);
console.log(result);
```
