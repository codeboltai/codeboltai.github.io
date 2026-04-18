---
title: VectorDbApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: VectorDbApi

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:25

Manages vector database operations for the CodeBolt platform.

Vector databases enable semantic search and retrieval operations on
high-dimensional embeddings. This API provides functionality for managing
collections, documents, chunks, and performing vector similarity searches.

## Constructors

### Constructor

```ts
new VectorDbApi(http: HttpClient): VectorDbApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:26

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`VectorDbApi`

## Methods

### addChunks()

```ts
addChunks(id: string, data: AddVectorChunksRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:96

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `AddVectorChunksRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### addDocuments()

```ts
addDocuments(id: string, data: AddVectorDocumentsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `AddVectorDocumentsRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### createCollection()

```ts
createCollection(data: CreateVectorCollectionRequest): Promise<VectorCollection>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateVectorCollectionRequest` |

#### Returns

`Promise`\<`VectorCollection`\>

***

### createIndex()

```ts
createIndex(data: CreateVectorIndexRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:136

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateVectorIndexRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### deleteChunk()

```ts
deleteChunk(id: string, chunkId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:100

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `chunkId` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### deleteCollection()

```ts
deleteCollection(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:55

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### deleteDocuments()

```ts
deleteDocuments(id: string, data?: DeleteVectorDocumentsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:78

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `DeleteVectorDocumentsRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### getChunks()

```ts
getChunks(id: string, params?: Record<string, unknown>): Promise<VectorChunk[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:87

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`VectorChunk`[]\>

***

### getCollection()

```ts
getCollection(id: string): Promise<VectorCollection>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:44

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`VectorCollection`\>

***

### getDocuments()

```ts
getDocuments(id: string, params?: Record<string, unknown>): Promise<VectorDocument[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:68

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`VectorDocument`[]\>

***

### getSettings()

```ts
getSettings(id: string): Promise<VectorCollectionSettings>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:118

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`VectorCollectionSettings`\>

***

### listCollections()

```ts
listCollections(params?: Record<string, unknown>): Promise<VectorCollection[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:36

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`VectorCollection`[]\>

***

### query()

```ts
query(id: string, data: VectorQueryRequest): Promise<VectorSearchResult[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:106

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `VectorQueryRequest` |

#### Returns

`Promise`\<`VectorSearchResult`[]\>

***

### updateCollection()

```ts
updateCollection(id: string, data: UpdateVectorCollectionRequest): Promise<VectorCollection>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:48

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateVectorCollectionRequest` |

#### Returns

`Promise`\<`VectorCollection`\>

***

### updateSettings()

```ts
updateSettings(id: string, data: UpdateVectorSettingsRequest): Promise<VectorCollectionSettings>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/vectordb.api.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateVectorSettingsRequest` |

#### Returns

`Promise`\<`VectorCollectionSettings`\>
