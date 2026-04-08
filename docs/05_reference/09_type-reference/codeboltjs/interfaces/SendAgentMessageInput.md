---
title: SendAgentMessageInput
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: SendAgentMessageInput

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:232

Input for sending an inter-agent message

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | `string` | Message content | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:238 |
| <a id="messagetype"></a> `messageType?` | `"text"` \| `"json"` \| `"command"` | Message type | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:240 |
| <a id="priority"></a> `priority?` | [`AgentEventPriority`](../enumerations/AgentEventPriority) | Event priority | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:242 |
| <a id="replyto"></a> `replyTo?` | `string` | Reference to a previous eventId for replies | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:244 |
| <a id="targetagentid"></a> `targetAgentId` | `string` | Target agent ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:234 |
| <a id="targetthreadid"></a> `targetThreadId?` | `string` | Target thread ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:236 |
