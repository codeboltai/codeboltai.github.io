---
title: EventLogAppendMultipleResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: EventLogAppendMultipleResponse

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:107

Event Log Types
Type definitions for event log operations

## Extends

- [`EventLogBaseResponse`](EventLogBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `count`: `number`; `events`: [`EventLogEntry`](EventLogEntry)[]; \} | [`EventLogBaseResponse`](EventLogBaseResponse).[`data`](EventLogBaseResponse.md#data) | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:108 |
| `data.count` | `number` | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:110 |
| `data.events` | [`EventLogEntry`](EventLogEntry)[] | - | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:109 |
| <a id="error"></a> `error?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`error`](EventLogBaseResponse.md#error) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:10 |
| <a id="message"></a> `message?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`message`](EventLogBaseResponse.md#message) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:9 |
| <a id="requestid"></a> `requestId` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`requestId`](EventLogBaseResponse.md#requestid) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:12 |
| <a id="success"></a> `success` | `boolean` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`success`](EventLogBaseResponse.md#success) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:7 |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`timestamp`](EventLogBaseResponse.md#timestamp) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:11 |
| <a id="type"></a> `type` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`type`](EventLogBaseResponse.md#type) | common/types/dist/codeboltjstypes/libFunctionTypes/eventLog.d.ts:6 |
