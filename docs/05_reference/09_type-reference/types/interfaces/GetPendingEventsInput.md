---
title: GetPendingEventsInput
---

[**@codebolt/types**](../index)

***

# Interface: GetPendingEventsInput

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:220

Input for getting pending events

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | Agent ID to get events for | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:222](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L222) |
| <a id="agentinstanceid"></a> `agentInstanceId?` | `string` | Agent instance ID | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:224](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L224) |
| <a id="eventtypes"></a> `eventTypes?` | [`AgentEventType`](../enumerations/AgentEventType)[] | Filter by event types | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:230](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L230) |
| <a id="limit"></a> `limit?` | `number` | Maximum number of events to return | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:228](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L228) |
| <a id="minpriority"></a> `minPriority?` | [`AgentEventPriority`](../enumerations/AgentEventPriority) | Filter by priority | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:232](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L232) |
| <a id="threadid"></a> `threadId?` | `string` | Thread ID | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:226](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L226) |
