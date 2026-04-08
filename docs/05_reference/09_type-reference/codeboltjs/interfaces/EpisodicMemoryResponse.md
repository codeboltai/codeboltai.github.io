---
title: EpisodicMemoryResponse
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: EpisodicMemoryResponse

Defined in: packages/codeboltjs/src/modules/episodicMemory.ts:115

## Extended by

- [`ICreateMemoryResponse`](ICreateMemoryResponse)
- [`IListMemoriesResponse`](IListMemoriesResponse)
- [`IGetMemoryResponse`](IGetMemoryResponse)
- [`IAppendEventResponse`](IAppendEventResponse)
- [`IQueryEventsResponse`](IQueryEventsResponse)
- [`IGetEventTypesResponse`](IGetEventTypesResponse)
- [`IGetTagsResponse`](IGetTagsResponse)
- [`IGetAgentsResponse`](IGetAgentsResponse)
- [`IArchiveMemoryResponse`](IArchiveMemoryResponse)
- [`IUnarchiveMemoryResponse`](IUnarchiveMemoryResponse)
- [`IUpdateTitleResponse`](IUpdateTitleResponse)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data?` | `any` | packages/codeboltjs/src/modules/episodicMemory.ts:118 |
| <a id="error"></a> `error?` | \{ `code`: `string`; `details?`: `any`; `message`: `string`; \} | packages/codeboltjs/src/modules/episodicMemory.ts:119 |
| `error.code` | `string` | packages/codeboltjs/src/modules/episodicMemory.ts:120 |
| `error.details?` | `any` | packages/codeboltjs/src/modules/episodicMemory.ts:122 |
| `error.message` | `string` | packages/codeboltjs/src/modules/episodicMemory.ts:121 |
| <a id="requestid"></a> `requestId?` | `string` | packages/codeboltjs/src/modules/episodicMemory.ts:117 |
| <a id="success"></a> `success` | `boolean` | packages/codeboltjs/src/modules/episodicMemory.ts:116 |
