---
title: JSTreeResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: JSTreeResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:138

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | Error message if parsing failed | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:149 |
| <a id="event"></a> `event` | `string` | Event type | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:140 |
| <a id="payload"></a> `payload?` | \{ `filePath`: `string`; `structure`: [`JSTreeStructureItem`](JSTreeStructureItem)[]; \} | Response payload | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:142 |
| `payload.filePath` | `string` | File path that was parsed | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:144 |
| `payload.structure` | [`JSTreeStructureItem`](JSTreeStructureItem)[] | Parsed structure items | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:146 |
