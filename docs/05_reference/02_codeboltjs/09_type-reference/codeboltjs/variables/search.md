---
title: search
---

[**@codebolt/codeboltjs**](../index.md)

***

# Variable: search

```ts
const search: {
  get_first_link: (query: string) => Promise<string>;
  init: (engine?: string) => void;
  search: (query: string) => Promise<string>;
};
```

Defined in: packages/codeboltjs/src/modules/search.ts:4

A module for handling search operations.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="get_first_link"></a> `get_first_link()` | (`query`: `string`) => `Promise`\<`string`\> | Retrieves the first link from the search results for the given query. | packages/codeboltjs/src/modules/search.ts:26 |
| <a id="init"></a> `init()` | (`engine?`: `string`) => `void` | Initializes the search module with the specified search engine. | packages/codeboltjs/src/modules/search.ts:9 |
| <a id="search"></a> `search()` | (`query`: `string`) => `Promise`\<`string`\> | Performs a search operation for the given query. | packages/codeboltjs/src/modules/search.ts:16 |
