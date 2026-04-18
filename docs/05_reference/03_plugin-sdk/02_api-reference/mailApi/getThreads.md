---
title: getThreads
---

# `getThreads`

```typescript
plugin.mailApi.getThreads(params?: MailThreadListParams): Promise<MailThread[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `MailThreadListParams` | No |  |

## Returns

`Promise<MailThread[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.getThreads();
console.log(result);
```
