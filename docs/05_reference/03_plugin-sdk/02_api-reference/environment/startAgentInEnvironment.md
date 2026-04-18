---
title: startAgentInEnvironment
---

# `startAgentInEnvironment`

```typescript
plugin.environment.startAgentInEnvironment(environmentId: string, task: string, agentId?: string, threadId?: string): Promise<any>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |
| `task` | `string` | Yes |  |
| `agentId` | `string` | No |  |
| `threadId` | `string` | No |  |

## Returns

`Promise<any>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environment.startAgentInEnvironment('environmentId', 'task');
console.log(result);
```
