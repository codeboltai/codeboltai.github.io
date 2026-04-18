---
name: updateTaskGroup
cbbaseinfo:
  description: Call updateTaskGroup on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: groupId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateTaskGroupRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskGroup>"
    description: ""
data:
  name: updateTaskGroup
  category: projectsApi
  link: updateTaskGroup.md
---
# updateTaskGroup

```typescript
plugin.projectsApi.updateTaskGroup(groupId: string, data: UpdateTaskGroupRequest): Promise<TaskGroup>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `groupId` | `string` |  |
| `data` | `UpdateTaskGroupRequest` |  |

## Returns

**`Promise<TaskGroup>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.updateTaskGroup('groupId', /* UpdateTaskGroupRequest */);
```
