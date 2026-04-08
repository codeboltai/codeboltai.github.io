---
title: CodeboltConfig
---

[**@codebolt/codeboltjs**](../index.md)

***

# Interface: CodeboltConfig

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:1791

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="features"></a> `features?` | \{ `autoRetry?`: `boolean`; `caching?`: `boolean`; `compression?`: `boolean`; \} | Feature flags | packages/codeboltjs/src/types/libFunctionTypes.ts:1815 |
| `features.autoRetry?` | `boolean` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1816 |
| `features.caching?` | `boolean` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1817 |
| `features.compression?` | `boolean` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1818 |
| <a id="logging"></a> `logging?` | \{ `enabled?`: `boolean`; `format?`: `"text"` \| `"json"`; `level?`: `"info"` \| `"error"` \| `"debug"` \| `"warn"`; \} | Logging configuration | packages/codeboltjs/src/types/libFunctionTypes.ts:1801 |
| `logging.enabled?` | `boolean` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1803 |
| `logging.format?` | `"text"` \| `"json"` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1804 |
| `logging.level?` | `"info"` \| `"error"` \| `"debug"` \| `"warn"` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1802 |
| <a id="timeouts"></a> `timeouts?` | \{ `browser?`: `number`; `default?`: `number`; `fileSystem?`: `number`; `llm?`: `number`; `terminal?`: `number`; \} | Default timeouts for operations | packages/codeboltjs/src/types/libFunctionTypes.ts:1807 |
| `timeouts.browser?` | `number` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1810 |
| `timeouts.default?` | `number` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1808 |
| `timeouts.fileSystem?` | `number` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1812 |
| `timeouts.llm?` | `number` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1809 |
| `timeouts.terminal?` | `number` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1811 |
| <a id="websocket"></a> `websocket?` | \{ `autoReconnect?`: `boolean`; `maxReconnectAttempts?`: `number`; `reconnectInterval?`: `number`; `timeout?`: `number`; `url?`: `string`; \} | WebSocket configuration | packages/codeboltjs/src/types/libFunctionTypes.ts:1793 |
| `websocket.autoReconnect?` | `boolean` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1798 |
| `websocket.maxReconnectAttempts?` | `number` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1797 |
| `websocket.reconnectInterval?` | `number` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1796 |
| `websocket.timeout?` | `number` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1795 |
| `websocket.url?` | `string` | - | packages/codeboltjs/src/types/libFunctionTypes.ts:1794 |
