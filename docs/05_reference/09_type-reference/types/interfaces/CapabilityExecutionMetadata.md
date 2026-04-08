---
title: CapabilityExecutionMetadata
---

[**@codebolt/types**](../index.md)

***

# Interface: CapabilityExecutionMetadata

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:102

Capability execution metadata

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="capabilityname"></a> `capabilityName` | `string` | Name of the capability being executed | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:106 |
| <a id="capabilitytype"></a> `capabilityType` | `string` | Type of the capability | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:108 |
| <a id="executorname"></a> `executorName` | `string` | Name of the executor running the capability | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:110 |
| <a id="id"></a> `id` | `string` | Unique identifier for this execution | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:104 |
| <a id="parentagentid"></a> `parentAgentId` | `string` | Parent agent ID | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:116 |
| <a id="parentagentinstanceid"></a> `parentAgentInstanceId` | `string` | Parent agent instance ID | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:118 |
| <a id="sideexecutionid"></a> `sideExecutionId` | `string` | ID of the underlying side execution | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:112 |
| <a id="starttime"></a> `startTime` | `number` | Start timestamp | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:120 |
| <a id="status"></a> `status` | \| `"starting"` \| `"running"` \| `"stopping"` \| `"stopped"` \| `"completed"` \| `"failed"` \| `"timeout"` | Current status | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:122 |
| <a id="threadid"></a> `threadId` | `string` | Thread ID (same as parent agent) | common/types/src/codeboltjstypes/libFunctionTypes/capability.ts:114 |
