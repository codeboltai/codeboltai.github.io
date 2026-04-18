---
title: archiveThread
---

# `archiveThread`

```typescript
plugin.mail.archiveThread(params: IArchiveThreadParams): Promise<IArchiveThreadResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IArchiveThreadParams` | Yes |  |

## Returns

`Promise<IArchiveThreadResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.archiveThread(/* IArchiveThreadParams */);
console.log(result);
```
