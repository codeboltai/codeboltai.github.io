---
title: projectStructureUpdateRequest
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: projectStructureUpdateRequest

```ts
const projectStructureUpdateRequest: {
  addComment: (id: string, disputeId: string, data: AddCommentData, workspacePath?: string) => Promise<UpdateRequestResponse>;
  addDispute: (id: string, data: CreateDisputeData, workspacePath?: string) => Promise<UpdateRequestResponse>;
  complete: (id: string, workspacePath?: string) => Promise<UpdateRequestResponse>;
  create: (data: CreateUpdateRequestData, workspacePath?: string) => Promise<UpdateRequestResponse>;
  delete: (id: string, workspacePath?: string) => Promise<UpdateRequestResponse>;
  get: (id: string, workspacePath?: string) => Promise<UpdateRequestResponse>;
  list: (filters?: UpdateRequestFilters, workspacePath?: string) => Promise<UpdateRequestListResponse>;
  merge: (id: string, workspacePath?: string) => Promise<UpdateRequestResponse>;
  resolveDispute: (id: string, disputeId: string, resolutionSummary?: string, workspacePath?: string) => Promise<UpdateRequestResponse>;
  startWork: (id: string, workspacePath?: string) => Promise<UpdateRequestResponse>;
  submit: (id: string, workspacePath?: string) => Promise<UpdateRequestResponse>;
  unwatch: (id: string, watcherId: string, workspacePath?: string) => Promise<UpdateRequestResponse>;
  update: (id: string, updates: UpdateUpdateRequestData, workspacePath?: string) => Promise<UpdateRequestResponse>;
  watch: (id: string, data: AddWatcherData, workspacePath?: string) => Promise<UpdateRequestResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:18

Project Structure Update Request Module for codeboltjs
Allows agents to propose changes to the project structure

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addcomment"></a> `addComment()` | (`id`: `string`, `disputeId`: `string`, `data`: `AddCommentData`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Add a comment | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:198](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L198) |
| <a id="adddispute"></a> `addDispute()` | (`id`: `string`, `data`: `CreateDisputeData`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Add a dispute | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:166](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L166) |
| <a id="complete"></a> `complete()` | (`id`: `string`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Complete work on an update request | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:134](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L134) |
| <a id="create"></a> `create()` | (`data`: `CreateUpdateRequestData`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Create a new update request | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:22](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L22) |
| <a id="delete"></a> `delete()` | (`id`: `string`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Delete an update request | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:86](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L86) |
| <a id="get"></a> `get()` | (`id`: `string`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Get an update request by ID | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:38](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L38) |
| <a id="list"></a> `list()` | (`filters?`: `UpdateRequestFilters`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestListResponse`\> | List update requests | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:54](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L54) |
| <a id="merge"></a> `merge()` | (`id`: `string`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Merge an update request | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:150](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L150) |
| <a id="resolvedispute"></a> `resolveDispute()` | (`id`: `string`, `disputeId`: `string`, `resolutionSummary?`: `string`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Resolve a dispute | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:182](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L182) |
| <a id="startwork"></a> `startWork()` | (`id`: `string`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Start working on an update request | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:118](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L118) |
| <a id="submit"></a> `submit()` | (`id`: `string`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Submit an update request for review | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:102](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L102) |
| <a id="unwatch"></a> `unwatch()` | (`id`: `string`, `watcherId`: `string`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Stop watching an update request | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:230](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L230) |
| <a id="update"></a> `update()` | (`id`: `string`, `updates`: `UpdateUpdateRequestData`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Update an existing update request | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:70](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L70) |
| <a id="watch"></a> `watch()` | (`id`: `string`, `data`: `AddWatcherData`, `workspacePath?`: `string`) => `Promise`\<`UpdateRequestResponse`\> | Watch an update request | [packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts:214](packages/codeboltjs/src/modules/projectStructureUpdateRequest.ts#L214) |
