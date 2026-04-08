---
title: KVQueryDSL
---

[**@codebolt/types**](../index)

***

# Interface: KVQueryDSL

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:36

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="from"></a> `from` | \{ `instance`: `string`; `namespace?`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:37](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L37) |
| `from.instance` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:38](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L38) |
| `from.namespace?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:39](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L39) |
| <a id="limit"></a> `limit?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:47](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L47) |
| <a id="offset"></a> `offset?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:48](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L48) |
| <a id="orderby"></a> `orderBy?` | \{ `direction`: `"asc"` \| `"desc"`; `field`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:43](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L43) |
| `orderBy.direction` | `"asc"` \| `"desc"` | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:45](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L45) |
| `orderBy.field` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:44](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L44) |
| <a id="select"></a> `select?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:42](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L42) |
| <a id="where"></a> `where?` | [`KVQueryCondition`](KVQueryCondition)[] | [common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts:41](common/types/src/codeboltjstypes/libFunctionTypes/kvStore.ts#L41) |
