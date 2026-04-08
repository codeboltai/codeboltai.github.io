---
title: Dispute
---

[**@codebolt/types**](../index.md)

***

# Interface: Dispute

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:159

A dispute raised against an update request

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="comments"></a> `comments` | [`DisputeComment`](DisputeComment)[] | Comments on this dispute | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:169 |
| <a id="createdat"></a> `createdAt` | `string` | When the dispute was raised | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:171 |
| <a id="id"></a> `id` | `string` | - | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:160 |
| <a id="raisedby"></a> `raisedBy` | `string` | Who raised the dispute | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:162 |
| <a id="raisedbytype"></a> `raisedByType` | [`ActorType`](../type-aliases/ActorType) | - | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:163 |
| <a id="reason"></a> `reason` | `string` | Reason for the dispute | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:165 |
| <a id="resolutionsummary"></a> `resolutionSummary?` | `string` | Resolution summary | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:175 |
| <a id="resolvedat"></a> `resolvedAt?` | `string` | When the dispute was resolved | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:173 |
| <a id="status"></a> `status` | [`DisputeStatus`](../type-aliases/DisputeStatus) | Current status | common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:167 |
