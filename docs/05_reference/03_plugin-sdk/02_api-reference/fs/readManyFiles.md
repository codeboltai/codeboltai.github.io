---
title: readManyFiles
---

# `readManyFiles`

```typescript
plugin.fs.readManyFiles(params: object): Promise<ReadManyFilesResponse>
```

readManyFiles

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes |  |

## Returns

`Promise<ReadManyFilesResponse>` — A promise that resolves with the read operation result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.readManyFiles(/* object */);
console.log(result);
```
