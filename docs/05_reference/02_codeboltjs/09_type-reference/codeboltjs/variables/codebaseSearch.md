---
title: codebaseSearch
---

[**@codebolt/codeboltjs**](../index.md)

***

# Variable: codebaseSearch

```ts
const codebaseSearch: {
  search: (query: string, targetDirectories?: string[]) => Promise<CodebaseSearchResponse>;
  searchMcpTool: (query: string, tags?: string[]) => Promise<McpToolSearchResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/codebaseSearch.ts:15

Codebase Search Module for codeboltjs
Provides semantic code search functionality across the project.
Mirrors the codebaseSearch.cli.ts operations via WebSocket.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="search"></a> `search()` | (`query`: `string`, `targetDirectories?`: `string`[]) => `Promise`\<[`CodebaseSearchResponse`](../interfaces/CodebaseSearchResponse)\> | Perform a semantic search across the codebase | packages/codeboltjs/src/modules/codebaseSearch.ts:21 |
| <a id="searchmcptool"></a> `searchMcpTool()` | (`query`: `string`, `tags?`: `string`[]) => `Promise`\<[`McpToolSearchResponse`](../interfaces/McpToolSearchResponse)\> | Search for MCP tools by query and optional tags | packages/codeboltjs/src/modules/codebaseSearch.ts:39 |
