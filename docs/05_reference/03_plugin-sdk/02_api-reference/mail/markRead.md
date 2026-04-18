---
title: markRead
---

# `markRead`

```typescript
plugin.mail.markRead(params: IMarkReadParams): Promise<IMarkReadResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IMarkReadParams` | Yes |  |

## Returns

`Promise<IMarkReadResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.markRead(/* IMarkReadParams */);
console.log(result);
```
