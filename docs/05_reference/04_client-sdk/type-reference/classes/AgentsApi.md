---
title: AgentsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: AgentsApi

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:26

Provides methods for managing agents in the CodeBolt runtime.

This is the primary API for agent lifecycle management, including starting,
stopping, installing, updating, and configuring agents. It also supports
remix agents (customized variants of existing agents) and agent property
management.

## Constructors

### Constructor

```ts
new AgentsApi(http: HttpClient): AgentsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:27

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`AgentsApi`

## Methods

### changeAgent()

```ts
changeAgent(data: ChangeAgentRequest): Promise<Agent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:65

Changes the currently active agent.

Switches the runtime to use a different agent, stopping the current
one if necessary. Use this when transitioning between different agent
types during a workflow.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ChangeAgentRequest` | The agent change configuration |

#### Returns

`Promise`\<`Agent`\>

A promise that resolves to the newly active Agent instance

***

### createCustomLocalAgent()

```ts
createCustomLocalAgent(data: CreateCustomLocalAgentRequest): Promise<Agent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:299

Creates a custom local agent.

Defines a new agent from scratch on the local filesystem with custom
configuration, making it available for use in the runtime.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateCustomLocalAgentRequest` | The custom agent creation configuration |

#### Returns

`Promise`\<`Agent`\>

A promise that resolves to the created Agent

#### Example

```typescript
const agent = await client.agents.createCustomLocalAgent({
  name: 'My Custom Agent',
  description: 'A specialized agent for code review'
});
```

***

### createFlowAgent()

```ts
createFlowAgent(data: CreateFlowAgentRequest): Promise<Agent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:312

Creates a flow-based agent.

Defines a new agent that operates based on a visual flow definition,
where behavior is determined by connected nodes in a flow graph.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateFlowAgentRequest` | The flow agent creation configuration |

#### Returns

`Promise`\<`Agent`\>

A promise that resolves to the created Agent

***

### createRemoteAgent()

```ts
createRemoteAgent(data: CreateRemoteAgentRequest): Promise<Agent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:326

Creates a remote agent.

