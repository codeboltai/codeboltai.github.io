---
title: addCommand
---

# `addCommand`

```typescript
plugin.projectStructure.addCommand(packageId: string, command: Omit<RunCommand, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a run command to a package

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `command` | `Omit<RunCommand, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.addCommand('packageId', /* Omit<RunCommand, "id"> */);
console.log(result);
```
