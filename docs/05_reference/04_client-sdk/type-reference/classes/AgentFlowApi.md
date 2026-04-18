---
title: AgentFlowApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: AgentFlowApi

Defined in: CodeBolt/packages/clientsdk/src/api/agent-flow.api.ts:11

Provides methods for managing agent flows in the CodeBolt runtime.

Agent flows define visual, node-based workflows that orchestrate agent behavior
through connected plugins. This API supports creating and updating flows,
as well as discovering available flow plugins and their UI definitions.

## Constructors

### Constructor

```ts
new AgentFlowApi(http: HttpClient): AgentFlowApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-flow.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`AgentFlowApi`

## Methods

### create()

```ts
create(data: CreateAgentFlowRequest): Promise<AgentFlow>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-flow.api.ts:31

Creates a new agent flow.

Defines a new node-based workflow that agents can execute. The flow
consists of interconnected plugin nodes that define the processing pipeline.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateAgentFlowRequest` | The flow creation payload including nodes and connections |

#### Returns

`Promise`\<`AgentFlow`\>

A promise that resolves to the newly created AgentFlow

#### Example

```typescript
const flow = await client.agentFlow.create({
  name: 'Code Review Pipeline',
  nodes: [{ type: 'analyze', config: {} }]
});
```

***

### get()

```ts
get(params?: Record<string, unknown>): Promise<AgentFlow>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-flow.api.ts:49

Retrieves agent flow(s).

Returns one or more agent flows based on the provided query parameters.
Use this to look up flows by name, ID, or other criteria.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters to identify which flow(s) to retrieve |

#### Returns

`Promise`\<`AgentFlow`\>

A promise that resolves to the AgentFlow object

#### Example

```typescript
const flow = await client.agentFlow.get({ name: 'Code Review Pipeline' });
```

***

### getPlugins()

```ts
getPlugins(params?: Record<string, unknown>): Promise<AgentFlowPlugin[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-flow.api.ts:81

Retrieves available agent flow plugins.

Returns the list of plugin types that can be used as nodes within
agent flows, each defining a specific processing capability.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering plugins |

#### Returns

`Promise`\<`AgentFlowPlugin`[]\>

A promise that resolves to an array of AgentFlowPlugin objects

#### Example

```typescript
const plugins = await client.agentFlow.getPlugins();
plugins.forEach(p => console.log(p.name, p.description));
```

***

### getPluginUi()

```ts
getPluginUi(pluginName: string): Promise<AgentFlowPluginUi>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-flow.api.ts:100

Retrieves the UI definition for a specific flow plugin.

Returns the schema and layout information needed to render the
plugin's configuration interface in the flow editor.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | The name of the plugin to get the UI definition for |

#### Returns

`Promise`\<`AgentFlowPluginUi`\>

A promise that resolves to the AgentFlowPluginUi definition

#### Example

```typescript
const ui = await client.agentFlow.getPluginUi('code-analyzer');
console.log(ui.fields);
```

***

### update()

```ts
update(data: UpdateAgentFlowRequest): Promise<AgentFlow>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-flow.api.ts:62

Updates an existing agent flow.

Modifies the node configuration, connections, or metadata of an
existing flow.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateAgentFlowRequest` | The update payload containing the modified flow data |

#### Returns

`Promise`\<`AgentFlow`\>

A promise that resolves to the updated AgentFlow
