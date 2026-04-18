---
title: AgentEventQueueResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: AgentEventQueueResponse\<T\>

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:290

Standard response for Agent Event Queue operations

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="code"></a> `code` | `string` | Response code | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:294 |
| <a id="data"></a> `data?` | `T` | Response data | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:298 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | Error details | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:300 |
| `error.code` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:301 |
| `error.details?` | `any` | - | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:303 |
| `error.message` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:302 |
| <a id="message"></a> `message` | `string` | Human-readable message | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:296 |
| <a id="requestid"></a> `requestId?` | `string` | Request ID for correlation | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:308 |
| <a id="success"></a> `success` | `boolean` | Whether the operation succeeded | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:292 |
| <a id="timestamp"></a> `timestamp?` | `string` | Request timestamp | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:306 |
