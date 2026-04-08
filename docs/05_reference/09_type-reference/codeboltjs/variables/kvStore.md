---
title: kvStore
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: kvStore

```ts
const kvStore: {
  createInstance: (name: string, description?: string) => Promise<KVInstanceResponse>;
  delete: (instanceId: string, namespace: string, key: string) => Promise<KVDeleteResponse>;
  deleteInstance: (instanceId: string) => Promise<KVDeleteResponse>;
  deleteNamespace: (instanceId: string, namespace: string) => Promise<KVDeleteNamespaceResponse>;
  get: (instanceId: string, namespace: string, key: string) => Promise<KVGetResponse>;
  getInstance: (instanceId: string) => Promise<KVInstanceResponse>;
  getNamespaces: (instanceId: string) => Promise<KVNamespacesResponse>;
  getRecordCount: (instanceId: string, namespace?: string) => Promise<KVRecordCountResponse>;
  listInstances: () => Promise<KVInstanceListResponse>;
  query: (query: KVQueryDSL) => Promise<KVQueryResponse>;
  set: (instanceId: string, namespace: string, key: string, value: any, autoCreateInstance: boolean) => Promise<KVSetResponse>;
  updateInstance: (instanceId: string, updates: UpdateKVInstanceParams) => Promise<KVInstanceResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/kvStore.ts:24

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="createinstance"></a> `createInstance()` | (`name`: `string`, `description?`: `string`) => `Promise`\<[`KVInstanceResponse`](../interfaces/KVInstanceResponse)\> | Create a new KV store instance | [packages/codeboltjs/src/modules/kvStore.ts:30](packages/codeboltjs/src/modules/kvStore.ts#L30) |
| <a id="delete"></a> `delete()` | (`instanceId`: `string`, `namespace`: `string`, `key`: `string`) => `Promise`\<[`KVDeleteResponse`](../interfaces/KVDeleteResponse)\> | Delete a value from the KV store | [packages/codeboltjs/src/modules/kvStore.ts:149](packages/codeboltjs/src/modules/kvStore.ts#L149) |
| <a id="deleteinstance"></a> `deleteInstance()` | (`instanceId`: `string`) => `Promise`\<[`KVDeleteResponse`](../interfaces/KVDeleteResponse)\> | Delete a KV store instance | [packages/codeboltjs/src/modules/kvStore.ts:90](packages/codeboltjs/src/modules/kvStore.ts#L90) |
| <a id="deletenamespace"></a> `deleteNamespace()` | (`instanceId`: `string`, `namespace`: `string`) => `Promise`\<[`KVDeleteNamespaceResponse`](../interfaces/KVDeleteNamespaceResponse)\> | Delete an entire namespace from the KV store | [packages/codeboltjs/src/modules/kvStore.ts:165](packages/codeboltjs/src/modules/kvStore.ts#L165) |
| <a id="get"></a> `get()` | (`instanceId`: `string`, `namespace`: `string`, `key`: `string`) => `Promise`\<[`KVGetResponse`](../interfaces/KVGetResponse)\> | Get a value from the KV store | [packages/codeboltjs/src/modules/kvStore.ts:107](packages/codeboltjs/src/modules/kvStore.ts#L107) |
| <a id="getinstance"></a> `getInstance()` | (`instanceId`: `string`) => `Promise`\<[`KVInstanceResponse`](../interfaces/KVInstanceResponse)\> | Get a KV store instance by ID | [packages/codeboltjs/src/modules/kvStore.ts:45](packages/codeboltjs/src/modules/kvStore.ts#L45) |
| <a id="getnamespaces"></a> `getNamespaces()` | (`instanceId`: `string`) => `Promise`\<[`KVNamespacesResponse`](../interfaces/KVNamespacesResponse)\> | Get all namespaces in an instance | [packages/codeboltjs/src/modules/kvStore.ts:195](packages/codeboltjs/src/modules/kvStore.ts#L195) |
| <a id="getrecordcount"></a> `getRecordCount()` | (`instanceId`: `string`, `namespace?`: `string`) => `Promise`\<[`KVRecordCountResponse`](../interfaces/KVRecordCountResponse)\> | Get record count for an instance or namespace | [packages/codeboltjs/src/modules/kvStore.ts:211](packages/codeboltjs/src/modules/kvStore.ts#L211) |
| <a id="listinstances"></a> `listInstances()` | () => `Promise`\<[`KVInstanceListResponse`](../interfaces/KVInstanceListResponse)\> | List all KV store instances | [packages/codeboltjs/src/modules/kvStore.ts:59](packages/codeboltjs/src/modules/kvStore.ts#L59) |
| <a id="query"></a> `query()` | (`query`: [`KVQueryDSL`](../interfaces/KVQueryDSL)) => `Promise`\<[`KVQueryResponse`](../interfaces/KVQueryResponse)\> | Query the KV store using DSL | [packages/codeboltjs/src/modules/kvStore.ts:180](packages/codeboltjs/src/modules/kvStore.ts#L180) |
| <a id="set"></a> `set()` | (`instanceId`: `string`, `namespace`: `string`, `key`: `string`, `value`: `any`, `autoCreateInstance`: `boolean`) => `Promise`\<[`KVSetResponse`](../interfaces/KVSetResponse)\> | Set a value in the KV store | [packages/codeboltjs/src/modules/kvStore.ts:126](packages/codeboltjs/src/modules/kvStore.ts#L126) |
| <a id="updateinstance"></a> `updateInstance()` | (`instanceId`: `string`, `updates`: [`UpdateKVInstanceParams`](../interfaces/UpdateKVInstanceParams)) => `Promise`\<[`KVInstanceResponse`](../interfaces/KVInstanceResponse)\> | Update a KV store instance | [packages/codeboltjs/src/modules/kvStore.ts:75](packages/codeboltjs/src/modules/kvStore.ts#L75) |
