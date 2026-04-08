---
title: editFileAndApplyDiff
---

[**@codebolt/codeboltjs**](../index)

***

# Function: editFileAndApplyDiff()

```ts
function editFileAndApplyDiff(
   filePath: string, 
   diff: string, 
   diffIdentifier: string, 
   prompt: string, 
applyModel?: string): Promise<FsEditFileAndApplyDiffResponse>;
```

Defined in: packages/codeboltjs/src/index.ts:427

## Parameters

| Parameter | Type |
| ------ | ------ |
| `filePath` | `string` |
| `diff` | `string` |
| `diffIdentifier` | `string` |
| `prompt` | `string` |
| `applyModel?` | `string` |

## Returns

`Promise`\<`FsEditFileAndApplyDiffResponse`\>
