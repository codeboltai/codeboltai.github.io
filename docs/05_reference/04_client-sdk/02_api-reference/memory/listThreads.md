---
name: listThreads
cbbaseinfo:
  description: "Lists all generic memory threads with optional filtering.

Returns memory threads that match the provided filter criteria. Use this to browse
or search through stored memory threads."
cbparameters:
  parameters:
    - name: params
      typeName: ListMemoryThreadsParams
      description: Optional filtering and pagination parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<MemoryThread[]>"
    description: A promise that resolves to an array of memory threads
data:
  name: listThreads
  category: memory
  link: listThreads.md
---
# listThreads

```typescript
client.memory.listThreads(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>
```

Lists all generic memory threads with optional filtering.

Returns memory threads that match the provided filter criteria. Use this to browse
or search through stored memory threads.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ListMemoryThreadsParams` _(optional)_ | Optional filtering and pagination parameters |

## Returns

**`Promise<MemoryThread[]>`** — A promise that resolves to an array of memory threads

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.listThreads();
```
