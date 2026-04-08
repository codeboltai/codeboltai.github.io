---
title: AgentRegistration
---

[**@codebolt/types**](../index)

***

# Interface: AgentRegistration

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:23

Agent registration data

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:24](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L24) |
| <a id="agenttype"></a> `agentType?` | `"internal"` \| `"external"` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:27](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L27) |
| <a id="capabilities"></a> `capabilities?` | `string`[] | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:26](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L26) |
| <a id="connectioninfo"></a> `connectionInfo?` | \{ `endpoint`: `string`; `protocol`: `"websocket"` \| `"http"`; \} | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:28](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L28) |
| `connectionInfo.endpoint` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:29](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L29) |
| `connectionInfo.protocol` | `"websocket"` \| `"http"` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:30](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L30) |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:32](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L32) |
| <a id="name"></a> `name` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:25](common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts#L25) |
