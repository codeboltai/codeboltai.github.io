---
title: PullEventsInput
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: PullEventsInput

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:204

Input for pulling events (get and remove)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | Agent ID to pull events for | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:206 |
| <a id="agentinstanceid"></a> `agentInstanceId?` | `string` | Agent instance ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:208 |
| <a id="eventtypes"></a> `eventTypes?` | [`AgentEventType`](../enumerations/AgentEventType)[] | Filter by event types | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:214 |
| <a id="limit"></a> `limit?` | `number` \| `"all"` | Number of events to pull, or 'all' | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:212 |
| <a id="since"></a> `since?` | `string` | Only pull events since this timestamp | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:216 |
| <a id="threadid"></a> `threadId?` | `string` | Thread ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:210 |
