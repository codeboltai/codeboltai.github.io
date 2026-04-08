---
title: PerformanceMetrics
---

[**@codebolt/types**](../index.md)

***

# Interface: PerformanceMetrics

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:283

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="cpuusage"></a> `cpuUsage` | \{ `system`: `number`; `user`: `number`; \} | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:290 |
| `cpuUsage.system` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:292 |
| `cpuUsage.user` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:291 |
| <a id="eventlooplag"></a> `eventLoopLag` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:294 |
| <a id="gcstats"></a> `gcStats?` | \{ `heapSizeLimit`: `number`; `totalAvailableSize`: `number`; `totalHeapSize`: `number`; `totalHeapSizeExecutable`: `number`; `totalPhysicalSize`: `number`; `usedHeapSize`: `number`; \} | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:295 |
| `gcStats.heapSizeLimit` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:301 |
| `gcStats.totalAvailableSize` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:299 |
| `gcStats.totalHeapSize` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:296 |
| `gcStats.totalHeapSizeExecutable` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:297 |
| `gcStats.totalPhysicalSize` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:298 |
| `gcStats.usedHeapSize` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:300 |
| <a id="memoryusage"></a> `memoryUsage` | \{ `external`: `number`; `heapTotal`: `number`; `heapUsed`: `number`; `rss`: `number`; \} | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:284 |
| `memoryUsage.external` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:288 |
| `memoryUsage.heapTotal` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:286 |
| `memoryUsage.heapUsed` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:287 |
| `memoryUsage.rss` | `number` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:285 |
