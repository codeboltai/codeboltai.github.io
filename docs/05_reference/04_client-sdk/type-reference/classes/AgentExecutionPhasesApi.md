---
title: AgentExecutionPhasesApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: AgentExecutionPhasesApi

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution-phases.api.ts:11

Provides methods for managing agent execution phases in the CodeBolt runtime.

Execution phases define the discrete stages an agent goes through during its
lifecycle (e.g., initialization, planning, execution, review). This API allows
you to define, modify, and reset these phases to customize agent behavior.

## Constructors

### Constructor

```ts
new AgentExecutionPhasesApi(http: HttpClient): AgentExecutionPhasesApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution-phases.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`AgentExecutionPhasesApi`

## Methods

### create()

```ts
create(data: CreateAgentExecutionPhaseRequest): Promise<AgentExecutionPhase>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution-phases.api.ts:89

Creates a new execution phase.

Defines a new phase in the agent execution lifecycle. The phase will
be available for agents to transition through during their execution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateAgentExecutionPhaseRequest` | The phase creation payload |

#### Returns

`Promise`\<`AgentExecutionPhase`\>

A promise that resolves to the newly created AgentExecutionPhase

#### Example

```typescript
const phase = await client.agentExecutionPhases.create({
  name: 'validation',
  description: 'Validate agent output before completion'
});
```

***

### delete()

```ts
delete(name: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution-phases.api.ts:116

Deletes an execution phase.

Permanently removes the specified execution phase from the system.
Agents will no longer transition through this phase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The unique name of the phase to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the phase has been deleted

***

### get()

```ts
get(name: string): Promise<AgentExecutionPhase>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution-phases.api.ts:66

Retrieves a specific execution phase by its name.

Returns the full definition of a single phase including its
configuration, order, and associated behavior.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The unique name of the execution phase |

#### Returns

`Promise`\<`AgentExecutionPhase`\>

A promise that resolves to the AgentExecutionPhase object

#### Example

```typescript
const phase = await client.agentExecutionPhases.get('planning');
console.log(phase.description);
```

***

### getAll()

```ts
getAll(params?: Record<string, unknown>): Promise<AgentExecutionPhase[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution-phases.api.ts:29

Retrieves all defined agent execution phases.

Returns the complete list of execution phases that have been configured
in the system.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`AgentExecutionPhase`[]\>

A promise that resolves to an array of AgentExecutionPhase objects

#### Example

```typescript
const phases = await client.agentExecutionPhases.getAll();
phases.forEach(p => console.log(p.name, p.order));
```

***

### reset()

```ts
reset(data?: ResetAgentExecutionPhasesRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution-phases.api.ts:47

Resets all agent execution phases to their default configuration.

Restores the built-in phase definitions, removing any custom phases
and reverting modified ones to their original state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `ResetAgentExecutionPhasesRequest` | Optional configuration for the reset operation |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the reset is complete

#### Example

```typescript
await client.agentExecutionPhases.reset();
```

***

### update()

```ts
update(name: string, data: UpdateAgentExecutionPhaseRequest): Promise<AgentExecutionPhase>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-execution-phases.api.ts:103

Updates an existing execution phase.

Modifies the configuration of an execution phase. Use this to change
the phase description, ordering, or other properties.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The unique name of the phase to update |
| `data` | `UpdateAgentExecutionPhaseRequest` | The fields to update on the phase |

#### Returns

`Promise`\<`AgentExecutionPhase`\>

A promise that resolves to the updated AgentExecutionPhase
