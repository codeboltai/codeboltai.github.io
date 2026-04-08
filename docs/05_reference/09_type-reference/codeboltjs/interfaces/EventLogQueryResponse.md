---
title: EventLogQueryResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: EventLogQueryResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:113

Event Log Types
Type definitions for event log operations

## Extends

- [`EventLogBaseResponse`](EventLogBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `result`: [`EventLogQueryResult`](EventLogQueryResult); \} | [`EventLogBaseResponse`](EventLogBaseResponse).[`data`](EventLogBaseResponse.md#data) | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:114 |
| `data.result` | [`EventLogQueryResult`](EventLogQueryResult) | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:115 |
| <a id="error"></a> `error?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`error`](EventLogBaseResponse.md#error) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:10 |
| <a id="message"></a> `message?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`message`](EventLogBaseResponse.md#message) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:9 |
| <a id="requestid"></a> `requestId` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`requestId`](EventLogBaseResponse.md#requestid) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:12 |
| <a id="success"></a> `success` | `boolean` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`success`](EventLogBaseResponse.md#success) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:7 |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`timestamp`](EventLogBaseResponse.md#timestamp) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:11 |
| <a id="type"></a> `type` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`type`](EventLogBaseResponse.md#type) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:6 |
