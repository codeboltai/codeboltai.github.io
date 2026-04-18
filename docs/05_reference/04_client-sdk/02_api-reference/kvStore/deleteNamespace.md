---
name: deleteNamespace
cbbaseinfo:
  description: "Deletes all key-value pairs within a namespace.

Clears the entire namespace, removing every key and its associated
value. Other namespaces in the instance are not affected."
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: The unique identifier of the KV store instance
      isOptional: false
    - name: namespace
      typeName: string
      description: The namespace to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the namespace has been cleared
data:
  name: deleteNamespace
  category: kvStore
  link: deleteNamespace.md
---
# deleteNamespace

```typescript
client.kvStore.deleteNamespace(instanceId: string, namespace: string): Promise<unknown>
```

Deletes all key-value pairs within a namespace.

Clears the entire namespace, removing every key and its associated
value. Other namespaces in the instance are not affected.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | The unique identifier of the KV store instance |
| `namespace` | `string` | The namespace to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the namespace has been cleared

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.kvStore.deleteNamespace('instanceId', 'namespace');
```
