---
title: AgentMessagePayload
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: AgentMessagePayload

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:49

Payload for inter-agent messages

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | `string` | Message content | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:52 |
| <a id="messagetype"></a> `messageType?` | `"text"` \| `"json"` \| `"command"` | Type of message content | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:54 |
| <a id="replyto"></a> `replyTo?` | `string` | Reference to a previous eventId for replies | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:56 |
| <a id="type"></a> `type` | `"agentMessage"` | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:50 |
