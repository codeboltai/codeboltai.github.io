---
title: executeTaskWithAgent
---

# `executeTaskWithAgent`

```typescript
plugin.task.executeTaskWithAgent(taskId: string, agentId: string): Promise<object>
```

Executes a task with a specific agent.
Assigns the agent and then starts the task.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `taskId` | `string` | Yes | The task ID |
| `agentId` | `string` | Yes | The agent ID |

## Returns

`Promise<object>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.task.executeTaskWithAgent('taskId', 'agentId');
console.log(result);
```
