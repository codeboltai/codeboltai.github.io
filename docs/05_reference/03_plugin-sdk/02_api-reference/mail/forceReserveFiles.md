---
title: forceReserveFiles
---

# `forceReserveFiles`

```typescript
plugin.mail.forceReserveFiles(params: IForceReserveFilesParams): Promise<IForceReserveFilesResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IForceReserveFilesParams` | Yes |  |

## Returns

`Promise<IForceReserveFilesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.forceReserveFiles(/* IForceReserveFilesParams */);
console.log(result);
```
