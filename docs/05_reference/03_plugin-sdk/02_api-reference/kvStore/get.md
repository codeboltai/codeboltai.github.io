---
name: get
cbbaseinfo:
  description: Get a value from the KV store
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
    - name: namespace
      typeName: string
      description: Namespace
      isOptional: false
    - name: key
      typeName: string
      description: Key
      isOptional: false
  returns:
    signatureTypeName: "Promise<KVGetResponse>"
    description: ""
data:
  name: get
  category: kvStore
  link: get.md
---
# get

```typescript
plugin.kvStore.get(instanceId: string, namespace: string, key: string): Promise<KVGetResponse>
```

Get a value from the KV store

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |
| `namespace` | `string` | Namespace |
| `key` | `string` | Key |

## Returns

**`Promise<KVGetResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.get('instanceId', 'namespace', 'key');
```
