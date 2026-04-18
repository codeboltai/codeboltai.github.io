---
name: addUiRoute
cbbaseinfo:
  description: Add a UI route to a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: route
      typeName: Omit<UiRoute, "id">
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
  name: addUiRoute
  category: projectStructure
  link: addUiRoute.md
---
# addUiRoute

```typescript
plugin.projectStructure.addUiRoute(packageId: string, route: Omit<UiRoute, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a UI route to a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `route` | `Omit<UiRoute, "id">` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.addUiRoute('packageId', /* Omit<UiRoute, "id"> */);
```
