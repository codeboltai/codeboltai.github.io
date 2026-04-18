---
title: createLabel
---

# `createLabel`

```typescript
plugin.jobsApi.createLabel(data: CreateLabelRequest): Promise<JobLabel>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateLabelRequest` | Yes |  |

## Returns

`Promise<JobLabel>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.createLabel(/* CreateLabelRequest */);
console.log(result);
```
