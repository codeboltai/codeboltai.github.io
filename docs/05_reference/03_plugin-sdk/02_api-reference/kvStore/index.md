---
title: KvStore API
---

# KvStore API

The `kvStore` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`createInstance`](./createInstance) | Create a new KV store instance |
| [`delete`](./delete) | Delete a value from the KV store |
| [`deleteInstance`](./deleteInstance) | Delete a KV store instance |
| [`deleteNamespace`](./deleteNamespace) | Delete an entire namespace from the KV store |
| [`get`](./get) | Get a value from the KV store |
| [`getInstance`](./getInstance) | Get a KV store instance by ID |
| [`getNamespaces`](./getNamespaces) | Get all namespaces in an instance |
| [`getRecordCount`](./getRecordCount) | Get record count for an instance or namespace |
| [`listInstances`](./listInstances) | List all KV store instances |
| [`query`](./query) | Query the KV store using DSL |
| [`set`](./set) | Set a value in the KV store |
| [`updateInstance`](./updateInstance) | Update a KV store instance |

## Methods

---

### `createInstance`

```typescript
plugin.kvStore.createInstance(name: string, description?: string): Promise<KVInstanceResponse>
```

Create a new KV store instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Instance name |
| `description` | `string` | No | Optional description |

**Returns:** `Promise<KVInstanceResponse>`

[Full reference →](./createInstance)

---

### `delete`

```typescript
plugin.kvStore.delete(instanceId: string, namespace: string, key: string): Promise<KVDeleteResponse>
```

Delete a value from the KV store

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | Yes | Namespace |
| `key` | `string` | Yes | Key |

**Returns:** `Promise<KVDeleteResponse>`

[Full reference →](./delete)

---

### `deleteInstance`

```typescript
plugin.kvStore.deleteInstance(instanceId: string): Promise<KVDeleteResponse>
```

Delete a KV store instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

**Returns:** `Promise<KVDeleteResponse>`

[Full reference →](./deleteInstance)

---

### `deleteNamespace`

```typescript
plugin.kvStore.deleteNamespace(instanceId: string, namespace: string): Promise<KVDeleteNamespaceResponse>
```

Delete an entire namespace from the KV store

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | Yes | Namespace to delete |

**Returns:** `Promise<KVDeleteNamespaceResponse>`

[Full reference →](./deleteNamespace)

---

### `get`

```typescript
plugin.kvStore.get(instanceId: string, namespace: string, key: string): Promise<KVGetResponse>
```

Get a value from the KV store

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | Yes | Namespace |
| `key` | `string` | Yes | Key |

**Returns:** `Promise<KVGetResponse>`

[Full reference →](./get)

---

### `getInstance`

```typescript
plugin.kvStore.getInstance(instanceId: string): Promise<KVInstanceResponse>
```

Get a KV store instance by ID

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

**Returns:** `Promise<KVInstanceResponse>`

[Full reference →](./getInstance)

---

### `getNamespaces`

```typescript
plugin.kvStore.getNamespaces(instanceId: string): Promise<KVNamespacesResponse>
```

Get all namespaces in an instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

**Returns:** `Promise<KVNamespacesResponse>`

[Full reference →](./getNamespaces)

---

### `getRecordCount`

```typescript
plugin.kvStore.getRecordCount(instanceId: string, namespace?: string): Promise<KVRecordCountResponse>
```

Get record count for an instance or namespace

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | No | Optional namespace filter |

**Returns:** `Promise<KVRecordCountResponse>`

[Full reference →](./getRecordCount)

---

### `listInstances`

```typescript
plugin.kvStore.listInstances(): Promise<KVInstanceListResponse>
```

List all KV store instances

_No parameters._

**Returns:** `Promise<KVInstanceListResponse>`

[Full reference →](./listInstances)

---

### `query`

```typescript
plugin.kvStore.query(query: KVQueryDSL): Promise<KVQueryResponse>
```

Query the KV store using DSL

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `KVQueryDSL` | Yes | Query DSL object |

**Returns:** `Promise<KVQueryResponse>`

[Full reference →](./query)

---

### `set`

```typescript
plugin.kvStore.set(instanceId: string, namespace: string, key: string, value: any, autoCreateInstance: boolean): Promise<KVSetResponse>
```

Set a value in the KV store

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | Yes | Namespace |
| `key` | `string` | Yes | Key |
| `value` | `any` | Yes | Value to store |
| `autoCreateInstance` | `boolean` | Yes | Auto-create instance if it doesn't exist _(default: `false`)_ |

**Returns:** `Promise<KVSetResponse>`

[Full reference →](./set)

---

### `updateInstance`

```typescript
plugin.kvStore.updateInstance(instanceId: string, updates: UpdateKVInstanceParams): Promise<KVInstanceResponse>
```

Update a KV store instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `updates` | `UpdateKVInstanceParams` | Yes | Update parameters |

**Returns:** `Promise<KVInstanceResponse>`

[Full reference →](./updateInstance)

