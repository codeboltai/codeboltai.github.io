---
title: GetChatHistoryResponse
---

[**@codebolt/types**](../index)

***

# Interface: GetChatHistoryResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:85

## Extends

- [`BaseChatSDKResponse`](BaseChatSDKResponse)

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:93](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L93) |
| <a id="error"></a> `error?` | `string` | [`BaseChatSDKResponse`](BaseChatSDKResponse).[`error`](BaseChatSDKResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:19](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L19) |
| <a id="message"></a> `message?` | `string` | [`BaseChatSDKResponse`](BaseChatSDKResponse).[`message`](BaseChatSDKResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:18](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L18) |
| <a id="messages"></a> `messages?` | \{ `content`: `string`; `id`: `string`; `sender`: `string`; `timestamp`: `string`; `type`: `string`; \}[] | - | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:86](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L86) |
| <a id="success"></a> `success?` | `boolean` | [`BaseChatSDKResponse`](BaseChatSDKResponse).[`success`](BaseChatSDKResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:17](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L17) |
| <a id="type"></a> `type` | `string` | [`BaseChatSDKResponse`](BaseChatSDKResponse).[`type`](BaseChatSDKResponse.md#type) | [common/types/src/codeboltjstypes/libFunctionTypes/chat.ts:20](common/types/src/codeboltjstypes/libFunctionTypes/chat.ts#L20) |
