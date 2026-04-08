---
title: InternalLogger
---

[**@codebolt/types**](../index)

***

# Interface: InternalLogger

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:317

## Methods

### debug()

```ts
debug(message: string, meta?: Record<string, any>): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:318

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |

#### Returns

`void`

***

### error()

```ts
error(
   message: string, 
   error?: Error, 
   meta?: Record<string, any>): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:321

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `error?` | `Error` |
| `meta?` | `Record`\<`string`, `any`\> |

#### Returns

`void`

***

### getLevel()

```ts
getLevel(): string;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:323

#### Returns

`string`

***

### info()

```ts
info(message: string, meta?: Record<string, any>): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:319

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |

#### Returns

`void`

***

### setLevel()

```ts
setLevel(level: "error" | "info" | "debug" | "warn"): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:322

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `level` | `"error"` \| `"info"` \| `"debug"` \| `"warn"` |

#### Returns

`void`

***

### warn()

```ts
warn(message: string, meta?: Record<string, any>): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:320

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |

#### Returns

`void`
