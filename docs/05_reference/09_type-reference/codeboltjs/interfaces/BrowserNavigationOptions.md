---
title: BrowserNavigationOptions
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: BrowserNavigationOptions

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:846

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
| <a id="instanceid"></a> `instanceId?` | `string` | Browser instance ID (optional - uses active instance if not provided) | [`BrowserOperationOptions`](BrowserOperationOptions).[`instanceId`](BrowserOperationOptions.md#instanceid) | packages/codeboltjs/src/types/libFunctionTypes.ts:841 |
| <a id="timeout"></a> `timeout?` | `number` | Timeout in milliseconds | - | packages/codeboltjs/src/types/libFunctionTypes.ts:852 |
| <a id="url"></a> `url` | `string` | URL to navigate to | - | packages/codeboltjs/src/types/libFunctionTypes.ts:848 |
| <a id="waitforload"></a> `waitForLoad?` | `boolean` | Wait for page load (default: true) | - | packages/codeboltjs/src/types/libFunctionTypes.ts:850 |
