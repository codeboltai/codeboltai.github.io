---
title: MemoryIngestionApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: MemoryIngestionApi

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:22

Provides API methods for managing memory ingestion pipelines.

Ingestion pipelines define automated workflows for processing and storing data into the
memory system. They chain together processors (transformers, embedders, classifiers) to
convert raw data into structured memory entries. Use this API to create, configure,
validate, and execute data ingestion workflows.

## Constructors

### Constructor

```ts
new MemoryIngestionApi(http: HttpClient): MemoryIngestionApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`MemoryIngestionApi`

## Methods

### activatePipeline()

```ts
activatePipeline(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:230

Activates a disabled ingestion pipeline.

Enables the pipeline so it can be triggered by events or manual execution. A pipeline
must be activated before it will process any data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the pipeline to activate |
| `data?` | `Record`\<`string`, `unknown`\> | Optional activation parameters |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the pipeline has been activated

***

### createPipeline()

```ts
createPipeline(data: CreateIngestionPipelineRequest): Promise<IngestionPipeline>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:82

Creates a new ingestion pipeline with the specified processor chain.

Defines a new data processing workflow that can be triggered manually or automatically
in response to events. The pipeline chains processors together to transform data
before storing it in memory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateIngestionPipelineRequest` | The pipeline creation payload |

#### Returns

`Promise`\<`IngestionPipeline`\>

A promise that resolves to the newly created pipeline

#### Example

```typescript
const pipeline = await client.memoryIngestion.createPipeline({
  name: 'chat-log-ingestion',
  processors: [
    { type: 'text-splitter', config: { chunkSize: 500 } },
    { type: 'embedder', config: { model: 'text-embedding-3-small' } },
  ],
});
```

***

### deletePipeline()

```ts
deletePipeline(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:109

Permanently deletes an ingestion pipeline.

Removes the pipeline configuration. Previously ingested data is not affected.
The pipeline must be disabled before deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the pipeline to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the pipeline has been deleted

***

### disablePipeline()

```ts
disablePipeline(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:244

Disables an active ingestion pipeline.

Prevents the pipeline from being triggered or executed until it is reactivated.
Any in-progress executions may continue to completion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the pipeline to disable |
| `data?` | `Record`\<`string`, `unknown`\> | Optional deactivation parameters |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the pipeline has been disabled

***

### duplicatePipeline()

```ts
duplicatePipeline(id: string, data?: DuplicateIngestionPipelineRequest): Promise<IngestionPipeline>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:265

Creates a copy of an existing ingestion pipeline.

Duplicates the pipeline configuration, optionally with modifications. Useful for
creating variations of working pipelines without starting from scratch.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the pipeline to duplicate |
| `data?` | `DuplicateIngestionPipelineRequest` | Optional modifications to apply to the duplicated pipeline |

#### Returns

`Promise`\<`IngestionPipeline`\>

A promise that resolves to the newly created duplicate pipeline

#### Example

```typescript
const duplicate = await client.memoryIngestion.duplicatePipeline('pipeline-123', {
  name: 'chat-log-ingestion-v2',
});
```

***

### executePipeline()

```ts
executePipeline(id: string, data?: ExecuteIngestionPipelineRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:132

Manually triggers execution of an ingestion pipeline.

Runs the pipeline's processor chain against the provided input data or its configured
data source. The execution is asynchronous; monitor progress through events.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the pipeline to execute |
| `data?` | `ExecuteIngestionPipelineRequest` | Optional execution parameters and input data |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the execution has been initiated

#### Example

```typescript
await client.memoryIngestion.executePipeline('pipeline-123', {
  source: { type: 'file', path: '/data/logs.txt' },
});
```

***

### getEventSchema()

```ts
getEventSchema(eventType: string): Promise<IngestionEventSchema>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:214

Retrieves the schema for a specific ingestion event type.

Returns the field definitions and validation rules for a single event type,
useful for building event handlers or display components.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventType` | `string` | The event type identifier to get the schema for |

#### Returns

`Promise`\<`IngestionEventSchema`\>

A promise that resolves to the event schema definition

***

### getEventSchemas()

```ts
getEventSchemas(): Promise<IngestionEventSchema[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:201

Retrieves all event schemas that define the structure of ingestion events.

Returns the schema definitions for each event type emitted by the ingestion system,
describing the fields and data types contained in each event.

#### Returns

`Promise`\<`IngestionEventSchema`[]\>

A promise that resolves to an array of event schema definitions

***

### getPipeline()

```ts
getPipeline(id: string): Promise<IngestionPipeline>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:55

Retrieves a specific ingestion pipeline by its unique identifier.

Returns the full pipeline configuration including its processor chain, trigger
conditions, and execution history.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the pipeline to retrieve |

#### Returns

`Promise`\<`IngestionPipeline`\>

A promise that resolves to the ingestion pipeline details

***

### getProcessors()

```ts
getProcessors(): Promise<IngestionProcessor[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:174

Retrieves all available processor types that can be used in pipelines.

Returns the catalog of processors (text splitters, embedders, classifiers, etc.)
that can be chained together in ingestion pipelines.

#### Returns

`Promise`\<`IngestionProcessor`[]\>

A promise that resolves to an array of available processor definitions

#### Example

```typescript
const processors = await client.memoryIngestion.getProcessors();
processors.forEach(p => console.log(`${p.type}: ${p.description}`));
```

***

### listEvents()

```ts
listEvents(params?: Record<string, unknown>): Promise<IngestionEvent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:189

Lists ingestion events with optional filtering.

Returns records of ingestion pipeline executions, including success/failure status,
processing metrics, and error details. Useful for monitoring and debugging pipelines.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering events |

#### Returns

`Promise`\<`IngestionEvent`[]\>

A promise that resolves to an array of ingestion events

***

### listPipelines()

```ts
listPipelines(params?: Record<string, unknown>): Promise<IngestionPipeline[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:42

Lists all ingestion pipelines with optional filtering.

Returns the collection of configured ingestion pipelines. Each pipeline defines a
sequence of processing steps for transforming raw data into memory entries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering and pagination |

#### Returns

`Promise`\<`IngestionPipeline`[]\>

A promise that resolves to an array of ingestion pipelines

#### Example

```typescript
const pipelines = await client.memoryIngestion.listPipelines();
const active = pipelines.filter(p => p.status === 'active');
```

***

### updatePipeline()

```ts
updatePipeline(id: string, data: UpdateIngestionPipelineRequest): Promise<IngestionPipeline>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:96

Updates an existing ingestion pipeline's configuration.

Modifies the pipeline's processor chain, triggers, or metadata. Changes affect
subsequent executions but do not alter previously ingested data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the pipeline to update |
| `data` | `UpdateIngestionPipelineRequest` | The fields to update on the pipeline |

#### Returns

`Promise`\<`IngestionPipeline`\>

A promise that resolves to the updated pipeline

***

### validate()

```ts
validate(data: ValidateIngestionPipelineRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/memory-ingestion.api.ts:154

Validates an ingestion pipeline configuration without creating or executing it.

Checks that the pipeline definition is well-formed, all referenced processors exist,
and the processor chain is compatible. Use this to catch errors before saving.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ValidateIngestionPipelineRequest` | The pipeline configuration to validate |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the validation result

#### Example

```typescript
const result = await client.memoryIngestion.validate({
  processors: [{ type: 'embedder', config: {} }],
});
```
