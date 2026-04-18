---
name: bulkDelete
cbbaseinfo:
  description: Call bulkDelete on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: BulkDeleteJobsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: bulkDelete
  category: jobsApi
  link: bulkDelete.md
---
# bulkDelete

```typescript
plugin.jobsApi.bulkDelete(data: BulkDeleteJobsRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BulkDeleteJobsRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.bulkDelete(/* BulkDeleteJobsRequest */);
```
