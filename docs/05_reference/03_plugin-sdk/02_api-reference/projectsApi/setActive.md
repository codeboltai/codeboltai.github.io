---
name: setActive
cbbaseinfo:
  description: Call setActive on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: SetActiveProjectRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: setActive
  category: projectsApi
  link: setActive.md
---
# setActive

```typescript
plugin.projectsApi.setActive(data: SetActiveProjectRequest): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SetActiveProjectRequest` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.setActive(/* SetActiveProjectRequest */);
```
