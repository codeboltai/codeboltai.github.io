---
title: ThreadFileChange
---

[**@codebolt/types**](../index.md)

***

# Interface: ThreadFileChange

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:16

File change entry in a thread

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="additions"></a> `additions?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:20 |
| <a id="changetype"></a> `changeType` | `"deleted"` \| `"created"` \| `"modified"` \| `"renamed"` | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:18 |
| <a id="content"></a> `content?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:22 |
| <a id="deletions"></a> `deletions?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:21 |
| <a id="filepath"></a> `filePath` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:17 |
| <a id="oldpath"></a> `oldPath?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/thread.ts:19 |
