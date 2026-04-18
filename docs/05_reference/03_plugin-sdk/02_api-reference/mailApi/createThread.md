---
title: createThread
---

# `createThread`

```typescript
plugin.mailApi.createThread(data: CreateMailThreadRequest): Promise<MailThread>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateMailThreadRequest` | Yes |  |

## Returns

`Promise<MailThread>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.createThread(/* CreateMailThreadRequest */);
console.log(result);
```
