---
title: GetTodoStatsResponse
---

[**@codebolt/types**](../index)

***

# Interface: GetTodoStatsResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:87

Todo SDK Function Types
Types for the cbtodo module functions

## Extends

- [`BaseTodoSDKResponse`](BaseTodoSDKResponse)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="bypriority"></a> `byPriority?` | \{ `high?`: `number`; `low?`: `number`; `medium?`: `number`; \} | Stats by priority | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:99](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L99) |
| `byPriority.high?` | `number` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:100](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L100) |
| `byPriority.low?` | `number` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:102](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L102) |
| `byPriority.medium?` | `number` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:101](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L101) |
| <a id="cancelled"></a> `cancelled?` | `number` | Cancelled todos count | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:97](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L97) |
| <a id="completed"></a> `completed?` | `number` | Completed todos count | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:91](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L91) |
| <a id="error"></a> `error?` | `string` | - | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`error`](BaseTodoSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L10) |
| <a id="inprogress"></a> `inProgress?` | `number` | In progress todos count | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:95](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L95) |
| <a id="message"></a> `message?` | `string` | - | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`message`](BaseTodoSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:9](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L9) |
| <a id="pending"></a> `pending?` | `number` | Pending todos count | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:93](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L93) |
| <a id="requestid"></a> `requestId?` | `string` | Request identifier | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`requestId`](BaseTodoSDKResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L12) |
| <a id="success"></a> `success?` | `boolean` | - | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`success`](BaseTodoSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L8) |
| <a id="timestamp"></a> `timestamp?` | `string` | Response timestamp | [`BaseTodoSDKResponse`](BaseTodoSDKResponse).[`timestamp`](BaseTodoSDKResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:14](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L14) |
| <a id="total"></a> `total?` | `number` | Total todos count | - | [common/types/src/codeboltjstypes/libFunctionTypes/todo.ts:89](common/types/src/codeboltjstypes/libFunctionTypes/todo.ts#L89) |
