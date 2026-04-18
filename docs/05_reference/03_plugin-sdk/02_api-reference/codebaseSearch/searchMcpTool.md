---
title: searchMcpTool
---

# `searchMcpTool`

```typescript
plugin.codebaseSearch.searchMcpTool(query: string, tags?: string[]): Promise<McpToolSearchResponse>
```

Search for MCP tools by query and optional tags

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `string` | Yes | The search query |
| `tags` | `string[]` | No | Optional tags to filter results |

## Returns

`Promise<McpToolSearchResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.codebaseSearch.searchMcpTool('query');
console.log(result);
```
