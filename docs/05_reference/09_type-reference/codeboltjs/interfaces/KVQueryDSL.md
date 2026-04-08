---
title: KVQueryDSL
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: KVQueryDSL

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:30

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="from"></a> `from` | \{ `instance`: `string`; `namespace?`: `string`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:31 |
| `from.instance` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:32 |
| `from.namespace?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:33 |
| <a id="limit"></a> `limit?` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:41 |
| <a id="offset"></a> `offset?` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:42 |
| <a id="orderby"></a> `orderBy?` | \{ `direction`: `"asc"` \| `"desc"`; `field`: `string`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:37 |
| `orderBy.direction` | `"asc"` \| `"desc"` | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:39 |
| `orderBy.field` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:38 |
| <a id="select"></a> `select?` | `string`[] | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:36 |
| <a id="where"></a> `where?` | [`KVQueryCondition`](KVQueryCondition)[] | common/types/dist/codeboltjstypes/libFunctionTypes/kvStore.d.ts:35 |
