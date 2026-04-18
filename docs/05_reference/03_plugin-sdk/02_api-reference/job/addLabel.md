---
title: addLabel
---

# `addLabel`

```typescript
plugin.job.addLabel(label: string): Promise<JobLabelsResponse>
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

const result = await plugin.job.addLabel('label');
console.log(result);
```
