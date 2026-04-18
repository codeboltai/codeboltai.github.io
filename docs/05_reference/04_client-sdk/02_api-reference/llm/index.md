---
cbapicategory:
  - name: cancelDownload
    link: /docs/reference/client-sdk/api-reference/llm/cancelDownload
    description: "Cancels an in-progress model download.

Stops the download of a model that was previously initiated with .
Any partially downloaded data may be cleaned up."
  - name: deleteLocalModel
    link: /docs/reference/client-sdk/api-reference/llm/deleteLocalModel
    description: "Deletes a locally downloaded model from disk.

Permanently removes a model that was previously downloaded for local execution,
freeing up disk space. The model can be re-downloaded later if needed."
  - name: downloadModel
    link: /docs/reference/client-sdk/api-reference/llm/downloadModel
    description: "Initiates the download of a model for local use.

Starts an asynchronous download of a model that can be run locally (e.g., via Ollama).
Use  to monitor progress."
  - name: getAllModels
    link: /docs/reference/client-sdk/api-reference/llm/getAllModels
    description: "Retrieves all models across all configured providers.

Returns a flat list of every available model from all providers. Optionally accepts
filter criteria to narrow results by capability, provider, or other attributes."
  - name: getDownloadedLocalModels
    link: /docs/reference/client-sdk/api-reference/llm/getDownloadedLocalModels
    description: "Retrieves the list of models that have been downloaded for local execution.

Returns all models currently available on disk for local inference, as opposed to
cloud-hosted models that require API calls."
  - name: getDownloadStatus
    link: /docs/reference/client-sdk/api-reference/llm/getDownloadStatus
    description: "Checks the current download status of a model.

Returns progress information for an active or completed model download, including
percentage complete, bytes downloaded, and any error state."
  - name: getEmbeddingSupportedLLMs
    link: /docs/reference/client-sdk/api-reference/llm/getEmbeddingSupportedLLMs
    description: "Retrieves LLM providers that support text embedding capabilities.

Filters providers to only those offering embedding models, which convert text into
numerical vectors for semantic search, similarity matching, and RAG workflows."
  - name: getLocalAgent
    link: /docs/reference/client-sdk/api-reference/llm/getLocalAgent
    description: "Retrieves the LLM configuration for a specific local agent.

Returns the provider and model settings that have been configured for the given agent,
or the default configuration if no agent-specific override exists."
  - name: getModels
    link: /docs/reference/client-sdk/api-reference/llm/getModels
    description: "Retrieves the available models for a specific LLM provider.

Queries the models catalog for a given provider, returning all models that can be
used with that provider's current configuration and API key."
  - name: getPricing
    link: /docs/reference/client-sdk/api-reference/llm/getPricing
    description: "Fetches the current pricing information for all LLM models.

Returns token pricing data (input/output cost per token) for each model across all
providers. Useful for cost estimation and budget tracking of LLM usage."
  - name: getProviders
    link: /docs/reference/client-sdk/api-reference/llm/getProviders
    description: "Retrieves all configured LLM providers with their current status and available models.

Returns the complete list of LLM providers (e.g., OpenAI, Anthropic, Ollama) that have
been configured in the system, including whether they have valid API keys set."
  - name: setDefault
    link: /docs/reference/client-sdk/api-reference/llm/setDefault
    description: "Sets the default LLM model and provider for the workspace.

Configures which model is used by default when no specific model is requested.
This affects all operations that rely on LLM inference without explicit model selection."
  - name: setLocalAgent
    link: /docs/reference/client-sdk/api-reference/llm/setLocalAgent
    description: "Configures the LLM settings for a specific local agent.

Allows overriding the default LLM configuration on a per-agent basis, so different
agents can use different models or provider settings tailored to their tasks."
  - name: updateKey
    link: /docs/reference/client-sdk/api-reference/llm/updateKey
    description: "Updates the API key for a specific LLM provider.

Sets or rotates the authentication key used to communicate with an LLM provider's API.
The key is stored securely and used for all subsequent requests to that provider."
  - name: updatePricingToLocal
    link: /docs/reference/client-sdk/api-reference/llm/updatePricingToLocal
    description: "Syncs the latest LLM pricing information to local storage.

Downloads the most up-to-date pricing catalog from the remote source and persists it
locally. Call this periodically to ensure cost calculations reflect current rates."
---
# Llm API

LLM API - language model operations

<CBAPICategory />

## Methods

- [`cancelDownload()`](./cancelDownload) — Cancels an in-progress model download.

Stops the download of a model that was previously initiated with .
Any partially downloaded data may be cleaned up.
- [`deleteLocalModel()`](./deleteLocalModel) — Deletes a locally downloaded model from disk.

Permanently removes a model that was previously downloaded for local execution,
freeing up disk space. The model can be re-downloaded later if needed.
- [`downloadModel()`](./downloadModel) — Initiates the download of a model for local use.

Starts an asynchronous download of a model that can be run locally (e.g., via Ollama).
Use  to monitor progress.
- [`getAllModels()`](./getAllModels) — Retrieves all models across all configured providers.

Returns a flat list of every available model from all providers. Optionally accepts
filter criteria to narrow results by capability, provider, or other attributes.
- [`getDownloadedLocalModels()`](./getDownloadedLocalModels) — Retrieves the list of models that have been downloaded for local execution.

Returns all models currently available on disk for local inference, as opposed to
cloud-hosted models that require API calls.
- [`getDownloadStatus()`](./getDownloadStatus) — Checks the current download status of a model.

Returns progress information for an active or completed model download, including
percentage complete, bytes downloaded, and any error state.
- [`getEmbeddingSupportedLLMs()`](./getEmbeddingSupportedLLMs) — Retrieves LLM providers that support text embedding capabilities.

Filters providers to only those offering embedding models, which convert text into
numerical vectors for semantic search, similarity matching, and RAG workflows.
- [`getLocalAgent()`](./getLocalAgent) — Retrieves the LLM configuration for a specific local agent.

Returns the provider and model settings that have been configured for the given agent,
or the default configuration if no agent-specific override exists.
- [`getModels()`](./getModels) — Retrieves the available models for a specific LLM provider.

Queries the models catalog for a given provider, returning all models that can be
used with that provider's current configuration and API key.
- [`getPricing()`](./getPricing) — Fetches the current pricing information for all LLM models.

Returns token pricing data (input/output cost per token) for each model across all
providers. Useful for cost estimation and budget tracking of LLM usage.
- [`getProviders()`](./getProviders) — Retrieves all configured LLM providers with their current status and available models.

Returns the complete list of LLM providers (e.g., OpenAI, Anthropic, Ollama) that have
been configured in the system, including whether they have valid API keys set.
- [`setDefault()`](./setDefault) — Sets the default LLM model and provider for the workspace.

Configures which model is used by default when no specific model is requested.
This affects all operations that rely on LLM inference without explicit model selection.
- [`setLocalAgent()`](./setLocalAgent) — Configures the LLM settings for a specific local agent.

Allows overriding the default LLM configuration on a per-agent basis, so different
agents can use different models or provider settings tailored to their tasks.
- [`updateKey()`](./updateKey) — Updates the API key for a specific LLM provider.

Sets or rotates the authentication key used to communicate with an LLM provider's API.
The key is stored securely and used for all subsequent requests to that provider.
- [`updatePricingToLocal()`](./updatePricingToLocal) — Syncs the latest LLM pricing information to local storage.

Downloads the most up-to-date pricing catalog from the remote source and persists it
locally. Call this periodically to ensure cost calculations reflect current rates.
