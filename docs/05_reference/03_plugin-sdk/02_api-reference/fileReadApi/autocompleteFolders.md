---
title: autocompleteFolders
---

# `autocompleteFolders`

```typescript
plugin.fileReadApi.autocompleteFolders(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileAutocompleteParams` | No |  |

## Returns

`Promise<FileAutocompleteResult[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fileReadApi.autocompleteFolders();
console.log(result);
```
