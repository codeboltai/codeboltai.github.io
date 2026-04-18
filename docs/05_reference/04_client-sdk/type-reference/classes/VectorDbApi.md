---
title: VectorDbApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: VectorDbApi

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:25

Manages vector database operations for the CodeBolt platform.

Vector databases enable semantic search and retrieval operations on
high-dimensional embeddings. This API provides functionality for managing
collections, documents, chunks, and performing vector similarity searches.

## Constructors

### Constructor

```ts
new VectorDbApi(http: HttpClient): VectorDbApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:26

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

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:283

Adds chunks to a vector collection.

Manually adds pre-chunked text segments to the collection with their
embeddings. This is useful when you have custom chunking logic or
want to add chunks without full document processing.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the target collection |
| `data` | `AddVectorChunksRequest` | The chunks to add with their embeddings and metadata |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when chunks have been added

#### Example

```typescript
await client.vectorDb.addChunks('col-123', {
  chunks: [
    {
      id: 'chunk-1',
      text: 'This is a chunk',
      embedding: [0.1, 0.2, ...],
      metadata: { documentId: 'doc-1' }
    }
  ]
});
```

***

### addDocuments()

```ts
addDocuments(id: string, data: AddVectorDocumentsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:170

Adds documents to a vector collection.

Ingests new documents into the collection, automatically generating
embeddings and storing them for similarity search. Documents can include
text content and metadata for filtering.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the target collection |
| `data` | `AddVectorDocumentsRequest` | The documents to add along with their metadata |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when documents have been added

#### Example

```typescript
await client.vectorDb.addDocuments('col-123', {
  documents: [
    { id: 'doc-1', content: 'Sample document text', metadata: { source: 'web' } }
  ]
});
```

***

### createCollection()

```ts
createCollection(data: CreateVectorCollectionRequest): Promise<VectorCollection>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:52

Creates a new vector collection.

Initializes a new collection with specified configuration including
dimensionality, embedding model, and metadata settings. Collections
are used to store and manage vectors for similarity search operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateVectorCollectionRequest` | The collection configuration data including name, dimensions, and settings |

#### Returns

`Promise`\<`VectorCollection`\>

A promise that resolves to the created VectorCollection object

#### Example

```typescript
const collection = await client.vectorDb.createCollection({
  name: 'my-documents',
  dimensions: 1536,
  embeddingModel: 'text-embedding-ada-002'
});
```

***

### createIndex()

```ts
createIndex(data: CreateVectorIndexRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:421

Creates a vector index for a collection.

Initializes an index structure to optimize similarity search
performance. Indexes enable fast nearest neighbor queries on
high-dimensional vectors and are essential for efficient retrieval.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateVectorIndexRequest` | The index creation configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the index has been created

#### Example

```typescript
await client.vectorDb.createIndex({
  collectionId: 'col-123',
  indexType: 'hnsw',
  params: { M: 16, efConstruction: 200 }
});
```

***

### deleteChunk()

```ts
deleteChunk(id: string, chunkId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:303

Deletes a specific chunk from a vector collection.

Removes a single chunk by its unique identifier. This is useful for
granular cleanup when individual chunks need to be removed without
affecting other content in the collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection |
| `chunkId` | `string` | The unique identifier of the chunk to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the chunk has been deleted

#### Example

```typescript
await client.vectorDb.deleteChunk('col-123', 'chunk-456');
```

***

### deleteCollection()

```ts
deleteCollection(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:143

Deletes a vector collection.

Permanently removes a collection and all its associated data including
documents, chunks, and index information. This operation cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the collection has been deleted

#### Example

```typescript
await client.vectorDb.deleteCollection('col-123');
```

***

### deleteDocuments()

```ts
deleteDocuments(id: string, data?: DeleteVectorDocumentsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:222

Deletes documents from a vector collection.

Removes specified documents from the collection based on provided
criteria such as document IDs or metadata filters. This operation
cleans up the collection and frees storage.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection |
| `data?` | `DeleteVectorDocumentsRequest` | Optional deletion criteria for selecting documents to remove |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when documents have been deleted

#### Example

```typescript
await client.vectorDb.deleteDocuments('col-123', {
  documentIds: ['doc-1', 'doc-2']
});
```

***

### getChunks()

```ts
getChunks(id: string, params?: Record<string, unknown>): Promise<VectorChunk[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:248

Retrieves chunks from a vector collection.

Fetches text chunks that were created when documents were processed.
Chunks are smaller segments of documents used for more granular
similarity search and retrieval operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`VectorChunk`[]\>

A promise that resolves to an array of VectorChunk objects

#### Example

```typescript
const chunks = await client.vectorDb.getChunks('col-123');
console.log(`Found ${chunks.length} chunks`);
```

***

### getCollection()

```ts
getCollection(id: string): Promise<VectorCollection>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:98

Retrieves a vector collection by its ID.

Fetches detailed information about a specific collection including
its configuration, statistics, and metadata. Use this to inspect
collection properties or verify collection existence.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection to retrieve |

#### Returns

`Promise`\<`VectorCollection`\>

A promise that resolves to the VectorCollection object

#### Example

```typescript
const collection = await client.vectorDb.getCollection('col-123');
console.log(collection.dimensions, collection.documentCount);
```

***

### getDocuments()

```ts
getDocuments(id: string, params?: Record<string, unknown>): Promise<VectorDocument[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:194

Retrieves documents from a vector collection.

Fetches documents stored in the collection with optional filtering and
pagination parameters. Use this to inspect stored content or retrieve
specific documents by criteria.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`VectorDocument`[]\>

A promise that resolves to an array of VectorDocument objects

#### Example

```typescript
const docs = await client.vectorDb.getDocuments('col-123');
docs.forEach(d => console.log(d.id, d.content));
```

***

### getSettings()

```ts
getSettings(id: string): Promise<VectorCollectionSettings>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:360

Retrieves settings for a vector collection.

Fetches the configuration and settings applied to a collection
including index types, distance metrics, and other operational
parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection |

#### Returns

`Promise`\<`VectorCollectionSettings`\>

A promise that resolves to the VectorCollectionSettings object

#### Example

```typescript
const settings = await client.vectorDb.getSettings('col-123');
console.log(settings.distanceMetric, settings.indexType);
```

***

### listCollections()

```ts
listCollections(params?: Record<string, unknown>): Promise<VectorCollection[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:74

Lists all vector collections.

Retrieves every collection in the vector database system. Use optional
query parameters to filter or paginate results. This is useful for
browsing available collections or displaying a collection catalog.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`VectorCollection`[]\>

A promise that resolves to an array of VectorCollection objects

#### Example

```typescript
const collections = await client.vectorDb.listCollections();
collections.forEach(c => console.log(c.name, c.documentCount));
```

***

### query()

```ts
query(id: string, data: VectorQueryRequest): Promise<VectorSearchResult[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:332

Queries a vector collection for similar documents.

Performs semantic similarity search using a query vector or text.
Returns documents or chunks ranked by similarity score, enabling
retrieval of contextually relevant content for RAG applications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection to query |
| `data` | `VectorQueryRequest` | The query configuration including vector or text and search parameters |

#### Returns

`Promise`\<`VectorSearchResult`[]\>

A promise that resolves to an array of VectorSearchResult objects

#### Example

```typescript
const results = await client.vectorDb.query('col-123', {
  query: 'machine learning algorithms',
  topK: 5
});
results.forEach(r => console.log(r.documentId, r.score));
```

***

### updateCollection()

```ts
updateCollection(id: string, data: UpdateVectorCollectionRequest): Promise<VectorCollection>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:122

Updates a vector collection.

Modifies the configuration of an existing collection such as name,
metadata, or other configurable properties. The collection ID must
be valid and the collection must exist.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection to update |
| `data` | `UpdateVectorCollectionRequest` | The update data with fields to modify |

#### Returns

`Promise`\<`VectorCollection`\>

A promise that resolves to the updated VectorCollection object

#### Example

```typescript
const updated = await client.vectorDb.updateCollection('col-123', {
  name: 'renamed-collection'
});
```

***

### updateSettings()

```ts
updateSettings(id: string, data: UpdateVectorSettingsRequest): Promise<VectorCollectionSettings>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/vectordb.api.ts:387

Updates settings for a vector collection.

Modifies the configuration parameters of a collection such as
distance metric, index type, or other settings. Some settings
may require index rebuild or have performance implications.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection to update |
| `data` | `UpdateVectorSettingsRequest` | The settings to update with new values |

#### Returns

`Promise`\<`VectorCollectionSettings`\>

A promise that resolves to the updated VectorCollectionSettings object

#### Example

```typescript
const updated = await client.vectorDb.updateSettings('col-123', {
  distanceMetric: 'cosine',
  indexType: 'hnsw'
});
```
