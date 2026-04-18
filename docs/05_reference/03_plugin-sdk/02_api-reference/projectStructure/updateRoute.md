---
title: updateRoute
---

# `updateRoute`

```typescript
plugin.projectStructure.updateRoute(packageId: string, routeId: string, updates: Partial<ApiRoute>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update an API route

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `routeId` | `string` | Yes |  |
| `updates` | `Partial<ApiRoute>` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateRoute('packageId', 'routeId', /* Partial<ApiRoute> */);
console.log(result);
```
