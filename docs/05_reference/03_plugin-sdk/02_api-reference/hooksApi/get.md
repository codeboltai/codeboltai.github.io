---
name: get
cbbaseinfo:
  description: Call get on the Plugin SDK hooksApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Hook>"
    description: ""
data:
  name: get
  category: hooksApi
  link: get.md
---
# get

```typescript
plugin.hooksApi.get(id: string): Promise<Hook>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<Hook>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hooksApi.get('id');
```
