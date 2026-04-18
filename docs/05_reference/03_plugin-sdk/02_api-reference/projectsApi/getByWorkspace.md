---
name: getByWorkspace
cbbaseinfo:
  description: Call getByWorkspace on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: workspaceId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Project[]>"
    description: ""
data:
  name: getByWorkspace
  category: projectsApi
  link: getByWorkspace.md
---
# getByWorkspace

```typescript
plugin.projectsApi.getByWorkspace(workspaceId: string): Promise<Project[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `workspaceId` | `string` |  |

## Returns

**`Promise<Project[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.getByWorkspace('workspaceId');
```
