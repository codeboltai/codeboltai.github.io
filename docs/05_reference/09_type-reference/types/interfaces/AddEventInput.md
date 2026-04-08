---
title: AddEventInput
---

[**@codebolt/types**](../index)

***

# Interface: AddEventInput

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:198

Input for adding an event to an agent's queue

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="eventtype"></a> `eventType?` | [`AgentEventType`](../enumerations/AgentEventType) | Type of event | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:206](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L206) |
| <a id="expiresat"></a> `expiresAt?` | `string` | Optional expiration time (ISO string) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:212](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L212) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | Additional metadata | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:214](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L214) |
| <a id="payload"></a> `payload` | [`AgentEventPayload`](../type-aliases/AgentEventPayload) | Event payload | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:210](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L210) |
| <a id="priority"></a> `priority?` | [`AgentEventPriority`](../enumerations/AgentEventPriority) | Event priority | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:208](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L208) |
| <a id="targetagentid"></a> `targetAgentId` | `string` | Target agent ID | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:200](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L200) |
| <a id="targetagentinstanceid"></a> `targetAgentInstanceId?` | `string` | Specific target agent instance ID | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:202](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L202) |
| <a id="targetthreadid"></a> `targetThreadId?` | `string` | Target thread ID | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:204](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L204) |
