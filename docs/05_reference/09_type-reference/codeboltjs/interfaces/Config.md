---
title: Config
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: Config

Defined in: packages/codeboltjs/src/types/commonTypes.ts:311

## Indexable

```ts
[key: string]: any
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="logging"></a> `logging?` | \{ `enabled?`: `boolean`; `level?`: `"info"` \| `"error"` \| `"debug"` \| `"warn"`; \} | packages/codeboltjs/src/types/commonTypes.ts:318 |
| `logging.enabled?` | `boolean` | packages/codeboltjs/src/types/commonTypes.ts:320 |
| `logging.level?` | `"info"` \| `"error"` \| `"debug"` \| `"warn"` | packages/codeboltjs/src/types/commonTypes.ts:319 |
| <a id="websocket"></a> `websocket?` | \{ `maxReconnectAttempts?`: `number`; `reconnectInterval?`: `number`; `timeout?`: `number`; `url?`: `string`; \} | packages/codeboltjs/src/types/commonTypes.ts:312 |
| `websocket.maxReconnectAttempts?` | `number` | packages/codeboltjs/src/types/commonTypes.ts:316 |
| `websocket.reconnectInterval?` | `number` | packages/codeboltjs/src/types/commonTypes.ts:315 |
| `websocket.timeout?` | `number` | packages/codeboltjs/src/types/commonTypes.ts:314 |
| `websocket.url?` | `string` | packages/codeboltjs/src/types/commonTypes.ts:313 |
