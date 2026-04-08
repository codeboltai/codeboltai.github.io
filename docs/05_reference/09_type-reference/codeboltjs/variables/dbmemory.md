---
title: dbmemory
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: dbmemory

```ts
const dbmemory: {
  addKnowledge: (key: string, value: MemoryValue) => Promise<MemorySetResponse>;
  getKnowledge: (key: string) => Promise<MemoryGetResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/dbmemory.ts:12

A module for handling in-memory database operations via WebSocket.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addknowledge"></a> `addKnowledge()` | (`key`: `string`, `value`: `MemoryValue`) => `Promise`\<`MemorySetResponse`\> | Adds a key-value pair to the in-memory database. | [packages/codeboltjs/src/modules/dbmemory.ts:19](packages/codeboltjs/src/modules/dbmemory.ts#L19) |
| <a id="getknowledge"></a> `getKnowledge()` | (`key`: `string`) => `Promise`\<`MemoryGetResponse`\> | Retrieves a value from the in-memory database by key. | [packages/codeboltjs/src/modules/dbmemory.ts:35](packages/codeboltjs/src/modules/dbmemory.ts#L35) |
