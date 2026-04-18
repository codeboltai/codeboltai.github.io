---
name: createJobGroup
cbbaseinfo:
  description: Call createJobGroup on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateJobGroupData
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobGroupCreateResponse>"
    description: ""
data:
  name: createJobGroup
  category: job
  link: createJobGroup.md
---
# createJobGroup

```typescript
plugin.job.createJobGroup(data: CreateJobGroupData): Promise<JobGroupCreateResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateJobGroupData` |  |

## Returns

**`Promise<JobGroupCreateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.createJobGroup(/* CreateJobGroupData */);
```
