---
title: AgentEventMessage
---

[**@codebolt/types**](../index)

***

# Interface: AgentEventMessage

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:156

Core event message structure

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="acknowledgedat"></a> `acknowledgedAt?` | `string` | When acknowledgement was received | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:180](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L180) |
| <a id="createdat"></a> `createdAt` | `string` | Event creation timestamp (ISO string) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:176](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L176) |
| <a id="deliveredat"></a> `deliveredAt?` | `string` | When the event was delivered via WebSocket | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:178](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L178) |
| <a id="eventid"></a> `eventId` | `string` | Unique event identifier (UUID) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:158](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L158) |
| <a id="eventtype"></a> `eventType` | [`AgentEventType`](../enumerations/AgentEventType) | Type of event | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:170](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L170) |
| <a id="expiresat"></a> `expiresAt?` | `string` | Optional expiration time (ISO string) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:182](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L182) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | Additional metadata | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:188](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L188) |
| <a id="payload"></a> `payload` | [`AgentEventPayload`](../type-aliases/AgentEventPayload) | Event payload (discriminated by type) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:174](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L174) |
| <a id="priority"></a> `priority` | [`AgentEventPriority`](../enumerations/AgentEventPriority) | Event priority | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:172](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L172) |
| <a id="retrycount"></a> `retryCount` | `number` | Number of delivery retry attempts | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:186](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L186) |
| <a id="sourceagentid"></a> `sourceAgentId?` | `string` | Source agent ID (for inter-agent messages) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:166](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L166) |
| <a id="sourcethreadid"></a> `sourceThreadId?` | `string` | Source thread ID | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:168](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L168) |
| <a id="status"></a> `status` | [`AgentEventStatus`](../enumerations/AgentEventStatus) | Current status of the event | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:184](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L184) |
| <a id="targetagentid"></a> `targetAgentId` | `string` | Target agent ID | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:160](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L160) |
| <a id="targetagentinstanceid"></a> `targetAgentInstanceId?` | `string` | Specific target agent instance ID (optional) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:162](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L162) |
| <a id="targetthreadid"></a> `targetThreadId?` | `string` | Target thread ID (optional) | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:164](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L164) |
