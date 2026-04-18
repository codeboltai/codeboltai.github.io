---
title: createTask
---

# `createTask`

```typescript
plugin.task.createTask(options: object): Promise<object>
```

Creates a new task.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The task creation parameters |

## Returns

`Promise<object>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.task.createTask(/* object */);
console.log(result);
```
