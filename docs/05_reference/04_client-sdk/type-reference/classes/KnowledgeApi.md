---
title: KnowledgeApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: KnowledgeApi

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:25

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

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:26

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

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:169

Adds a document to a collection by fetching it from a URL.

Downloads the content at the specified URL and adds it as a document
to the collection. The content is automatically parsed and chunked.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the target collection |
| `data` | `AddKnowledgeDocumentFromUrlRequest` | Request specifying the URL and optional metadata |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the document has been fetched and added

#### Example

```typescript
await client.knowledge.addDocumentFromUrl('col-123', {
  url: 'https://example.com/docs/guide.md',
});
```

***

### addDocuments()

```ts
addDocuments(id: string, data: AddKnowledgeDocumentsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:148

Adds one or more documents to a knowledge collection.

Uploads documents that will be automatically processed, chunked,
and indexed for retrieval. Supports multiple documents in a single request.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the target collection |
| `data` | `AddKnowledgeDocumentsRequest` | The documents to add, including their content and metadata |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the documents have been added and processing has begun

#### Example

```typescript
await client.knowledge.addDocuments('col-123', {
  documents: [
    { title: 'API Guide', content: 'Full API documentation...' },
  ],
});
```

***

### createCollection()

```ts
createCollection(data: CreateKnowledgeCollectionRequest): Promise<KnowledgeCollection>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:48

Creates a new knowledge collection.

