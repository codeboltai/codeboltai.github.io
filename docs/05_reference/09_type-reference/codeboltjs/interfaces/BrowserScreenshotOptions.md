---
title: BrowserScreenshotOptions
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: BrowserScreenshotOptions

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:855

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
| <a id="format"></a> `format?` | `"png"` \| `"jpeg"` | Image format | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:861](packages/codeboltjs/src/types/libFunctionTypes.ts#L861) |
| <a id="fullpage"></a> `fullPage?` | `boolean` | Take full page screenshot | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:857](packages/codeboltjs/src/types/libFunctionTypes.ts#L857) |
| <a id="instanceid"></a> `instanceId?` | `string` | Browser instance ID (optional - uses active instance if not provided) | [`BrowserOperationOptions`](BrowserOperationOptions).[`instanceId`](BrowserOperationOptions.md#instanceid) | [packages/codeboltjs/src/types/libFunctionTypes.ts:841](packages/codeboltjs/src/types/libFunctionTypes.ts#L841) |
| <a id="quality"></a> `quality?` | `number` | Image quality (0-100) | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:859](packages/codeboltjs/src/types/libFunctionTypes.ts#L859) |
