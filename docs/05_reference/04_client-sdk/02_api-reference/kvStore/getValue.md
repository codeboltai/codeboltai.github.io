---
name: getValue
cbbaseinfo:
  description: "Retrieves a value by its key within a specific namespace.

Looks up a single key-value pair in the specified instance and
namespace. Returns the value along with its metadata."
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
      description: The key to look up
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvValue>"
    description: A promise that resolves to the  including the stored data
data:
  name: getValue
  category: kvStore
  link: getValue.md
---
# getValue

```typescript
client.kvStore.getValue(instanceId: string, namespace: string, key: string): Promise<KvValue>
```

Retrieves a value by its key within a specific namespace.

Looks up a single key-value pair in the specified instance and
namespace. Returns the value along with its metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | The unique identifier of the KV store instance |
| `namespace` | `string` | The namespace containing the key |
| `key` | `string` | The key to look up |

## Returns

**`Promise<KvValue>`** — A promise that resolves to the  including the stored data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.kvStore.getValue('instanceId', 'namespace', 'key');
```
