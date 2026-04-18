---
title: reserveFiles
---

# `reserveFiles`

```typescript
plugin.mail.reserveFiles(params: IReserveFilesParams): Promise<IReserveFilesResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IReserveFilesParams` | Yes |  |

## Returns

`Promise<IReserveFilesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.reserveFiles(/* IReserveFilesParams */);
console.log(result);
```
