---
title: BaseApplicationResponse
---

[**@codebolt/types**](../index)

***

# Interface: BaseApplicationResponse\<T\>

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:10

Generic base application response - use with a type parameter for typed data

## Extended by

- [`IRegisterAgentResponse`](IRegisterAgentResponse)
- [`IFetchInboxResponse`](IFetchInboxResponse)
- [`ISendMessageResponse`](ISendMessageResponse)
- [`IReplyMessageResponse`](IReplyMessageResponse)
- [`IMarkReadResponse`](IMarkReadResponse)
- [`IAcknowledgeResponse`](IAcknowledgeResponse)
- [`ISearchResponse`](ISearchResponse)
- [`ISummarizeThreadResponse`](ISummarizeThreadResponse)
- [`IReserveFilesResponse`](IReserveFilesResponse)
- [`IReleaseFilesResponse`](IReleaseFilesResponse)
- [`IForceReserveFilesResponse`](IForceReserveFilesResponse)
- [`IListReservationsResponse`](IListReservationsResponse)
- [`ICheckConflictsResponse`](ICheckConflictsResponse)

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `unknown` | The type of the data payload |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data?` | `T` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:15](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L15) |
| <a id="error"></a> `error?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:16](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L16) |
| <a id="message"></a> `message?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:13](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L13) |
| <a id="requestid"></a> `requestId` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L12) |
| <a id="success"></a> `success?` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:14](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L14) |
| <a id="type"></a> `type` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts:11](common/types/src/codeboltjstypes/libFunctionTypes/baseappResponse.ts#L11) |
