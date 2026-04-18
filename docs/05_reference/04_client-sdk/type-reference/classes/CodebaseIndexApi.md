---
title: CodebaseIndexApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: CodebaseIndexApi

Defined in: CodeBolt/packages/clientsdk/src/api/codebase-index.api.ts:11

Manages codebase indexing and search in the CodeBolt runtime.

The codebase index provides fast, structured search over project files by
building and maintaining an index of the source code. This API handles
triggering indexing, checking status, detecting changes, and searching.

## Constructors

### Constructor

```ts
new CodebaseIndexApi(http: HttpClient): CodebaseIndexApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebase-index.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`CodebaseIndexApi`

## Methods

### checkChanges()

```ts
checkChanges(): Promise<CodebaseChanges>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebase-index.api.ts:64

Checks for changes since the last indexing run.

Compares the current filesystem state against the last indexed state
to identify new, modified, or deleted files.

#### Returns

`Promise`\<`CodebaseChanges`\>

A promise that resolves to the detected CodebaseChanges

#### Example

```typescript
const changes = await client.codebaseIndex.checkChanges();
console.log(`${changes.added.length} new files since last index`);
```

***

### getStatus()

```ts
getStatus(): Promise<CodebaseIndexStatus>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebase-index.api.ts:46

Retrieves the current indexing status.

Returns information about whether indexing is in progress, when it
last completed, and how many files have been indexed.

#### Returns

`Promise`\<`CodebaseIndexStatus`\>

A promise that resolves to the CodebaseIndexStatus

#### Example

```typescript
const status = await client.codebaseIndex.getStatus();
console.log(`Indexed ${status.fileCount} files`);
```

***

### index()

```ts
index(data?: CodebaseIndexRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebase-index.api.ts:28

Triggers codebase indexing.

Starts an indexing operation that scans the project files and builds
or updates the search index. This may take time for large codebases.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `CodebaseIndexRequest` | Optional indexing configuration (e.g., paths to include/exclude) |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when indexing has been initiated

#### Example

```typescript
await client.codebaseIndex.index({ paths: ['src/'] });
```

***

### search()

```ts
search(data: CodebaseSearchRequest): Promise<CodebaseSearchResult[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebase-index.api.ts:85

Searches the codebase index.

Performs a structured search over the indexed codebase, returning
matching files and code snippets ranked by relevance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CodebaseSearchRequest` | The search query and filter parameters |

#### Returns

`Promise`\<`CodebaseSearchResult`[]\>

A promise that resolves to an array of CodebaseSearchResult objects

#### Example

```typescript
const results = await client.codebaseIndex.search({
  query: 'authentication middleware',
});
results.forEach(r => console.log(r.filePath, r.score));
```
