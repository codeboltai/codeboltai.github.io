---
name: searchMcpTool
cbbaseinfo:
  description: Search for MCP tools by query and optional tags
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The search query
      isOptional: false
    - name: tags
      typeName: string[]
      description: Optional tags to filter results
      isOptional: true
  returns:
    signatureTypeName: "Promise<McpToolSearchResponse>"
    description: ""
data:
  name: searchMcpTool
  category: codebaseSearch
  link: searchMcpTool.md
---
# searchMcpTool

```typescript
plugin.codebaseSearch.searchMcpTool(query: string, tags?: string[]): Promise<McpToolSearchResponse>
```

Search for MCP tools by query and optional tags

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `query` | `string` | The search query |
| `tags` | `string[]` _(optional)_ | Optional tags to filter results |

## Returns

**`Promise<McpToolSearchResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.codebaseSearch.searchMcpTool('query');
```
