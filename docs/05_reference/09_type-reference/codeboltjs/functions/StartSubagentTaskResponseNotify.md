---
title: StartSubagentTaskResponseNotify
---

[**@codebolt/codeboltjs**](../index)

***

# Function: StartSubagentTaskResponseNotify()

```ts
function StartSubagentTaskResponseNotify(
   content: any, 
   isError: boolean, 
   toolUseId?: string): void;
```

Defined in: packages/codeboltjs/src/notificationfunctions/agent.ts:75

Sends a response to a subagent task request

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `content` | `any` | `undefined` | The response content (string or any object) |
| `isError` | `boolean` | `false` | Whether this is an error response (default: false) |
| `toolUseId?` | `string` | `undefined` | Optional custom toolUseId, will be generated if not provided Requirements: 1.2 - WHEN I call `codebolt.notify.agent.StartSubagentTaskResponseNotify()` THEN the system SHALL send a StartSubagentTaskResponseNotification via WebSocket |

## Returns

`void`
