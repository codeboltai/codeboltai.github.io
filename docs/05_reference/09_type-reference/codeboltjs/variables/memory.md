---
title: memory
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: memory

```ts
const memory: {
  json: {
     delete: (memoryId: string) => Promise<DeleteMemoryResponse>;
     list: (filters: Record<string, unknown>) => Promise<ListMemoryResponse>;
     save: (json: any) => Promise<SaveMemoryResponse>;
     update: (memoryId: string, json: any) => Promise<UpdateMemoryResponse>;
  };
  markdown: {
     delete: (memoryId: string) => Promise<DeleteMemoryResponse>;
     list: (filters: Record<string, unknown>) => Promise<ListMemoryResponse>;
     save: (markdown: string, metadata: Record<string, unknown>) => Promise<SaveMemoryResponse>;
     update: (memoryId: string, markdown: string, metadata: Record<string, unknown>) => Promise<UpdateMemoryResponse>;
  };
  todo: {
     delete: (memoryId: string) => Promise<DeleteMemoryResponse>;
     list: (filters: Record<string, unknown>) => Promise<ListMemoryResponse>;
     save: (todo: 
        | {
        createdAt?: string;
        id?: string;
        priority?: "low" | "medium" | "high";
        status?: "pending" | "completed" | "processing";
        tags?: string[];
        title?: string;
        updatedAt?: string;
      }
        | {
        createdAt?: string;
        id?: string;
        priority?: "low" | "medium" | "high";
        status?: "pending" | "completed" | "processing";
        tags?: string[];
        title?: string;
        updatedAt?: string;
     }[], metadata: Record<string, unknown>) => Promise<SaveMemoryResponse>;
     update: (memoryId: string, todo: {
        createdAt?: string;
        id?: string;
        priority?: "low" | "medium" | "high";
        status?: "pending" | "completed" | "processing";
        tags?: string[];
        title?: string;
        updatedAt?: string;
     }) => Promise<UpdateMemoryResponse>;
  };
};
```

Defined in: packages/codeboltjs/src/modules/memory.ts:46

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="json"></a> `json` | \{ `delete`: (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\>; `list`: (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\>; `save`: (`json`: `any`) => `Promise`\<`SaveMemoryResponse`\>; `update`: (`memoryId`: `string`, `json`: `any`) => `Promise`\<`UpdateMemoryResponse`\>; \} | [packages/codeboltjs/src/modules/memory.ts:47](packages/codeboltjs/src/modules/memory.ts#L47) |
| `json.delete()` | (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:75](packages/codeboltjs/src/modules/memory.ts#L75) |
| `json.list()` | (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:88](packages/codeboltjs/src/modules/memory.ts#L88) |
| `json.save()` | (`json`: `any`) => `Promise`\<`SaveMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:48](packages/codeboltjs/src/modules/memory.ts#L48) |
| `json.update()` | (`memoryId`: `string`, `json`: `any`) => `Promise`\<`UpdateMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:61](packages/codeboltjs/src/modules/memory.ts#L61) |
| <a id="markdown"></a> `markdown` | \{ `delete`: (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\>; `list`: (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\>; `save`: (`markdown`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`SaveMemoryResponse`\>; `update`: (`memoryId`: `string`, `markdown`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`UpdateMemoryResponse`\>; \} | [packages/codeboltjs/src/modules/memory.ts:158](packages/codeboltjs/src/modules/memory.ts#L158) |
| `markdown.delete()` | (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:188](packages/codeboltjs/src/modules/memory.ts#L188) |
| `markdown.list()` | (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:201](packages/codeboltjs/src/modules/memory.ts#L201) |
| `markdown.save()` | (`markdown`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`SaveMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:159](packages/codeboltjs/src/modules/memory.ts#L159) |
| `markdown.update()` | (`memoryId`: `string`, `markdown`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`UpdateMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:173](packages/codeboltjs/src/modules/memory.ts#L173) |
| <a id="todo"></a> `todo` | \{ `delete`: (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\>; `list`: (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\>; `save`: (`todo`: \| \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \} \| \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \}[], `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`SaveMemoryResponse`\>; `update`: (`memoryId`: `string`, `todo`: \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \}) => `Promise`\<`UpdateMemoryResponse`\>; \} | [packages/codeboltjs/src/modules/memory.ts:102](packages/codeboltjs/src/modules/memory.ts#L102) |
| `todo.delete()` | (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:131](packages/codeboltjs/src/modules/memory.ts#L131) |
| `todo.list()` | (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:144](packages/codeboltjs/src/modules/memory.ts#L144) |
| `todo.save()` | (`todo`: \| \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \} \| \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \}[], `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`SaveMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:103](packages/codeboltjs/src/modules/memory.ts#L103) |
| `todo.update()` | (`memoryId`: `string`, `todo`: \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \}) => `Promise`\<`UpdateMemoryResponse`\> | [packages/codeboltjs/src/modules/memory.ts:117](packages/codeboltjs/src/modules/memory.ts#L117) |
