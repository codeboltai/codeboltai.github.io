---
title: KvStoreApi API
---

# KvStoreApi API

The `kvStoreApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`createInstance`](./createInstance) |  |
| [`deleteInstance`](./deleteInstance) |  |
| [`deleteNamespace`](./deleteNamespace) |  |
| [`deleteValue`](./deleteValue) |  |
| [`getInstance`](./getInstance) |  |
| [`getValue`](./getValue) |  |
| [`listInstances`](./listInstances) |  |
| [`query`](./query) |  |
| [`setValue`](./setValue) |  |
| [`updateInstance`](./updateInstance) |  |

## Methods

---

### `createInstance`

```typescript
plugin.kvStoreApi.createInstance(data: CreateKvStoreInstanceRequest): Promise<KvStoreInstance>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateKvStoreInstanceRequest` | Yes |  |

**Returns:** `Promise<KvStoreInstance>`

[Full reference →](./createInstance)

---

### `deleteInstance`

```typescript
plugin.kvStoreApi.deleteInstance(id: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteInstance)

---

### `deleteNamespace`

```typescript
plugin.kvStoreApi.deleteNamespace(instanceId: string, namespace: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes |  |
| `namespace` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteNamespace)

---

### `deleteValue`

```typescript
plugin.kvStoreApi.deleteValue(instanceId: string, namespace: string, key: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes |  |
| `namespace` | `string` | Yes |  |
| `key` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteValue)

---

### `getInstance`

```typescript
plugin.kvStoreApi.getInstance(id: string): Promise<KvStoreInstance>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<KvStoreInstance>`

[Full reference →](./getInstance)

---

### `getValue`

```typescript
plugin.kvStoreApi.getValue(instanceId: string, namespace: string, key: string): Promise<KvValue>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes |  |
| `namespace` | `string` | Yes |  |
| `key` | `string` | Yes |  |

**Returns:** `Promise<KvValue>`

[Full reference →](./getValue)

---

### `listInstances`

```typescript
plugin.kvStoreApi.listInstances(params?: Record<string, unknown>): Promise<KvStoreInstance[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<KvStoreInstance[]>`

[Full reference →](./listInstances)

---

### `query`

```typescript
plugin.kvStoreApi.query(data: KvQueryRequest): Promise<KvValue[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `KvQueryRequest` | Yes |  |

**Returns:** `Promise<KvValue[]>`

[Full reference →](./query)

---

### `setValue`

```typescript
plugin.kvStoreApi.setValue(data: SetKvValueRequest): Promise<KvValue>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `SetKvValueRequest` | Yes |  |

**Returns:** `Promise<KvValue>`

[Full reference →](./setValue)

---

### `updateInstance`

```typescript
plugin.kvStoreApi.updateInstance(id: string, data: UpdateKvStoreInstanceRequest): Promise<KvStoreInstance>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateKvStoreInstanceRequest` | Yes |  |

**Returns:** `Promise<KvStoreInstance>`

[Full reference →](./updateInstance)

