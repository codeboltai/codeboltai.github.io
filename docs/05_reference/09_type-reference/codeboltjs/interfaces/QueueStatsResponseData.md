---
title: QueueStatsResponseData
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: QueueStatsResponseData

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:293

Response data for getQueueStats

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentstats"></a> `agentStats` | `Record`\<`string`, \{ `delivered`: `number`; `pending`: `number`; \}\> | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:297 |
| <a id="storage"></a> `storage?` | \{ `indexSize`: `number`; `totalEvents`: `number`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:301 |
| `storage.indexSize` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:303 |
| `storage.totalEvents` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:302 |
| <a id="totalagents"></a> `totalAgents` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:294 |
| <a id="totaldelivered"></a> `totalDelivered` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:296 |
| <a id="totalpending"></a> `totalPending` | `number` | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:295 |
