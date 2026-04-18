---
title: autocompleteForSearch
---

# `autocompleteForSearch`

```typescript
plugin.fileReadApi.autocompleteForSearch(params?: FileSearchParams): Promise<FileAutocompleteResult[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileSearchParams` | No |  |

## Returns

`Promise<FileAutocompleteResult[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fileReadApi.autocompleteForSearch();
console.log(result);
```