Registers a new agent that runs on a remote server, allowing
CodeBolt to delegate tasks to external agent services.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateRemoteAgentRequest` | The remote agent creation configuration |

#### Returns

`Promise`\<`Agent`\>

A promise that resolves to the created Agent

***

### deleteRemixAgent()

```ts
deleteRemixAgent(name: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:397

Deletes a remix agent.

Permanently removes the specified remix agent from the system.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the remix agent to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the remix agent has been deleted

***

### getAgentConfig()

```ts
getAgentConfig(agentName: string): Promise<AgentConfig>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:218

Retrieves the configuration for a specific agent by name.

Returns the full configuration object for the named agent, including
its capabilities, settings, and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentName` | `string` | The name of the agent to look up |

#### Returns

`Promise`\<`AgentConfig`\>

A promise that resolves to the AgentConfig for the specified agent

#### Example

```typescript
const config = await client.agents.getAgentConfig('code-reviewer');
console.log(config.capabilities);
```

***

### getAgentConfigs()

```ts
getAgentConfigs(): Promise<AgentConfig[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:229

Retrieves all agent configurations.

Returns configuration objects for every registered agent in the system.

#### Returns

`Promise`\<`AgentConfig`[]\>

A promise that resolves to an array of AgentConfig objects

***

### getAgentFromLocal()

```ts
getAgentFromLocal(): Promise<Agent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:77

Retrieves the agent stored in local storage.

Returns the agent configuration that has been persisted locally,
typically the last-used or default agent for the current workspace.

#### Returns

`Promise`\<`Agent`\>

A promise that resolves to the locally stored Agent

***

### getAgentProperties()

```ts
getAgentProperties(): Promise<AgentProperties>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:409

Retrieves the global agent properties.

Returns system-wide properties that apply to all agents, such as
default timeouts, resource limits, and shared configuration.

#### Returns

`Promise`\<`AgentProperties`\>

A promise that resolves to the AgentProperties object

***

### getAllRemixAgents()

```ts
getAllRemixAgents(): Promise<RemixAgent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:359

Retrieves all remix agents.

Returns every remix agent that has been created in the system.

#### Returns

`Promise`\<`RemixAgent`[]\>

A promise that resolves to an array of RemixAgent objects

***

### getFeaturedAgents()

```ts
getFeaturedAgents(): Promise<Agent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:89

Retrieves featured agents from the agent registry.

Returns a curated list of agents that are highlighted or promoted
in the CodeBolt marketplace.

#### Returns

`Promise`\<`Agent`[]\>

A promise that resolves to an array of featured Agent objects

***

### getInstalled()

```ts
getInstalled(): Promise<Agent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:175

Retrieves all installed agents.

Returns every agent that has been installed in the current CodeBolt
environment, whether from the registry or locally.

#### Returns

`Promise`\<`Agent`[]\>

A promise that resolves to an array of installed Agent objects

#### Example

```typescript
const installed = await client.agents.getInstalled();
console.log(`${installed.length} agents installed`);
```

***

### getInstalledAgentsAction()

```ts
getInstalledAgentsAction(): Promise<AgentConfig[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:199

Retrieves action configurations for all installed agents.

Returns the action capability definitions for each installed agent,
describing what actions they can perform.

#### Returns

`Promise`\<`AgentConfig`[]\>

A promise that resolves to an array of AgentConfig objects

***

### getLocalAgents()

```ts
getLocalAgents(): Promise<Agent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:187

Retrieves agents installed from local sources.

Returns only agents that were installed from the local filesystem,
excluding those from the remote registry.

#### Returns

`Promise`\<`Agent`[]\>

A promise that resolves to an array of locally installed Agent objects

***

### getRecommendedAgents()

```ts
getRecommendedAgents(): Promise<Agent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:101

Retrieves recommended agents based on the current context.

Returns agents that are suggested based on the current project type,
user preferences, or usage patterns.

#### Returns

`Promise`\<`Agent`[]\>

A promise that resolves to an array of recommended Agent objects

***

### getRemixAgent()

```ts
getRemixAgent(name: string): Promise<RemixAgent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:372

Retrieves a specific remix agent by name.

Returns the full definition of a remix agent, including its
base agent reference and customizations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the remix agent to retrieve |

#### Returns

`Promise`\<`RemixAgent`\>

A promise that resolves to the RemixAgent object

***

### getRunningAgents()

```ts
getRunningAgents(): Promise<Agent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:278

Retrieves all currently running agents.

Returns a list of agents that are actively executing in the runtime.

#### Returns

`Promise`\<`Agent`[]\>

A promise that resolves to an array of running Agent objects

#### Example

```typescript
const running = await client.agents.getRunningAgents();
console.log(`${running.length} agents currently running`);
```

***

### install()

```ts
install(data: InstallAgentRequest): Promise<Agent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:143

Installs an agent from the remote registry.

Downloads and registers an agent from the CodeBolt agent marketplace,
making it available for local use.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `InstallAgentRequest` | The installation configuration |

#### Returns

`Promise`\<`Agent`\>

A promise that resolves to the installed Agent

#### Example

```typescript
const agent = await client.agents.install({
  agentId: 'marketplace-agent-123'
});
```

***

### installLocal()

```ts
installLocal(data: InstallLocalAgentRequest): Promise<Agent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:122

Installs an agent from a local file path.

Loads and registers an agent from the local filesystem, making it
available for use in the runtime.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `InstallLocalAgentRequest` | The local installation configuration |

#### Returns

`Promise`\<`Agent`\>

A promise that resolves to the installed Agent

#### Example

```typescript
const agent = await client.agents.installLocal({
  path: '/path/to/my-agent'
});
```

***

### saveRemixAgent()

```ts
saveRemixAgent(data: RemixAgent): Promise<RemixAgent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:348

Saves a remix agent.

Creates or saves a remix agent, which is a customized variant of an
existing agent with modified prompts, settings, or capabilities.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `RemixAgent` | The remix agent definition to save |

#### Returns

`Promise`\<`RemixAgent`\>

A promise that resolves to the saved RemixAgent

#### Example

```typescript
const remix = await client.agents.saveRemixAgent({
  name: 'strict-reviewer',
  baseAgent: 'code-reviewer',
  customPrompt: 'Be extra strict about type safety'
});
```

***

### startAgent()

```ts
startAgent(data: StartAgentRequest): Promise<Agent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:50

Starts a new agent instance with the specified configuration.

Initializes and launches an agent process in the CodeBolt runtime.
The agent will be configured based on the provided request parameters
including its type, capabilities, and execution context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `StartAgentRequest` | The agent start configuration |

#### Returns

`Promise`\<`Agent`\>

A promise that resolves to the started Agent instance with its runtime details

#### Example

```typescript
const agent = await client.agents.startAgent({
  agentId: 'my-agent',
  agentName: 'My Custom Agent'
});
```

***

### stopAgent()

```ts
stopAgent(data: StopAgentRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:261

Stops a running agent.

Sends a stop signal to the specified agent, causing it to terminate
gracefully.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `StopAgentRequest` | The stop request configuration |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the agent has been stopped

#### Example

```typescript
await client.agents.stopAgent({ agentId: 'my-agent' });
```

***

### updateAgent()

```ts
updateAgent(data: UpdateAgentRequest): Promise<Agent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:157

Updates an installed agent to a newer version.

Applies updates to an already-installed agent, pulling the latest
version from the registry or local source.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateAgentRequest` | The update configuration |

#### Returns

`Promise`\<`Agent`\>

A promise that resolves to the updated Agent

***

### updateAgentIndex()

```ts
updateAgentIndex(): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:241

Updates the agent router index.

Forces a rebuild of the internal routing index that maps tasks to
appropriate agents. Call this after installing or removing agents.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the index has been updated

***

### updateAgentProperties()

```ts
updateAgentProperties(data: AgentProperties): Promise<AgentProperties>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:421

Updates the global agent properties.

Modifies system-wide agent settings that apply to all agent instances.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AgentProperties` | The updated agent properties |

#### Returns

`Promise`\<`AgentProperties`\>

A promise that resolves to the updated AgentProperties

***

### updateRemixAgent()

```ts
updateRemixAgent(name: string, data: RemixAgent): Promise<RemixAgent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agents.api.ts:385

Updates a remix agent.

Modifies the configuration of an existing remix agent.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the remix agent to update |
| `data` | `RemixAgent` | The updated remix agent definition |

#### Returns

`Promise`\<`RemixAgent`\>

A promise that resolves to the updated RemixAgent
