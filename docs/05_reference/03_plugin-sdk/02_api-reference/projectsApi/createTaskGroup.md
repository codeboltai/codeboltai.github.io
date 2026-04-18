---
name: createTaskGroup
cbbaseinfo:
  description: Call createTaskGroup on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateTaskGroupRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskGroup>"
    description: ""
data:
  name: createTaskGroup
  category: projectsApi
  link: createTaskGroup.md
---
# createTaskGroup

```typescript
plugin.projectsApi.createTaskGroup(data: CreateTaskGroupRequest): Promise<TaskGroup>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTaskGroupRequest` |  |

## Returns

**`Promise<TaskGroup>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.createTaskGroup(/* CreateTaskGroupRequest */);
```
