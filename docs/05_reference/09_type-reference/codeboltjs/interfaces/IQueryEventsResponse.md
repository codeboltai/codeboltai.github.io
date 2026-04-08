---
title: IQueryEventsResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: IQueryEventsResponse

Defined in: packages/codeboltjs/src/modules/episodicMemory.ts:142

## Extends

- [`EpisodicMemoryResponse`](EpisodicMemoryResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `events`: [`EpisodicEvent`](EpisodicEvent)[]; `filtered`: `boolean`; `total`: `number`; \} | [`EpisodicMemoryResponse`](EpisodicMemoryResponse).[`data`](EpisodicMemoryResponse.md#data) | - | [packages/codeboltjs/src/modules/episodicMemory.ts:143](packages/codeboltjs/src/modules/episodicMemory.ts#L143) |
| `data.events` | [`EpisodicEvent`](EpisodicEvent)[] | - | - | [packages/codeboltjs/src/modules/episodicMemory.ts:144](packages/codeboltjs/src/modules/episodicMemory.ts#L144) |
| `data.filtered` | `boolean` | - | - | [packages/codeboltjs/src/modules/episodicMemory.ts:146](packages/codeboltjs/src/modules/episodicMemory.ts#L146) |
| `data.total` | `number` | - | - | [packages/codeboltjs/src/modules/episodicMemory.ts:145](packages/codeboltjs/src/modules/episodicMemory.ts#L145) |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | - | [`EpisodicMemoryResponse`](EpisodicMemoryResponse).[`error`](EpisodicMemoryResponse.md#error) | [packages/codeboltjs/src/modules/episodicMemory.ts:119](packages/codeboltjs/src/modules/episodicMemory.ts#L119) |
| `error.code` | `string` | - | - | [packages/codeboltjs/src/modules/episodicMemory.ts:120](packages/codeboltjs/src/modules/episodicMemory.ts#L120) |
| `error.details?` | `any` | - | - | [packages/codeboltjs/src/modules/episodicMemory.ts:122](packages/codeboltjs/src/modules/episodicMemory.ts#L122) |
| `error.message` | `string` | - | - | [packages/codeboltjs/src/modules/episodicMemory.ts:121](packages/codeboltjs/src/modules/episodicMemory.ts#L121) |
| <a id="requestid"></a> `requestId?` | `string` | - | [`EpisodicMemoryResponse`](EpisodicMemoryResponse).[`requestId`](EpisodicMemoryResponse.md#requestid) | [packages/codeboltjs/src/modules/episodicMemory.ts:117](packages/codeboltjs/src/modules/episodicMemory.ts#L117) |
| <a id="success"></a> `success` | `boolean` | - | [`EpisodicMemoryResponse`](EpisodicMemoryResponse).[`success`](EpisodicMemoryResponse.md#success) | [packages/codeboltjs/src/modules/episodicMemory.ts:116](packages/codeboltjs/src/modules/episodicMemory.ts#L116) |
