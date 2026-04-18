---
title: getTaskList
---

# `getTaskList`

```typescript
plugin.task.getTaskList(options: object): Promise<object>
```

Retrieves a list of tasks.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | Optional filters for tasks _(default: `{}`)_ |

## Returns

`Promise<object>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.task.getTaskList(/* object */);
console.log(result);
```
