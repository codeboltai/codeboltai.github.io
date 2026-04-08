---
title: EventLogAppendResponse
---

[**@codebolt/types**](../index)

***

# Interface: EventLogAppendResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:114

Event Log Types
Type definitions for event log operations

## Extends

- [`EventLogBaseResponse`](EventLogBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `event`: [`EventLogEntry`](EventLogEntry); \} | [`EventLogBaseResponse`](EventLogBaseResponse).[`data`](EventLogBaseResponse.md#data) | - | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:115](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L115) |
| `data.event` | [`EventLogEntry`](EventLogEntry) | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:115](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L115) |
| <a id="error"></a> `error?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`error`](EventLogBaseResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:11](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L11) |
| <a id="message"></a> `message?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`message`](EventLogBaseResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L10) |
| <a id="requestid"></a> `requestId` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`requestId`](EventLogBaseResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:13](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L13) |
| <a id="success"></a> `success` | `boolean` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`success`](EventLogBaseResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L8) |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`timestamp`](EventLogBaseResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L12) |
| <a id="type"></a> `type` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`type`](EventLogBaseResponse.md#type) | [common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:7](common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts#L7) |
