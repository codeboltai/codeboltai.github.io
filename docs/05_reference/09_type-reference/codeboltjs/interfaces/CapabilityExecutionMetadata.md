---
title: CapabilityExecutionMetadata
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: CapabilityExecutionMetadata

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:90

Capability execution metadata

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="capabilityname"></a> `capabilityName` | `string` | Name of the capability being executed | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:94 |
| <a id="capabilitytype"></a> `capabilityType` | `string` | Type of the capability | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:96 |
| <a id="executorname"></a> `executorName` | `string` | Name of the executor running the capability | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:98 |
| <a id="id"></a> `id` | `string` | Unique identifier for this execution | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:92 |
| <a id="parentagentid"></a> `parentAgentId` | `string` | Parent agent ID | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:104 |
| <a id="parentagentinstanceid"></a> `parentAgentInstanceId` | `string` | Parent agent instance ID | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:106 |
| <a id="sideexecutionid"></a> `sideExecutionId` | `string` | ID of the underlying side execution | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:100 |
| <a id="starttime"></a> `startTime` | `number` | Start timestamp | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:108 |
| <a id="status"></a> `status` | \| `"timeout"` \| `"completed"` \| `"failed"` \| `"running"` \| `"starting"` \| `"stopping"` \| `"stopped"` | Current status | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:110 |
| <a id="threadid"></a> `threadId` | `string` | Thread ID (same as parent agent) | common/types/dist/codeboltjstypes/libFunctionTypes/capability.d.ts:102 |
