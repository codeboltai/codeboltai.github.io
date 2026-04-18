---
name: disable
cbbaseinfo:
  description: Call disable on the Plugin SDK hooksApi module.
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
  name: disable
  category: hooksApi
  link: disable.md
---
# disable

```typescript
plugin.hooksApi.disable(id: string): Promise<unknown>
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

await plugin.hooksApi.disable('id');
```
