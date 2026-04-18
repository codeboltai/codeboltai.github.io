---
name: deleteRoute
cbbaseinfo:
  description: Delete an API route
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: routeId
      typeName: string
      description: ""
      isOptional: false
    - name: workspacePath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ProjectStructureDeleteResponse>"
    description: ""
data:
  name: deleteRoute
  category: projectStructure
  link: deleteRoute.md
---
# deleteRoute

```typescript
plugin.projectStructure.deleteRoute(packageId: string, routeId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete an API route

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `routeId` | `string` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.deleteRoute('packageId', 'routeId');
```
