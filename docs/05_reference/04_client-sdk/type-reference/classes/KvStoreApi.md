---
title: KvStoreApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: KvStoreApi

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:11

Manages key-value store instances, namespaces, and individual key-value pairs.

The KV store provides a simple, namespaced key-value storage mechanism for
agents and system components. Data is organized into instances (isolated
stores) and namespaces (logical partitions within an instance).

## Constructors

### Constructor

```ts
new KvStoreApi(http: HttpClient): KvStoreApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`KvStoreApi`

## Methods

### createInstance()

```ts
createInstance(data: CreateKvStoreInstanceRequest): Promise<KvStoreInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:31

Creates a new KV store instance.

An instance is an isolated key-value store that can contain multiple
namespaces. Use separate instances to isolate data between different
agents or workflows.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateKvStoreInstanceRequest` | Instance creation payload including name and configuration |

#### Returns

`Promise`\<`KvStoreInstance`\>

A promise that resolves to the newly created KvStoreInstance

#### Example

```typescript
const instance = await client.kvStore.createInstance({
  name: 'agent-state',
});
```

***

### deleteInstance()

```ts
deleteInstance(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:106

Deletes a KV store instance and all its data.

Permanently removes the instance, all its namespaces, and all
stored key-value pairs. This action cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the instance to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.kvStore.deleteInstance('kv-123');
```

***

### deleteNamespace()

```ts
deleteNamespace(instanceId: string, namespace: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:189

Deletes all key-value pairs within a namespace.

Clears the entire namespace, removing every key and its associated
value. Other namespaces in the instance are not affected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `instanceId` | `string` | The unique identifier of the KV store instance |
| `namespace` | `string` | The namespace to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the namespace has been cleared

#### Example

```typescript
await client.kvStore.deleteNamespace('kv-123', 'temp-data');
```

***

### deleteValue()

```ts
deleteValue(
   instanceId: string, 
   namespace: string, 
key: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:170

Deletes a single key-value pair from the store.

Removes the specified key and its value from the namespace. Other
keys in the same namespace are not affected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `instanceId` | `string` | The unique identifier of the KV store instance |
| `namespace` | `string` | The namespace containing the key |
| `key` | `string` | The key to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the key-value pair has been deleted

#### Example

```typescript
await client.kvStore.deleteValue('kv-123', 'config', 'theme');
```

***

### getInstance()

```ts
getInstance(id: string): Promise<KvStoreInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:67

Retrieves a specific KV store instance by its ID.

Returns the full details of the instance including its configuration
and namespace listing.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the KV store instance |

#### Returns

`Promise`\<`KvStoreInstance`\>

A promise that resolves to the KvStoreInstance

#### Example

```typescript
const instance = await client.kvStore.getInstance('kv-123');
```

***

### getValue()

```ts
getValue(
   instanceId: string, 
   namespace: string, 
key: string): Promise<KvValue>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:127

Retrieves a value by its key within a specific namespace.

Looks up a single key-value pair in the specified instance and
namespace. Returns the value along with its metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `instanceId` | `string` | The unique identifier of the KV store instance |
| `namespace` | `string` | The namespace containing the key |
| `key` | `string` | The key to look up |

#### Returns

`Promise`\<`KvValue`\>

A promise that resolves to the KvValue including the stored data

#### Example

```typescript
const value = await client.kvStore.getValue('kv-123', 'config', 'theme');
console.log(value.data); // the stored value
```

***

### listInstances()

```ts
listInstances(params?: Record<string, unknown>): Promise<KvStoreInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:49

Lists all KV store instances.

Returns every instance in the system with their metadata and
namespace information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`KvStoreInstance`[]\>

A promise that resolves to an array of KvStoreInstance objects

#### Example

```typescript
const instances = await client.kvStore.listInstances();
```

***

### query()

```ts
query(data: KvQueryRequest): Promise<KvValue[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:212

Queries key-value data using filter criteria.

Searches across namespaces and keys using the provided filter
parameters. Useful for finding values that match specific patterns
or conditions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `KvQueryRequest` | Query parameters specifying filters and scope |

#### Returns

`Promise`\<`KvValue`[]\>

A promise that resolves to an array of matching KvValue objects

#### Example

```typescript
const results = await client.kvStore.query({
  instanceId: 'kv-123',
  namespace: 'config',
  keyPrefix: 'user.',
});
```

***

### setValue()

```ts
setValue(data: SetKvValueRequest): Promise<KvValue>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:150

Sets a key-value pair in the store.

Creates or overwrites a value at the specified key within a namespace
and instance. The value can be any JSON-serializable data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SetKvValueRequest` | The set request including instance ID, namespace, key, and value |

#### Returns

`Promise`\<`KvValue`\>

A promise that resolves to the stored KvValue

#### Example

```typescript
const stored = await client.kvStore.setValue({
  instanceId: 'kv-123',
  namespace: 'config',
  key: 'theme',
  value: 'dark',
});
```

***

### updateInstance()

```ts
updateInstance(id: string, data: UpdateKvStoreInstanceRequest): Promise<KvStoreInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/kv-store.api.ts:88

Updates a KV store instance's configuration.

Modifies instance properties such as name or settings. The stored
data is not affected by instance updates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the instance to update |
| `data` | `UpdateKvStoreInstanceRequest` | The fields to update |

#### Returns

`Promise`\<`KvStoreInstance`\>

A promise that resolves to the updated KvStoreInstance

#### Example

```typescript
const updated = await client.kvStore.updateInstance('kv-123', {
  name: 'renamed-store',
});
```
