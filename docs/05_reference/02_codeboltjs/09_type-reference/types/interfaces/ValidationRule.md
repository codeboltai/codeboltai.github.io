---
title: ValidationRule
---

[**@codebolt/types**](../index.md)

***

# Interface: ValidationRule

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:453

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="field"></a> `field` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:454 |
| <a id="message"></a> `message?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:456 |
| <a id="options"></a> `options?` | `Record`\<`string`, `any`\> | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:458 |
| <a id="type"></a> `type` | \| `"string"` \| `"number"` \| `"boolean"` \| `"object"` \| `"required"` \| `"custom"` \| `"array"` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:455 |
| <a id="validator"></a> `validator?` | (`value`: `any`) => `boolean` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:457 |
