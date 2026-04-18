---
title: addRoute
---

# `addRoute`

```typescript
plugin.projectStructure.addRoute(packageId: string, route: Omit<ApiRoute, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add an API route to a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `route` | `Omit<ApiRoute, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.addRoute('packageId', /* Omit<ApiRoute, "id"> */);
console.log(result);
```
