---
title: KnowledgeApi API
---

# KnowledgeApi API

The `knowledgeApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`addDocumentFromUrl`](./addDocumentFromUrl) |  |
| [`addDocuments`](./addDocuments) |  |
| [`createCollection`](./createCollection) |  |
| [`deleteCollection`](./deleteCollection) |  |
| [`deleteDocument`](./deleteDocument) |  |
| [`getCollection`](./getCollection) |  |
| [`getDocument`](./getDocument) |  |
| [`getSettings`](./getSettings) |  |
| [`getStrategies`](./getStrategies) |  |
| [`getStrategyOptions`](./getStrategyOptions) |  |
| [`listCollections`](./listCollections) |  |
| [`listDocuments`](./listDocuments) |  |
| [`rechunkDocument`](./rechunkDocument) |  |
| [`updateChunk`](./updateChunk) |  |
| [`updateCollection`](./updateCollection) |  |
| [`updateSettings`](./updateSettings) |  |

## Methods

---

### `addDocumentFromUrl`

```typescript
plugin.knowledgeApi.addDocumentFromUrl(id: string, data: AddKnowledgeDocumentFromUrlRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddKnowledgeDocumentFromUrlRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./addDocumentFromUrl)

---

### `addDocuments`

```typescript
plugin.knowledgeApi.addDocuments(id: string, data: AddKnowledgeDocumentsRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddKnowledgeDocumentsRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./addDocuments)

---

### `createCollection`

```typescript
plugin.knowledgeApi.createCollection(data: CreateKnowledgeCollectionRequest): Promise<KnowledgeCollection>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateKnowledgeCollectionRequest` | Yes |  |

**Returns:** `Promise<KnowledgeCollection>`

[Full reference →](./createCollection)

---

### `deleteCollection`

```typescript
plugin.knowledgeApi.deleteCollection(id: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteCollection)

---

### `deleteDocument`

```typescript
plugin.knowledgeApi.deleteDocument(documentId: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `documentId` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteDocument)

---

### `getCollection`

```typescript
plugin.knowledgeApi.getCollection(id: string): Promise<KnowledgeCollection>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<KnowledgeCollection>`

[Full reference →](./getCollection)

---

### `getDocument`

```typescript
plugin.knowledgeApi.getDocument(documentId: string): Promise<KnowledgeDocument>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `documentId` | `string` | Yes |  |

**Returns:** `Promise<KnowledgeDocument>`

[Full reference →](./getDocument)

---

### `getSettings`

```typescript
plugin.knowledgeApi.getSettings(id: string): Promise<KnowledgeCollectionSettings>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<KnowledgeCollectionSettings>`

[Full reference →](./getSettings)

---

### `getStrategies`

```typescript
plugin.knowledgeApi.getStrategies(): Promise<KnowledgeStrategy[]>
```



_No parameters._

**Returns:** `Promise<KnowledgeStrategy[]>`

[Full reference →](./getStrategies)

---

### `getStrategyOptions`

```typescript
plugin.knowledgeApi.getStrategyOptions(strategy: string): Promise<KnowledgeStrategyOptions>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `strategy` | `string` | Yes |  |

**Returns:** `Promise<KnowledgeStrategyOptions>`

[Full reference →](./getStrategyOptions)

---

### `listCollections`

```typescript
plugin.knowledgeApi.listCollections(params?: Record<string, unknown>): Promise<KnowledgeCollection[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<KnowledgeCollection[]>`

[Full reference →](./listCollections)

---

### `listDocuments`

```typescript
plugin.knowledgeApi.listDocuments(id: string, params?: Record<string, unknown>): Promise<KnowledgeDocument[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<KnowledgeDocument[]>`

[Full reference →](./listDocuments)

---

### `rechunkDocument`

```typescript
plugin.knowledgeApi.rechunkDocument(documentId: string, data?: RechunkDocumentRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `documentId` | `string` | Yes |  |
| `data` | `RechunkDocumentRequest` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./rechunkDocument)

---

### `updateChunk`

```typescript
plugin.knowledgeApi.updateChunk(chunkId: string, data: UpdateKnowledgeChunkRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `chunkId` | `string` | Yes |  |
| `data` | `UpdateKnowledgeChunkRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./updateChunk)

---

### `updateCollection`

```typescript
plugin.knowledgeApi.updateCollection(id: string, data: UpdateKnowledgeCollectionRequest): Promise<KnowledgeCollection>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateKnowledgeCollectionRequest` | Yes |  |

**Returns:** `Promise<KnowledgeCollection>`

[Full reference →](./updateCollection)

---

### `updateSettings`

```typescript
plugin.knowledgeApi.updateSettings(id: string, data: UpdateKnowledgeSettingsRequest): Promise<KnowledgeCollectionSettings>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateKnowledgeSettingsRequest` | Yes |  |

**Returns:** `Promise<KnowledgeCollectionSettings>`

[Full reference →](./updateSettings)

