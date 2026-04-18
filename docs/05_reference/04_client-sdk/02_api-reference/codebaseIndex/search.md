---
name: search
cbbaseinfo:
  description: "Searches the codebase index.

Performs a structured search over the indexed codebase, returning
matching files and code snippets ranked by relevance."
cbparameters:
  parameters:
    - name: data
      typeName: CodebaseSearchRequest
      description: The search query and filter parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<CodebaseSearchResult[]>"
    description: A promise that resolves to an array of  objects
data:
  name: search
  category: codebaseIndex
  link: search.md
---
# search

```typescript
client.codebaseIndex.search(data: CodebaseSearchRequest): Promise<CodebaseSearchResult[]>
```

Searches the codebase index.

Performs a structured search over the indexed codebase, returning
matching files and code snippets ranked by relevance.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CodebaseSearchRequest` | The search query and filter parameters |

## Returns

**`Promise<CodebaseSearchResult[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codebaseIndex.search(/* CodebaseSearchRequest */);
```
