---
cbapicategory:
  - name: delete
    link: /docs/reference/client-sdk/api-reference/localModels/delete
    description: "Deletes a downloaded model from local storage.

Permanently removes the model files from disk, freeing storage space. The model must
be unloaded from memory before deletion. It can be re-downloaded later if needed."
  - name: download
    link: /docs/reference/client-sdk/api-reference/localModels/download
    description: "Initiates the download of a model for local execution.

Starts an asynchronous download of the specified model. Large models may take
significant time and disk space. Monitor download progress through status endpoints."
  - name: get
    link: /docs/reference/client-sdk/api-reference/localModels/get
    description: "Retrieves detailed information about a specific local model.

Returns comprehensive metadata for a model including its size, quantization level,
architecture, and current status (downloaded, loaded, etc.)."
  - name: getAvailable
    link: /docs/reference/client-sdk/api-reference/localModels/getAvailable
    description: "Retrieves the catalog of models available for local download and execution.

Returns all models that can be downloaded from supported registries (e.g., Ollama, GGUF)
for local inference. Use this to browse what models are available before downloading."
  - name: list
    link: /docs/reference/client-sdk/api-reference/localModels/list
    description: "Lists all models that have been downloaded to the local machine.

Returns metadata for models currently stored on disk, regardless of whether they are
currently loaded into memory for inference."
  - name: load
    link: /docs/reference/client-sdk/api-reference/localModels/load
    description: "Loads a downloaded model into system memory for inference.

Prepares a local model for use by loading its weights into RAM or VRAM. The model
must be downloaded first. Once loaded, it can serve inference requests without
additional startup latency."
  - name: unload
    link: /docs/reference/client-sdk/api-reference/localModels/unload
    description: "Unloads a model from system memory.

Releases the memory (RAM/VRAM) occupied by a loaded model. The model remains on disk
and can be loaded again later. Use this to free resources when a model is no longer needed."
---
# LocalModels API

Local Models API

<CBAPICategory />

## Methods

- [`delete()`](./delete) — Deletes a downloaded model from local storage.

Permanently removes the model files from disk, freeing storage space. The model must
be unloaded from memory before deletion. It can be re-downloaded later if needed.
- [`download()`](./download) — Initiates the download of a model for local execution.

Starts an asynchronous download of the specified model. Large models may take
significant time and disk space. Monitor download progress through status endpoints.
- [`get()`](./get) — Retrieves detailed information about a specific local model.

Returns comprehensive metadata for a model including its size, quantization level,
architecture, and current status (downloaded, loaded, etc.).
- [`getAvailable()`](./getAvailable) — Retrieves the catalog of models available for local download and execution.

Returns all models that can be downloaded from supported registries (e.g., Ollama, GGUF)
for local inference. Use this to browse what models are available before downloading.
- [`list()`](./list) — Lists all models that have been downloaded to the local machine.

Returns metadata for models currently stored on disk, regardless of whether they are
currently loaded into memory for inference.
- [`load()`](./load) — Loads a downloaded model into system memory for inference.

Prepares a local model for use by loading its weights into RAM or VRAM. The model
must be downloaded first. Once loaded, it can serve inference requests without
additional startup latency.
- [`unload()`](./unload) — Unloads a model from system memory.

Releases the memory (RAM/VRAM) occupied by a loaded model. The model remains on disk
and can be loaded again later. Use this to free resources when a model is no longer needed.
