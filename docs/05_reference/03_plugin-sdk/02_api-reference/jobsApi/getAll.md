---
name: getAll
cbbaseinfo:
  description: Call getAll on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: params
      typeName: JobListFilters
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: ""
data:
  name: getAll
  category: jobsApi
  link: getAll.md
---
# getAll

```typescript
plugin.jobsApi.getAll(params?: JobListFilters): Promise<Job[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `JobListFilters` _(optional)_ |  |

## Returns

**`Promise<Job[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.getAll();
```
