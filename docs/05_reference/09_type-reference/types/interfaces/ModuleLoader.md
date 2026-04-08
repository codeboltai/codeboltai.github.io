---
title: ModuleLoader
---

[**@codebolt/types**](../index)

***

# Interface: ModuleLoader

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:353

## Methods

### getLoadedModules()

```ts
getLoadedModules(): string[];
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:358

#### Returns

`string`[]

***

### isLoaded()

```ts
isLoaded(name: string): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:357

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`

***

### load()

```ts
load(name: string): Promise<any>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:354

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`any`\>

***

### reload()

```ts
reload(name: string): Promise<any>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:356

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`any`\>

***

### unload()

```ts
unload(name: string): Promise<void>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:355

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>
