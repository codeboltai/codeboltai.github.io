---
title: SpecsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: SpecsApi

Defined in: CodeBolt/packages/clientsdk/src/api/specs.api.ts:18

Manages specification documents for detailed system requirements.

Specs provide structured documentation for components, APIs, features,
and other system elements. This API handles spec creation, retrieval,
listing, and updates throughout the development lifecycle.

## Constructors

### Constructor

```ts
new SpecsApi(http: HttpClient): SpecsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/specs.api.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`SpecsApi`

## Methods

### create()

```ts
create(data: CreateSpecRequest): Promise<Spec>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/specs.api.ts:64

Creates a new specification document.

Registers a new spec with the system using the provided content.
The spec can include technical details, API definitions, architecture
descriptions, and other structured specification information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateSpecRequest` | Request containing the spec details |

#### Returns

`Promise`\<`Spec`\>

A promise that resolves to the created Spec object

#### Example

```typescript
const spec = await client.specs.create({
  title: 'User API Specification',
  content: 'RESTful API for user management...',
  type: 'api'
});
```

***

### ensureFolder()

```ts
ensureFolder(data?: EnsureSpecFolderRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/specs.api.ts:38

Ensures the specs folder exists in the workspace.

Creates the specification directory if it doesn't already exist,
establishing a location for storing spec files and related documentation.
This operation is idempotent and safe to call multiple times.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `EnsureSpecFolderRequest` | Optional parameters for folder creation |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the folder is ensured

#### Example

```typescript
await client.specs.ensureFolder();
console.log('Specs folder ready');
```

***

### get()

```ts
get(params?: GetSpecParams): Promise<Spec>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/specs.api.ts:86

Retrieves a specific specification document.

Returns the spec matching the provided query parameters, typically
by spec ID or project. The document includes all sections, metadata,
and version information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `GetSpecParams` | Query parameters to identify the spec |

#### Returns

`Promise`\<`Spec`\>

A promise that resolves to the Spec object

#### Example

```typescript
const spec = await client.specs.get({ specId: 'spec-123' });
console.log('Spec title:', spec.title);
```

***

### list()

```ts
list(params?: ListSpecsParams): Promise<Spec[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/specs.api.ts:108

Lists all specification documents.

Returns every spec document in the system, optionally filtered by
project, type, or other criteria. Use this for browsing specs or
populating specification management UIs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `ListSpecsParams` | Optional query parameters for filtering specs |

#### Returns

`Promise`\<`Spec`[]\>

A promise that resolves to an array of Spec objects

#### Example

```typescript
const specs = await client.specs.list({ type: 'api' });
specs.forEach(s => console.log(s.title));
```

***

### update()

```ts
update(data: UpdateSpecRequest): Promise<Spec>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/specs.api.ts:134

Updates an existing specification document.

Modifies the content, metadata, or structure of a spec. Use this to
add new sections, update information, change versions, or make other
modifications as specifications evolve.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateSpecRequest` | Request containing the spec updates |

#### Returns

`Promise`\<`Spec`\>

A promise that resolves to the updated Spec object

#### Example

```typescript
const updated = await client.specs.update({
  specId: 'spec-123',
  version: '1.1.0',
  content: 'Updated specification content...'
});
```
