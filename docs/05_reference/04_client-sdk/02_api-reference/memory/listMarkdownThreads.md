---
name: listMarkdownThreads
cbbaseinfo:
  description: "Lists all markdown memory threads with optional filtering.

Returns only threads of the markdown type, filtered by the provided parameters."
cbparameters:
  parameters:
    - name: params
      typeName: ListMemoryThreadsParams
      description: Optional filtering and pagination parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<MemoryThread[]>"
    description: A promise that resolves to an array of markdown memory threads
data:
  name: listMarkdownThreads
  category: memory
  link: listMarkdownThreads.md
---
# listMarkdownThreads

```typescript
client.memory.listMarkdownThreads(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>
```

Lists all markdown memory threads with optional filtering.

Returns only threads of the markdown type, filtered by the provided parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ListMemoryThreadsParams` _(optional)_ | Optional filtering and pagination parameters |

## Returns

**`Promise<MemoryThread[]>`** — A promise that resolves to an array of markdown memory threads

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.listMarkdownThreads();
```
