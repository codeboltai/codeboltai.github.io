---
title: VectordbApi API
---

# VectordbApi API

The `vectordbApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`addChunks`](./addChunks) |  |
| [`addDocuments`](./addDocuments) |  |
| [`createCollection`](./createCollection) |  |
| [`createIndex`](./createIndex) |  |
| [`deleteChunk`](./deleteChunk) |  |
| [`deleteCollection`](./deleteCollection) |  |
| [`deleteDocuments`](./deleteDocuments) |  |
| [`getChunks`](./getChunks) |  |
| [`getCollection`](./getCollection) |  |
| [`getDocuments`](./getDocuments) |  |
| [`getSettings`](./getSettings) |  |
| [`listCollections`](./listCollections) |  |
| [`query`](./query) |  |
| [`updateCollection`](./updateCollection) |  |
| [`updateSettings`](./updateSettings) |  |

## Methods

---

### `addChunks`

```typescript
plugin.vectordbApi.addChunks(id: string, data: AddVectorChunksRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddVectorChunksRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./addChunks)

---

### `addDocuments`

```typescript
plugin.vectordbApi.addDocuments(id: string, data: AddVectorDocumentsRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddVectorDocumentsRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./addDocuments)

---

### `createCollection`

```typescript
plugin.vectordbApi.createCollection(data: CreateVectorCollectionRequest): Promise<VectorCollection>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateVectorCollectionRequest` | Yes |  |

**Returns:** `Promise<VectorCollection>`

[Full reference →](./createCollection)

---

### `createIndex`

```typescript
plugin.vectordbApi.createIndex(data: CreateVectorIndexRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateVectorIndexRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./createIndex)

---

### `deleteChunk`

```typescript
plugin.vectordbApi.deleteChunk(id: string, chunkId: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `chunkId` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteChunk)

---

### `deleteCollection`

```typescript
plugin.vectordbApi.deleteCollection(id: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteCollection)

---

### `deleteDocuments`

```typescript
plugin.vectordbApi.deleteDocuments(id: string, data?: DeleteVectorDocumentsRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `DeleteVectorDocumentsRequest` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteDocuments)

---

### `getChunks`

```typescript
plugin.vectordbApi.getChunks(id: string, params?: Record<string, unknown>): Promise<VectorChunk[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<VectorChunk[]>`

[Full reference →](./getChunks)

---

### `getCollection`

```typescript
plugin.vectordbApi.getCollection(id: string): Promise<VectorCollection>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<VectorCollection>`

[Full reference →](./getCollection)

---

### `getDocuments`

```typescript
plugin.vectordbApi.getDocuments(id: string, params?: Record<string, unknown>): Promise<VectorDocument[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<VectorDocument[]>`

[Full reference →](./getDocuments)

---

### `getSettings`

```typescript
plugin.vectordbApi.getSettings(id: string): Promise<VectorCollectionSettings>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<VectorCollectionSettings>`

[Full reference →](./getSettings)

---

### `listCollections`

```typescript
plugin.vectordbApi.listCollections(params?: Record<string, unknown>): Promise<VectorCollection[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<VectorCollection[]>`

[Full reference →](./listCollections)

---

### `query`

```typescript
plugin.vectordbApi.query(id: string, data: VectorQueryRequest): Promise<VectorSearchResult[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `VectorQueryRequest` | Yes |  |

**Returns:** `Promise<VectorSearchResult[]>`

[Full reference →](./query)

---

### `updateCollection`

```typescript
plugin.vectordbApi.updateCollection(id: string, data: UpdateVectorCollectionRequest): Promise<VectorCollection>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateVectorCollectionRequest` | Yes |  |

**Returns:** `Promise<VectorCollection>`

[Full reference →](./updateCollection)

---

### `updateSettings`

```typescript
plugin.vectordbApi.updateSettings(id: string, data: UpdateVectorSettingsRequest): Promise<VectorCollectionSettings>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateVectorSettingsRequest` | Yes |  |

**Returns:** `Promise<VectorCollectionSettings>`

[Full reference →](./updateSettings)

