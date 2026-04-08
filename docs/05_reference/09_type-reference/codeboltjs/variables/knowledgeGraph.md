---
title: knowledgeGraph
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: knowledgeGraph

```ts
const knowledgeGraph: {
  addEdge: (instanceId: string, edge: CreateKGEdgeParams) => Promise<KGEdgeResponse>;
  addEdges: (instanceId: string, edges: CreateKGEdgeParams[]) => Promise<KGEdgeListResponse>;
  addMemoryRecord: (instanceId: string, record: CreateKGMemoryRecordParams) => Promise<KGMemoryRecordResponse>;
  addMemoryRecords: (instanceId: string, records: CreateKGMemoryRecordParams[]) => Promise<KGMemoryRecordListResponse>;
  createInstance: (config: CreateKGInstanceParams) => Promise<KGInstanceResponse>;
  createInstanceTemplate: (config: CreateKGInstanceTemplateParams) => Promise<KGInstanceTemplateResponse>;
  createView: (config: CreateKGViewParams) => Promise<KGViewResponse>;
  createViewTemplate: (config: CreateKGViewTemplateParams) => Promise<KGViewTemplateResponse>;
  deleteEdge: (instanceId: string, edgeId: string) => Promise<KGDeleteResponse>;
  deleteInstance: (instanceId: string) => Promise<KGDeleteResponse>;
  deleteInstanceTemplate: (templateId: string) => Promise<KGDeleteResponse>;
  deleteMemoryRecord: (instanceId: string, recordId: string) => Promise<KGDeleteResponse>;
  deleteView: (viewId: string) => Promise<KGDeleteResponse>;
  deleteViewTemplate: (templateId: string) => Promise<KGDeleteResponse>;
  executeView: (viewId: string) => Promise<KGViewExecuteResponse>;
  getInstance: (instanceId: string) => Promise<KGInstanceResponse>;
  getInstanceTemplate: (templateId: string) => Promise<KGInstanceTemplateResponse>;
  getMemoryRecord: (instanceId: string, recordId: string) => Promise<KGMemoryRecordResponse>;
  getViewTemplate: (templateId: string) => Promise<KGViewTemplateResponse>;
  listEdges: (instanceId: string, filters?: ListKGEdgesParams) => Promise<KGEdgeListResponse>;
  listInstances: (templateId?: string) => Promise<KGInstanceListResponse>;
  listInstanceTemplates: () => Promise<KGInstanceTemplateListResponse>;
  listMemoryRecords: (instanceId: string, filters?: ListKGMemoryRecordsParams) => Promise<KGMemoryRecordListResponse>;
  listViews: (instanceId: string) => Promise<KGViewListResponse>;
  listViewTemplates: (applicableTemplateId?: string) => Promise<KGViewTemplateListResponse>;
  updateInstanceTemplate: (templateId: string, updates: Partial<CreateKGInstanceTemplateParams>) => Promise<KGInstanceTemplateResponse>;
  updateMemoryRecord: (instanceId: string, recordId: string, updates: Partial<CreateKGMemoryRecordParams>) => Promise<KGMemoryRecordResponse>;
  updateViewTemplate: (templateId: string, updates: Partial<CreateKGViewTemplateParams>) => Promise<KGViewTemplateResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/knowledgeGraph.ts:33

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addedge"></a> `addEdge()` | (`instanceId`: `string`, `edge`: [`CreateKGEdgeParams`](../interfaces/CreateKGEdgeParams)) => `Promise`\<[`KGEdgeResponse`](../interfaces/KGEdgeResponse)\> | Add an edge to an instance | [packages/codeboltjs/src/modules/knowledgeGraph.ts:287](packages/codeboltjs/src/modules/knowledgeGraph.ts#L287) |
| <a id="addedges"></a> `addEdges()` | (`instanceId`: `string`, `edges`: [`CreateKGEdgeParams`](../interfaces/CreateKGEdgeParams)[]) => `Promise`\<[`KGEdgeListResponse`](../interfaces/KGEdgeListResponse)\> | Add multiple edges to an instance | [packages/codeboltjs/src/modules/knowledgeGraph.ts:303](packages/codeboltjs/src/modules/knowledgeGraph.ts#L303) |
| <a id="addmemoryrecord"></a> `addMemoryRecord()` | (`instanceId`: `string`, `record`: [`CreateKGMemoryRecordParams`](../interfaces/CreateKGMemoryRecordParams)) => `Promise`\<[`KGMemoryRecordResponse`](../interfaces/KGMemoryRecordResponse)\> | Add a memory record to an instance | [packages/codeboltjs/src/modules/knowledgeGraph.ts:186](packages/codeboltjs/src/modules/knowledgeGraph.ts#L186) |
| <a id="addmemoryrecords"></a> `addMemoryRecords()` | (`instanceId`: `string`, `records`: [`CreateKGMemoryRecordParams`](../interfaces/CreateKGMemoryRecordParams)[]) => `Promise`\<[`KGMemoryRecordListResponse`](../interfaces/KGMemoryRecordListResponse)\> | Add multiple memory records to an instance | [packages/codeboltjs/src/modules/knowledgeGraph.ts:202](packages/codeboltjs/src/modules/knowledgeGraph.ts#L202) |
| <a id="createinstance"></a> `createInstance()` | (`config`: [`CreateKGInstanceParams`](../interfaces/CreateKGInstanceParams)) => `Promise`\<[`KGInstanceResponse`](../interfaces/KGInstanceResponse)\> | Create a new knowledge graph instance | [packages/codeboltjs/src/modules/knowledgeGraph.ts:121](packages/codeboltjs/src/modules/knowledgeGraph.ts#L121) |
| <a id="createinstancetemplate"></a> `createInstanceTemplate()` | (`config`: [`CreateKGInstanceTemplateParams`](../interfaces/CreateKGInstanceTemplateParams)) => `Promise`\<[`KGInstanceTemplateResponse`](../interfaces/KGInstanceTemplateResponse)\> | Create a new instance template | [packages/codeboltjs/src/modules/knowledgeGraph.ts:42](packages/codeboltjs/src/modules/knowledgeGraph.ts#L42) |
| <a id="createview"></a> `createView()` | (`config`: [`CreateKGViewParams`](../interfaces/CreateKGViewParams)) => `Promise`\<[`KGViewResponse`](../interfaces/KGViewResponse)\> | Create a view | [packages/codeboltjs/src/modules/knowledgeGraph.ts:434](packages/codeboltjs/src/modules/knowledgeGraph.ts#L434) |
| <a id="createviewtemplate"></a> `createViewTemplate()` | (`config`: [`CreateKGViewTemplateParams`](../interfaces/CreateKGViewTemplateParams)) => `Promise`\<[`KGViewTemplateResponse`](../interfaces/KGViewTemplateResponse)\> | Create a view template | [packages/codeboltjs/src/modules/knowledgeGraph.ts:354](packages/codeboltjs/src/modules/knowledgeGraph.ts#L354) |
| <a id="deleteedge"></a> `deleteEdge()` | (`instanceId`: `string`, `edgeId`: `string`) => `Promise`\<[`KGDeleteResponse`](../interfaces/KGDeleteResponse)\> | Delete an edge | [packages/codeboltjs/src/modules/knowledgeGraph.ts:335](packages/codeboltjs/src/modules/knowledgeGraph.ts#L335) |
| <a id="deleteinstance"></a> `deleteInstance()` | (`instanceId`: `string`) => `Promise`\<[`KGDeleteResponse`](../interfaces/KGDeleteResponse)\> | Delete an instance | [packages/codeboltjs/src/modules/knowledgeGraph.ts:166](packages/codeboltjs/src/modules/knowledgeGraph.ts#L166) |
| <a id="deleteinstancetemplate"></a> `deleteInstanceTemplate()` | (`templateId`: `string`) => `Promise`\<[`KGDeleteResponse`](../interfaces/KGDeleteResponse)\> | Delete an instance template | [packages/codeboltjs/src/modules/knowledgeGraph.ts:102](packages/codeboltjs/src/modules/knowledgeGraph.ts#L102) |
| <a id="deletememoryrecord"></a> `deleteMemoryRecord()` | (`instanceId`: `string`, `recordId`: `string`) => `Promise`\<[`KGDeleteResponse`](../interfaces/KGDeleteResponse)\> | Delete a memory record | [packages/codeboltjs/src/modules/knowledgeGraph.ts:267](packages/codeboltjs/src/modules/knowledgeGraph.ts#L267) |
| <a id="deleteview"></a> `deleteView()` | (`viewId`: `string`) => `Promise`\<[`KGDeleteResponse`](../interfaces/KGDeleteResponse)\> | Delete a view | [packages/codeboltjs/src/modules/knowledgeGraph.ts:479](packages/codeboltjs/src/modules/knowledgeGraph.ts#L479) |
| <a id="deleteviewtemplate"></a> `deleteViewTemplate()` | (`templateId`: `string`) => `Promise`\<[`KGDeleteResponse`](../interfaces/KGDeleteResponse)\> | Delete a view template | [packages/codeboltjs/src/modules/knowledgeGraph.ts:415](packages/codeboltjs/src/modules/knowledgeGraph.ts#L415) |
| <a id="executeview"></a> `executeView()` | (`viewId`: `string`) => `Promise`\<[`KGViewExecuteResponse`](../interfaces/KGViewExecuteResponse)\> | Execute a view query | [packages/codeboltjs/src/modules/knowledgeGraph.ts:464](packages/codeboltjs/src/modules/knowledgeGraph.ts#L464) |
| <a id="getinstance"></a> `getInstance()` | (`instanceId`: `string`) => `Promise`\<[`KGInstanceResponse`](../interfaces/KGInstanceResponse)\> | Get an instance by ID | [packages/codeboltjs/src/modules/knowledgeGraph.ts:136](packages/codeboltjs/src/modules/knowledgeGraph.ts#L136) |
| <a id="getinstancetemplate"></a> `getInstanceTemplate()` | (`templateId`: `string`) => `Promise`\<[`KGInstanceTemplateResponse`](../interfaces/KGInstanceTemplateResponse)\> | Get an instance template by ID | [packages/codeboltjs/src/modules/knowledgeGraph.ts:57](packages/codeboltjs/src/modules/knowledgeGraph.ts#L57) |
| <a id="getmemoryrecord"></a> `getMemoryRecord()` | (`instanceId`: `string`, `recordId`: `string`) => `Promise`\<[`KGMemoryRecordResponse`](../interfaces/KGMemoryRecordResponse)\> | Get a memory record by ID | [packages/codeboltjs/src/modules/knowledgeGraph.ts:218](packages/codeboltjs/src/modules/knowledgeGraph.ts#L218) |
| <a id="getviewtemplate"></a> `getViewTemplate()` | (`templateId`: `string`) => `Promise`\<[`KGViewTemplateResponse`](../interfaces/KGViewTemplateResponse)\> | Get a view template by ID | [packages/codeboltjs/src/modules/knowledgeGraph.ts:369](packages/codeboltjs/src/modules/knowledgeGraph.ts#L369) |
| <a id="listedges"></a> `listEdges()` | (`instanceId`: `string`, `filters?`: [`ListKGEdgesParams`](../interfaces/ListKGEdgesParams)) => `Promise`\<[`KGEdgeListResponse`](../interfaces/KGEdgeListResponse)\> | List edges in an instance | [packages/codeboltjs/src/modules/knowledgeGraph.ts:319](packages/codeboltjs/src/modules/knowledgeGraph.ts#L319) |
| <a id="listinstances"></a> `listInstances()` | (`templateId?`: `string`) => `Promise`\<[`KGInstanceListResponse`](../interfaces/KGInstanceListResponse)\> | List instances, optionally filtered by template | [packages/codeboltjs/src/modules/knowledgeGraph.ts:151](packages/codeboltjs/src/modules/knowledgeGraph.ts#L151) |
| <a id="listinstancetemplates"></a> `listInstanceTemplates()` | () => `Promise`\<[`KGInstanceTemplateListResponse`](../interfaces/KGInstanceTemplateListResponse)\> | List all instance templates | [packages/codeboltjs/src/modules/knowledgeGraph.ts:71](packages/codeboltjs/src/modules/knowledgeGraph.ts#L71) |
| <a id="listmemoryrecords"></a> `listMemoryRecords()` | (`instanceId`: `string`, `filters?`: [`ListKGMemoryRecordsParams`](../interfaces/ListKGMemoryRecordsParams)) => `Promise`\<[`KGMemoryRecordListResponse`](../interfaces/KGMemoryRecordListResponse)\> | List memory records in an instance | [packages/codeboltjs/src/modules/knowledgeGraph.ts:234](packages/codeboltjs/src/modules/knowledgeGraph.ts#L234) |
| <a id="listviews"></a> `listViews()` | (`instanceId`: `string`) => `Promise`\<[`KGViewListResponse`](../interfaces/KGViewListResponse)\> | List views for an instance | [packages/codeboltjs/src/modules/knowledgeGraph.ts:449](packages/codeboltjs/src/modules/knowledgeGraph.ts#L449) |
| <a id="listviewtemplates"></a> `listViewTemplates()` | (`applicableTemplateId?`: `string`) => `Promise`\<[`KGViewTemplateListResponse`](../interfaces/KGViewTemplateListResponse)\> | List view templates | [packages/codeboltjs/src/modules/knowledgeGraph.ts:384](packages/codeboltjs/src/modules/knowledgeGraph.ts#L384) |
| <a id="updateinstancetemplate"></a> `updateInstanceTemplate()` | (`templateId`: `string`, `updates`: `Partial`\<[`CreateKGInstanceTemplateParams`](../interfaces/CreateKGInstanceTemplateParams)\>) => `Promise`\<[`KGInstanceTemplateResponse`](../interfaces/KGInstanceTemplateResponse)\> | Update an instance template | [packages/codeboltjs/src/modules/knowledgeGraph.ts:87](packages/codeboltjs/src/modules/knowledgeGraph.ts#L87) |
| <a id="updatememoryrecord"></a> `updateMemoryRecord()` | (`instanceId`: `string`, `recordId`: `string`, `updates`: `Partial`\<[`CreateKGMemoryRecordParams`](../interfaces/CreateKGMemoryRecordParams)\>) => `Promise`\<[`KGMemoryRecordResponse`](../interfaces/KGMemoryRecordResponse)\> | Update a memory record | [packages/codeboltjs/src/modules/knowledgeGraph.ts:251](packages/codeboltjs/src/modules/knowledgeGraph.ts#L251) |
| <a id="updateviewtemplate"></a> `updateViewTemplate()` | (`templateId`: `string`, `updates`: `Partial`\<[`CreateKGViewTemplateParams`](../interfaces/CreateKGViewTemplateParams)\>) => `Promise`\<[`KGViewTemplateResponse`](../interfaces/KGViewTemplateResponse)\> | Update a view template | [packages/codeboltjs/src/modules/knowledgeGraph.ts:400](packages/codeboltjs/src/modules/knowledgeGraph.ts#L400) |
