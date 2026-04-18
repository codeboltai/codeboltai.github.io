---
title: searchAvailableMCPServers
---

# `searchAvailableMCPServers`

```typescript
plugin.mcp.searchAvailableMCPServers(query: string): Promise<SearchAvailableToolBoxesResponse>
```

Searches for available toolboxes matching a query.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `string` | Yes |  |

## Returns

`Promise<SearchAvailableToolBoxesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mcp.searchAvailableMCPServers('query');
console.log(result);
```
