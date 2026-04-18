---
title: TemplatesApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: TemplatesApi

Defined in: CodeBolt/packages/clientsdk/src/api/templates.api.ts:14

Manages templates used throughout the CodeBolt platform.

Templates provide reusable configurations and starting points for various
artifacts including agents, workflows, and projects. This API handles
template discovery and retrieval.

## Constructors

### Constructor

```ts
new TemplatesApi(http: HttpClient): TemplatesApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/templates.api.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`TemplatesApi`

## Methods

### getAll()

```ts
getAll(): Promise<Template[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/templates.api.ts:32

Retrieves all available templates.

Returns every template in the system regardless of type or category.
Use this for comprehensive template browsing or to populate a full
template gallery.

#### Returns

`Promise`\<`Template`[]\>

A promise that resolves to an array of Template objects

#### Example

```typescript
const templates = await client.templates.getAll();
templates.forEach(t => console.log(t.name, t.type));
```

***

### list()

```ts
list(params?: TemplateListParams): Promise<Template[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/templates.api.ts:53

Lists templates with optional filtering.

Returns templates matching the provided query parameters. This is
useful for finding templates by type, category, or other criteria
without loading the entire template catalog.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `TemplateListParams` | Optional query parameters for filtering templates |

#### Returns

`Promise`\<`Template`[]\>

A promise that resolves to an array of matching Template objects

#### Example

```typescript
const agentTemplates = await client.templates.list({ type: 'agent' });
```
