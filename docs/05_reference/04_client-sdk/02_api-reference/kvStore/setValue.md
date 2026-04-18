---
name: setValue
cbbaseinfo:
  description: "Sets a key-value pair in the store.

Creates or overwrites a value at the specified key within a namespace
and instance. The value can be any JSON-serializable data."
cbparameters:
  parameters:
    - name: data
      typeName: SetKvValueRequest
      description: The set request including instance ID, namespace, key, and value
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvValue>"
    description: A promise that resolves to the stored
data:
  name: setValue
  category: kvStore
  link: setValue.md
---
# setValue

```typescript
client.kvStore.setValue(data: SetKvValueRequest): Promise<KvValue>
```

Sets a key-value pair in the store.

Creates or overwrites a value at the specified key within a namespace
and instance. The value can be any JSON-serializable data.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SetKvValueRequest` | The set request including instance ID, namespace, key, and value |

## Returns

**`Promise<KvValue>`** — A promise that resolves to the stored

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.kvStore.setValue(/* SetKvValueRequest */);
```
