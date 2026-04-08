---
title: agentEventQueue
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: agentEventQueue

```ts
const agentEventQueue: {
  _acknowledgeEvent: (eventId: string, success: boolean, errorMessage?: string) => Promise<AgentEventQueueResponse<any>>;
  _fetchPendingFromBackend: (params: GetPendingEventsInput) => Promise<AgentEventMessage[]>;
  acknowledgeEvent: (eventId: string, success: boolean, errorMessage?: string) => Promise<AgentEventQueueResponse<any>>;
  addEvent: (params: AddEventInput) => Promise<AgentEventQueueResponse<AddEventResponseData>>;
  checkForPendingExternalEvent: () => UnifiedExternalEvent | null;
  clearLocalCache: () => void;
  clearQueue: (agentId?: string) => Promise<AgentEventQueueResponse<any>>;
  getLocalCacheSize: () => number;
  getPendingExternalEventCount: () => number;
  getPendingExternalEvents: () => UnifiedExternalEvent[];
  getPendingQueueEvents: (maxDepth?: number) => Promise<AgentEventMessage[]>;
  getQueueStats: () => Promise<AgentEventQueueResponse<QueueStatsResponseData>>;
  onQueueEvent: (handler: QueueEventHandler) => () => void;
  peekLocalCache: () => AgentEventMessage[];
  sendAgentMessage: (params: SendAgentMessageInput) => Promise<AgentEventQueueResponse<AddEventResponseData>>;
  waitForAnyExternalEvent: () => Promise<UnifiedExternalEvent>;
  waitForNextQueueEvent: (maxDepth: number) => Promise<
     | AgentEventMessage
    | AgentEventMessage[]>;
};
```

