---
title: SendAgentMessageInput
---

[**@codebolt/types**](../index.md)

***

# Interface: SendAgentMessageInput

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:268

Input for sending an inter-agent message

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | `string` | Message content | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:274 |
| <a id="messagetype"></a> `messageType?` | `"text"` \| `"json"` \| `"command"` | Message type | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:276 |
| <a id="priority"></a> `priority?` | [`AgentEventPriority`](../enumerations/AgentEventPriority) | Event priority | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:278 |
| <a id="replyto"></a> `replyTo?` | `string` | Reference to a previous eventId for replies | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:280 |
| <a id="targetagentid"></a> `targetAgentId` | `string` | Target agent ID | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:270 |
| <a id="targetthreadid"></a> `targetThreadId?` | `string` | Target thread ID | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:272 |
