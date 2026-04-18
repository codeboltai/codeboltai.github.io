---
title: Vectordb API
---

# Vectordb API

The `vectordb` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`addVectorItem`](./addVectorItem) | Adds a new vector item to the vector database. |
| [`getVector`](./getVector) | Retrieves a vector from the vector database based on the provided key. |
| [`queryVectorItem`](./queryVectorItem) | Queries a vector item from the vector database based on the provided key. |
| [`queryVectorItems`](./queryVectorItems) | Queries a vector item from the vector database based on the provided key. |

## Methods

---

### `addVectorItem`

```typescript
plugin.vectordb.addVectorItem(item: any): Promise<AddVectorItemResponse>
```

Adds a new vector item to the vector database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item` | `any` | Yes | The item to add to the vector. |

**Returns:** `Promise<AddVectorItemResponse>` — A promise that resolves when the item is successfully added.

[Full reference →](./addVectorItem)

---

### `getVector`

```typescript
plugin.vectordb.getVector(key: string): Promise<GetVectorResponse>
```

Retrieves a vector from the vector database based on the provided key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key of the vector to retrieve. |

**Returns:** `Promise<GetVectorResponse>` — A promise that resolves with the retrieved vector.

[Full reference →](./getVector)

---

### `queryVectorItem`

```typescript
plugin.vectordb.queryVectorItem(key: string): Promise<QueryVectorItemResponse>
```

Queries a vector item from the vector database based on the provided key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | Yes | The key of the vector to query the item from. |

**Returns:** `Promise<QueryVectorItemResponse>` — A promise that resolves with the queried vector item.

[Full reference →](./queryVectorItem)

---

### `queryVectorItems`

```typescript
plugin.vectordb.queryVectorItems(items: [], dbPath: string): Promise<QueryVectorItemResponse>
```

Queries a vector item from the vector database based on the provided key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `items` | `[]` | Yes |  |
| `dbPath` | `string` | Yes |  |

**Returns:** `Promise<QueryVectorItemResponse>` — A promise that resolves with the queried vector item.

[Full reference →](./queryVectorItems)

