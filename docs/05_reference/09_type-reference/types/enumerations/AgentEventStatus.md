---
title: AgentEventStatus
---

[**@codebolt/types**](../index.md)

***

# Enumeration: AgentEventStatus

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:29

Status of an event in the queue

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="acknowledged"></a> `ACKNOWLEDGED` | `"acked"` | Acknowledgement received, can be archived | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:35 |
| <a id="delivered"></a> `DELIVERED` | `"delivered"` | Sent via WebSocket, awaiting acknowledgement | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:33 |
| <a id="expired"></a> `EXPIRED` | `"expired"` | Event expired before delivery | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:41 |
| <a id="failed"></a> `FAILED` | `"failed"` | Delivery failed | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:39 |
| <a id="pending"></a> `PENDING` | `"pending"` | In queue, awaiting delivery | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:31 |
| <a id="pulled"></a> `PULLED` | `"pulled"` | Retrieved via pull mode (auto-removed) | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:37 |
