---
title: assignAgentToTask
---

# `assignAgentToTask`

```typescript
plugin.task.assignAgentToTask(taskId: string, agentId: string): Promise<object>
```

Assigns an agent to a task.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID |
| `agentId` | `string` | Yes | The agent ID to assign |

## Returns

`Promise<object>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.task.assignAgentToTask('taskId', 'agentId');
console.log(result);
```
