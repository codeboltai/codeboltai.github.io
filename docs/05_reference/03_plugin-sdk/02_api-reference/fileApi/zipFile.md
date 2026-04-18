---
title: zipFile
---

# `zipFile`

```typescript
plugin.fileApi.zipFile(data: ZipFileRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ZipFileRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fileApi.zipFile(/* ZipFileRequest */);
console.log(result);
```
