---
name: enable
cbbaseinfo:
  description: Call enable on the Plugin SDK hooksApi module.
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
  name: enable
  category: hooksApi
  link: enable.md
---
# enable

```typescript
plugin.hooksApi.enable(id: string): Promise<unknown>
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

await plugin.hooksApi.enable('id');
```
