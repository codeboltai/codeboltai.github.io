---
title: AddEventInput
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: AddEventInput

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:166

Input for adding an event to an agent's queue

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="eventtype"></a> `eventType?` | [`AgentEventType`](../enumerations/AgentEventType) | Type of event | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:174 |
| <a id="expiresat"></a> `expiresAt?` | `string` | Optional expiration time (ISO string) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:180 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | Additional metadata | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:182 |
| <a id="payload"></a> `payload` | [`AgentEventPayload`](../type-aliases/AgentEventPayload) | Event payload | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:178 |
| <a id="priority"></a> `priority?` | [`AgentEventPriority`](../enumerations/AgentEventPriority) | Event priority | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:176 |
| <a id="targetagentid"></a> `targetAgentId` | `string` | Target agent ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:168 |
| <a id="targetagentinstanceid"></a> `targetAgentInstanceId?` | `string` | Specific target agent instance ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:170 |
| <a id="targetthreadid"></a> `targetThreadId?` | `string` | Target thread ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:172 |
