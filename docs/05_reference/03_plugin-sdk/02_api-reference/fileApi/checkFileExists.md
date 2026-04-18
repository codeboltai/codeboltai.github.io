---
title: checkFileExists
---

# `checkFileExists`

```typescript
plugin.fileApi.checkFileExists(data: CheckFileExistsRequest): Promise<CheckFileExistsResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CheckFileExistsRequest` | Yes |  |

## Returns

`Promise<CheckFileExistsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fileApi.checkFileExists(/* CheckFileExistsRequest */);
console.log(result);
```
