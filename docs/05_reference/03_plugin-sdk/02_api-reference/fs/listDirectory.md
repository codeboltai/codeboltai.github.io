---
title: listDirectory
---

# `listDirectory`

```typescript
plugin.fs.listDirectory(params: object): Promise<ListDirectoryResponse>
```

listDirectory

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `object` | Yes |  |

## Returns

`Promise<ListDirectoryResponse>` — A promise that resolves with the directory listing result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.listDirectory(/* object */);
console.log(result);
```
