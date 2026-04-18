---
title: deleteZip
---

# `deleteZip`

```typescript
plugin.fileApi.deleteZip(data: DeleteZipRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `DeleteZipRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fileApi.deleteZip(/* DeleteZipRequest */);
console.log(result);
```
