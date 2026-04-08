---
title: PersistentMemoryValidateResponse
---

[**@codebolt/types**](../index)

***

# Interface: PersistentMemoryValidateResponse

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:96

Persistent Memory Types
Type definitions for persistent memory operations

## Extends

- [`PersistentMemoryBaseResponse`](PersistentMemoryBaseResponse)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="data"></a> `data?` | \{ `validation`: \{ `errors?`: `string`[]; `valid`: `boolean`; \}; \} | [`PersistentMemoryBaseResponse`](PersistentMemoryBaseResponse).[`data`](PersistentMemoryBaseResponse.md#data) | - | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:97](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L97) |
| `data.validation` | \{ `errors?`: `string`[]; `valid`: `boolean`; \} | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:97](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L97) |
| `data.validation.errors?` | `string`[] | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:97](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L97) |
| `data.validation.valid` | `boolean` | - | - | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:97](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L97) |
| <a id="error"></a> `error?` | `string` | - | [`PersistentMemoryBaseResponse`](PersistentMemoryBaseResponse).[`error`](PersistentMemoryBaseResponse.md#error) | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:11](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L11) |
| <a id="message"></a> `message?` | `string` | - | [`PersistentMemoryBaseResponse`](PersistentMemoryBaseResponse).[`message`](PersistentMemoryBaseResponse.md#message) | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:10](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L10) |
| <a id="requestid"></a> `requestId` | `string` | - | [`PersistentMemoryBaseResponse`](PersistentMemoryBaseResponse).[`requestId`](PersistentMemoryBaseResponse.md#requestid) | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:13](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L13) |
| <a id="success"></a> `success` | `boolean` | - | [`PersistentMemoryBaseResponse`](PersistentMemoryBaseResponse).[`success`](PersistentMemoryBaseResponse.md#success) | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:8](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L8) |
| <a id="timestamp"></a> `timestamp` | `string` | - | [`PersistentMemoryBaseResponse`](PersistentMemoryBaseResponse).[`timestamp`](PersistentMemoryBaseResponse.md#timestamp) | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:12](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L12) |
| <a id="type"></a> `type` | `string` | - | [`PersistentMemoryBaseResponse`](PersistentMemoryBaseResponse).[`type`](PersistentMemoryBaseResponse.md#type) | [common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts:7](common/types/src/codeboltjstypes/libFunctionTypes/persistentMemory.ts#L7) |
