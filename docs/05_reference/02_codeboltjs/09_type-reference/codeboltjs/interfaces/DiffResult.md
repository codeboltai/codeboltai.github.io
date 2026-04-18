---
title: DiffResult
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: DiffResult

Defined in: packages/codeboltjs/src/types/commonTypes.ts:63

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="changed"></a> `changed` | `number` | packages/codeboltjs/src/types/commonTypes.ts:76 |
| <a id="deletions"></a> `deletions` | `number` | packages/codeboltjs/src/types/commonTypes.ts:75 |
| <a id="files"></a> `files` | \{ `binary`: `boolean`; `changes`: `number`; `deletions`: `number`; `diff?`: `string`; `file`: `string`; `insertions`: `number`; `oldFile?`: `string`; `status?`: `"added"` \| `"modified"` \| `"deleted"` \| `"renamed"` \| `"copied"`; \}[] | packages/codeboltjs/src/types/commonTypes.ts:64 |
| <a id="insertions"></a> `insertions` | `number` | packages/codeboltjs/src/types/commonTypes.ts:74 |
| <a id="rawdiff"></a> `rawDiff?` | `string` | packages/codeboltjs/src/types/commonTypes.ts:77 |
