---
name: set
cbbaseinfo:
  description: Set a value in the KV store
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
    - name: value
      typeName: any
      description: Value to store
      isOptional: false
    - name: autoCreateInstance
      typeName: boolean
      description: "Auto-create instance if it doesn't exist"
      isOptional: false
  returns:
    signatureTypeName: "Promise<KVSetResponse>"
    description: ""
data:
  name: set
  category: kvStore
  link: set.md
---
# set

```typescript
plugin.kvStore.set(instanceId: string, namespace: string, key: string, value: any, autoCreateInstance: boolean): Promise<KVSetResponse>
```

Set a value in the KV store

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |
| `namespace` | `string` | Namespace |
| `key` | `string` | Key |
| `value` | `any` | Value to store |
| `autoCreateInstance` | `boolean` | Auto-create instance if it doesn't exist Default: `false` |

## Returns

**`Promise<KVSetResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.set('instanceId', 'namespace', 'key', /* any */, true);
```
