---
name: create
cbbaseinfo:
  description: Call create on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateJobRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Job>"
    description: ""
data:
  name: create
  category: jobsApi
  link: create.md
---
# create

```typescript
plugin.jobsApi.create(data: CreateJobRequest): Promise<Job>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateJobRequest` |  |

## Returns

**`Promise<Job>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.create(/* CreateJobRequest */);
```
