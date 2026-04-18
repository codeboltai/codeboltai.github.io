---
title: addFile
---

# `addFile`

```typescript
plugin.fileApi.addFile(data: AddFileRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `AddFileRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fileApi.addFile(/* AddFileRequest */);
console.log(result);
```
