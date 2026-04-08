---
title: GetPendingEventsInput
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: GetPendingEventsInput

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:187

Input for getting pending events

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | Agent ID to get events for | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:189 |
| <a id="agentinstanceid"></a> `agentInstanceId?` | `string` | Agent instance ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:191 |
| <a id="eventtypes"></a> `eventTypes?` | [`AgentEventType`](../enumerations/AgentEventType)[] | Filter by event types | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:197 |
| <a id="limit"></a> `limit?` | `number` | Maximum number of events to return | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:195 |
| <a id="minpriority"></a> `minPriority?` | [`AgentEventPriority`](../enumerations/AgentEventPriority) | Filter by priority | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:199 |
| <a id="threadid"></a> `threadId?` | `string` | Thread ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:193 |
