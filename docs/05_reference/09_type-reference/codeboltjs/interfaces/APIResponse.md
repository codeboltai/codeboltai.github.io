---
title: APIResponse
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: APIResponse\<T\>

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:1716

Standard API response wrapper

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="code"></a> `code?` | `string` | Error code if unsuccessful | [packages/codeboltjs/src/types/libFunctionTypes.ts:1724](packages/codeboltjs/src/types/libFunctionTypes.ts#L1724) |
| <a id="data"></a> `data?` | `T` | Response data | [packages/codeboltjs/src/types/libFunctionTypes.ts:1720](packages/codeboltjs/src/types/libFunctionTypes.ts#L1720) |
| <a id="error"></a> `error?` | `string` | Error message if unsuccessful | [packages/codeboltjs/src/types/libFunctionTypes.ts:1722](packages/codeboltjs/src/types/libFunctionTypes.ts#L1722) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | Additional metadata | [packages/codeboltjs/src/types/libFunctionTypes.ts:1726](packages/codeboltjs/src/types/libFunctionTypes.ts#L1726) |
| <a id="success"></a> `success` | `boolean` | Whether the operation was successful | [packages/codeboltjs/src/types/libFunctionTypes.ts:1718](packages/codeboltjs/src/types/libFunctionTypes.ts#L1718) |
