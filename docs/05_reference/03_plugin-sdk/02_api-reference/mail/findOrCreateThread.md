---
title: findOrCreateThread
---

# `findOrCreateThread`

```typescript
plugin.mail.findOrCreateThread(params: IFindOrCreateThreadParams): Promise<IFindOrCreateThreadResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IFindOrCreateThreadParams` | Yes |  |

## Returns

`Promise<IFindOrCreateThreadResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.findOrCreateThread(/* IFindOrCreateThreadParams */);
console.log(result);
```
