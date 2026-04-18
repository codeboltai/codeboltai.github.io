---
title: capability
---

[**@codebolt/codeboltjs**](../index.md)

***

# Variable: capability

```ts
const capability: {
  getCapabilitiesByAuthor: (author: string) => Promise<ListCapabilitiesResponse>;
  getCapabilitiesByTag: (tag: string) => Promise<ListCapabilitiesResponse>;
  getCapabilityDetail: (capabilityName: string, capabilityType?: string) => Promise<GetCapabilityDetailResponse>;
  getExecutionStatus: (executionId: string) => Promise<GetExecutionStatusResponse>;
  listCapabilities: (filter?: CapabilityFilter) => Promise<ListCapabilitiesResponse>;
  listCapabilitiesByType: (capabilityType: string) => Promise<ListCapabilitiesResponse>;
  listExecutors: () => Promise<ListExecutorsResponse>;
  listPowers: () => Promise<ListCapabilitiesResponse>;
  listSkills: () => Promise<ListCapabilitiesResponse>;
  listTalents: () => Promise<ListCapabilitiesResponse>;
  startCapability: (capabilityName: string, capabilityType: string, params?: Record<string, any>, timeout?: number) => Promise<StartCapabilityResponse>;
  startPower: (powerName: string, params?: Record<string, any>, timeout?: number) => Promise<StartCapabilityResponse>;
  startSkill: (skillName: string, params?: Record<string, any>, timeout?: number) => Promise<StartCapabilityResponse>;
  startTalent: (talentName: string, params?: Record<string, any>, timeout?: number) => Promise<StartCapabilityResponse>;
  stopCapability: (executionId: string) => Promise<StopCapabilityResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/capability.ts:44

Capability Module
Provides functionality for managing and executing capabilities (Skills, Powers, Talents)

Implements Requirements: 9.1, 9.2, 9.3, 9.4, 9.5

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="getcapabilitiesbyauthor"></a> `getCapabilitiesByAuthor()` | (`author`: `string`) => `Promise`\<[`ListCapabilitiesResponse`](../interfaces/ListCapabilitiesResponse)\> | Get capabilities by author | packages/codeboltjs/src/modules/capability.ts:289 |
| <a id="getcapabilitiesbytag"></a> `getCapabilitiesByTag()` | (`tag`: `string`) => `Promise`\<[`ListCapabilitiesResponse`](../interfaces/ListCapabilitiesResponse)\> | Get capabilities by tag | packages/codeboltjs/src/modules/capability.ts:271 |
| <a id="getcapabilitydetail"></a> `getCapabilityDetail()` | (`capabilityName`: `string`, `capabilityType?`: `string`) => `Promise`\<[`GetCapabilityDetailResponse`](../interfaces/GetCapabilityDetailResponse)\> | Get detailed information about a specific capability | packages/codeboltjs/src/modules/capability.ts:119 |
| <a id="getexecutionstatus"></a> `getExecutionStatus()` | (`executionId`: `string`) => `Promise`\<[`GetExecutionStatusResponse`](../interfaces/GetExecutionStatusResponse)\> | Get the status of a capability execution | packages/codeboltjs/src/modules/capability.ts:253 |
| <a id="listcapabilities"></a> `listCapabilities()` | (`filter?`: [`CapabilityFilter`](../interfaces/CapabilityFilter)) => `Promise`\<[`ListCapabilitiesResponse`](../interfaces/ListCapabilitiesResponse)\> | List all available capabilities with optional filtering | packages/codeboltjs/src/modules/capability.ts:52 |
| <a id="listcapabilitiesbytype"></a> `listCapabilitiesByType()` | (`capabilityType`: `string`) => `Promise`\<[`ListCapabilitiesResponse`](../interfaces/ListCapabilitiesResponse)\> | List capabilities by type | packages/codeboltjs/src/modules/capability.ts:70 |
| <a id="listexecutors"></a> `listExecutors()` | () => `Promise`\<[`ListExecutorsResponse`](../interfaces/ListExecutorsResponse)\> | List all available capability executors | packages/codeboltjs/src/modules/capability.ts:140 |
| <a id="listpowers"></a> `listPowers()` | () => `Promise`\<[`ListCapabilitiesResponse`](../interfaces/ListCapabilitiesResponse)\> | List all available powers | packages/codeboltjs/src/modules/capability.ts:97 |
| <a id="listskills"></a> `listSkills()` | () => `Promise`\<[`ListCapabilitiesResponse`](../interfaces/ListCapabilitiesResponse)\> | List all available skills | packages/codeboltjs/src/modules/capability.ts:87 |
| <a id="listtalents"></a> `listTalents()` | () => `Promise`\<[`ListCapabilitiesResponse`](../interfaces/ListCapabilitiesResponse)\> | List all available talents | packages/codeboltjs/src/modules/capability.ts:107 |
| <a id="startcapability"></a> `startCapability()` | (`capabilityName`: `string`, `capabilityType`: `string`, `params?`: `Record`\<`string`, `any`\>, `timeout?`: `number`) => `Promise`\<[`StartCapabilityResponse`](../interfaces/StartCapabilityResponse)\> | Start a capability execution | packages/codeboltjs/src/modules/capability.ts:160 |
| <a id="startpower"></a> `startPower()` | (`powerName`: `string`, `params?`: `Record`\<`string`, `any`\>, `timeout?`: `number`) => `Promise`\<[`StartCapabilityResponse`](../interfaces/StartCapabilityResponse)\> | Start a power execution | packages/codeboltjs/src/modules/capability.ts:205 |
| <a id="startskill"></a> `startSkill()` | (`skillName`: `string`, `params?`: `Record`\<`string`, `any`\>, `timeout?`: `number`) => `Promise`\<[`StartCapabilityResponse`](../interfaces/StartCapabilityResponse)\> | Start a skill execution | packages/codeboltjs/src/modules/capability.ts:188 |
| <a id="starttalent"></a> `startTalent()` | (`talentName`: `string`, `params?`: `Record`\<`string`, `any`\>, `timeout?`: `number`) => `Promise`\<[`StartCapabilityResponse`](../interfaces/StartCapabilityResponse)\> | Start a talent execution | packages/codeboltjs/src/modules/capability.ts:222 |
| <a id="stopcapability"></a> `stopCapability()` | (`executionId`: `string`) => `Promise`\<[`StopCapabilityResponse`](../interfaces/StopCapabilityResponse)\> | Stop a running capability execution | packages/codeboltjs/src/modules/capability.ts:237 |
