---
title: debug
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: debug

```ts
const debug: {
  debug: (log: string, type: logType) => Promise<DebugAddLogResponse>;
  openDebugBrowser: (url: string, port: number) => Promise<OpenDebugBrowserResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/debug.ts:13

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="debug"></a> `debug()` | (`log`: `string`, `type`: [`logType`](../enumerations/logType)) => `Promise`\<`DebugAddLogResponse`\> | Sends a log message to the debug websocket and waits for a response. | [packages/codeboltjs/src/modules/debug.ts:20](packages/codeboltjs/src/modules/debug.ts#L20) |
| <a id="opendebugbrowser"></a> `openDebugBrowser()` | (`url`: `string`, `port`: `number`) => `Promise`\<`OpenDebugBrowserResponse`\> | Requests to open a debug browser at the specified URL and port. | [packages/codeboltjs/src/modules/debug.ts:39](packages/codeboltjs/src/modules/debug.ts#L39) |
