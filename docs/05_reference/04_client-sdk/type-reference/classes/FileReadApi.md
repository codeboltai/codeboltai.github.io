---
title: FileReadApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: FileReadApi

Defined in: CodeBolt/packages/clientsdk/src/api/fileread.api.ts:17

Provides file reading, searching, and autocomplete functionality.

Use this API to search for files by name or content, get autocomplete
suggestions for file and folder paths, and read file contents. This is
the primary API for file discovery and content retrieval.

## Constructors

### Constructor

```ts
new FileReadApi(http: HttpClient): FileReadApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/fileread.api.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`FileReadApi`

## Methods

### allFiles()

```ts
allFiles(params?: FileSearchParams): Promise<FileSearchResult[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/fileread.api.ts:92

Retrieves a listing of all files in the project.

Returns the complete set of files, optionally filtered by the provided
search parameters. Useful for building file indexes or bulk operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `FileSearchParams` | Optional parameters for filtering the file list |

#### Returns

`Promise`\<`FileSearchResult`[]\>

A promise that resolves to an array of FileSearchResult entries

#### Example

```typescript
const allFiles = await client.fileRead.allFiles();
console.log(`Project contains ${allFiles.length} files`);
```

***

### autocomplete()

```ts
autocomplete(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/fileread.api.ts:36

Gets autocomplete suggestions for file paths.

Returns file path completions matching a partial input string. Useful
for building file picker UIs with type-ahead functionality.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `FileAutocompleteParams` | Optional parameters including the partial path to complete |

#### Returns

`Promise`\<`FileAutocompleteResult`[]\>

A promise that resolves to an array of FileAutocompleteResult suggestions

#### Example

```typescript
const suggestions = await client.fileRead.autocomplete({ query: 'src/comp' });
// Returns matches like 'src/components/', 'src/compiler.ts', etc.
```

***

### autocompleteFolders()

```ts
autocompleteFolders(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/fileread.api.ts:110

Gets autocomplete suggestions for folder paths only.

Like [autocomplete](#autocomplete) but restricted to directories, excluding
individual files from the results. Useful for folder picker UIs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `FileAutocompleteParams` | Optional parameters including the partial folder path to complete |

#### Returns

`Promise`\<`FileAutocompleteResult`[]\>

A promise that resolves to an array of FileAutocompleteResult folder suggestions

#### Example

```typescript
const folders = await client.fileRead.autocompleteFolders({ query: 'src/' });
```

***

### autocompleteForSearch()

```ts
autocompleteForSearch(params?: FileSearchParams): Promise<FileAutocompleteResult[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/fileread.api.ts:73

Gets autocomplete suggestions optimized for search input.

Similar to [autocomplete](#autocomplete) but tailored for search-box contexts
where the user is typing a search query rather than a file path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `FileSearchParams` | Optional search parameters including the partial query |

#### Returns

`Promise`\<`FileAutocompleteResult`[]\>

A promise that resolves to an array of FileAutocompleteResult suggestions

#### Example

```typescript
const suggestions = await client.fileRead.autocompleteForSearch({ query: 'util' });
```

***

### read()

```ts
read(params?: FileReadParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/fileread.api.ts:129

Reads the content of a file.

Retrieves the full content of a file at the specified path. Returns
the raw file data suitable for display or further processing.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `FileReadParams` | Optional parameters specifying which file to read |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the file content

#### Example

```typescript
const content = await client.fileRead.read({ path: 'src/index.ts' });
```

***

### search()

```ts
search(params?: FileSearchParams): Promise<FileSearchResult[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/fileread.api.ts:55

Searches for files matching a query string.

Performs a text-based search across file names and paths in the project.
Returns matching files with their paths and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `FileSearchParams` | Optional search parameters including the query string |

#### Returns

`Promise`\<`FileSearchResult`[]\>

A promise that resolves to an array of FileSearchResult matches

#### Example

```typescript
const results = await client.fileRead.search({ query: 'index.ts' });
```
