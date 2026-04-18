---
name: createGroup
cbbaseinfo:
  description: Call createGroup on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateJobGroupRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobGroup>"
    description: ""
data:
  name: createGroup
  category: jobsApi
  link: createGroup.md
---
# createGroup

```typescript
plugin.jobsApi.createGroup(data: CreateJobGroupRequest): Promise<JobGroup>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateJobGroupRequest` |  |

## Returns

**`Promise<JobGroup>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.createGroup(/* CreateJobGroupRequest */);
```
