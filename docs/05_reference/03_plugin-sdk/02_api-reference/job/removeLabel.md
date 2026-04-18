---
title: removeLabel
---

# `removeLabel`

```typescript
plugin.job.removeLabel(label: string): Promise<JobLabelsResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | Yes |  |

## Returns

`Promise<JobLabelsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.removeLabel('label');
console.log(result);
```
