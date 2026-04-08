---
title: PluginManager
---

[**@codebolt/types**](../index)

***

# Interface: PluginManager

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:516

## Methods

### disable()

```ts
disable(name: string): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:522

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

***

### enable()

```ts
enable(name: string): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:521

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

***

### getLoaded()

```ts
getLoaded(): Plugin[];
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:520

#### Returns

[`Plugin`](Plugin)[]

***

### isLoaded()

```ts
isLoaded(name: string): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:519

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`

***

### load()

```ts
load(plugin: Plugin): Promise<void>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:517

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `plugin` | [`Plugin`](Plugin) |

#### Returns

`Promise`\<`void`\>

***

### unload()

```ts
unload(name: string): Promise<void>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:518

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>
