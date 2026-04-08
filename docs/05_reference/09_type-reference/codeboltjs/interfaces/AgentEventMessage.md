---
title: AgentEventMessage
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: AgentEventMessage

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:129

Core event message structure

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="acknowledgedat"></a> `acknowledgedAt?` | `string` | When acknowledgement was received | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:153 |
| <a id="createdat"></a> `createdAt` | `string` | Event creation timestamp (ISO string) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:149 |
| <a id="deliveredat"></a> `deliveredAt?` | `string` | When the event was delivered via WebSocket | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:151 |
| <a id="eventid"></a> `eventId` | `string` | Unique event identifier (UUID) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:131 |
| <a id="eventtype"></a> `eventType` | [`AgentEventType`](../enumerations/AgentEventType) | Type of event | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:143 |
| <a id="expiresat"></a> `expiresAt?` | `string` | Optional expiration time (ISO string) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:155 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | Additional metadata | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:161 |
| <a id="payload"></a> `payload` | [`AgentEventPayload`](../type-aliases/AgentEventPayload) | Event payload (discriminated by type) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:147 |
| <a id="priority"></a> `priority` | [`AgentEventPriority`](../enumerations/AgentEventPriority) | Event priority | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:145 |
| <a id="retrycount"></a> `retryCount` | `number` | Number of delivery retry attempts | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:159 |
| <a id="sourceagentid"></a> `sourceAgentId?` | `string` | Source agent ID (for inter-agent messages) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:139 |
| <a id="sourcethreadid"></a> `sourceThreadId?` | `string` | Source thread ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:141 |
| <a id="status"></a> `status` | [`AgentEventStatus`](../enumerations/AgentEventStatus) | Current status of the event | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:157 |
| <a id="targetagentid"></a> `targetAgentId` | `string` | Target agent ID | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:133 |
| <a id="targetagentinstanceid"></a> `targetAgentInstanceId?` | `string` | Specific target agent instance ID (optional) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:135 |
| <a id="targetthreadid"></a> `targetThreadId?` | `string` | Target thread ID (optional) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:137 |
