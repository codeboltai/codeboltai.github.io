---
title: PerformanceMetrics
---

[**@codebolt/types**](../index)

***

# Interface: PerformanceMetrics

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:283

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="cpuusage"></a> `cpuUsage` | \{ `system`: `number`; `user`: `number`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:290](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L290) |
| `cpuUsage.system` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:292](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L292) |
| `cpuUsage.user` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:291](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L291) |
| <a id="eventlooplag"></a> `eventLoopLag` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:294](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L294) |
| <a id="gcstats"></a> `gcStats?` | \{ `heapSizeLimit`: `number`; `totalAvailableSize`: `number`; `totalHeapSize`: `number`; `totalHeapSizeExecutable`: `number`; `totalPhysicalSize`: `number`; `usedHeapSize`: `number`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:295](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L295) |
| `gcStats.heapSizeLimit` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:301](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L301) |
| `gcStats.totalAvailableSize` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:299](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L299) |
| `gcStats.totalHeapSize` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:296](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L296) |
| `gcStats.totalHeapSizeExecutable` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:297](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L297) |
| `gcStats.totalPhysicalSize` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:298](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L298) |
| `gcStats.usedHeapSize` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:300](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L300) |
| <a id="memoryusage"></a> `memoryUsage` | \{ `external`: `number`; `heapTotal`: `number`; `heapUsed`: `number`; `rss`: `number`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:284](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L284) |
| `memoryUsage.external` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:288](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L288) |
| `memoryUsage.heapTotal` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:286](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L286) |
| `memoryUsage.heapUsed` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:287](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L287) |
| `memoryUsage.rss` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:285](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L285) |
