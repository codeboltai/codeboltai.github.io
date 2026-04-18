---
title: deleteLabel
---

# `deleteLabel`

```typescript
plugin.jobsApi.deleteLabel(name: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.deleteLabel('name');
console.log(result);
```
