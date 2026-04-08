---
title: CodeboltError
---

[**@codebolt/types**](../index)

***

# Class: CodeboltError

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:274

## Extends

- `Error`

## Implements

- [`CodeboltErrorInterface`](../interfaces/CodeboltErrorInterface)

## Constructors

### Constructor

```ts
new CodeboltError(
   message: string, 
   code?: string, 
   details?: any): CodeboltError;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:277

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `code?` | `string` |
| `details?` | `any` |

#### Returns

`CodeboltError`

#### Overrides

```ts
Error.constructor
```

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="code"></a> `code?` | `public` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:279](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L279) |
| <a id="details"></a> `details?` | `public` | `any` | - | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:280](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L280) |
| <a id="message"></a> `message` | `public` | `string` | [`CodeboltErrorInterface`](../interfaces/CodeboltErrorInterface).[`message`](../interfaces/CodeboltErrorInterface.md#message) `Error.message` | node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077 |
| <a id="name"></a> `name` | `public` | `string` | [`CodeboltErrorInterface`](../interfaces/CodeboltErrorInterface).[`name`](../interfaces/CodeboltErrorInterface.md#name) `Error.name` | node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076 |
| <a id="stack"></a> `stack?` | `public` | `string` | [`CodeboltErrorInterface`](../interfaces/CodeboltErrorInterface).[`stack`](../interfaces/CodeboltErrorInterface.md#stack) `Error.stack` | node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078 |
| <a id="timestamp"></a> `timestamp` | `public` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:275](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L275) |
