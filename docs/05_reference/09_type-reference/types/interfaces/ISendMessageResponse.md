---
title: ISendMessageResponse
---

[**@codebolt/types**](../index.md)

***

# Interface: ISendMessageResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:81

Generic base application response - use with a type parameter for typed data

## Extends

- [`BaseApplicationResponse`](BaseApplicationResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | `unknown` | - | [`BaseApplicationResponse`](BaseApplicationResponse).[`data`](BaseApplicationResponse.md#data) | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:15 |
| <a id="error"></a> `error?` | `string` | [`BaseApplicationResponse`](BaseApplicationResponse).[`error`](BaseApplicationResponse.md#error) | - | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:85 |
| <a id="message"></a> `message?` | `string` | - | [`BaseApplicationResponse`](BaseApplicationResponse).[`message`](BaseApplicationResponse.md#message) | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:13 |
| <a id="messageid"></a> `messageId?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:83 |
| <a id="requestid"></a> `requestId` | `string` | - | [`BaseApplicationResponse`](BaseApplicationResponse).[`requestId`](BaseApplicationResponse.md#requestid) | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:12 |
| <a id="success"></a> `success?` | `boolean` | [`BaseApplicationResponse`](BaseApplicationResponse).[`success`](BaseApplicationResponse.md#success) | - | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:82 |
| <a id="threadid"></a> `threadId?` | `string` | - | - | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:84 |
| <a id="type"></a> `type` | `string` | - | [`BaseApplicationResponse`](BaseApplicationResponse).[`type`](BaseApplicationResponse.md#type) | common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:11 |
