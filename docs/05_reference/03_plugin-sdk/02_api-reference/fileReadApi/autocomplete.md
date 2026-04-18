---
title: autocomplete
---

# `autocomplete`

```typescript
plugin.fileReadApi.autocomplete(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>
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

const result = await plugin.fileReadApi.autocomplete();
console.log(result);
```
