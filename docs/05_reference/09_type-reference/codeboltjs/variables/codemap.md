---
title: codemap
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: codemap

```ts
const codemap: {
  create: (data: CreateCodemapData, projectPath?: string) => Promise<CodemapCreateResponse>;
  delete: (codemapId: string, projectPath?: string) => Promise<CodemapDeleteResponse>;
  get: (codemapId: string, projectPath?: string) => Promise<CodemapGetResponse>;
  list: (projectPath?: string) => Promise<CodemapListResponse>;
  save: (codemapId: string, codemap: Codemap, projectPath?: string) => Promise<CodemapSaveResponse>;
  setStatus: (codemapId: string, status: CodemapStatus, error?: string, projectPath?: string) => Promise<CodemapUpdateResponse>;
  update: (codemapId: string, data: UpdateCodemapData, projectPath?: string) => Promise<CodemapUpdateResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/codemap.ts:21

Codemap Module for codeboltjs
Provides functionality for managing codemaps (visual representations of code structure).
Mirrors the codemapService.cli.ts operations via WebSocket.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="create"></a> `create()` | (`data`: [`CreateCodemapData`](../interfaces/CreateCodemapData), `projectPath?`: `string`) => `Promise`\<[`CodemapCreateResponse`](../interfaces/CodemapCreateResponse)\> | Create a placeholder codemap (status: 'creating') Call this before generating the actual codemap content | [packages/codeboltjs/src/modules/codemap.ts:58](packages/codeboltjs/src/modules/codemap.ts#L58) |
| <a id="delete"></a> `delete()` | (`codemapId`: `string`, `projectPath?`: `string`) => `Promise`\<[`CodemapDeleteResponse`](../interfaces/CodemapDeleteResponse)\> | Delete a codemap | [packages/codeboltjs/src/modules/codemap.ts:122](packages/codeboltjs/src/modules/codemap.ts#L122) |
| <a id="get"></a> `get()` | (`codemapId`: `string`, `projectPath?`: `string`) => `Promise`\<[`CodemapGetResponse`](../interfaces/CodemapGetResponse)\> | Get a specific codemap by ID | [packages/codeboltjs/src/modules/codemap.ts:41](packages/codeboltjs/src/modules/codemap.ts#L41) |
| <a id="list"></a> `list()` | (`projectPath?`: `string`) => `Promise`\<[`CodemapListResponse`](../interfaces/CodemapListResponse)\> | List all codemaps for a project | [packages/codeboltjs/src/modules/codemap.ts:25](packages/codeboltjs/src/modules/codemap.ts#L25) |
| <a id="save"></a> `save()` | (`codemapId`: `string`, `codemap`: [`Codemap`](../interfaces/Codemap), `projectPath?`: `string`) => `Promise`\<[`CodemapSaveResponse`](../interfaces/CodemapSaveResponse)\> | Save a complete codemap with content | [packages/codeboltjs/src/modules/codemap.ts:74](packages/codeboltjs/src/modules/codemap.ts#L74) |
| <a id="setstatus"></a> `setStatus()` | (`codemapId`: `string`, `status`: [`CodemapStatus`](../type-aliases/CodemapStatus), `error?`: `string`, `projectPath?`: `string`) => `Promise`\<[`CodemapUpdateResponse`](../interfaces/CodemapUpdateResponse)\> | Set the status of a codemap | [packages/codeboltjs/src/modules/codemap.ts:90](packages/codeboltjs/src/modules/codemap.ts#L90) |
| <a id="update"></a> `update()` | (`codemapId`: `string`, `data`: [`UpdateCodemapData`](../interfaces/UpdateCodemapData), `projectPath?`: `string`) => `Promise`\<[`CodemapUpdateResponse`](../interfaces/CodemapUpdateResponse)\> | Update codemap info (title, description, etc.) | [packages/codeboltjs/src/modules/codemap.ts:106](packages/codeboltjs/src/modules/codemap.ts#L106) |
