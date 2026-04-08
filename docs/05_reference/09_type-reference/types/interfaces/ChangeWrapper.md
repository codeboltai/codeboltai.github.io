---
title: ChangeWrapper
---

[**@codebolt/types**](../index.md)

***

# Interface: ChangeWrapper\<T\>

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:30

Wraps an item with change metadata

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The type of item being wrapped |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="action"></a> `action` | [`ChangeAction`](../type-aliases/ChangeAction) | The action to perform | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:34 |
| <a id="id"></a> `id` | `string` | Unique identifier for this change | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:32 |
| <a id="item"></a> `item` | `T` | The item data (new state for create/update, current state for delete) | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:36 |
| <a id="originalitem"></a> `originalItem?` | `T` | Original item before change (for update/delete actions) | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:38 |
