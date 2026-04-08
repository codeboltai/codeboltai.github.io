---
title: utils
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: utils

```ts
const utils: {
  editFileAndApplyDiff: (filePath: string, diff: string, diffIdentifier: string, prompt: string, applyModel?: string) => Promise<FsEditFileAndApplyDiffResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/utils.ts:6

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="editfileandapplydiff"></a> `editFileAndApplyDiff()` | (`filePath`: `string`, `diff`: `string`, `diffIdentifier`: `string`, `prompt`: `string`, `applyModel?`: `string`) => `Promise`\<`FsEditFileAndApplyDiffResponse`\> | Edits a file and applies a diff with AI assistance. | [packages/codeboltjs/src/modules/utils.ts:17](packages/codeboltjs/src/modules/utils.ts#L17) |
