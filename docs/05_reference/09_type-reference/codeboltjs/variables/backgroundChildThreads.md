---
title: backgroundChildThreads
---

[**@codebolt/codeboltjs**](../index.md)

***

# Variable: backgroundChildThreads

```ts
const backgroundChildThreads: {
  addRunningAgent: (threadId: string, data: BackgroundAgentData, groupId?: string) => void;
  checkForBackgroundAgentCompletion: () => BackgroundAgentCompletion[] | null;
  checkForBackgroundGroupedAgentCompletion: () => BackgroundAgentCompletion | null;
  getRunningAgentCount: () => number;
  onBackgroundAgentCompletion: () => Promise<BackgroundAgentCompletion[] | null>;
  onBackgroundGroupedAgentCompletion: () => Promise<BackgroundAgentCompletion | null>;
  waitForAnyExternalEvent: () => Promise<BackgroundExternalEvent>;
};
```

Defined in: packages/codeboltjs/src/modules/backgroundChildThreads.ts:71

Background Child Threads module for tracking and managing background agent threads.
This module provides APIs for tracking running background agents and their completion.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addrunningagent"></a> `addRunningAgent()` | (`threadId`: `string`, `data`: `BackgroundAgentData`, `groupId?`: `string`) => `void` | Adds a running background agent to tracking. | packages/codeboltjs/src/modules/backgroundChildThreads.ts:79 |
| <a id="checkforbackgroundagentcompletion"></a> `checkForBackgroundAgentCompletion()` | () => `BackgroundAgentCompletion`[] \| `null` | Checks if any background agent has completed. | packages/codeboltjs/src/modules/backgroundChildThreads.ts:101 |
| <a id="checkforbackgroundgroupedagentcompletion"></a> `checkForBackgroundGroupedAgentCompletion()` | () => `BackgroundAgentCompletion` \| `null` | Checks if any grouped background agent has completed. | packages/codeboltjs/src/modules/backgroundChildThreads.ts:130 |
| <a id="getrunningagentcount"></a> `getRunningAgentCount()` | () => `number` | Gets the number of currently running background agents. | packages/codeboltjs/src/modules/backgroundChildThreads.ts:93 |
| <a id="onbackgroundagentcompletion"></a> `onBackgroundAgentCompletion()` | () => `Promise`\<`BackgroundAgentCompletion`[] \| `null`\> | Waits for background agent completion. | packages/codeboltjs/src/modules/backgroundChildThreads.ts:114 |
| <a id="onbackgroundgroupedagentcompletion"></a> `onBackgroundGroupedAgentCompletion()` | () => `Promise`\<`BackgroundAgentCompletion` \| `null`\> | Waits for grouped background agent completion. | packages/codeboltjs/src/modules/backgroundChildThreads.ts:146 |
| <a id="waitforanyexternalevent"></a> `waitForAnyExternalEvent()` | () => `Promise`\<`BackgroundExternalEvent`\> | Waits for any external event (background agent completion, grouped agent completion, or agent event). Returns the first event that occurs. | packages/codeboltjs/src/modules/backgroundChildThreads.ts:163 |
