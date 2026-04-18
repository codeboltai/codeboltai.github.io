---
name: createInDefault
cbbaseinfo:
  description: Call createInDefault on the Plugin SDK projectsApi module.
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
  name: createInDefault
  category: projectsApi
  link: createInDefault.md
---
# createInDefault

```typescript
plugin.projectsApi.createInDefault(data: Record<string, unknown>): Promise<Project>
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

await plugin.projectsApi.createInDefault(/* Record<string, unknown> */);
```
