---
title: FileReadApi API
---

# FileReadApi API

The `fileReadApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`allFiles`](./allFiles) |  |
| [`autocomplete`](./autocomplete) |  |
| [`autocompleteFolders`](./autocompleteFolders) |  |
| [`autocompleteForSearch`](./autocompleteForSearch) |  |
| [`read`](./read) |  |
| [`search`](./search) |  |

## Methods

---

### `allFiles`

```typescript
plugin.fileReadApi.allFiles(params?: FileSearchParams): Promise<FileSearchResult[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileSearchParams` | No |  |

**Returns:** `Promise<FileSearchResult[]>`

[Full reference →](./allFiles)

---

### `autocomplete`

```typescript
plugin.fileReadApi.autocomplete(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileAutocompleteParams` | No |  |

**Returns:** `Promise<FileAutocompleteResult[]>`

[Full reference →](./autocomplete)

---

### `autocompleteFolders`

```typescript
plugin.fileReadApi.autocompleteFolders(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileAutocompleteParams` | No |  |

**Returns:** `Promise<FileAutocompleteResult[]>`

[Full reference →](./autocompleteFolders)

---

### `autocompleteForSearch`

```typescript
plugin.fileReadApi.autocompleteForSearch(params?: FileSearchParams): Promise<FileAutocompleteResult[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileSearchParams` | No |  |

**Returns:** `Promise<FileAutocompleteResult[]>`

[Full reference →](./autocompleteForSearch)

---

### `read`

```typescript
plugin.fileReadApi.read(params?: FileReadParams): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileReadParams` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./read)

---

### `search`

```typescript
plugin.fileReadApi.search(params?: FileSearchParams): Promise<FileSearchResult[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileSearchParams` | No |  |

**Returns:** `Promise<FileSearchResult[]>`

[Full reference →](./search)

