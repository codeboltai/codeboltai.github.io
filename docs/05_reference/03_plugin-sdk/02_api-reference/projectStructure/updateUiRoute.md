---
title: updateUiRoute
---

# `updateUiRoute`

```typescript
plugin.projectStructure.updateUiRoute(packageId: string, routeId: string, updates: Partial<UiRoute>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a UI route

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `routeId` | `string` | Yes |  |
| `updates` | `Partial<UiRoute>` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateUiRoute('packageId', 'routeId', /* Partial<UiRoute> */);
console.log(result);
```
