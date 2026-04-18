---
title: EventLogStatsResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: EventLogStatsResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:126

Event Log Types
Type definitions for event log operations

## Extends

- [`EventLogBaseResponse`](EventLogBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `createdAt`: `string`; `eventCount`: `number`; `instanceId`: `string`; `name`: `string`; `updatedAt`: `string`; \} | [`EventLogBaseResponse`](EventLogBaseResponse).[`data`](EventLogBaseResponse.md#data) | - | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:127 |
| `data.createdAt` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:131 |
| `data.eventCount` | `number` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:130 |
| `data.instanceId` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:128 |
| `data.name` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:129 |
| `data.updatedAt` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:132 |
| <a id="error"></a> `error?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`error`](EventLogBaseResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:11 |
| <a id="message"></a> `message?` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`message`](EventLogBaseResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:10 |
| <a id="requestid"></a> `requestId` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`requestId`](EventLogBaseResponse.md#requestid) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:13 |
| <a id="success"></a> `success` | `boolean` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`success`](EventLogBaseResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:8 |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`timestamp`](EventLogBaseResponse.md#timestamp) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:12 |
| <a id="type"></a> `type` | `string` | - | [`EventLogBaseResponse`](EventLogBaseResponse).[`type`](EventLogBaseResponse.md#type) | common/types/src/codeboltjstypes/libFunctionTypes/eventLog.ts:7 |
