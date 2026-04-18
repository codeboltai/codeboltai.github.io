---
title: InternalASTNode
---

[**@codebolt/types**](../index.md)

***

# Interface: InternalASTNode

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:89

## Indexable

```ts
[key: string]: any
```

Additional node properties

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="children"></a> `children?` | `InternalASTNode`[] | Child nodes | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:101 |
| <a id="column"></a> `column?` | `number` | Column number where the node starts | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:99 |
| <a id="end"></a> `end?` | `number` | End position in the source code | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:95 |
| <a id="line"></a> `line?` | `number` | Line number where the node starts | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:97 |
| <a id="start"></a> `start?` | `number` | Start position in the source code | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:93 |
| <a id="type"></a> `type` | `string` | Type of the AST node | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:91 |
| <a id="value"></a> `value?` | `any` | Node value/content | common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:103 |
