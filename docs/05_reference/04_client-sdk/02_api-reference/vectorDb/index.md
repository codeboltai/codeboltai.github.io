---
cbapicategory:
  - name: addChunks
    link: /docs/reference/client-sdk/api-reference/vectorDb/addChunks
    description: "Adds chunks to a vector collection.

Manually adds pre-chunked text segments to the collection with their
embeddings. This is useful when you have custom chunking logic or
want to add chunks without full document processing."
  - name: addDocuments
    link: /docs/reference/client-sdk/api-reference/vectorDb/addDocuments
    description: "Adds documents to a vector collection.

Ingests new documents into the collection, automatically generating
embeddings and storing them for similarity search. Documents can include
text content and metadata for filtering."
  - name: createCollection
    link: /docs/reference/client-sdk/api-reference/vectorDb/createCollection
    description: "Creates a new vector collection.

Initializes a new collection with specified configuration including
dimensionality, embedding model, and metadata settings. Collections
are used to store and manage vectors for similarity search operations."
  - name: createIndex
    link: /docs/reference/client-sdk/api-reference/vectorDb/createIndex
    description: "Creates a vector index for a collection.

Initializes an index structure to optimize similarity search
performance. Indexes enable fast nearest neighbor queries on
high-dimensional vectors and are essential for efficient retrieval."
  - name: deleteChunk
    link: /docs/reference/client-sdk/api-reference/vectorDb/deleteChunk
    description: "Deletes a specific chunk from a vector collection.

Removes a single chunk by its unique identifier. This is useful for
granular cleanup when individual chunks need to be removed without
affecting other content in the collection."
  - name: deleteCollection
    link: /docs/reference/client-sdk/api-reference/vectorDb/deleteCollection
    description: "Deletes a vector collection.

Permanently removes a collection and all its associated data including
documents, chunks, and index information. This operation cannot be undone."
  - name: deleteDocuments
    link: /docs/reference/client-sdk/api-reference/vectorDb/deleteDocuments
    description: "Deletes documents from a vector collection.

Removes specified documents from the collection based on provided
criteria such as document IDs or metadata filters. This operation
cleans up the collection and frees storage."
  - name: getChunks
    link: /docs/reference/client-sdk/api-reference/vectorDb/getChunks
    description: "Retrieves chunks from a vector collection.

Fetches text chunks that were created when documents were processed.
Chunks are smaller segments of documents used for more granular
similarity search and retrieval operations."
  - name: getCollection
    link: /docs/reference/client-sdk/api-reference/vectorDb/getCollection
    description: "Retrieves a vector collection by its ID.

Fetches detailed information about a specific collection including
its configuration, statistics, and metadata. Use this to inspect
collection properties or verify collection existence."
  - name: getDocuments
    link: /docs/reference/client-sdk/api-reference/vectorDb/getDocuments
    description: "Retrieves documents from a vector collection.

Fetches documents stored in the collection with optional filtering and
pagination parameters. Use this to inspect stored content or retrieve
specific documents by criteria."
  - name: getSettings
    link: /docs/reference/client-sdk/api-reference/vectorDb/getSettings
    description: "Retrieves settings for a vector collection.

Fetches the configuration and settings applied to a collection
including index types, distance metrics, and other operational
parameters."
  - name: listCollections
    link: /docs/reference/client-sdk/api-reference/vectorDb/listCollections
    description: "Lists all vector collections.

Retrieves every collection in the vector database system. Use optional
query parameters to filter or paginate results. This is useful for
browsing available collections or displaying a collection catalog."
  - name: query
    link: /docs/reference/client-sdk/api-reference/vectorDb/query
    description: "Queries a vector collection for similar documents.

Performs semantic similarity search using a query vector or text.
Returns documents or chunks ranked by similarity score, enabling
retrieval of contextually relevant content for RAG applications."
  - name: updateCollection
    link: /docs/reference/client-sdk/api-reference/vectorDb/updateCollection
    description: "Updates a vector collection.

Modifies the configuration of an existing collection such as name,
metadata, or other configurable properties. The collection ID must
be valid and the collection must exist."
  - name: updateSettings
    link: /docs/reference/client-sdk/api-reference/vectorDb/updateSettings
    description: "Updates settings for a vector collection.

Modifies the configuration parameters of a collection such as
distance metric, index type, or other settings. Some settings
may require index rebuild or have performance implications."
---
# VectorDb API

Vector DB API

<CBAPICategory />

## Methods

- [`addChunks()`](./addChunks) — Adds chunks to a vector collection.

Manually adds pre-chunked text segments to the collection with their
embeddings. This is useful when you have custom chunking logic or
want to add chunks without full document processing.
- [`addDocuments()`](./addDocuments) — Adds documents to a vector collection.

Ingests new documents into the collection, automatically generating
embeddings and storing them for similarity search. Documents can include
text content and metadata for filtering.
- [`createCollection()`](./createCollection) — Creates a new vector collection.

Initializes a new collection with specified configuration including
dimensionality, embedding model, and metadata settings. Collections
are used to store and manage vectors for similarity search operations.
- [`createIndex()`](./createIndex) — Creates a vector index for a collection.

Initializes an index structure to optimize similarity search
performance. Indexes enable fast nearest neighbor queries on
high-dimensional vectors and are essential for efficient retrieval.
- [`deleteChunk()`](./deleteChunk) — Deletes a specific chunk from a vector collection.

Removes a single chunk by its unique identifier. This is useful for
granular cleanup when individual chunks need to be removed without
affecting other content in the collection.
- [`deleteCollection()`](./deleteCollection) — Deletes a vector collection.

Permanently removes a collection and all its associated data including
documents, chunks, and index information. This operation cannot be undone.
- [`deleteDocuments()`](./deleteDocuments) — Deletes documents from a vector collection.

Removes specified documents from the collection based on provided
criteria such as document IDs or metadata filters. This operation
cleans up the collection and frees storage.
- [`getChunks()`](./getChunks) — Retrieves chunks from a vector collection.

Fetches text chunks that were created when documents were processed.
Chunks are smaller segments of documents used for more granular
similarity search and retrieval operations.
- [`getCollection()`](./getCollection) — Retrieves a vector collection by its ID.

Fetches detailed information about a specific collection including
its configuration, statistics, and metadata. Use this to inspect
collection properties or verify collection existence.
- [`getDocuments()`](./getDocuments) — Retrieves documents from a vector collection.

Fetches documents stored in the collection with optional filtering and
pagination parameters. Use this to inspect stored content or retrieve
specific documents by criteria.
- [`getSettings()`](./getSettings) — Retrieves settings for a vector collection.

Fetches the configuration and settings applied to a collection
including index types, distance metrics, and other operational
parameters.
- [`listCollections()`](./listCollections) — Lists all vector collections.

Retrieves every collection in the vector database system. Use optional
query parameters to filter or paginate results. This is useful for
browsing available collections or displaying a collection catalog.
- [`query()`](./query) — Queries a vector collection for similar documents.

Performs semantic similarity search using a query vector or text.
Returns documents or chunks ranked by similarity score, enabling
retrieval of contextually relevant content for RAG applications.
- [`updateCollection()`](./updateCollection) — Updates a vector collection.

Modifies the configuration of an existing collection such as name,
metadata, or other configurable properties. The collection ID must
be valid and the collection must exist.
- [`updateSettings()`](./updateSettings) — Updates settings for a vector collection.

Modifies the configuration parameters of a collection such as
distance metric, index type, or other settings. Some settings
may require index rebuild or have performance implications.
