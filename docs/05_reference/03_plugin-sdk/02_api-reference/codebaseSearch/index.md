---
title: CodebaseSearch API
---

# CodebaseSearch API

The `codebaseSearch` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`search`](./search) | Perform a semantic search across the codebase |
| [`searchMcpTool`](./searchMcpTool) | Search for MCP tools by query and optional tags |

## Methods

---

### `search`

```typescript
plugin.codebaseSearch.search(query: string, targetDirectories?: string[]): Promise<CodebaseSearchResponse>
```

Perform a semantic search across the codebase

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `string` | Yes | The search query |
| `targetDirectories` | `string[]` | No | Optional directories to limit the search |

**Returns:** `Promise<CodebaseSearchResponse>`

[Full reference →](./search)

---

### `searchMcpTool`

```typescript
plugin.codebaseSearch.searchMcpTool(query: string, tags?: string[]): Promise<McpToolSearchResponse>
```

Search for MCP tools by query and optional tags

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `string` | Yes | The search query |
| `tags` | `string[]` | No | Optional tags to filter results |

**Returns:** `Promise<McpToolSearchResponse>`

[Full reference →](./searchMcpTool)

