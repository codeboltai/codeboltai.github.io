---
title: BrowserElementSelector
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: BrowserElementSelector

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:864

## Extends

- [`BrowserOperationOptions`](BrowserOperationOptions)

## Indexable

```ts
[key: string]: any
```

Additional operation-specific options

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="instanceid"></a> `instanceId?` | `string` | Browser instance ID (optional - uses active instance if not provided) | [`BrowserOperationOptions`](BrowserOperationOptions).[`instanceId`](BrowserOperationOptions.md#instanceid) | [packages/codeboltjs/src/types/libFunctionTypes.ts:841](packages/codeboltjs/src/types/libFunctionTypes.ts#L841) |
| <a id="selector"></a> `selector` | `string` | CSS selector | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:866](packages/codeboltjs/src/types/libFunctionTypes.ts#L866) |
| <a id="timeout"></a> `timeout?` | `number` | Timeout for waiting | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:870](packages/codeboltjs/src/types/libFunctionTypes.ts#L870) |
| <a id="waitfor"></a> `waitFor?` | `boolean` | Whether to wait for element | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:868](packages/codeboltjs/src/types/libFunctionTypes.ts#L868) |
