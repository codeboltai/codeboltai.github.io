---
name: delete
cbbaseinfo:
  description: Call delete on the Plugin SDK hooksApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: delete
  category: hooksApi
  link: delete.md
---
# delete

```typescript
plugin.hooksApi.delete(id: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hooksApi.delete('id');
```
