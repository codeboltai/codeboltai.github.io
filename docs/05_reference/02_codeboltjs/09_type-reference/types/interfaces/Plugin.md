---
title: Plugin
---

[**@codebolt/types**](../index.md)

***

# Interface: Plugin

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:499

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="config"></a> `config?` | `Record`\<`string`, `any`\> | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:505 |
| <a id="dependencies"></a> `dependencies?` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:504 |
| <a id="name"></a> `name` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:500 |
| <a id="version"></a> `version` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:501 |

## Methods

### destroy()

```ts
destroy(): Promise<void>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:503

#### Returns

`Promise`\<`void`\>

***

### initialize()

```ts
initialize(context: PluginContext): Promise<void>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:502

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`PluginContext`](PluginContext) |

#### Returns

`Promise`\<`void`\>
