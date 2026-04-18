---
title: addUiRoute
---

# `addUiRoute`

```typescript
plugin.projectStructure.addUiRoute(packageId: string, route: Omit<UiRoute, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a UI route to a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `route` | `Omit<UiRoute, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.addUiRoute('packageId', /* Omit<UiRoute, "id"> */);
console.log(result);
```
