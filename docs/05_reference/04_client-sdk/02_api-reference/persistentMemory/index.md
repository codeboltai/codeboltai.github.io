---
cbapicategory:
  - name: createType
    link: /docs/reference/client-sdk/api-reference/persistentMemory/createType
    description: "Creates a new persistent memory type with a defined processing pipeline.

Registers a new memory type that describes how input data should be processed and
stored. The type definition includes a sequence of steps that will be executed
when the pipeline runs."
  - name: deleteType
    link: /docs/reference/client-sdk/api-reference/persistentMemory/deleteType
    description: "Permanently deletes a persistent memory type definition.

Removes the type and its pipeline configuration. Previously generated memory entries
are not affected by the deletion."
  - name: duplicateType
    link: /docs/reference/client-sdk/api-reference/persistentMemory/duplicateType
    description: "Creates a copy of an existing persistent memory type.

Duplicates the type definition, optionally with modifications such as a new name.
Useful for creating variations of working pipelines."
  - name: executeType
    link: /docs/reference/client-sdk/api-reference/persistentMemory/executeType
    description: "Executes a persistent memory type's processing pipeline.

Runs the defined processing steps against the provided input data or configured
data source, generating new memory entries as output."
  - name: exportType
    link: /docs/reference/client-sdk/api-reference/persistentMemory/exportType
    description: "Exports a persistent memory type configuration as a portable format.

Serializes the type definition for sharing, backup, or migration to another workspace.
The exported data can be imported using ."
  - name: getStepSpecs
    link: /docs/reference/client-sdk/api-reference/persistentMemory/getStepSpecs
    description: "Retrieves all available processing step specifications.

Returns the catalog of step types that can be used when building persistent memory
pipelines. Each spec describes a step's inputs, outputs, and configurable parameters."
  - name: getType
    link: /docs/reference/client-sdk/api-reference/persistentMemory/getType
    description: "Retrieves a specific persistent memory type by its unique identifier.

Returns the full type definition including its processing steps, configuration,
and metadata."
  - name: getUserConfigurableStepSpecs
    link: /docs/reference/client-sdk/api-reference/persistentMemory/getUserConfigurableStepSpecs
    description: "Retrieves step specifications that are user-configurable.

Returns a subset of step specifications that expose user-facing configuration options,
filtering out internal-only or system-managed steps."
  - name: importType
    link: /docs/reference/client-sdk/api-reference/persistentMemory/importType
    description: "Imports a persistent memory type configuration from an exported format.

Creates a new persistent memory type from previously exported data. This enables
sharing pipeline configurations between workspaces or restoring from backups."
  - name: listTypes
    link: /docs/reference/client-sdk/api-reference/persistentMemory/listTypes
    description: "Lists all persistent memory type definitions with optional filtering.

Returns the collection of defined persistent memory types, each describing a reusable
processing pipeline for generating memory entries."
  - name: updateType
    link: /docs/reference/client-sdk/api-reference/persistentMemory/updateType
    description: "Updates an existing persistent memory type's configuration.

Modifies the type's processing steps, name, or other settings. Changes affect
subsequent executions but do not alter previously generated memories."
  - name: validate
    link: /docs/reference/client-sdk/api-reference/persistentMemory/validate
    description: "Validates a persistent memory type configuration without saving it.

Checks that the type definition is well-formed, all referenced step types exist,
and the processing chain is compatible. Use this before creating or updating a type
to catch configuration errors early."
---
# PersistentMemory API

Persistent Memory API

<CBAPICategory />

## Methods

- [`createType()`](./createType) — Creates a new persistent memory type with a defined processing pipeline.

Registers a new memory type that describes how input data should be processed and
stored. The type definition includes a sequence of steps that will be executed
when the pipeline runs.
- [`deleteType()`](./deleteType) — Permanently deletes a persistent memory type definition.

Removes the type and its pipeline configuration. Previously generated memory entries
are not affected by the deletion.
- [`duplicateType()`](./duplicateType) — Creates a copy of an existing persistent memory type.

Duplicates the type definition, optionally with modifications such as a new name.
Useful for creating variations of working pipelines.
- [`executeType()`](./executeType) — Executes a persistent memory type's processing pipeline.

Runs the defined processing steps against the provided input data or configured
data source, generating new memory entries as output.
- [`exportType()`](./exportType) — Exports a persistent memory type configuration as a portable format.

Serializes the type definition for sharing, backup, or migration to another workspace.
The exported data can be imported using .
- [`getStepSpecs()`](./getStepSpecs) — Retrieves all available processing step specifications.

Returns the catalog of step types that can be used when building persistent memory
pipelines. Each spec describes a step's inputs, outputs, and configurable parameters.
- [`getType()`](./getType) — Retrieves a specific persistent memory type by its unique identifier.

Returns the full type definition including its processing steps, configuration,
and metadata.
- [`getUserConfigurableStepSpecs()`](./getUserConfigurableStepSpecs) — Retrieves step specifications that are user-configurable.

Returns a subset of step specifications that expose user-facing configuration options,
filtering out internal-only or system-managed steps.
- [`importType()`](./importType) — Imports a persistent memory type configuration from an exported format.

Creates a new persistent memory type from previously exported data. This enables
sharing pipeline configurations between workspaces or restoring from backups.
- [`listTypes()`](./listTypes) — Lists all persistent memory type definitions with optional filtering.

Returns the collection of defined persistent memory types, each describing a reusable
processing pipeline for generating memory entries.
- [`updateType()`](./updateType) — Updates an existing persistent memory type's configuration.

Modifies the type's processing steps, name, or other settings. Changes affect
subsequent executions but do not alter previously generated memories.
- [`validate()`](./validate) — Validates a persistent memory type configuration without saving it.

Checks that the type definition is well-formed, all referenced step types exist,
and the processing chain is compatible. Use this before creating or updating a type
to catch configuration errors early.
