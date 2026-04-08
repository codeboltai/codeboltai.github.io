---
title: AgentEventQueueResponse
---

[**@codebolt/types**](../index)

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
| <a id="code"></a> `code` | `string` | Response code | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:294](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L294) |
| <a id="data"></a> `data?` | `T` | Response data | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:298](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L298) |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | Error details | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:300](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L300) |
| `error.code` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:301](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L301) |
| `error.details?` | `any` | - | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:303](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L303) |
| `error.message` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:302](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L302) |
| <a id="message"></a> `message` | `string` | Human-readable message | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:296](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L296) |
| <a id="requestid"></a> `requestId?` | `string` | Request ID for correlation | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:308](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L308) |
| <a id="success"></a> `success` | `boolean` | Whether the operation succeeded | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:292](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L292) |
| <a id="timestamp"></a> `timestamp?` | `string` | Request timestamp | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:306](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L306) |
