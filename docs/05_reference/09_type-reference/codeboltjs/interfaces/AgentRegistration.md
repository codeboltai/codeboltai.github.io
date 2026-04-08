---
title: AgentRegistration
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: AgentRegistration

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:17

Agent registration data

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="agentid"></a> `agentId?` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:18 |
| <a id="agenttype"></a> `agentType?` | `"internal"` \| `"external"` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:21 |
| <a id="capabilities"></a> `capabilities?` | `string`[] | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:20 |
| <a id="connectioninfo"></a> `connectionInfo?` | \{ `endpoint`: `string`; `protocol`: `"websocket"` \| `"http"`; \} | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:22 |
| `connectionInfo.endpoint` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:23 |
| `connectionInfo.protocol` | `"websocket"` \| `"http"` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:24 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `any`\> | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:26 |
| <a id="name"></a> `name` | `string` | common/types/dist/codeboltjstypes/libFunctionTypes/swarm.d.ts:19 |
