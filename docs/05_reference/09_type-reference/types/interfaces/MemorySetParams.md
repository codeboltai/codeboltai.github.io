---
title: MemorySetParams
---

[**@codebolt/types**](../index)

***

# Interface: MemorySetParams

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:165

Memory operation parameters

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="key"></a> `key` | `string` | Memory key | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:167](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L167) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | Memory metadata | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:173](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L173) |
| <a id="ttl"></a> `ttl?` | `number` | Expiration time in seconds | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:171](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L171) |
| <a id="value"></a> `value` | [`MemoryValue`](../type-aliases/MemoryValue) | Memory value | [common/types/src/codeboltjstypes/libFunctionTypes/memory.ts:169](common/types/src/codeboltjstypes/libFunctionTypes/memory.ts#L169) |
