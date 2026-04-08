---
title: EventLogDSL
---

[**@codebolt/types**](../index)

***

# Interface: EventLogDSL

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:36

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="from"></a> `from` | \{ `instance`: `string`; `stream?`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:37](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L37) |
| `from.instance` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:38](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L38) |
| `from.stream?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:39](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L39) |
| <a id="limit"></a> `limit?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:47](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L47) |
| <a id="offset"></a> `offset?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:48](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L48) |
| <a id="orderby"></a> `orderBy?` | \{ `direction`: `"asc"` \| `"desc"`; `field`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:43](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L43) |
| `orderBy.direction` | `"asc"` \| `"desc"` | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:45](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L45) |
| `orderBy.field` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:44](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L44) |
| <a id="reduce"></a> `reduce?` | \{ `field?`: `string`; `groupBy?`: `string`[]; `type`: `"count"` \| `"sum"` \| `"avg"` \| `"min"` \| `"max"` \| `"collect"`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:49](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L49) |
| `reduce.field?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:51](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L51) |
| `reduce.groupBy?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:52](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L52) |
| `reduce.type` | `"count"` \| `"sum"` \| `"avg"` \| `"min"` \| `"max"` \| `"collect"` | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:50](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L50) |
| <a id="select"></a> `select?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:42](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L42) |
| <a id="where"></a> `where?` | [`EventLogCondition`](EventLogCondition)[] | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:41](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L41) |
