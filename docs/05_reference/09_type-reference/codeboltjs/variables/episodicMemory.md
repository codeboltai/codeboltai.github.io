---
title: episodicMemory
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: episodicMemory

```ts
const episodicMemory: {
  appendEvent: (params: IAppendEventParams) => Promise<IAppendEventResponse>;
  archiveMemory: (params: IArchiveMemoryParams) => Promise<IArchiveMemoryResponse>;
  createMemory: (params: ICreateMemoryParams) => Promise<ICreateMemoryResponse>;
  getAgents: (params: IGetAgentsParams) => Promise<IGetAgentsResponse>;
  getEventTypes: (params: IGetEventTypesParams) => Promise<IGetEventTypesResponse>;
  getMemory: (params: IGetMemoryParams) => Promise<IGetMemoryResponse>;
  getTags: (params: IGetTagsParams) => Promise<IGetTagsResponse>;
  listMemories: () => Promise<IListMemoriesResponse>;
  queryEvents: (params: IQueryEventsParams) => Promise<IQueryEventsResponse>;
  unarchiveMemory: (params: IUnarchiveMemoryParams) => Promise<IUnarchiveMemoryResponse>;
  updateTitle: (params: IUpdateTitleParams) => Promise<IUpdateTitleResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/episodicMemory.ts:184

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="appendevent"></a> `appendEvent()` | (`params`: [`IAppendEventParams`](../interfaces/IAppendEventParams)) => `Promise`\<[`IAppendEventResponse`](../interfaces/IAppendEventResponse)\> | Append an event to an episodic memory | [packages/codeboltjs/src/modules/episodicMemory.ts:233](packages/codeboltjs/src/modules/episodicMemory.ts#L233) |
| <a id="archivememory"></a> `archiveMemory()` | (`params`: [`IArchiveMemoryParams`](../interfaces/IArchiveMemoryParams)) => `Promise`\<[`IArchiveMemoryResponse`](../interfaces/IArchiveMemoryResponse)\> | Archive an episodic memory | [packages/codeboltjs/src/modules/episodicMemory.ts:308](packages/codeboltjs/src/modules/episodicMemory.ts#L308) |
| <a id="creatememory"></a> `createMemory()` | (`params`: [`ICreateMemoryParams`](../interfaces/ICreateMemoryParams)) => `Promise`\<[`ICreateMemoryResponse`](../interfaces/ICreateMemoryResponse)\> | Create a new episodic memory | [packages/codeboltjs/src/modules/episodicMemory.ts:190](packages/codeboltjs/src/modules/episodicMemory.ts#L190) |
| <a id="getagents"></a> `getAgents()` | (`params`: [`IGetAgentsParams`](../interfaces/IGetAgentsParams)) => `Promise`\<[`IGetAgentsResponse`](../interfaces/IGetAgentsResponse)\> | Get unique agent IDs from an episodic memory | [packages/codeboltjs/src/modules/episodicMemory.ts:293](packages/codeboltjs/src/modules/episodicMemory.ts#L293) |
| <a id="geteventtypes"></a> `getEventTypes()` | (`params`: [`IGetEventTypesParams`](../interfaces/IGetEventTypesParams)) => `Promise`\<[`IGetEventTypesResponse`](../interfaces/IGetEventTypesResponse)\> | Get unique event types from an episodic memory | [packages/codeboltjs/src/modules/episodicMemory.ts:263](packages/codeboltjs/src/modules/episodicMemory.ts#L263) |
| <a id="getmemory"></a> `getMemory()` | (`params`: [`IGetMemoryParams`](../interfaces/IGetMemoryParams)) => `Promise`\<[`IGetMemoryResponse`](../interfaces/IGetMemoryResponse)\> | Get a specific episodic memory by ID | [packages/codeboltjs/src/modules/episodicMemory.ts:218](packages/codeboltjs/src/modules/episodicMemory.ts#L218) |
| <a id="gettags"></a> `getTags()` | (`params`: [`IGetTagsParams`](../interfaces/IGetTagsParams)) => `Promise`\<[`IGetTagsResponse`](../interfaces/IGetTagsResponse)\> | Get unique tags from an episodic memory | [packages/codeboltjs/src/modules/episodicMemory.ts:278](packages/codeboltjs/src/modules/episodicMemory.ts#L278) |
| <a id="listmemories"></a> `listMemories()` | () => `Promise`\<[`IListMemoriesResponse`](../interfaces/IListMemoriesResponse)\> | List all episodic memories | [packages/codeboltjs/src/modules/episodicMemory.ts:204](packages/codeboltjs/src/modules/episodicMemory.ts#L204) |
| <a id="queryevents"></a> `queryEvents()` | (`params`: [`IQueryEventsParams`](../interfaces/IQueryEventsParams)) => `Promise`\<[`IQueryEventsResponse`](../interfaces/IQueryEventsResponse)\> | Query events from an episodic memory with optional filters | [packages/codeboltjs/src/modules/episodicMemory.ts:248](packages/codeboltjs/src/modules/episodicMemory.ts#L248) |
| <a id="unarchivememory"></a> `unarchiveMemory()` | (`params`: [`IUnarchiveMemoryParams`](../interfaces/IUnarchiveMemoryParams)) => `Promise`\<[`IUnarchiveMemoryResponse`](../interfaces/IUnarchiveMemoryResponse)\> | Unarchive an episodic memory | [packages/codeboltjs/src/modules/episodicMemory.ts:323](packages/codeboltjs/src/modules/episodicMemory.ts#L323) |
| <a id="updatetitle"></a> `updateTitle()` | (`params`: [`IUpdateTitleParams`](../interfaces/IUpdateTitleParams)) => `Promise`\<[`IUpdateTitleResponse`](../interfaces/IUpdateTitleResponse)\> | Update the title of an episodic memory | [packages/codeboltjs/src/modules/episodicMemory.ts:338](packages/codeboltjs/src/modules/episodicMemory.ts#L338) |
