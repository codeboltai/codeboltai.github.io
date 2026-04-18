---
cbapicategory:
  - name: addDocumentFromUrl
    link: /docs/reference/client-sdk/api-reference/knowledge/addDocumentFromUrl
    description: "Adds a document to a collection by fetching it from a URL.

Downloads the content at the specified URL and adds it as a document
to the collection. The content is automatically parsed and chunked."
  - name: addDocuments
    link: /docs/reference/client-sdk/api-reference/knowledge/addDocuments
    description: "Adds one or more documents to a knowledge collection.

Uploads documents that will be automatically processed, chunked,
and indexed for retrieval. Supports multiple documents in a single request."
  - name: createCollection
    link: /docs/reference/client-sdk/api-reference/knowledge/createCollection
    description: "Creates a new knowledge collection.

A collection is a named container for related documents. Documents
added to a collection are automatically chunked and indexed for
retrieval by agents."
  - name: deleteCollection
    link: /docs/reference/client-sdk/api-reference/knowledge/deleteCollection
    description: "Deletes a knowledge collection and all its documents.

Permanently removes the collection, its documents, and all
associated chunks. This action cannot be undone."
  - name: deleteDocument
    link: /docs/reference/client-sdk/api-reference/knowledge/deleteDocument
    description: "Deletes a document and all its associated chunks.

Permanently removes the document from its collection. The collection
itself is not affected."
  - name: getCollection
    link: /docs/reference/client-sdk/api-reference/knowledge/getCollection
    description: "Retrieves a specific knowledge collection by its ID.

Returns the full details of a collection including its metadata,
document count, and configuration."
  - name: getDocument
    link: /docs/reference/client-sdk/api-reference/knowledge/getDocument
    description: "Retrieves a specific document by its ID.

Returns the full details of a document including its metadata,
processing status, and chunk count."
  - name: getSettings
    link: /docs/reference/client-sdk/api-reference/knowledge/getSettings
    description: "Retrieves the settings for a knowledge collection.

Returns the collection's chunking configuration, embedding settings,
and other processing parameters."
  - name: getStrategies
    link: /docs/reference/client-sdk/api-reference/knowledge/getStrategies
    description: "Retrieves all available chunking strategies.

Returns the list of chunking algorithms that can be used when
processing documents (e.g., fixed-size, sentence-based, semantic)."
  - name: getStrategyOptions
    link: /docs/reference/client-sdk/api-reference/knowledge/getStrategyOptions
    description: "Retrieves the configurable options for a specific chunking strategy.

Returns the parameter schema for the strategy, including defaults
and valid ranges. Use this to build dynamic configuration UIs."
  - name: listCollections
    link: /docs/reference/client-sdk/api-reference/knowledge/listCollections
    description: "Lists all knowledge collections.

Returns every collection in the system. Use optional parameters
to filter or paginate the results."
  - name: listDocuments
    link: /docs/reference/client-sdk/api-reference/knowledge/listDocuments
    description: "Lists all documents in a knowledge collection.

Returns the documents belonging to the specified collection with
their metadata. Does not include chunk-level content."
  - name: rechunkDocument
    link: /docs/reference/client-sdk/api-reference/knowledge/rechunkDocument
    description: "Re-chunks a document using updated chunking settings.

Discards existing chunks and re-processes the document with the
current or specified chunking strategy. Useful after changing
collection settings or chunking parameters."
  - name: updateChunk
    link: /docs/reference/client-sdk/api-reference/knowledge/updateChunk
    description: "Updates a specific chunk's content or metadata.

Modifies an individual chunk within a document. Useful for
correcting chunking artifacts or adding manual annotations."
  - name: updateCollection
    link: /docs/reference/client-sdk/api-reference/knowledge/updateCollection
    description: "Updates a knowledge collection's properties.

Modifies collection settings such as name, description, or
chunking configuration."
  - name: updateSettings
    link: /docs/reference/client-sdk/api-reference/knowledge/updateSettings
    description: "Updates the settings for a knowledge collection.

Modifies chunking strategy, chunk size, overlap, and other processing
parameters. Existing documents are not automatically re-chunked;
use  to apply new settings to existing content."
---
# Knowledge API

Knowledge API

<CBAPICategory />

## Methods

- [`addDocumentFromUrl()`](./addDocumentFromUrl) — Adds a document to a collection by fetching it from a URL.

Downloads the content at the specified URL and adds it as a document
to the collection. The content is automatically parsed and chunked.
- [`addDocuments()`](./addDocuments) — Adds one or more documents to a knowledge collection.

Uploads documents that will be automatically processed, chunked,
and indexed for retrieval. Supports multiple documents in a single request.
- [`createCollection()`](./createCollection) — Creates a new knowledge collection.

A collection is a named container for related documents. Documents
added to a collection are automatically chunked and indexed for
retrieval by agents.
- [`deleteCollection()`](./deleteCollection) — Deletes a knowledge collection and all its documents.

Permanently removes the collection, its documents, and all
associated chunks. This action cannot be undone.
- [`deleteDocument()`](./deleteDocument) — Deletes a document and all its associated chunks.

Permanently removes the document from its collection. The collection
itself is not affected.
- [`getCollection()`](./getCollection) — Retrieves a specific knowledge collection by its ID.

Returns the full details of a collection including its metadata,
document count, and configuration.
- [`getDocument()`](./getDocument) — Retrieves a specific document by its ID.

Returns the full details of a document including its metadata,
processing status, and chunk count.
- [`getSettings()`](./getSettings) — Retrieves the settings for a knowledge collection.

Returns the collection's chunking configuration, embedding settings,
and other processing parameters.
- [`getStrategies()`](./getStrategies) — Retrieves all available chunking strategies.

Returns the list of chunking algorithms that can be used when
processing documents (e.g., fixed-size, sentence-based, semantic).
- [`getStrategyOptions()`](./getStrategyOptions) — Retrieves the configurable options for a specific chunking strategy.

Returns the parameter schema for the strategy, including defaults
and valid ranges. Use this to build dynamic configuration UIs.
- [`listCollections()`](./listCollections) — Lists all knowledge collections.

Returns every collection in the system. Use optional parameters
to filter or paginate the results.
- [`listDocuments()`](./listDocuments) — Lists all documents in a knowledge collection.

Returns the documents belonging to the specified collection with
their metadata. Does not include chunk-level content.
- [`rechunkDocument()`](./rechunkDocument) — Re-chunks a document using updated chunking settings.

Discards existing chunks and re-processes the document with the
current or specified chunking strategy. Useful after changing
collection settings or chunking parameters.
- [`updateChunk()`](./updateChunk) — Updates a specific chunk's content or metadata.

Modifies an individual chunk within a document. Useful for
correcting chunking artifacts or adding manual annotations.
- [`updateCollection()`](./updateCollection) — Updates a knowledge collection's properties.

Modifies collection settings such as name, description, or
chunking configuration.
- [`updateSettings()`](./updateSettings) — Updates the settings for a knowledge collection.

Modifies chunking strategy, chunk size, overlap, and other processing
parameters. Existing documents are not automatically re-chunked;
use  to apply new settings to existing content.
