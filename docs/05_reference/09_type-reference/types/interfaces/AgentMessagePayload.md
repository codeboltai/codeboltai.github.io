---
title: AgentMessagePayload
---

[**@codebolt/types**](../index)

***

# Interface: AgentMessagePayload

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:61

Payload for inter-agent messages

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | `string` | Message content | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:64](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L64) |
| <a id="messagetype"></a> `messageType?` | `"text"` \| `"json"` \| `"command"` | Type of message content | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:66](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L66) |
| <a id="replyto"></a> `replyTo?` | `string` | Reference to a previous eventId for replies | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:68](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L68) |
| <a id="type"></a> `type` | `"agentMessage"` | - | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:62](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L62) |
