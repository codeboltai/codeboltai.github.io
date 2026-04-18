---
title: memory
---

[**@codebolt/codeboltjs**](../index.md)

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
| <a id="json"></a> `json` | \{ `delete`: (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\>; `list`: (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\>; `save`: (`json`: `any`) => `Promise`\<`SaveMemoryResponse`\>; `update`: (`memoryId`: `string`, `json`: `any`) => `Promise`\<`UpdateMemoryResponse`\>; \} | packages/codeboltjs/src/modules/memory.ts:47 |
| `json.delete()` | (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:75 |
| `json.list()` | (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:88 |
| `json.save()` | (`json`: `any`) => `Promise`\<`SaveMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:48 |
| `json.update()` | (`memoryId`: `string`, `json`: `any`) => `Promise`\<`UpdateMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:61 |
| <a id="markdown"></a> `markdown` | \{ `delete`: (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\>; `list`: (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\>; `save`: (`markdown`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`SaveMemoryResponse`\>; `update`: (`memoryId`: `string`, `markdown`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`UpdateMemoryResponse`\>; \} | packages/codeboltjs/src/modules/memory.ts:158 |
| `markdown.delete()` | (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:188 |
| `markdown.list()` | (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:201 |
| `markdown.save()` | (`markdown`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`SaveMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:159 |
| `markdown.update()` | (`memoryId`: `string`, `markdown`: `string`, `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`UpdateMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:173 |
| <a id="todo"></a> `todo` | \{ `delete`: (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\>; `list`: (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\>; `save`: (`todo`: \| \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \} \| \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \}[], `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`SaveMemoryResponse`\>; `update`: (`memoryId`: `string`, `todo`: \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \}) => `Promise`\<`UpdateMemoryResponse`\>; \} | packages/codeboltjs/src/modules/memory.ts:102 |
| `todo.delete()` | (`memoryId`: `string`) => `Promise`\<`DeleteMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:131 |
| `todo.list()` | (`filters`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ListMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:144 |
| `todo.save()` | (`todo`: \| \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \} \| \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \}[], `metadata`: `Record`\<`string`, `unknown`\>) => `Promise`\<`SaveMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:103 |
| `todo.update()` | (`memoryId`: `string`, `todo`: \{ `createdAt?`: `string`; `id?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `status?`: `"pending"` \| `"completed"` \| `"processing"`; `tags?`: `string`[]; `title?`: `string`; `updatedAt?`: `string`; \}) => `Promise`\<`UpdateMemoryResponse`\> | packages/codeboltjs/src/modules/memory.ts:117 |
