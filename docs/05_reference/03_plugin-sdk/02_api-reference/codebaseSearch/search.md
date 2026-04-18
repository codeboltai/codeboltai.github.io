---
name: search
cbbaseinfo:
  description: Perform a semantic search across the codebase
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The search query
      isOptional: false
    - name: targetDirectories
      typeName: string[]
      description: Optional directories to limit the search
      isOptional: true
  returns:
    signatureTypeName: "Promise<CodebaseSearchResponse>"
    description: ""
data:
  name: search
  category: codebaseSearch
  link: search.md
---
# search

```typescript
plugin.codebaseSearch.search(query: string, targetDirectories?: string[]): Promise<CodebaseSearchResponse>
```

Perform a semantic search across the codebase

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `query` | `string` | The search query |
| `targetDirectories` | `string[]` _(optional)_ | Optional directories to limit the search |

## Returns

**`Promise<CodebaseSearchResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.codebaseSearch.search('query');
```
