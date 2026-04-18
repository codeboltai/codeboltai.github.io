---
name: updateGroup
cbbaseinfo:
  description: Call updateGroup on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateJobGroupRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobGroup>"
    description: ""
data:
  name: updateGroup
  category: jobsApi
  link: updateGroup.md
---
# updateGroup

```typescript
plugin.jobsApi.updateGroup(id: string, data: UpdateJobGroupRequest): Promise<JobGroup>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateJobGroupRequest` |  |

## Returns

**`Promise<JobGroup>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.updateGroup('id', /* UpdateJobGroupRequest */);
```
