---
title: QueueStatsResponseData
---

[**@codebolt/types**](../index)

***

# Interface: QueueStatsResponseData

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:338

Response data for getQueueStats

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentstats"></a> `agentStats` | `Record`\<`string`, \{ `delivered`: `number`; `pending`: `number`; \}\> | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:342](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L342) |
| <a id="storage"></a> `storage?` | \{ `indexSize`: `number`; `totalEvents`: `number`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:346](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L346) |
| `storage.indexSize` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:348](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L348) |
| `storage.totalEvents` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:347](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L347) |
| <a id="totalagents"></a> `totalAgents` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:339](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L339) |
| <a id="totaldelivered"></a> `totalDelivered` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:341](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L341) |
| <a id="totalpending"></a> `totalPending` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:340](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L340) |
