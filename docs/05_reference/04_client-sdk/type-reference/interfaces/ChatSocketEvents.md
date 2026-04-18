---
title: ChatSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: ChatSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:2

Chat socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="chatmessage"></a> `chat:message` | (`message`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:3](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L3) |
| <a id="chatmessage-updated"></a> `chat:message-updated` | (`message`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:5](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L5) |
| <a id="chatthread-created"></a> `chat:thread-created` | (`data`: \{ `threadId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:6](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L6) |
| <a id="chattyping"></a> `chat:typing` | (`data`: \{ `isTyping`: `boolean`; `sender`: `string`; `threadId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:4](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L4) |
