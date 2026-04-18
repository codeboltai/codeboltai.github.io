---
title: summarizeThread
---

# `summarizeThread`

```typescript
plugin.mail.summarizeThread(params: ISummarizeThreadParams): Promise<ISummarizeThreadResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ISummarizeThreadParams` | Yes |  |

## Returns

`Promise<ISummarizeThreadResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.summarizeThread(/* ISummarizeThreadParams */);
console.log(result);
```
