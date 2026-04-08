---
title: EventLogDSL
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: EventLogDSL

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:31

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="from"></a> `from` | \{ `instance`: `string`; `stream?`: `string`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:32 |
| `from.instance` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:33 |
| `from.stream?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:34 |
| <a id="limit"></a> `limit?` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:42 |
| <a id="offset"></a> `offset?` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:43 |
| <a id="orderby"></a> `orderBy?` | \{ `direction`: `"asc"` \| `"desc"`; `field`: `string`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:38 |
| `orderBy.direction` | `"asc"` \| `"desc"` | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:40 |
| `orderBy.field` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:39 |
| <a id="reduce"></a> `reduce?` | \{ `field?`: `string`; `groupBy?`: `string`[]; `type`: `"count"` \| `"sum"` \| `"avg"` \| `"min"` \| `"max"` \| `"collect"`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:44 |
| `reduce.field?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:46 |
| `reduce.groupBy?` | `string`[] | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:47 |
| `reduce.type` | `"count"` \| `"sum"` \| `"avg"` \| `"min"` \| `"max"` \| `"collect"` | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:45 |
| <a id="select"></a> `select?` | `string`[] | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:37 |
| <a id="where"></a> `where?` | [`EventLogCondition`](EventLogCondition)[] | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:36 |
