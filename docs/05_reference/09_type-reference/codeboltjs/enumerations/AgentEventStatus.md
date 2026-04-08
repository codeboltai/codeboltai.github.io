---
title: AgentEventStatus
---

[**@codebolt/codeboltjs**](../index)

***

# Enumeration: AgentEventStatus

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:23

Status of an event in the queue

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="acknowledged"></a> `ACKNOWLEDGED` | `"acked"` | Acknowledgement received, can be archived | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:29 |
| <a id="delivered"></a> `DELIVERED` | `"delivered"` | Sent via WebSocket, awaiting acknowledgement | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:27 |
| <a id="expired"></a> `EXPIRED` | `"expired"` | Event expired before delivery | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:35 |
| <a id="failed"></a> `FAILED` | `"failed"` | Delivery failed | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:33 |
| <a id="pending"></a> `PENDING` | `"pending"` | In queue, awaiting delivery | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:25 |
| <a id="pulled"></a> `PULLED` | `"pulled"` | Retrieved via pull mode (auto-removed) | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:31 |
