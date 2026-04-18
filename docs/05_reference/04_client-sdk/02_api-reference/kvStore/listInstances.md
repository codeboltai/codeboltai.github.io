---
name: listInstances
cbbaseinfo:
  description: "Lists all KV store instances.

Returns every instance in the system with their metadata and
namespace information."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<KvStoreInstance[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listInstances
  category: kvStore
  link: listInstances.md
---
# listInstances

```typescript
client.kvStore.listInstances(params?: Record<string, unknown>): Promise<KvStoreInstance[]>
```

Lists all KV store instances.

Returns every instance in the system with their metadata and
namespace information.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<KvStoreInstance[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.kvStore.listInstances();
```
