---
title: CodemapApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: CodemapApi

Defined in: CodeBolt/packages/clientsdk/src/api/codemap.api.ts:11

Manages codemap generation and retrieval in the CodeBolt runtime.

Codemaps are structural representations of source files, capturing
classes, functions, imports, and their relationships. This API handles
generating, listing, querying, and deleting codemaps.

## Constructors

### Constructor

```ts
new CodemapApi(http: HttpClient): CodemapApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codemap.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`CodemapApi`

## Methods

### delete()

```ts
delete(codemapId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codemap.api.ts:103

Deletes a codemap by its ID.

Permanently removes the codemap from the system. The underlying
source files are not affected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `codemapId` | `string` | The unique identifier of the codemap to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.codemap.delete('map-abc');
```

***

### generate()

```ts
generate(data: GenerateCodemapRequest): Promise<Codemap>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codemap.api.ts:85

Generates a new codemap for specified files.

Parses the target files and produces a structural representation
capturing symbols, dependencies, and relationships.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GenerateCodemapRequest` | The generation request specifying target files or directories |

#### Returns

`Promise`\<`Codemap`\>

A promise that resolves to the newly generated Codemap

#### Example

```typescript
const map = await client.codemap.generate({
  path: 'src/auth/',
});
```

***

### get()

```ts
get(codemapId: string): Promise<Codemap>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codemap.api.ts:65

Retrieves a specific codemap by its ID.

Returns the full structural representation including all symbols,
relationships, and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `codemapId` | `string` | The unique identifier of the codemap |

#### Returns

`Promise`\<`Codemap`\>

A promise that resolves to the Codemap

#### Example

```typescript
const map = await client.codemap.get('map-abc');
console.log(map.symbols);
```

***

### getByPath()

```ts
getByPath(params: CodemapByPathParams): Promise<Codemap[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codemap.api.ts:46

Retrieves codemap entries by file path.

Looks up codemaps associated with a specific file path, returning
all structural information for that file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `CodemapByPathParams` | Query parameters including the file path to look up |

#### Returns

`Promise`\<`Codemap`[]\>

A promise that resolves to an array of matching Codemap objects

#### Example

```typescript
const maps = await client.codemap.getByPath({ path: 'src/index.ts' });
```

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<Codemap[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codemap.api.ts:28

Lists all codemaps.

Returns every codemap that has been generated in the current workspace.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`Codemap`[]\>

A promise that resolves to an array of Codemap objects

#### Example

```typescript
const maps = await client.codemap.list();
console.log(`${maps.length} codemaps available`);
```
