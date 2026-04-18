---
title: APIEventMap
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: APIEventMap

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:1779

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="connected"></a> `connected` | () => `void` | packages/codeboltjs/src/types/libFunctionTypes.ts:1780 |
| <a id="disconnected"></a> `disconnected` | () => `void` | packages/codeboltjs/src/types/libFunctionTypes.ts:1781 |
| <a id="error"></a> `error` | (`error`: `Error`) => `void` | packages/codeboltjs/src/types/libFunctionTypes.ts:1782 |
| <a id="message"></a> `message` | (`message`: `Record`\<`string`, `unknown`\>) => `void` | packages/codeboltjs/src/types/libFunctionTypes.ts:1783 |
| <a id="progress"></a> `progress` | (`progress`: `number`) => `void` | packages/codeboltjs/src/types/libFunctionTypes.ts:1784 |
