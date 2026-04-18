---
title: deleteUiRoute
---

# `deleteUiRoute`

```typescript
plugin.projectStructure.deleteUiRoute(packageId: string, routeId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a UI route

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `routeId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.deleteUiRoute('packageId', 'routeId');
console.log(result);
```
