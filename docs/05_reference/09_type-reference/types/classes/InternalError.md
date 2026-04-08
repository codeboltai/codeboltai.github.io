---
title: InternalError
---

[**@codebolt/types**](../index.md)

***

# Class: InternalError

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:216

## Extends

- `Error`

## Implements

- [`InternalErrorInterface`](../interfaces/InternalErrorInterface)

## Constructors

### Constructor

```ts
new InternalError(
   message: string, 
   code: string, 
   module: string, 
   severity: "low" | "high" | "medium" | "critical", 
   context?: Record<string, any>): InternalError;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:220

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `undefined` |
| `code` | `string` | `undefined` |
| `module` | `string` | `undefined` |
| `severity` | `"low"` \| `"high"` \| `"medium"` \| `"critical"` | `'medium'` |
| `context?` | `Record`\<`string`, `any`\> | `undefined` |

#### Returns

`InternalError`

#### Overrides

```ts
Error.constructor
```

## Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="code"></a> `code` | `public` | `string` | `undefined` | - | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:222 |
| <a id="context"></a> `context?` | `public` | `Record`\<`string`, `any`\> | `undefined` | - | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:225 |
| <a id="message"></a> `message` | `public` | `string` | `undefined` | [`InternalErrorInterface`](../interfaces/InternalErrorInterface).[`message`](../interfaces/InternalErrorInterface.md#message) `Error.message` | node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077 |
| <a id="module"></a> `module` | `public` | `string` | `undefined` | - | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:223 |
| <a id="name"></a> `name` | `public` | `string` | `undefined` | [`InternalErrorInterface`](../interfaces/InternalErrorInterface).[`name`](../interfaces/InternalErrorInterface.md#name) `Error.name` | node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076 |
| <a id="severity"></a> `severity` | `public` | `"low"` \| `"high"` \| `"medium"` \| `"critical"` | `'medium'` | - | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:224 |
| <a id="stack"></a> `stack?` | `public` | `string` | `undefined` | [`InternalErrorInterface`](../interfaces/InternalErrorInterface).[`stack`](../interfaces/InternalErrorInterface.md#stack) `Error.stack` | node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078 |
| <a id="stacktrace"></a> `stackTrace?` | `public` | `string` | `undefined` | - | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:218 |
| <a id="timestamp"></a> `timestamp` | `public` | `number` | `undefined` | - | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:217 |
