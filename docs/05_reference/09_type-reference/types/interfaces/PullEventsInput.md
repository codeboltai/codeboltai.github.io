---
title: PullEventsInput
---

[**@codebolt/types**](../index)

***

# Interface: PullEventsInput

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:238

Input for pulling events (get and remove)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | Agent ID to pull events for | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:240](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L240) |
| <a id="agentinstanceid"></a> `agentInstanceId?` | `string` | Agent instance ID | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:242](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L242) |
| <a id="eventtypes"></a> `eventTypes?` | [`AgentEventType`](../enumerations/AgentEventType)[] | Filter by event types | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:248](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L248) |
| <a id="limit"></a> `limit?` | `number` \| `"all"` | Number of events to pull, or 'all' | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:246](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L246) |
| <a id="since"></a> `since?` | `string` | Only pull events since this timestamp | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:250](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L250) |
| <a id="threadid"></a> `threadId?` | `string` | Thread ID | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:244](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L244) |
