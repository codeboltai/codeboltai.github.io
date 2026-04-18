---
title: updateSection
---

# `updateSection`

```typescript
plugin.projectStructure.updateSection(packageId: string, section: string, sectionData: any, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a specific section of a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `section` | `string` | Yes |  |
| `sectionData` | `any` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateSection('packageId', 'section', /* any */);
console.log(result);
```
