---
title: editFileWithDiff
---

# `editFileWithDiff`

```typescript
plugin.fs.editFileWithDiff(targetFile: string, codeEdit: string, diffIdentifier: string, prompt: string, applyModel?: string): Promise<EditFileAndApplyDiffResponse>
```

editFileWithDiff

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `targetFile` | `string` | Yes | The target file to edit. |
| `codeEdit` | `string` | Yes | The code edit to apply. |
| `diffIdentifier` | `string` | Yes | The diff identifier. |
| `prompt` | `string` | Yes | The prompt for the edit. |
| `applyModel` | `string` | No | The model to apply the edit with. |

## Returns

`Promise<EditFileAndApplyDiffResponse>` — A promise that resolves with the edit result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.editFileWithDiff('targetFile', 'codeEdit', 'diffIdentifier', 'prompt');
console.log(result);
```
