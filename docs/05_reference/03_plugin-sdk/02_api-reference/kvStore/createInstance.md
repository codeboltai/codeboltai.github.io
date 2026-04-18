---
name: createInstance
cbbaseinfo:
  description: Create a new KV store instance
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: Instance name
      isOptional: false
    - name: description
      typeName: string
      description: Optional description
      isOptional: true
  returns:
    signatureTypeName: "Promise<KVInstanceResponse>"
    description: ""
data:
  name: createInstance
  category: kvStore
  link: createInstance.md
---
# createInstance

```typescript
plugin.kvStore.createInstance(name: string, description?: string): Promise<KVInstanceResponse>
```

Create a new KV store instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | Instance name |
| `description` | `string` _(optional)_ | Optional description |

## Returns

**`Promise<KVInstanceResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.createInstance('name');
```
