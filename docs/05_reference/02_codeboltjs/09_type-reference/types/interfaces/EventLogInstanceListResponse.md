---
title: EventLogInstanceListResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: EventLogInstanceListResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:110

Event Log Types
Type definitions for event log operations

## Extends

- [`EventLogBaseResponse`](EventLogBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `instances`: [`EventLogInstance`](EventLogInstance)[]; \} | [`EventLogBaseResponse`](EventLogBaseResponse).[`data`](EventLogBaseResponse.md#data) | - | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:111 |
| `data.instances` | [`EventLogInstance`](EventLogInstance)[] | - | - | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:111 |
| <a id="error"></a> `error?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`error`](EventLogBaseResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:11 |
| <a id="message"></a> `message?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`message`](EventLogBaseResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:10 |
| <a id="requestid"></a> `requestId` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`requestId`](EventLogBaseResponse.md#requestid) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:13 |
| <a id="success"></a> `success` | `boolean` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`success`](EventLogBaseResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:8 |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`timestamp`](EventLogBaseResponse.md#timestamp) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:12 |
| <a id="type"></a> `type` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`type`](EventLogBaseResponse.md#type) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:7 |
