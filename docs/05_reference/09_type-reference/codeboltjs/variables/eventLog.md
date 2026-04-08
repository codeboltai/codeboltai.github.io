---
title: eventLog
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: eventLog

```ts
const eventLog: {
  appendEvent: (params: AppendEventParams) => Promise<EventLogAppendResponse>;
  appendEvents: (params: AppendEventsParams) => Promise<EventLogAppendMultipleResponse>;
  createInstance: (name: string, description?: string) => Promise<EventLogInstanceResponse>;
  deleteInstance: (instanceId: string) => Promise<EventLogInstanceResponse>;
  getInstance: (instanceId: string) => Promise<EventLogInstanceResponse>;
  getInstanceStats: (instanceId: string) => Promise<EventLogStatsResponse>;
  listInstances: () => Promise<EventLogInstanceListResponse>;
  queryEvents: (query: EventLogDSL) => Promise<EventLogQueryResponse>;
  updateInstance: (instanceId: string, updates: UpdateEventLogInstanceParams) => Promise<EventLogInstanceResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/eventLog.ts:22

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="appendevent"></a> `appendEvent()` | (`params`: [`AppendEventParams`](../interfaces/AppendEventParams)) => `Promise`\<[`EventLogAppendResponse`](../interfaces/EventLogAppendResponse)\> | Append a single event to the log | [packages/codeboltjs/src/modules/eventLog.ts:103](packages/codeboltjs/src/modules/eventLog.ts#L103) |
| <a id="appendevents"></a> `appendEvents()` | (`params`: [`AppendEventsParams`](../interfaces/AppendEventsParams)) => `Promise`\<[`EventLogAppendMultipleResponse`](../interfaces/EventLogAppendMultipleResponse)\> | Append multiple events to the log | [packages/codeboltjs/src/modules/eventLog.ts:118](packages/codeboltjs/src/modules/eventLog.ts#L118) |
| <a id="createinstance"></a> `createInstance()` | (`name`: `string`, `description?`: `string`) => `Promise`\<[`EventLogInstanceResponse`](../interfaces/EventLogInstanceResponse)\> | Create a new event log instance | [packages/codeboltjs/src/modules/eventLog.ts:28](packages/codeboltjs/src/modules/eventLog.ts#L28) |
| <a id="deleteinstance"></a> `deleteInstance()` | (`instanceId`: `string`) => `Promise`\<[`EventLogInstanceResponse`](../interfaces/EventLogInstanceResponse)\> | Delete an event log instance | [packages/codeboltjs/src/modules/eventLog.ts:88](packages/codeboltjs/src/modules/eventLog.ts#L88) |
| <a id="getinstance"></a> `getInstance()` | (`instanceId`: `string`) => `Promise`\<[`EventLogInstanceResponse`](../interfaces/EventLogInstanceResponse)\> | Get an event log instance by ID | [packages/codeboltjs/src/modules/eventLog.ts:43](packages/codeboltjs/src/modules/eventLog.ts#L43) |
| <a id="getinstancestats"></a> `getInstanceStats()` | (`instanceId`: `string`) => `Promise`\<[`EventLogStatsResponse`](../interfaces/EventLogStatsResponse)\> | Get instance statistics | [packages/codeboltjs/src/modules/eventLog.ts:148](packages/codeboltjs/src/modules/eventLog.ts#L148) |
| <a id="listinstances"></a> `listInstances()` | () => `Promise`\<[`EventLogInstanceListResponse`](../interfaces/EventLogInstanceListResponse)\> | List all event log instances | [packages/codeboltjs/src/modules/eventLog.ts:57](packages/codeboltjs/src/modules/eventLog.ts#L57) |
| <a id="queryevents"></a> `queryEvents()` | (`query`: [`EventLogDSL`](../interfaces/EventLogDSL)) => `Promise`\<[`EventLogQueryResponse`](../interfaces/EventLogQueryResponse)\> | Query events using DSL | [packages/codeboltjs/src/modules/eventLog.ts:133](packages/codeboltjs/src/modules/eventLog.ts#L133) |
| <a id="updateinstance"></a> `updateInstance()` | (`instanceId`: `string`, `updates`: [`UpdateEventLogInstanceParams`](../interfaces/UpdateEventLogInstanceParams)) => `Promise`\<[`EventLogInstanceResponse`](../interfaces/EventLogInstanceResponse)\> | Update an event log instance | [packages/codeboltjs/src/modules/eventLog.ts:73](packages/codeboltjs/src/modules/eventLog.ts#L73) |
