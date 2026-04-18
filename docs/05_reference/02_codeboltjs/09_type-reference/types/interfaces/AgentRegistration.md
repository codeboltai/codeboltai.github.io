---
title: AgentRegistration
---

[**@codebolt/types**](../index.md)

***

# Interface: AgentRegistration

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:23

Agent registration data

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:24 |
| <a id="agenttype"></a> `agentType?` | `"internal"` \| `"external"` | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:27 |
| <a id="capabilities"></a> `capabilities?` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:26 |
| <a id="connectioninfo"></a> `connectionInfo?` | \{ `endpoint`: `string`; `protocol`: `"websocket"` \| `"http"`; \} | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:28 |
| `connectionInfo.endpoint` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:29 |
| `connectionInfo.protocol` | `"websocket"` \| `"http"` | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:30 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:32 |
| <a id="name"></a> `name` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/swarm.ts:25 |
