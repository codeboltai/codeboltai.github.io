---
title: IRegisterAgentResponse
---

[**@codebolt/types**](../index)

***

# Interface: IRegisterAgentResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:50

Generic base application response - use with a type parameter for typed data

## Extends

- [`BaseApplicationResponse`](BaseApplicationResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:52](common/types/src/codeboltjstypes/libFunctionTypes/mail.ts#L52) |
| <a id="data"></a> `data?` | `unknown` | - | [`BaseApplicationResponse`](BaseApplicationResponse).[`data`](BaseApplicationResponse.md#data) | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:15](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L15) |
| <a id="error"></a> `error?` | `string` | [`BaseApplicationResponse`](BaseApplicationResponse).[`error`](BaseApplicationResponse.md#error) | - | [common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:53](common/types/src/codeboltjstypes/libFunctionTypes/mail.ts#L53) |
| <a id="message"></a> `message?` | `string` | - | [`BaseApplicationResponse`](BaseApplicationResponse).[`message`](BaseApplicationResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:13](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L13) |
| <a id="requestid"></a> `requestId` | `string` | - | [`BaseApplicationResponse`](BaseApplicationResponse).[`requestId`](BaseApplicationResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L12) |
| <a id="success"></a> `success?` | `boolean` | [`BaseApplicationResponse`](BaseApplicationResponse).[`success`](BaseApplicationResponse.md#success) | - | [common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:51](common/types/src/codeboltjstypes/libFunctionTypes/mail.ts#L51) |
| <a id="type"></a> `type` | `string` | - | [`BaseApplicationResponse`](BaseApplicationResponse).[`type`](BaseApplicationResponse.md#type) | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:11](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L11) |
