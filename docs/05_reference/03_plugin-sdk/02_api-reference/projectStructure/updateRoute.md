---
name: updateRoute
cbbaseinfo:
  description: Update an API route
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
      typeName: Partial<ApiRoute>
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
  name: updateRoute
  category: projectStructure
  link: updateRoute.md
---
# updateRoute

```typescript
plugin.projectStructure.updateRoute(packageId: string, routeId: string, updates: Partial<ApiRoute>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update an API route

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `routeId` | `string` |  |
| `updates` | `Partial<ApiRoute>` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateRoute('packageId', 'routeId', /* Partial<ApiRoute> */);
```
