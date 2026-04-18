---
name: getInstance
cbbaseinfo:
  description: Get a KV store instance by ID
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<KVInstanceResponse>"
    description: ""
data:
  name: getInstance
  category: kvStore
  link: getInstance.md
---
# getInstance

```typescript
plugin.kvStore.getInstance(instanceId: string): Promise<KVInstanceResponse>
```

Get a KV store instance by ID

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |

## Returns

**`Promise<KVInstanceResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.getInstance('instanceId');
```
