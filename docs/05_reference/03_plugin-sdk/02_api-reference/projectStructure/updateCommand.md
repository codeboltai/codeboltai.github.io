---
title: updateCommand
---

# `updateCommand`

```typescript
plugin.projectStructure.updateCommand(packageId: string, commandId: string, updates: Partial<RunCommand>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a run command

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `commandId` | `string` | Yes |  |
| `updates` | `Partial<RunCommand>` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateCommand('packageId', 'commandId', /* Partial<RunCommand> */);
console.log(result);
```
