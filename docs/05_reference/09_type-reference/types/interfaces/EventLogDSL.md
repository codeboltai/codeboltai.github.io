---
title: EventLogDSL
---

[**@codebolt/types**](../index.md)

***

# Interface: EventLogDSL

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:36

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="from"></a> `from` | \{ `instance`: `string`; `stream?`: `string`; \} | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:37 |
| `from.instance` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:38 |
| `from.stream?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:39 |
| <a id="limit"></a> `limit?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:47 |
| <a id="offset"></a> `offset?` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:48 |
| <a id="orderby"></a> `orderBy?` | \{ `direction`: `"asc"` \| `"desc"`; `field`: `string`; \} | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:43 |
| `orderBy.direction` | `"asc"` \| `"desc"` | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:45 |
| `orderBy.field` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:44 |
| <a id="reduce"></a> `reduce?` | \{ `field?`: `string`; `groupBy?`: `string`[]; `type`: `"count"` \| `"sum"` \| `"avg"` \| `"min"` \| `"max"` \| `"collect"`; \} | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:49 |
| `reduce.field?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:51 |
| `reduce.groupBy?` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:52 |
| `reduce.type` | `"count"` \| `"sum"` \| `"avg"` \| `"min"` \| `"max"` \| `"collect"` | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:50 |
| <a id="select"></a> `select?` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:42 |
| <a id="where"></a> `where?` | [`EventLogCondition`](EventLogCondition)[] | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:41 |
