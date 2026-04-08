---
title: QueueStatsResponseData
---

[**@codebolt/types**](../index.md)

***

# Interface: QueueStatsResponseData

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:338

Response data for getQueueStats

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentstats"></a> `agentStats` | `Record`\<`string`, \{ `delivered`: `number`; `pending`: `number`; \}\> | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:342 |
| <a id="storage"></a> `storage?` | \{ `indexSize`: `number`; `totalEvents`: `number`; \} | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:346 |
| `storage.indexSize` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:348 |
| `storage.totalEvents` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:347 |
| <a id="totalagents"></a> `totalAgents` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:339 |
| <a id="totaldelivered"></a> `totalDelivered` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:341 |
| <a id="totalpending"></a> `totalPending` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:340 |
