---
name: update
cbbaseinfo:
  description: Call update on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateJobRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Job>"
    description: ""
data:
  name: update
  category: jobsApi
  link: update.md
---
# update

```typescript
plugin.jobsApi.update(id: string, data: UpdateJobRequest): Promise<Job>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateJobRequest` |  |

## Returns

**`Promise<Job>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.update('id', /* UpdateJobRequest */);
```
