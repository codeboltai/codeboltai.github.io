---
name: deleteTaskGroup
cbbaseinfo:
  description: Call deleteTaskGroup on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: groupId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: deleteTaskGroup
  category: projectsApi
  link: deleteTaskGroup.md
---
# deleteTaskGroup

```typescript
plugin.projectsApi.deleteTaskGroup(groupId: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `groupId` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.deleteTaskGroup('groupId');
```
