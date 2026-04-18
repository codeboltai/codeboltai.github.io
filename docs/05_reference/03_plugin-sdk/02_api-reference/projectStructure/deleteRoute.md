---
title: deleteRoute
---

# `deleteRoute`

```typescript
plugin.projectStructure.deleteRoute(packageId: string, routeId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete an API route

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

const result = await plugin.projectStructure.deleteRoute('packageId', 'routeId');
console.log(result);
```
