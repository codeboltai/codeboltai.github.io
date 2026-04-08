---
title: ExportTodosResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: ExportTodosResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:134

Todo SDK Function Types
Types for the cbtodo module functions

## Extends

- [`BaseTodoSDKResponse`](BaseTodoSDKResponse)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="count"></a> `count?` | `number` | Number of todos exported | - | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:140 |
| <a id="data"></a> `data?` | `string` | Exported data (JSON or markdown format) | - | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:136 |
| <a id="error"></a> `error?` | `string` | - | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`error`](BaseTodoSDKResponse.md#error) | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:10 |
| <a id="format"></a> `format?` | `"markdown"` \| `"json"` | Export format used | - | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:138 |
| <a id="message"></a> `message?` | `string` | - | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`message`](BaseTodoSDKResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:9 |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`requestId`](BaseTodoSDKResponse.md#requestid) | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:12 |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`success`](BaseTodoSDKResponse.md#success) | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:8 |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`timestamp`](BaseTodoSDKResponse.md#timestamp) | common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:14 |
