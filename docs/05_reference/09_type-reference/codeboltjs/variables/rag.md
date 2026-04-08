---
title: rag
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: rag

```ts
const rag: {
  add_file: (filename: string, file_path: string) => void;
  init: () => void;
  retrieve_related_knowledge: (query: string, filename: string) => void;
};
```

Defined in: packages/codeboltjs/src/modules/rag.ts:4

A module for managing files within the CodeBolt File System.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="add_file"></a> `add_file()` | (`filename`: `string`, `file_path`: `string`) => `void` | Adds a file to the CodeBolt File System. | [packages/codeboltjs/src/modules/rag.ts:15](packages/codeboltjs/src/modules/rag.ts#L15) |
| <a id="init"></a> `init()` | () => `void` | Initializes the CodeBolt File System Module. | [packages/codeboltjs/src/modules/rag.ts:8](packages/codeboltjs/src/modules/rag.ts#L8) |
| <a id="retrieve_related_knowledge"></a> `retrieve_related_knowledge()` | (`query`: `string`, `filename`: `string`) => `void` | Retrieves related knowledge for a given query and filename. | [packages/codeboltjs/src/modules/rag.ts:23](packages/codeboltjs/src/modules/rag.ts#L23) |
