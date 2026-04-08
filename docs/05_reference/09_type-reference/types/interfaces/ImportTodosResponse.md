---
title: ImportTodosResponse
---

[**@codebolt/types**](../index)

***

# Interface: ImportTodosResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:143

Todo SDK Function Types
Types for the cbtodo module functions

## Extends

- [`BaseTodoSDKResponse`](BaseTodoSDKResponse)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="count"></a> `count?` | `number` | Number of todos imported | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:145](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L145) |
| <a id="error"></a> `error?` | `string` | - | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`error`](BaseTodoSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L10) |
| <a id="message"></a> `message?` | `string` | - | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`message`](BaseTodoSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L9) |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`requestId`](BaseTodoSDKResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L12) |
| <a id="result"></a> `result?` | \{ `added?`: `number`; `errors?`: `string`[]; `skipped?`: `number`; `updated?`: `number`; \} | Import result details | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:149](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L149) |
| `result.added?` | `number` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:150](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L150) |
| `result.errors?` | `string`[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:153](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L153) |
| `result.skipped?` | `number` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:152](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L152) |
| `result.updated?` | `number` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:151](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L151) |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`success`](BaseTodoSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L8) |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`timestamp`](BaseTodoSDKResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:14](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L14) |
| <a id="todos"></a> `todos?` | [`TodoItem`](TodoItem)[] | Created todo items | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:147](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L147) |
