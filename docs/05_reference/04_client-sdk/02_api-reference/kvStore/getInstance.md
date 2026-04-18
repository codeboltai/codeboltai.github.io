---
name: getInstance
cbbaseinfo:
  description: "Retrieves a specific KV store instance by its ID.

Returns the full details of the instance including its configuration
and namespace listing."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the KV store instance
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvStoreInstance>"
    description: A promise that resolves to the
data:
  name: getInstance
  category: kvStore
  link: getInstance.md
---
# getInstance

```typescript
client.kvStore.getInstance(id: string): Promise<KvStoreInstance>
```

Retrieves a specific KV store instance by its ID.

Returns the full details of the instance including its configuration
and namespace listing.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the KV store instance |

## Returns

**`Promise<KvStoreInstance>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.kvStore.getInstance('id');
```
