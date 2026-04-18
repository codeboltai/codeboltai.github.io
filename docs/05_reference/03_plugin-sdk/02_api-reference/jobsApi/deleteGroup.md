---
name: deleteGroup
cbbaseinfo:
  description: Call deleteGroup on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: deleteGroup
  category: jobsApi
  link: deleteGroup.md
---
# deleteGroup

```typescript
plugin.jobsApi.deleteGroup(id: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.deleteGroup('id');
```
