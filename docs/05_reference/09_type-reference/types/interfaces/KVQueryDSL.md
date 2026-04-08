---
title: KVQueryDSL
---

[**@codebolt/types**](../index.md)

***

# Interface: KVQueryDSL

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:36

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="from"></a> `from` | \{ `instance`: `string`; `namespace?`: `string`; \} | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:37 |
| `from.instance` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:38 |
| `from.namespace?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:39 |
| <a id="limit"></a> `limit?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:47 |
| <a id="offset"></a> `offset?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:48 |
| <a id="orderby"></a> `orderBy?` | \{ `direction`: `"asc"` \| `"desc"`; `field`: `string`; \} | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:43 |
| `orderBy.direction` | `"asc"` \| `"desc"` | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:45 |
| `orderBy.field` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:44 |
| <a id="select"></a> `select?` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:42 |
| <a id="where"></a> `where?` | [`KVQueryCondition`](KVQueryCondition)[] | common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:41 |
