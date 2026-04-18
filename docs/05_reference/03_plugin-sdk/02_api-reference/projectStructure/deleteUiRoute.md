---
name: deleteUiRoute
cbbaseinfo:
  description: Delete a UI route
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
  name: deleteUiRoute
  category: projectStructure
  link: deleteUiRoute.md
---
# deleteUiRoute

```typescript
plugin.projectStructure.deleteUiRoute(packageId: string, routeId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a UI route

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

await plugin.projectStructure.deleteUiRoute('packageId', 'routeId');
```
