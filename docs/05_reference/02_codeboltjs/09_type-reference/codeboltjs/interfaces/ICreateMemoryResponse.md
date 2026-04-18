---
title: ICreateMemoryResponse
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: ICreateMemoryResponse

Defined in: packages/codeboltjs/src/modules/episodicMemory.ts:126

## Extends

- [`EpisodicMemoryResponse`](EpisodicMemoryResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | [`EpisodicMemory`](EpisodicMemory) | [`EpisodicMemoryResponse`](EpisodicMemoryResponse).[`data`](EpisodicMemoryResponse.md#data) | - | packages/codeboltjs/src/modules/episodicMemory.ts:127 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | - | [`EpisodicMemoryResponse`](EpisodicMemoryResponse).[`error`](EpisodicMemoryResponse.md#error) | packages/codeboltjs/src/modules/episodicMemory.ts:119 |
| `error.code` | `string` | - | - | packages/codeboltjs/src/modules/episodicMemory.ts:120 |
| `error.details?` | `any` | - | - | packages/codeboltjs/src/modules/episodicMemory.ts:122 |
| `error.message` | `string` | - | - | packages/codeboltjs/src/modules/episodicMemory.ts:121 |
| <a id="requestid"></a> `requestId?` | `string` | - | [`EpisodicMemoryResponse`](EpisodicMemoryResponse).[`requestId`](EpisodicMemoryResponse.md#requestid) | packages/codeboltjs/src/modules/episodicMemory.ts:117 |
| <a id="success"></a> `success` | `boolean` | - | [`EpisodicMemoryResponse`](EpisodicMemoryResponse).[`success`](EpisodicMemoryResponse.md#success) | packages/codeboltjs/src/modules/episodicMemory.ts:116 |
