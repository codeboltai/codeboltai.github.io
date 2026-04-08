---
title: PluginContext
---

[**@codebolt/types**](../index)

***

# Interface: PluginContext

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:508

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="config"></a> `config` | [`ConfigurationManager`](ConfigurationManager) | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:510](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L510) |
| <a id="logger"></a> `logger` | [`InternalLogger`](InternalLogger) | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:509](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L509) |
| <a id="state"></a> `state` | [`InternalState`](InternalState) | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:511](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L511) |

## Methods

### registerHandler()

```ts
registerHandler(type: string, handler: Function): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:512

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `handler` | `Function` |

#### Returns

`void`

***

### unregisterHandler()

```ts
unregisterHandler(type: string, handler: Function): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:513

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `handler` | `Function` |

#### Returns

`void`
