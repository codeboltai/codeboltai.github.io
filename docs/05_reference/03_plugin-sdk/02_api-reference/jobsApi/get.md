---
name: get
cbbaseinfo:
  description: Call get on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Job>"
    description: ""
data:
  name: get
  category: jobsApi
  link: get.md
---
# get

```typescript
plugin.jobsApi.get(id: string): Promise<Job>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<Job>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.get('id');
```
