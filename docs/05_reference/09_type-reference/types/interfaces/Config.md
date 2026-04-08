---
title: Config
---

[**@codebolt/types**](../index)

***

# Interface: Config

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:250

## Indexable

```ts
[key: string]: any
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="logging"></a> `logging?` | \{ `enabled?`: `boolean`; `level?`: `"error"` \| `"info"` \| `"debug"` \| `"warn"`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:257](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L257) |
| `logging.enabled?` | `boolean` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:259](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L259) |
| `logging.level?` | `"error"` \| `"info"` \| `"debug"` \| `"warn"` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:258](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L258) |
| <a id="websocket"></a> `websocket?` | \{ `maxReconnectAttempts?`: `number`; `reconnectInterval?`: `number`; `timeout?`: `number`; `url?`: `string`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:251](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L251) |
| `websocket.maxReconnectAttempts?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:255](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L255) |
| `websocket.reconnectInterval?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:254](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L254) |
| `websocket.timeout?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:253](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L253) |
| `websocket.url?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/common.ts:252](common/types/src/codeboltjstypes/libFunctionTypes/common.ts#L252) |
