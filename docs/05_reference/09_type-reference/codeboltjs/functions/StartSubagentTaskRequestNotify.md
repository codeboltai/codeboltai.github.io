---
title: StartSubagentTaskRequestNotify
---

[**@codebolt/codeboltjs**](../index)

***

# Function: StartSubagentTaskRequestNotify()

```ts
function StartSubagentTaskRequestNotify(
   parentAgentId: string, 
   subagentId: string, 
   task: string, 
   priority?: string, 
   dependencies?: string[], 
   toolUseId?: string): void;
```

Defined in: packages/codeboltjs/src/notificationfunctions/agent.ts:35

Sends a request to start a subagent task

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parentAgentId` | `string` | The parent agent ID |
| `subagentId` | `string` | The subagent ID |
| `task` | `string` | The task description |
| `priority?` | `string` | Optional task priority |
| `dependencies?` | `string`[] | Optional array of dependencies |
| `toolUseId?` | `string` | Optional custom toolUseId, will be generated if not provided Requirements: 1.1 - WHEN I call `codebolt.notify.agent.StartSubagentTaskRequestNotify()` THEN the system SHALL send a StartSubagentTaskRequestNotification via WebSocket |

## Returns

`void`
