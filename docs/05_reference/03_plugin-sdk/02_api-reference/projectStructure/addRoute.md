---
name: addRoute
cbbaseinfo:
  description: Add an API route to a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: route
      typeName: Omit<ApiRoute, "id">
      description: ""
      isOptional: false
    - name: workspacePath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ProjectStructureUpdateResponse>"
    description: ""
data:
  name: addRoute
  category: projectStructure
  link: addRoute.md
---
# addRoute

```typescript
plugin.projectStructure.addRoute(packageId: string, route: Omit<ApiRoute, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add an API route to a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `route` | `Omit<ApiRoute, "id">` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.addRoute('packageId', /* Omit<ApiRoute, "id"> */);
```
