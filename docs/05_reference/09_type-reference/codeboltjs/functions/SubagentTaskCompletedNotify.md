---
title: SubagentTaskCompletedNotify
---

[**@codebolt/codeboltjs**](../index)

***

# Function: SubagentTaskCompletedNotify()

```ts
function SubagentTaskCompletedNotify(
   parentAgentId: string, 
   subagentId: string, 
   taskId: string, 
   result: any, 
   status: string, 
   toolUseId?: string): void;
```

Defined in: packages/codeboltjs/src/notificationfunctions/agent.ts:111

Notifies that a subagent task has been completed

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parentAgentId` | `string` | The parent agent ID |
| `subagentId` | `string` | The subagent ID |
| `taskId` | `string` | The task ID |
| `result` | `any` | The task result |
| `status` | `string` | The task status |
| `toolUseId?` | `string` | Optional custom toolUseId, will be generated if not provided Requirements: 1.3 - WHEN I call `codebolt.notify.agent.SubagentTaskCompletedNotify()` THEN the system SHALL send a SubagentTaskCompletedNotification via WebSocket |

## Returns

`void`
