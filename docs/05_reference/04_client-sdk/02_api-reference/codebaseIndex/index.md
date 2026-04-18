---
name: index
cbbaseinfo:
  description: "Triggers codebase indexing.

Starts an indexing operation that scans the project files and builds
or updates the search index. This may take time for large codebases."
cbparameters:
  parameters:
    - name: data
      typeName: CodebaseIndexRequest
      description: Optional indexing configuration (e.g., paths to include/exclude)
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when indexing has been initiated
data:
  name: index
  category: codebaseIndex
  link: index.md
---
# index

```typescript
client.codebaseIndex.index(data?: CodebaseIndexRequest): Promise<unknown>
```

Triggers codebase indexing.

Starts an indexing operation that scans the project files and builds
or updates the search index. This may take time for large codebases.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CodebaseIndexRequest` _(optional)_ | Optional indexing configuration (e.g., paths to include/exclude) |

## Returns

**`Promise<unknown>`** — A promise that resolves when indexing has been initiated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codebaseIndex.index();
```
