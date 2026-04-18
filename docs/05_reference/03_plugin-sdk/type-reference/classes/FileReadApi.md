---
title: FileReadApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: FileReadApi

Defined in: CodeBolt/packages/pluginSdk/src/api/fileread.api.ts:17

Provides file reading, searching, and autocomplete functionality.

Use this API to search for files by name or content, get autocomplete
suggestions for file and folder paths, and read file contents. This is
the primary API for file discovery and content retrieval.

## Constructors

### Constructor

```ts
new FileReadApi(http: HttpClient): FileReadApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/fileread.api.ts:18

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

Defined in: CodeBolt/packages/pluginSdk/src/api/fileread.api.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `FileSearchParams` |

#### Returns

`Promise`\<`FileSearchResult`[]\>

***

### autocomplete()

```ts
autocomplete(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/fileread.api.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `FileAutocompleteParams` |

#### Returns

`Promise`\<`FileAutocompleteResult`[]\>

***

### autocompleteFolders()

```ts
autocompleteFolders(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/fileread.api.ts:36

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `FileAutocompleteParams` |

#### Returns

`Promise`\<`FileAutocompleteResult`[]\>

***

### autocompleteForSearch()

```ts
autocompleteForSearch(params?: FileSearchParams): Promise<FileAutocompleteResult[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/fileread.api.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `FileSearchParams` |

#### Returns

`Promise`\<`FileAutocompleteResult`[]\>

***

### read()

```ts
read(params?: FileReadParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/fileread.api.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `FileReadParams` |

#### Returns

`Promise`\<`unknown`\>

***

### search()

```ts
search(params?: FileSearchParams): Promise<FileSearchResult[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/fileread.api.ts:24

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `FileSearchParams` |

#### Returns

`Promise`\<`FileSearchResult`[]\>
