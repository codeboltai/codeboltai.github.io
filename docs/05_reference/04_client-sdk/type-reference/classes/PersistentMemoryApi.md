---
title: PersistentMemoryApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: PersistentMemoryApi

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:22

Provides API methods for managing persistent memory type definitions and their execution.

Persistent memory types define reusable processing pipelines that convert raw inputs
into structured, long-lived memory entries. Each type specifies a sequence of processing
steps that can be validated, executed, and shared through import/export. This differs
from regular memory threads by focusing on the processing pipeline definition rather
than the stored data itself.

## Constructors

### Constructor

```ts
new PersistentMemoryApi(http: HttpClient): PersistentMemoryApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`PersistentMemoryApi`

## Methods

### createType()

```ts
createType(data: CreatePersistentMemoryTypeRequest): Promise<PersistentMemoryType>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:69

Creates a new persistent memory type with a defined processing pipeline.

Registers a new memory type that describes how input data should be processed and
stored. The type definition includes a sequence of steps that will be executed
when the pipeline runs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreatePersistentMemoryTypeRequest` | The type creation payload |

#### Returns

`Promise`\<`PersistentMemoryType`\>

A promise that resolves to the newly created persistent memory type

#### Example

```typescript
const type = await client.persistentMemory.createType({
  name: 'code-analysis',
  steps: [
    { type: 'parser', config: { language: 'typescript' } },
    { type: 'summarizer', config: { maxLength: 200 } },
  ],
});
```

***

### deleteType()

```ts
deleteType(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:109

Permanently deletes a persistent memory type definition.

Removes the type and its pipeline configuration. Previously generated memory entries
are not affected by the deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the type to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the type has been deleted

***

### duplicateType()

```ts
duplicateType(id: string, data?: DuplicatePersistentMemoryRequest): Promise<PersistentMemoryType>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:241

Creates a copy of an existing persistent memory type.

Duplicates the type definition, optionally with modifications such as a new name.
Useful for creating variations of working pipelines.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the type to duplicate |
| `data?` | `DuplicatePersistentMemoryRequest` | Optional modifications to apply to the duplicated type |

#### Returns

`Promise`\<`PersistentMemoryType`\>

A promise that resolves to the newly created duplicate type

#### Example

```typescript
const copy = await client.persistentMemory.duplicateType('type-123', {
  name: 'code-analysis-v2',
});
```

***

### executeType()

```ts
executeType(id: string, data?: ExecutePersistentMemoryRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:132

Executes a persistent memory type's processing pipeline.

Runs the defined processing steps against the provided input data or configured
data source, generating new memory entries as output.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the type to execute |
| `data?` | `ExecutePersistentMemoryRequest` | Optional execution parameters and input data |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the execution has been initiated

#### Example

```typescript
await client.persistentMemory.executeType('type-123', {
  input: { source: 'chat-history', chatId: 'chat-456' },
});
```

***

### exportType()

```ts
exportType(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:200

Exports a persistent memory type configuration as a portable format.

Serializes the type definition for sharing, backup, or migration to another workspace.
The exported data can be imported using [importType](#importtype).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the type to export |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the exported type configuration

#### Example

```typescript
const exportData = await client.persistentMemory.exportType('type-123');
```

***

### getStepSpecs()

```ts
getStepSpecs(): Promise<PersistentMemoryStepSpec[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:168

Retrieves all available processing step specifications.

Returns the catalog of step types that can be used when building persistent memory
pipelines. Each spec describes a step's inputs, outputs, and configurable parameters.

#### Returns

`Promise`\<`PersistentMemoryStepSpec`[]\>

A promise that resolves to an array of step specifications

#### Example

```typescript
const specs = await client.persistentMemory.getStepSpecs();
specs.forEach(s => console.log(`${s.type}: ${s.description}`));
```

***

### getType()

```ts
getType(id: string): Promise<PersistentMemoryType>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:82

Retrieves a specific persistent memory type by its unique identifier.

Returns the full type definition including its processing steps, configuration,
and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the persistent memory type |

#### Returns

`Promise`\<`PersistentMemoryType`\>

A promise that resolves to the persistent memory type definition

***

### getUserConfigurableStepSpecs()

```ts
getUserConfigurableStepSpecs(): Promise<PersistentMemoryStepSpec[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:180

Retrieves step specifications that are user-configurable.

Returns a subset of step specifications that expose user-facing configuration options,
filtering out internal-only or system-managed steps.

#### Returns

`Promise`\<`PersistentMemoryStepSpec`[]\>

A promise that resolves to an array of user-configurable step specifications

***

### importType()

```ts
importType(data: ImportPersistentMemoryRequest): Promise<PersistentMemoryType>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:220

Imports a persistent memory type configuration from an exported format.

Creates a new persistent memory type from previously exported data. This enables
sharing pipeline configurations between workspaces or restoring from backups.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ImportPersistentMemoryRequest` | The import payload containing the exported type configuration |

#### Returns

`Promise`\<`PersistentMemoryType`\>

A promise that resolves to the newly imported persistent memory type

#### Example

```typescript
const imported = await client.persistentMemory.importType({
  config: exportedData,
});
```

***

### listTypes()

```ts
listTypes(params?: Record<string, unknown>): Promise<PersistentMemoryType[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:42

Lists all persistent memory type definitions with optional filtering.

Returns the collection of defined persistent memory types, each describing a reusable
processing pipeline for generating memory entries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering and pagination |

#### Returns

`Promise`\<`PersistentMemoryType`[]\>

A promise that resolves to an array of persistent memory types

#### Example

```typescript
const types = await client.persistentMemory.listTypes();
console.log(`${types.length} memory types defined`);
```

***

### updateType()

```ts
updateType(id: string, data: UpdatePersistentMemoryTypeRequest): Promise<PersistentMemoryType>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:96

Updates an existing persistent memory type's configuration.

Modifies the type's processing steps, name, or other settings. Changes affect
subsequent executions but do not alter previously generated memories.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the type to update |
| `data` | `UpdatePersistentMemoryTypeRequest` | The fields to update |

#### Returns

`Promise`\<`PersistentMemoryType`\>

A promise that resolves to the updated persistent memory type

***

### validate()

```ts
validate(data: ValidatePersistentMemoryRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/persistent-memory.api.ts:148

Validates a persistent memory type configuration without saving it.

Checks that the type definition is well-formed, all referenced step types exist,
and the processing chain is compatible. Use this before creating or updating a type
to catch configuration errors early.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ValidatePersistentMemoryRequest` | The type configuration to validate |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the validation result
