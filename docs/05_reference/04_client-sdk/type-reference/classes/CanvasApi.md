---
title: CanvasApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: CanvasApi

Defined in: CodeBolt/packages/clientsdk/src/api/canvas.api.ts:11

Manages canvas documents in the CodeBolt runtime.

Canvases are rich, interactive documents that agents can create and modify
to communicate plans, diagrams, or structured content. This API handles
creating, retrieving, and updating canvas documents.

## Constructors

### Constructor

```ts
new CanvasApi(http: HttpClient): CanvasApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/canvas.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`CanvasApi`

## Methods

### create()

```ts
create(data: CreateCanvasRequest): Promise<Canvas>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/canvas.api.ts:31

Creates a new canvas document.

Provisions a blank or pre-populated canvas that can be used for
visual planning, diagramming, or structured content creation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateCanvasRequest` | The canvas creation payload including title and content |

#### Returns

`Promise`\<`Canvas`\>

A promise that resolves to the newly created Canvas

#### Example

```typescript
const canvas = await client.canvas.create({
  title: 'Architecture Diagram',
  content: '## System Overview\n...',
});
```

***

### get()

```ts
get(params?: GetCanvasParams): Promise<Canvas>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/canvas.api.ts:50

Retrieves a canvas document.

Returns the full canvas including its content, metadata, and
current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `GetCanvasParams` | Optional query parameters to identify the canvas |

#### Returns

`Promise`\<`Canvas`\>

A promise that resolves to the Canvas

#### Example

```typescript
const canvas = await client.canvas.get({ id: 'canvas-123' });
console.log(canvas.title, canvas.content);
```

***

### update()

```ts
update(data: UpdateCanvasRequest): Promise<Canvas>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/canvas.api.ts:70

Updates an existing canvas document.

Modifies the content, title, or other properties of a canvas.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateCanvasRequest` | The fields to update on the canvas |

#### Returns

`Promise`\<`Canvas`\>

A promise that resolves to the updated Canvas

#### Example

```typescript
const updated = await client.canvas.update({
  id: 'canvas-123',
  content: '## Updated Overview\n...',
});
```
