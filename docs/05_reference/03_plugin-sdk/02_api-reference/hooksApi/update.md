---
name: update
cbbaseinfo:
  description: Call update on the Plugin SDK hooksApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateHookRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Hook>"
    description: ""
data:
  name: update
  category: hooksApi
  link: update.md
---
# update

```typescript
plugin.hooksApi.update(id: string, data: UpdateHookRequest): Promise<Hook>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateHookRequest` |  |

## Returns

**`Promise<Hook>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hooksApi.update('id', /* UpdateHookRequest */);
```