Defined in: packages/codeboltjs/src/modules/agentEventQueue.ts:143

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_acknowledgeevent"></a> `_acknowledgeEvent()` | (`eventId`: `string`, `success`: `boolean`, `errorMessage?`: `string`) => `Promise`\<[`AgentEventQueueResponse`](../interfaces/AgentEventQueueResponse)\<`any`\>\> | Acknowledge an event at the backend | [packages/codeboltjs/src/modules/agentEventQueue.ts:225](packages/codeboltjs/src/modules/agentEventQueue.ts#L225) |
| <a id="_fetchpendingfrombackend"></a> `_fetchPendingFromBackend()` | (`params`: [`GetPendingEventsInput`](../interfaces/GetPendingEventsInput)) => `Promise`\<[`AgentEventMessage`](../interfaces/AgentEventMessage)[]\> | Fetch pending events from backend | [packages/codeboltjs/src/modules/agentEventQueue.ts:245](packages/codeboltjs/src/modules/agentEventQueue.ts#L245) |
| <a id="acknowledgeevent"></a> `acknowledgeEvent()` | (`eventId`: `string`, `success`: `boolean`, `errorMessage?`: `string`) => `Promise`\<[`AgentEventQueueResponse`](../interfaces/AgentEventQueueResponse)\<`any`\>\> | Manually acknowledge an event. Use this when handling events via onQueueEvent. | [packages/codeboltjs/src/modules/agentEventQueue.ts:425](packages/codeboltjs/src/modules/agentEventQueue.ts#L425) |
| <a id="addevent"></a> `addEvent()` | (`params`: [`AddEventInput`](../interfaces/AddEventInput)) => `Promise`\<[`AgentEventQueueResponse`](../interfaces/AgentEventQueueResponse)\<[`AddEventResponseData`](../interfaces/AddEventResponseData)\>\> | Add an event to a target agent's queue | [packages/codeboltjs/src/modules/agentEventQueue.ts:153](packages/codeboltjs/src/modules/agentEventQueue.ts#L153) |
| <a id="checkforpendingexternalevent"></a> `checkForPendingExternalEvent()` | () => `UnifiedExternalEvent` \| `null` | Check for any pending external events without waiting. Returns the first pending event or null if none available. | [packages/codeboltjs/src/modules/agentEventQueue.ts:471](packages/codeboltjs/src/modules/agentEventQueue.ts#L471) |
| <a id="clearlocalcache"></a> `clearLocalCache()` | () => `void` | Clear the local event cache (does not affect backend) | [packages/codeboltjs/src/modules/agentEventQueue.ts:457](packages/codeboltjs/src/modules/agentEventQueue.ts#L457) |
| <a id="clearqueue"></a> `clearQueue()` | (`agentId?`: `string`) => `Promise`\<[`AgentEventQueueResponse`](../interfaces/AgentEventQueueResponse)\<`any`\>\> | Clear the queue for an agent | [packages/codeboltjs/src/modules/agentEventQueue.ts:203](packages/codeboltjs/src/modules/agentEventQueue.ts#L203) |
| <a id="getlocalcachesize"></a> `getLocalCacheSize()` | () => `number` | Get the number of events in the local cache | [packages/codeboltjs/src/modules/agentEventQueue.ts:442](packages/codeboltjs/src/modules/agentEventQueue.ts#L442) |
| <a id="getpendingexternaleventcount"></a> `getPendingExternalEventCount()` | () => `number` | Get the count of pending external events. | [packages/codeboltjs/src/modules/agentEventQueue.ts:495](packages/codeboltjs/src/modules/agentEventQueue.ts#L495) |
| <a id="getpendingexternalevents"></a> `getPendingExternalEvents()` | () => `UnifiedExternalEvent`[] | Get all pending external events. Returns all pending events and clears the cache. | [packages/codeboltjs/src/modules/agentEventQueue.ts:484](packages/codeboltjs/src/modules/agentEventQueue.ts#L484) |
| <a id="getpendingqueueevents"></a> `getPendingQueueEvents()` | (`maxDepth?`: `number`) => `Promise`\<[`AgentEventMessage`](../interfaces/AgentEventMessage)[]\> | Get pending events from local cache. Sends acknowledgement for each event and removes from local cache. If no local events, fetches from backend. | [packages/codeboltjs/src/modules/agentEventQueue.ts:296](packages/codeboltjs/src/modules/agentEventQueue.ts#L296) |
| <a id="getqueuestats"></a> `getQueueStats()` | () => `Promise`\<[`AgentEventQueueResponse`](../interfaces/AgentEventQueueResponse)\<[`QueueStatsResponseData`](../interfaces/QueueStatsResponseData)\>\> | Get queue statistics | [packages/codeboltjs/src/modules/agentEventQueue.ts:186](packages/codeboltjs/src/modules/agentEventQueue.ts#L186) |
| <a id="onqueueevent"></a> `onQueueEvent()` | (`handler`: [`QueueEventHandler`](../type-aliases/QueueEventHandler)) => () => `void` | Register an event handler that will be called when events are received. The handler receives events as they arrive via WebSocket. Note: This does NOT automatically acknowledge events. | [packages/codeboltjs/src/modules/agentEventQueue.ts:409](packages/codeboltjs/src/modules/agentEventQueue.ts#L409) |
| <a id="peeklocalcache"></a> `peekLocalCache()` | () => [`AgentEventMessage`](../interfaces/AgentEventMessage)[] | Get all events currently in the local cache without removing them | [packages/codeboltjs/src/modules/agentEventQueue.ts:450](packages/codeboltjs/src/modules/agentEventQueue.ts#L450) |
| <a id="sendagentmessage"></a> `sendAgentMessage()` | (`params`: [`SendAgentMessageInput`](../interfaces/SendAgentMessageInput)) => `Promise`\<[`AgentEventQueueResponse`](../interfaces/AgentEventQueueResponse)\<[`AddEventResponseData`](../interfaces/AddEventResponseData)\>\> | Send an inter-agent message (convenience wrapper) | [packages/codeboltjs/src/modules/agentEventQueue.ts:170](packages/codeboltjs/src/modules/agentEventQueue.ts#L170) |
| <a id="waitforanyexternalevent"></a> `waitForAnyExternalEvent()` | () => `Promise`\<`UnifiedExternalEvent`\> | Waits for any external event from multiple sources: - Agent queue events (from local cache or WebSocket) - Background agent completions - Grouped agent completions Returns the first event that occurs from any source. | [packages/codeboltjs/src/modules/agentEventQueue.ts:509](packages/codeboltjs/src/modules/agentEventQueue.ts#L509) |
| <a id="waitfornextqueueevent"></a> `waitForNextQueueEvent()` | (`maxDepth`: `number`) => `Promise`\< \| [`AgentEventMessage`](../interfaces/AgentEventMessage) \| [`AgentEventMessage`](../interfaces/AgentEventMessage)[]\> | Wait for the next event(s) from the queue. First checks local cache, then waits for WebSocket events. Sends acknowledgement and removes from cache before resolving. | [packages/codeboltjs/src/modules/agentEventQueue.ts:366](packages/codeboltjs/src/modules/agentEventQueue.ts#L366) |
