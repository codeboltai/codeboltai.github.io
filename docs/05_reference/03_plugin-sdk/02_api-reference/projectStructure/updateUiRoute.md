---
name: updateUiRoute
cbbaseinfo:
  description: Update a UI route
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
    - name: updates
      typeName: Partial<UiRoute>
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
  name: updateUiRoute
  category: projectStructure
  link: updateUiRoute.md
---
# updateUiRoute

```typescript
plugin.projectStructure.updateUiRoute(packageId: string, routeId: string, updates: Partial<UiRoute>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a UI route

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `routeId` | `string` |  |
| `updates` | `Partial<UiRoute>` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateUiRoute('packageId', 'routeId', /* Partial<UiRoute> */);
```
