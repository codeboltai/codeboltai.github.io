---
title: getTaskDetail
---

# `getTaskDetail`

```typescript
plugin.task.getTaskDetail(options: object): Promise<object>
```

Retrieves detailed information about a specific task.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The task detail options |

## Returns

`Promise<object>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.task.getTaskDetail(/* object */);
console.log(result);
```
