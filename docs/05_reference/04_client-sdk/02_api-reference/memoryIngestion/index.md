---
cbapicategory:
  - name: activatePipeline
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/activatePipeline
    description: "Activates a disabled ingestion pipeline.

Enables the pipeline so it can be triggered by events or manual execution. A pipeline
must be activated before it will process any data."
  - name: createPipeline
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/createPipeline
    description: "Creates a new ingestion pipeline with the specified processor chain.

Defines a new data processing workflow that can be triggered manually or automatically
in response to events. The pipeline chains processors together to transform data
before storing it in memory."
  - name: deletePipeline
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/deletePipeline
    description: "Permanently deletes an ingestion pipeline.

Removes the pipeline configuration. Previously ingested data is not affected.
The pipeline must be disabled before deletion."
  - name: disablePipeline
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/disablePipeline
    description: "Disables an active ingestion pipeline.

Prevents the pipeline from being triggered or executed until it is reactivated.
Any in-progress executions may continue to completion."
  - name: duplicatePipeline
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/duplicatePipeline
    description: "Creates a copy of an existing ingestion pipeline.

Duplicates the pipeline configuration, optionally with modifications. Useful for
creating variations of working pipelines without starting from scratch."
  - name: executePipeline
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/executePipeline
    description: "Manually triggers execution of an ingestion pipeline.

Runs the pipeline's processor chain against the provided input data or its configured
data source. The execution is asynchronous; monitor progress through events."
  - name: getEventSchema
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/getEventSchema
    description: "Retrieves the schema for a specific ingestion event type.

Returns the field definitions and validation rules for a single event type,
useful for building event handlers or display components."
  - name: getEventSchemas
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/getEventSchemas
    description: "Retrieves all event schemas that define the structure of ingestion events.

Returns the schema definitions for each event type emitted by the ingestion system,
describing the fields and data types contained in each event."
  - name: getPipeline
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/getPipeline
    description: "Retrieves a specific ingestion pipeline by its unique identifier.

Returns the full pipeline configuration including its processor chain, trigger
conditions, and execution history."
  - name: getProcessors
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/getProcessors
    description: "Retrieves all available processor types that can be used in pipelines.

Returns the catalog of processors (text splitters, embedders, classifiers, etc.)
that can be chained together in ingestion pipelines."
  - name: listEvents
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/listEvents
    description: "Lists ingestion events with optional filtering.

Returns records of ingestion pipeline executions, including success/failure status,
processing metrics, and error details. Useful for monitoring and debugging pipelines."
  - name: listPipelines
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/listPipelines
    description: "Lists all ingestion pipelines with optional filtering.

Returns the collection of configured ingestion pipelines. Each pipeline defines a
sequence of processing steps for transforming raw data into memory entries."
  - name: updatePipeline
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/updatePipeline
    description: "Updates an existing ingestion pipeline's configuration.

Modifies the pipeline's processor chain, triggers, or metadata. Changes affect
subsequent executions but do not alter previously ingested data."
  - name: validate
    link: /docs/reference/client-sdk/api-reference/memoryIngestion/validate
    description: "Validates an ingestion pipeline configuration without creating or executing it.

Checks that the pipeline definition is well-formed, all referenced processors exist,
and the processor chain is compatible. Use this to catch errors before saving."
---
# MemoryIngestion API

Memory Ingestion API

<CBAPICategory />

## Methods

- [`activatePipeline()`](./activatePipeline) — Activates a disabled ingestion pipeline.

Enables the pipeline so it can be triggered by events or manual execution. A pipeline
must be activated before it will process any data.
- [`createPipeline()`](./createPipeline) — Creates a new ingestion pipeline with the specified processor chain.

Defines a new data processing workflow that can be triggered manually or automatically
in response to events. The pipeline chains processors together to transform data
before storing it in memory.
- [`deletePipeline()`](./deletePipeline) — Permanently deletes an ingestion pipeline.

Removes the pipeline configuration. Previously ingested data is not affected.
The pipeline must be disabled before deletion.
- [`disablePipeline()`](./disablePipeline) — Disables an active ingestion pipeline.

Prevents the pipeline from being triggered or executed until it is reactivated.
Any in-progress executions may continue to completion.
- [`duplicatePipeline()`](./duplicatePipeline) — Creates a copy of an existing ingestion pipeline.

Duplicates the pipeline configuration, optionally with modifications. Useful for
creating variations of working pipelines without starting from scratch.
- [`executePipeline()`](./executePipeline) — Manually triggers execution of an ingestion pipeline.

Runs the pipeline's processor chain against the provided input data or its configured
data source. The execution is asynchronous; monitor progress through events.
- [`getEventSchema()`](./getEventSchema) — Retrieves the schema for a specific ingestion event type.

Returns the field definitions and validation rules for a single event type,
useful for building event handlers or display components.
- [`getEventSchemas()`](./getEventSchemas) — Retrieves all event schemas that define the structure of ingestion events.

Returns the schema definitions for each event type emitted by the ingestion system,
describing the fields and data types contained in each event.
- [`getPipeline()`](./getPipeline) — Retrieves a specific ingestion pipeline by its unique identifier.

Returns the full pipeline configuration including its processor chain, trigger
conditions, and execution history.
- [`getProcessors()`](./getProcessors) — Retrieves all available processor types that can be used in pipelines.

Returns the catalog of processors (text splitters, embedders, classifiers, etc.)
that can be chained together in ingestion pipelines.
- [`listEvents()`](./listEvents) — Lists ingestion events with optional filtering.

Returns records of ingestion pipeline executions, including success/failure status,
processing metrics, and error details. Useful for monitoring and debugging pipelines.
- [`listPipelines()`](./listPipelines) — Lists all ingestion pipelines with optional filtering.

Returns the collection of configured ingestion pipelines. Each pipeline defines a
sequence of processing steps for transforming raw data into memory entries.
- [`updatePipeline()`](./updatePipeline) — Updates an existing ingestion pipeline's configuration.

Modifies the pipeline's processor chain, triggers, or metadata. Changes affect
subsequent executions but do not alter previously ingested data.
- [`validate()`](./validate) — Validates an ingestion pipeline configuration without creating or executing it.

Checks that the pipeline definition is well-formed, all referenced processors exist,
and the processor chain is compatible. Use this to catch errors before saving.
