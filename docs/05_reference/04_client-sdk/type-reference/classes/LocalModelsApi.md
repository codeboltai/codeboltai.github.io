---
title: LocalModelsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: LocalModelsApi

Defined in: CodeBolt/packages/clientsdk/src/api/local-models.api.ts:11

Provides API methods for managing locally hosted AI models.

Handles the full lifecycle of local models including discovery, download, loading into
memory for inference, and cleanup. Local models run on the user's own hardware, providing
offline capability and data privacy without relying on external API services.

## Constructors

### Constructor

```ts
new LocalModelsApi(http: HttpClient): LocalModelsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/local-models.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`LocalModelsApi`

## Methods

### delete()

```ts
delete(modelId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/local-models.api.ts:102

Deletes a downloaded model from local storage.

Permanently removes the model files from disk, freeing storage space. The model must
be unloaded from memory before deletion. It can be re-downloaded later if needed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modelId` | `string` | The unique identifier of the model to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the model has been removed from disk

#### Example

```typescript
await client.localModels.delete('llama3:8b');
```

***

### download()

```ts
download(data: DownloadLocalModelRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/local-models.api.ts:84

Initiates the download of a model for local execution.

Starts an asynchronous download of the specified model. Large models may take
significant time and disk space. Monitor download progress through status endpoints.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `DownloadLocalModelRequest` | The download request configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the download has been initiated

#### Example

```typescript
await client.localModels.download({ modelId: 'llama3:8b' });
```

***

### get()

```ts
get(modelId: string): Promise<LocalModel>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/local-models.api.ts:65

Retrieves detailed information about a specific local model.

Returns comprehensive metadata for a model including its size, quantization level,
architecture, and current status (downloaded, loaded, etc.).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modelId` | `string` | The unique identifier of the model to retrieve |

#### Returns

`Promise`\<`LocalModel`\>

A promise that resolves to the model's detailed information

#### Example

```typescript
const model = await client.localModels.get('llama3:8b');
console.log(`Model size: ${model.size} bytes`);
```

***

### getAvailable()

```ts
getAvailable(): Promise<LocalModel[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/local-models.api.ts:28

Retrieves the catalog of models available for local download and execution.

Returns all models that can be downloaded from supported registries (e.g., Ollama, GGUF)
for local inference. Use this to browse what models are available before downloading.

#### Returns

`Promise`\<`LocalModel`[]\>

A promise that resolves to an array of available local models

#### Example

```typescript
const available = await client.localModels.getAvailable();
const smallModels = available.filter(m => m.size < 10_000_000_000);
```

***

### list()

```ts
list(): Promise<LocalModel[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/local-models.api.ts:46

Lists all models that have been downloaded to the local machine.

Returns metadata for models currently stored on disk, regardless of whether they are
currently loaded into memory for inference.

#### Returns

`Promise`\<`LocalModel`[]\>

A promise that resolves to an array of downloaded local models

#### Example

```typescript
const downloaded = await client.localModels.list();
console.log(`${downloaded.length} models on disk`);
```

***

### load()

```ts
load(data: LoadLocalModelRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/local-models.api.ts:122

Loads a downloaded model into system memory for inference.

Prepares a local model for use by loading its weights into RAM or VRAM. The model
must be downloaded first. Once loaded, it can serve inference requests without
additional startup latency.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `LoadLocalModelRequest` | The load request configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the model has been loaded into memory

#### Example

```typescript
await client.localModels.load({ modelId: 'llama3:8b' });
```

***

### unload()

```ts
unload(data: UnloadLocalModelRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/local-models.api.ts:141

Unloads a model from system memory.

Releases the memory (RAM/VRAM) occupied by a loaded model. The model remains on disk
and can be loaded again later. Use this to free resources when a model is no longer needed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UnloadLocalModelRequest` | The unload request configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the model has been unloaded from memory

#### Example

```typescript
await client.localModels.unload({ modelId: 'llama3:8b' });
```
