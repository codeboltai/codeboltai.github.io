---
title: updateFrontendFramework
---

# `updateFrontendFramework`

```typescript
plugin.projectStructure.updateFrontendFramework(packageId: string, framework: FrameworkInfo, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update frontend framework for a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `framework` | `FrameworkInfo` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateFrontendFramework('packageId', /* FrameworkInfo */);
console.log(result);
```
