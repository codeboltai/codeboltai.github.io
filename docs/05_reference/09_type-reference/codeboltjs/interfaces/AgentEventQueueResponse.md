---
title: AgentEventQueueResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: AgentEventQueueResponse\<T\>

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:249

Standard response for Agent Event Queue operations

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="code"></a> `code` | `string` | Response code | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:253 |
| <a id="data"></a> `data?` | `T` | Response data | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:257 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | Error details | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:259 |
| `error.code` | `string` | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:260 |
| `error.details?` | `any` | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:262 |
| `error.message` | `string` | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:261 |
| <a id="message"></a> `message` | `string` | Human-readable message | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:255 |
| <a id="requestid"></a> `requestId?` | `string` | Request ID for correlation | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:267 |
| <a id="success"></a> `success` | `boolean` | Whether the operation succeeded | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:251 |
| <a id="timestamp"></a> `timestamp?` | `string` | Request timestamp | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:265 |
