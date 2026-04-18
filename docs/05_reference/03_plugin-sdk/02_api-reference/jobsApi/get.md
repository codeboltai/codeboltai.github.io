---
title: get
---

# `get`

```typescript
plugin.jobsApi.get(id: string): Promise<Job>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<Job>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.get('id');
console.log(result);
```
