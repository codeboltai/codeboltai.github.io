---
name: deleteJobs
cbbaseinfo:
  description: Call deleteJobs on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: jobIds
      typeName: string[]
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobDeleteBulkResponse>"
    description: ""
data:
  name: deleteJobs
  category: job
  link: deleteJobs.md
---
# deleteJobs

```typescript
plugin.job.deleteJobs(jobIds: string[]): Promise<JobDeleteBulkResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `jobIds` | `string[]` |  |

## Returns

**`Promise<JobDeleteBulkResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.deleteJobs(/* string[] */);
```