A collection is a named container for related documents. Documents
added to a collection are automatically chunked and indexed for
retrieval by agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateKnowledgeCollectionRequest` | Collection creation payload including name and configuration |

#### Returns

`Promise`\<`KnowledgeCollection`\>

A promise that resolves to the newly created [KnowledgeCollection](../interfaces/KnowledgeCollection)

#### Example

```typescript
const collection = await client.knowledge.createCollection({
  name: 'project-docs',
  description: 'Documentation for the main project',
});
```

***

### deleteCollection()

```ts
deleteCollection(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:123

Deletes a knowledge collection and all its documents.

Permanently removes the collection, its documents, and all
associated chunks. This action cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.knowledge.deleteCollection('col-123');
```

***

### deleteDocument()

```ts
deleteDocument(documentId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:225

Deletes a document and all its associated chunks.

Permanently removes the document from its collection. The collection
itself is not affected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `documentId` | `string` | The unique identifier of the document to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.knowledge.deleteDocument('doc-456');
```

***

### getCollection()

```ts
getCollection(id: string): Promise<KnowledgeCollection>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:84

Retrieves a specific knowledge collection by its ID.

Returns the full details of a collection including its metadata,
document count, and configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the knowledge collection |

#### Returns

`Promise`\<`KnowledgeCollection`\>

A promise that resolves to the [KnowledgeCollection](../interfaces/KnowledgeCollection)

#### Example

```typescript
const collection = await client.knowledge.getCollection('col-123');
```

***

### getDocument()

```ts
getDocument(documentId: string): Promise<KnowledgeDocument>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:207

Retrieves a specific document by its ID.

Returns the full details of a document including its metadata,
processing status, and chunk count.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `documentId` | `string` | The unique identifier of the document |

#### Returns

`Promise`\<`KnowledgeDocument`\>

A promise that resolves to the [KnowledgeDocument](../interfaces/KnowledgeDocument)

#### Example

```typescript
const doc = await client.knowledge.getDocument('doc-456');
```

***

### getSettings()

```ts
getSettings(id: string): Promise<KnowledgeCollectionSettings>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:289

Retrieves the settings for a knowledge collection.

Returns the collection's chunking configuration, embedding settings,
and other processing parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection |

#### Returns

`Promise`\<`KnowledgeCollectionSettings`\>

A promise that resolves to the KnowledgeCollectionSettings

#### Example

```typescript
const settings = await client.knowledge.getSettings('col-123');
console.log(settings.chunkSize, settings.strategy);
```

***

### getStrategies()

```ts
getStrategies(): Promise<KnowledgeStrategy[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:332

Retrieves all available chunking strategies.

Returns the list of chunking algorithms that can be used when
processing documents (e.g., fixed-size, sentence-based, semantic).

#### Returns

`Promise`\<`KnowledgeStrategy`[]\>

A promise that resolves to an array of KnowledgeStrategy descriptors

#### Example

```typescript
const strategies = await client.knowledge.getStrategies();
strategies.forEach(s => console.log(s.name));
```

***

### getStrategyOptions()

```ts
getStrategyOptions(strategy: string): Promise<KnowledgeStrategyOptions>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:351

Retrieves the configurable options for a specific chunking strategy.

Returns the parameter schema for the strategy, including defaults
and valid ranges. Use this to build dynamic configuration UIs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `strategy` | `string` | The name of the chunking strategy |

#### Returns

`Promise`\<`KnowledgeStrategyOptions`\>

A promise that resolves to the KnowledgeStrategyOptions for the strategy

#### Example

```typescript
const options = await client.knowledge.getStrategyOptions('sentence');
console.log(options); // available parameters and their defaults
```

***

### listCollections()

```ts
listCollections(params?: Record<string, unknown>): Promise<KnowledgeCollection[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:66

Lists all knowledge collections.

Returns every collection in the system. Use optional parameters
to filter or paginate the results.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`KnowledgeCollection`[]\>

A promise that resolves to an array of [KnowledgeCollection](../interfaces/KnowledgeCollection) objects

#### Example

```typescript
const collections = await client.knowledge.listCollections();
```

***

### listDocuments()

```ts
listDocuments(id: string, params?: Record<string, unknown>): Promise<KnowledgeDocument[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:189

Lists all documents in a knowledge collection.

Returns the documents belonging to the specified collection with
their metadata. Does not include chunk-level content.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`KnowledgeDocument`[]\>

A promise that resolves to an array of [KnowledgeDocument](../interfaces/KnowledgeDocument) objects

#### Example

```typescript
const docs = await client.knowledge.listDocuments('col-123');
docs.forEach(d => console.log(d.title));
```

***

### rechunkDocument()

```ts
rechunkDocument(documentId: string, data?: RechunkDocumentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:245

Re-chunks a document using updated chunking settings.

Discards existing chunks and re-processes the document with the
current or specified chunking strategy. Useful after changing
collection settings or chunking parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `documentId` | `string` | The unique identifier of the document to re-chunk |
| `data?` | `RechunkDocumentRequest` | Optional parameters specifying the new chunking configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when re-chunking is complete

#### Example

```typescript
await client.knowledge.rechunkDocument('doc-456', { chunkSize: 512 });
```

***

### updateChunk()

```ts
updateChunk(chunkId: string, data: UpdateKnowledgeChunkRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:268

Updates a specific chunk's content or metadata.

Modifies an individual chunk within a document. Useful for
correcting chunking artifacts or adding manual annotations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chunkId` | `string` | The unique identifier of the chunk to update |
| `data` | `UpdateKnowledgeChunkRequest` | The fields to update on the chunk |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the chunk has been updated

#### Example

```typescript
await client.knowledge.updateChunk('chunk-789', {
  content: 'Corrected chunk content...',
});
```

***

### updateCollection()

```ts
updateCollection(id: string, data: UpdateKnowledgeCollectionRequest): Promise<KnowledgeCollection>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:105

Updates a knowledge collection's properties.

Modifies collection settings such as name, description, or
chunking configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection to update |
| `data` | `UpdateKnowledgeCollectionRequest` | The fields to update |

#### Returns

`Promise`\<`KnowledgeCollection`\>

A promise that resolves to the updated [KnowledgeCollection](../interfaces/KnowledgeCollection)

#### Example

```typescript
const updated = await client.knowledge.updateCollection('col-123', {
  name: 'updated-docs',
});
```

***

### updateSettings()

```ts
updateSettings(id: string, data: UpdateKnowledgeSettingsRequest): Promise<KnowledgeCollectionSettings>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge.api.ts:312

Updates the settings for a knowledge collection.

Modifies chunking strategy, chunk size, overlap, and other processing
parameters. Existing documents are not automatically re-chunked;
use [rechunkDocument](#rechunkdocument) to apply new settings to existing content.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the collection |
| `data` | `UpdateKnowledgeSettingsRequest` | The settings to update |

#### Returns

`Promise`\<`KnowledgeCollectionSettings`\>

A promise that resolves to the updated KnowledgeCollectionSettings

#### Example

```typescript
const settings = await client.knowledge.updateSettings('col-123', {
  chunkSize: 1024,
  overlap: 128,
});
```
