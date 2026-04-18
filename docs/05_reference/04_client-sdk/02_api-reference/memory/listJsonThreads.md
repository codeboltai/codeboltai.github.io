---
name: listJsonThreads
cbbaseinfo:
  description: "Lists all JSON memory threads with optional filtering.

Returns only threads of the JSON type, filtered by the provided parameters."
cbparameters:
  parameters:
    - name: params
      typeName: ListMemoryThreadsParams
      description: Optional filtering and pagination parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<MemoryThread[]>"
    description: A promise that resolves to an array of JSON memory threads
data:
  name: listJsonThreads
  category: memory
  link: listJsonThreads.md
---
# listJsonThreads

```typescript
client.memory.listJsonThreads(params?: ListMemoryThreadsParams): Promise<MemoryThread[]>
```

Lists all JSON memory threads with optional filtering.

Returns only threads of the JSON type, filtered by the provided parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ListMemoryThreadsParams` _(optional)_ | Optional filtering and pagination parameters |

## Returns

**`Promise<MemoryThread[]>`** — A promise that resolves to an array of JSON memory threads

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.listJsonThreads();
```
