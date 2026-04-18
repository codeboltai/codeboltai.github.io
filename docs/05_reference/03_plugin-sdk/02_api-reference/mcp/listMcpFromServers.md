---
title: listMcpFromServers
---

# `listMcpFromServers`

```typescript
plugin.mcp.listMcpFromServers(toolBoxes: string[]): Promise<ListToolsFromToolBoxesResponse>
```

Lists all tools from the specified toolboxes.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `toolBoxes` | `string[]` | Yes |  |

## Returns

`Promise<ListToolsFromToolBoxesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.listMcpFromServers(/* string[] */);
console.log(result);
```
