---
title: KvStoreApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: KvStoreApi

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:11

Manages key-value store instances, namespaces, and individual key-value pairs.

The KV store provides a simple, namespaced key-value storage mechanism for
agents and system components. Data is organized into instances (isolated
stores) and namespaces (logical partitions within an instance).

## Constructors

### Constructor

```ts
new KvStoreApi(http: HttpClient): KvStoreApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:12

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

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateKvStoreInstanceRequest` |

#### Returns

`Promise`\<`KvStoreInstance`\>

***

### deleteInstance()

```ts
deleteInstance(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### deleteNamespace()

```ts
deleteNamespace(instanceId: string, namespace: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:46

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instanceId` | `string` |
| `namespace` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### deleteValue()

```ts
deleteValue(
   instanceId: string, 
   namespace: string, 
key: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instanceId` | `string` |
| `namespace` | `string` |
| `key` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### getInstance()

```ts
getInstance(id: string): Promise<KvStoreInstance>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:22

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`KvStoreInstance`\>

***

### getValue()

```ts
getValue(
   instanceId: string, 
   namespace: string, 
key: string): Promise<KvValue>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:34

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instanceId` | `string` |
| `namespace` | `string` |
| `key` | `string` |

#### Returns

`Promise`\<`KvValue`\>

***

### listInstances()

```ts
listInstances(params?: Record<string, unknown>): Promise<KvStoreInstance[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`KvStoreInstance`[]\>

***

### query()

```ts
query(data: KvQueryRequest): Promise<KvValue[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:50

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `KvQueryRequest` |

#### Returns

`Promise`\<`KvValue`[]\>

***

### setValue()

```ts
setValue(data: SetKvValueRequest): Promise<KvValue>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `SetKvValueRequest` |

#### Returns

`Promise`\<`KvValue`\>

***

### updateInstance()

```ts
updateInstance(id: string, data: UpdateKvStoreInstanceRequest): Promise<KvStoreInstance>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/kv-store.api.ts:26

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateKvStoreInstanceRequest` |

#### Returns

`Promise`\<`KvStoreInstance`\>
