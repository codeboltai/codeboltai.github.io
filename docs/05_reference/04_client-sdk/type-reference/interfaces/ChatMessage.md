---
title: ChatMessage
---

[**@codebolt/client-sdk**](../index)

***

# Interface: ChatMessage

Defined in: CodeBolt/packages/clientsdk/src/types/chat.ts:107

Chat message structure

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data` | \| [`UserChatDataFormat`](UserChatDataFormat) \| [`AgentChatDataFormat`](AgentChatDataFormat) \| [`CenterInfoDataFormat`](CenterInfoDataFormat) \| [`InfoWithLinkDataFormat`](InfoWithLinkDataFormat) \| [`ConfirmationChatDataFormat`](ConfirmationChatDataFormat) | [CodeBolt/packages/clientsdk/src/types/chat.ts:114](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/chat.ts#L114) |
| <a id="isnewmessage"></a> `isNewMessage?` | `boolean` | [CodeBolt/packages/clientsdk/src/types/chat.ts:111](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/chat.ts#L111) |
| <a id="messageid"></a> `messageId?` | `string` | [CodeBolt/packages/clientsdk/src/types/chat.ts:108](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/chat.ts#L108) |
| <a id="sender"></a> `sender` | [`SenderTyping`](SenderTyping) | [CodeBolt/packages/clientsdk/src/types/chat.ts:113](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/chat.ts#L113) |
| <a id="templatetype"></a> `templateType` | [`TemplateEnum`](../enumerations/TemplateEnum) | [CodeBolt/packages/clientsdk/src/types/chat.ts:112](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/chat.ts#L112) |
| <a id="threadid"></a> `threadId?` | `string` | [CodeBolt/packages/clientsdk/src/types/chat.ts:109](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/chat.ts#L109) |
| <a id="timestamp"></a> `timestamp?` | `number` | [CodeBolt/packages/clientsdk/src/types/chat.ts:110](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/chat.ts#L110) |
