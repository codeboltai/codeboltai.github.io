---
name: getRecordCount
cbbaseinfo:
  description: Get record count for an instance or namespace
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
    - name: namespace
      typeName: string
      description: Optional namespace filter
      isOptional: true
  returns:
    signatureTypeName: "Promise<KVRecordCountResponse>"
    description: ""
data:
  name: getRecordCount
  category: kvStore
  link: getRecordCount.md
---
# getRecordCount

```typescript
plugin.kvStore.getRecordCount(instanceId: string, namespace?: string): Promise<KVRecordCountResponse>
```

Get record count for an instance or namespace

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |
| `namespace` | `string` _(optional)_ | Optional namespace filter |

## Returns

**`Promise<KVRecordCountResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.getRecordCount('instanceId');
```
