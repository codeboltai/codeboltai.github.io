---
title: execute
---

# `execute`

```typescript
plugin.threadsApi.execute(threadId: string, data?: ExecuteThreadRequest): Promise<Thread>
```

Executes a thread with optional configuration parameters.

Starts or resumes execution of the specified thread. You can provide
additional execution parameters to customize the run. The thread will
process its configured tasks and operations.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The unique identifier of the thread to execute |
| `data` | `ExecuteThreadRequest` | No | Optional execution configuration parameters |

## Returns

`Promise<Thread>` — A promise that resolves to the updated Thread object

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.execute('threadId');
console.log(result);
```
