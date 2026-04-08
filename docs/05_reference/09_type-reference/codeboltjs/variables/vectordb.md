---
title: vectordb
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: vectordb

```ts
const vectordb: {
  addVectorItem: (item: any) => Promise<AddVectorItemResponse>;
  getVector: (key: string) => Promise<GetVectorResponse>;
  queryVectorItem: (key: string) => Promise<QueryVectorItemResponse>;
  queryVectorItems: (items: [], dbPath: string) => Promise<QueryVectorItemResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/vectordb.ts:4

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addvectoritem"></a> `addVectorItem()` | (`item`: `any`) => `Promise`\<`AddVectorItemResponse`\> | Adds a new vector item to the vector database. | [packages/codeboltjs/src/modules/vectordb.ts:31](packages/codeboltjs/src/modules/vectordb.ts#L31) |
| <a id="getvector"></a> `getVector()` | (`key`: `string`) => `Promise`\<`GetVectorResponse`\> | Retrieves a vector from the vector database based on the provided key. | [packages/codeboltjs/src/modules/vectordb.ts:11](packages/codeboltjs/src/modules/vectordb.ts#L11) |
| <a id="queryvectoritem"></a> `queryVectorItem()` | (`key`: `string`) => `Promise`\<`QueryVectorItemResponse`\> | Queries a vector item from the vector database based on the provided key. | [packages/codeboltjs/src/modules/vectordb.ts:50](packages/codeboltjs/src/modules/vectordb.ts#L50) |
| <a id="queryvectoritems"></a> `queryVectorItems()` | (`items`: \[\], `dbPath`: `string`) => `Promise`\<`QueryVectorItemResponse`\> | Queries a vector item from the vector database based on the provided key. | [packages/codeboltjs/src/modules/vectordb.ts:68](packages/codeboltjs/src/modules/vectordb.ts#L68) |
