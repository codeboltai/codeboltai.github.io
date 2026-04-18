---
name: create
cbbaseinfo:
  description: Call create on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: Record<string, unknown>
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Project>"
    description: ""
data:
  name: create
  category: projectsApi
  link: create.md
---
# create

```typescript
plugin.projectsApi.create(data: Record<string, unknown>): Promise<Project>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `Record<string, unknown>` |  |

## Returns

**`Promise<Project>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.create(/* Record<string, unknown> */);
```
