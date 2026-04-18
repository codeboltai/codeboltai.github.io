---
title: summarizeThread
---

# `summarizeThread`

```typescript
plugin.mailApi.summarizeThread(threadId: string): Promise<MailThreadSummary>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

## Returns

`Promise<MailThreadSummary>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.summarizeThread('threadId');
console.log(result);
```
