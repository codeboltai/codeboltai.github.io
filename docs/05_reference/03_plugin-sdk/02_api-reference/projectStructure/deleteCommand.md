---
title: deleteCommand
---

# `deleteCommand`

```typescript
plugin.projectStructure.deleteCommand(packageId: string, commandId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a run command

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `commandId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.deleteCommand('packageId', 'commandId');
console.log(result);
```
