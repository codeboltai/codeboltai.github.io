---
title: ProjectStructureUpdateRequest
---

[**@codebolt/types**](../index)

***

# Interface: ProjectStructureUpdateRequest

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:201

Complete Project Structure Update Request

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="author"></a> `author` | `string` | Who created the request | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:215](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L215) |
| <a id="authortype"></a> `authorType` | [`ActorType`](../type-aliases/ActorType) | - | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:216](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L216) |
| <a id="changes"></a> `changes` | [`UpdateRequestChange`](UpdateRequestChange)[] | All changes to be applied | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:219](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L219) |
| <a id="createdat"></a> `createdAt` | `string` | Timestamps | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:228](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L228) |
| <a id="description"></a> `description?` | `string` | Detailed description of what and why | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:209](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L209) |
| <a id="disputes"></a> `disputes` | [`Dispute`](Dispute)[] | Disputes against this request | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:222](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L222) |
| <a id="id"></a> `id` | `string` | Unique identifier | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:203](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L203) |
| <a id="mergedat"></a> `mergedAt?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:231](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L231) |
| <a id="status"></a> `status` | [`UpdateRequestStatus`](../type-aliases/UpdateRequestStatus) | Current status | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:212](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L212) |
| <a id="submittedat"></a> `submittedAt?` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:230](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L230) |
| <a id="title"></a> `title` | `string` | Short title describing the change | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:206](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L206) |
| <a id="updatedat"></a> `updatedAt` | `string` | - | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:229](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L229) |
| <a id="watchers"></a> `watchers` | [`Watcher`](Watcher)[] | Agents/users watching this request | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:225](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L225) |
