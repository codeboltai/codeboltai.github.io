---
name: listContextThreads
cbbaseinfo:
  description: "Lists all context memory threads with optional filtering.

Returns only threads of the context type, filtered by the provided parameters."
cbparameters:
  parameters:
    - name: params
      typeName: ListMemoryThreadsParams
      description: Optional filtering and pagination parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<MemoryThread[]>"
    description: A promise that resolves to an array of context memory threads
data:
  name: listContextThreads
  category: memory
  link: listContextThreads.md
---
# listContextThreads

```typescript
client.memory.listContextThreads(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>
```

Lists all context memory threads with optional filtering.

Returns only threads of the context type, filtered by the provided parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ListMemoryThreadsParams` _(optional)_ | Optional filtering and pagination parameters |

## Returns

**`Promise<MemoryThread[]>`** — A promise that resolves to an array of context memory threads

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.listContextThreads();
```
