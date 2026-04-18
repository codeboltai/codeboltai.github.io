---
title: updateDesignGuidelines
---

# `updateDesignGuidelines`

```typescript
plugin.projectStructure.updateDesignGuidelines(packageId: string, guidelines: DesignGuidelines, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update design guidelines for a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `guidelines` | `DesignGuidelines` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateDesignGuidelines('packageId', /* DesignGuidelines */);
console.log(result);
```
