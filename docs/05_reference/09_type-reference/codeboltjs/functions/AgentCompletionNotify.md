---
title: AgentCompletionNotify
---

[**@codebolt/codeboltjs**](../index)

***

# Function: AgentCompletionNotify()

```ts
function AgentCompletionNotify(
   resultString: string, 
   sessionId?: string, 
   duration?: string, 
   toolUseId?: string): void;
```

Defined in: packages/codeboltjs/src/notificationfunctions/system.ts:56

Sends an agent completion notification

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resultString` | `string` | The result string from the agent |
| `sessionId?` | `string` | Optional session ID |
| `duration?` | `string` | Optional duration string |
| `toolUseId?` | `string` | Optional custom toolUseId, will be generated if not provided |

## Returns

`void`
