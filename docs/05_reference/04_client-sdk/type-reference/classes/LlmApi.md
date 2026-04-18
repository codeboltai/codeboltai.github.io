---
title: LlmApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: LlmApi

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:22

Provides API methods for managing Large Language Model (LLM) providers, models, and configurations.

Handles all LLM-related operations including provider management, API key configuration,
model selection, local model downloads, and per-agent LLM settings. This is the central
API for controlling which AI models are available and how they are configured in CodeBolt.

## Constructors

### Constructor

```ts
new LlmApi(http: HttpClient): LlmApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`LlmApi`

## Methods

### cancelDownload()

```ts
cancelDownload(data: LLMCancelDownloadRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:240

Cancels an in-progress model download.

Stops the download of a model that was previously initiated with [downloadModel](#downloadmodel).
Any partially downloaded data may be cleaned up.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `LLMCancelDownloadRequest` | The cancellation request identifying the download to stop |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the cancellation has been processed

***

### deleteLocalModel()

```ts
deleteLocalModel(modelId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:295

Deletes a locally downloaded model from disk.

Permanently removes a model that was previously downloaded for local execution,
freeing up disk space. The model can be re-downloaded later if needed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modelId` | `string` | The identifier of the local model to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the model has been deleted

#### Example

```typescript
await client.llm.deleteLocalModel('llama3:8b');
```

***

### downloadModel()

```ts
downloadModel(data: LLMDownloadModelRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:226

Initiates the download of a model for local use.

Starts an asynchronous download of a model that can be run locally (e.g., via Ollama).
Use [getDownloadStatus](#getdownloadstatus) to monitor progress.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `LLMDownloadModelRequest` | The download request specifying which model to download |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the download has been initiated

#### Example

```typescript
await client.llm.downloadModel({ modelId: 'llama3:8b' });
const status = await client.llm.getDownloadStatus('llama3:8b');
```

***

### getAllModels()

```ts
getAllModels(data?: Record<string, unknown>): Promise<LLMModel[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:99

Retrieves all models across all configured providers.

Returns a flat list of every available model from all providers. Optionally accepts
filter criteria to narrow results by capability, provider, or other attributes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `Record`\<`string`, `unknown`\> | Optional filter criteria for narrowing the model list |

#### Returns

`Promise`\<`LLMModel`[]\>

A promise that resolves to an array of all available LLM models

#### Example

```typescript
const allModels = await client.llm.getAllModels();
console.log(`Total available models: ${allModels.length}`);
```

***

### getDownloadedLocalModels()

```ts
getDownloadedLocalModels(): Promise<LLMModel[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:277

Retrieves the list of models that have been downloaded for local execution.

Returns all models currently available on disk for local inference, as opposed to
cloud-hosted models that require API calls.

#### Returns

`Promise`\<`LLMModel`[]\>

A promise that resolves to an array of locally downloaded models

#### Example

```typescript
const localModels = await client.llm.getDownloadedLocalModels();
console.log(`${localModels.length} models available locally`);
```

***

### getDownloadStatus()

```ts
getDownloadStatus(modelId: string): Promise<LLMDownloadStatus>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:259

Checks the current download status of a model.

Returns progress information for an active or completed model download, including
percentage complete, bytes downloaded, and any error state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modelId` | `string` | The identifier of the model to check |

#### Returns

`Promise`\<`LLMDownloadStatus`\>

A promise that resolves to the current download status

#### Example

```typescript
const status = await client.llm.getDownloadStatus('llama3:8b');
console.log(`Download progress: ${status.progress}%`);
```

***

### getEmbeddingSupportedLLMs()

```ts
getEmbeddingSupportedLLMs(): Promise<LLMProvider[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:80

Retrieves LLM providers that support text embedding capabilities.

Filters providers to only those offering embedding models, which convert text into
numerical vectors for semantic search, similarity matching, and RAG workflows.

#### Returns

`Promise`\<`LLMProvider`[]\>

A promise that resolves to an array of embedding-capable LLM providers

#### Example

```typescript
const embeddingProviders = await client.llm.getEmbeddingSupportedLLMs();
```

***

### getLocalAgent()

```ts
getLocalAgent(agentName: string): Promise<LLMLocalAgentConfig>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:206

Retrieves the LLM configuration for a specific local agent.

Returns the provider and model settings that have been configured for the given agent,
or the default configuration if no agent-specific override exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentName` | `string` | The name of the agent whose LLM configuration to retrieve |

#### Returns

`Promise`\<`LLMLocalAgentConfig`\>

A promise that resolves to the agent's LLM configuration

#### Example

```typescript
const config = await client.llm.getLocalAgent('code-reviewer');
console.log(`Agent uses: ${config.modelId}`);
```

***

### getModels()

```ts
getModels(data: LLMGetModelsRequest): Promise<LLMModel[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:164

Retrieves the available models for a specific LLM provider.

Queries the models catalog for a given provider, returning all models that can be
used with that provider's current configuration and API key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `LLMGetModelsRequest` | The request specifying which provider's models to retrieve |

#### Returns

`Promise`\<`LLMModel`[]\>

A promise that resolves to an array of models available for the provider

#### Example

```typescript
const models = await client.llm.getModels({ providerId: 'openai' });
```

***

### getPricing()

```ts
getPricing(): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:51

Fetches the current pricing information for all LLM models.

Returns token pricing data (input/output cost per token) for each model across all
providers. Useful for cost estimation and budget tracking of LLM usage.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the pricing data for all available models

***

### getProviders()

```ts
getProviders(): Promise<LLMProvider[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:39

Retrieves all configured LLM providers with their current status and available models.

Returns the complete list of LLM providers (e.g., OpenAI, Anthropic, Ollama) that have
been configured in the system, including whether they have valid API keys set.

#### Returns

`Promise`\<`LLMProvider`[]\>

A promise that resolves to an array of LLM provider configurations

#### Example

```typescript
const providers = await client.llm.getProviders();
const activeProviders = providers.filter(p => p.isActive);
```

***

### setDefault()

```ts
setDefault(data: LLMSetDefaultRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:145

Sets the default LLM model and provider for the workspace.

Configures which model is used by default when no specific model is requested.
This affects all operations that rely on LLM inference without explicit model selection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `LLMSetDefaultRequest` | The default LLM configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the default has been updated

#### Example

```typescript
await client.llm.setDefault({
  providerId: 'anthropic',
  modelId: 'claude-sonnet-4-5-20250929',
});
```

***

### setLocalAgent()

```ts
setLocalAgent(data: LLMLocalAgentConfig): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:187

Configures the LLM settings for a specific local agent.

Allows overriding the default LLM configuration on a per-agent basis, so different
agents can use different models or provider settings tailored to their tasks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `LLMLocalAgentConfig` | The agent-specific LLM configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the agent configuration has been saved

#### Example

```typescript
await client.llm.setLocalAgent({
  agentName: 'code-reviewer',
  providerId: 'anthropic',
  modelId: 'claude-sonnet-4-5-20250929',
});
```

***

### updateKey()

```ts
updateKey(data: LLMUpdateKeyRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:122

Updates the API key for a specific LLM provider.

Sets or rotates the authentication key used to communicate with an LLM provider's API.
The key is stored securely and used for all subsequent requests to that provider.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `LLMUpdateKeyRequest` | The key update request |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the key has been updated

#### Example

```typescript
await client.llm.updateKey({
  providerId: 'openai',
  apiKey: 'sk-...',
});
```

***

### updatePricingToLocal()

```ts
updatePricingToLocal(): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/llm.api.ts:63

Syncs the latest LLM pricing information to local storage.

Downloads the most up-to-date pricing catalog from the remote source and persists it
locally. Call this periodically to ensure cost calculations reflect current rates.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the local pricing data has been updated
