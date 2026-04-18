---
name: getFullProject
cbbaseinfo:
  description: Call getFullProject on the Plugin SDK environmentsApi module.
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
  name: getFullProject
  category: environmentsApi
  link: getFullProject.md
---
# getFullProject

```typescript
plugin.environmentsApi.getFullProject(id: string): Promise<unknown>
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

await plugin.environmentsApi.getFullProject('id');
```
