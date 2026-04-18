---
title: InternalEventMap
---

[**@codebolt/types**](../index.md)

***

# Interface: InternalEventMap

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:238

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="cacheevicted"></a> `cache:evicted` | (`key`: `string`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:248 |
| <a id="cachehit"></a> `cache:hit` | (`key`: `string`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:246 |
| <a id="cachemiss"></a> `cache:miss` | (`key`: `string`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:247 |
| <a id="moduleerror"></a> `module:error` | (`moduleName`: `string`, `error`: `Error`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:245 |
| <a id="moduleloaded"></a> `module:loaded` | (`moduleName`: `string`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:244 |
| <a id="requestcompleted"></a> `request:completed` | (`requestId`: `string`, `duration`: `number`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:251 |
| <a id="requestfailed"></a> `request:failed` | (`requestId`: `string`, `error`: `Error`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:252 |
| <a id="requeststarted"></a> `request:started` | (`requestId`: `string`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:250 |
| <a id="statechanged"></a> `state:changed` | (`event`: [`StateChangeEvent`](StateChangeEvent)) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:249 |
| <a id="websocketconnected"></a> `websocket:connected` | () => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:239 |
| <a id="websocketdisconnected"></a> `websocket:disconnected` | () => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:240 |
| <a id="websocketerror"></a> `websocket:error` | (`error`: `Error`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:241 |
| <a id="websocketmessage"></a> `websocket:message` | (`message`: `any`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:242 |
| <a id="websocketreconnecting"></a> `websocket:reconnecting` | (`attempt`: `number`) => `void` | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:243 |
