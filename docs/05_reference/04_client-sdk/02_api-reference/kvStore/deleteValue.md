---
name: deleteValue
cbbaseinfo:
  description: "Deletes a single key-value pair from the store.

Removes the specified key and its value from the namespace. Other
keys in the same namespace are not affected."
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: The unique identifier of the KV store instance
      isOptional: false
    - name: namespace
      typeName: string
      description: The namespace containing the key
      isOptional: false
    - name: key
      typeName: string
      description: The key to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the key-value pair has been deleted
data:
  name: deleteValue
  category: kvStore
  link: deleteValue.md
---
# deleteValue

```typescript
client.kvStore.deleteValue(instanceId: string, namespace: string, key: string): Promise<unknown>
```

Deletes a single key-value pair from the store.

Removes the specified key and its value from the namespace. Other
keys in the same namespace are not affected.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | The unique identifier of the KV store instance |
| `namespace` | `string` | The namespace containing the key |
| `key` | `string` | The key to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the key-value pair has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.kvStore.deleteValue('instanceId', 'namespace', 'key');
```
