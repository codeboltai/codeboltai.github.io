---
title: KnowledgeApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: KnowledgeApi

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:25

Manages knowledge collections, documents, chunks, and chunking strategies.

The knowledge system provides a RAG (Retrieval-Augmented Generation)
pipeline for agents. Collections group related documents, which are
automatically split into chunks for efficient retrieval. This API
covers the full lifecycle of knowledge management.

## Constructors

### Constructor

```ts
new KnowledgeApi(http: HttpClient): KnowledgeApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:26

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`KnowledgeApi`

## Methods

### addDocumentFromUrl()

```ts
addDocumentFromUrl(id: string, data: AddKnowledgeDocumentFromUrlRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:56

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `AddKnowledgeDocumentFromUrlRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### addDocuments()

```ts
addDocuments(id: string, data: AddKnowledgeDocumentsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `AddKnowledgeDocumentsRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### createCollection()

```ts
createCollection(data: CreateKnowledgeCollectionRequest): Promise<KnowledgeCollection>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateKnowledgeCollectionRequest` |

#### Returns

`Promise`\<`KnowledgeCollection`\>

***

### deleteCollection()

```ts
deleteCollection(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:46

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### deleteDocument()

```ts
deleteDocument(documentId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:68

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentId` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### getCollection()

```ts
getCollection(id: string): Promise<KnowledgeCollection>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`KnowledgeCollection`\>

***

### getDocument()

```ts
getDocument(documentId: string): Promise<KnowledgeDocument>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentId` | `string` |

#### Returns

`Promise`\<`KnowledgeDocument`\>

***

### getSettings()

```ts
getSettings(id: string): Promise<KnowledgeCollectionSettings>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:84

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`KnowledgeCollectionSettings`\>

***

### getStrategies()

```ts
getStrategies(): Promise<KnowledgeStrategy[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:94

#### Returns

`Promise`\<`KnowledgeStrategy`[]\>

***

### getStrategyOptions()

```ts
getStrategyOptions(strategy: string): Promise<KnowledgeStrategyOptions>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:98

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `strategy` | `string` |

#### Returns

`Promise`\<`KnowledgeStrategyOptions`\>

***

### listCollections()

```ts
listCollections(params?: Record<string, unknown>): Promise<KnowledgeCollection[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:34

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`KnowledgeCollection`[]\>

***

### listDocuments()

```ts
listDocuments(id: string, params?: Record<string, unknown>): Promise<KnowledgeDocument[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`KnowledgeDocument`[]\>

***

### rechunkDocument()

```ts
rechunkDocument(documentId: string, data?: RechunkDocumentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:72

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentId` | `string` |
| `data?` | `RechunkDocumentRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### updateChunk()

```ts
updateChunk(chunkId: string, data: UpdateKnowledgeChunkRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:78

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunkId` | `string` |
| `data` | `UpdateKnowledgeChunkRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### updateCollection()

```ts
updateCollection(id: string, data: UpdateKnowledgeCollectionRequest): Promise<KnowledgeCollection>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateKnowledgeCollectionRequest` |

#### Returns

`Promise`\<`KnowledgeCollection`\>

***

### updateSettings()

```ts
updateSettings(id: string, data: UpdateKnowledgeSettingsRequest): Promise<KnowledgeCollectionSettings>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/knowledge.api.ts:88

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateKnowledgeSettingsRequest` |

#### Returns

`Promise`\<`KnowledgeCollectionSettings`\>
