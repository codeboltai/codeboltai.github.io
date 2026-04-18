---
name: updateInstance
cbbaseinfo:
  description: "Updates a KV store instance's configuration.

Modifies instance properties such as name or settings. The stored
data is not affected by instance updates."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the instance to update
      isOptional: false
    - name: data
      typeName: UpdateKvStoreInstanceRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvStoreInstance>"
    description: A promise that resolves to the updated
data:
  name: updateInstance
  category: kvStore
  link: updateInstance.md
---
# updateInstance

```typescript
client.kvStore.updateInstance(id: string, data: UpdateKvStoreInstanceRequest): Promise<KvStoreInstance>
```

Updates a KV store instance's configuration.

Modifies instance properties such as name or settings. The stored
data is not affected by instance updates.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the instance to update |
| `data` | `UpdateKvStoreInstanceRequest` | The fields to update |

## Returns

**`Promise<KvStoreInstance>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.kvStore.updateInstance('id', /* UpdateKvStoreInstanceRequest */);
```
