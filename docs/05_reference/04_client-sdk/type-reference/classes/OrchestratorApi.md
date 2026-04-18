---
title: OrchestratorApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: OrchestratorApi

Defined in: CodeBolt/packages/clientsdk/src/api/orchestrator.api.ts:16

Provides API methods for managing orchestrator instances.

Orchestrators coordinate multi-agent workflows by defining how agents collaborate,
delegate tasks, and share context. Use this API to create, configure, and manage
orchestrator instances that control agent swarm behavior.

## Constructors

### Constructor

```ts
new OrchestratorApi(http: HttpClient): OrchestratorApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/orchestrator.api.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`OrchestratorApi`

## Methods

### create()

```ts
create(data: CreateOrchestratorRequest): Promise<OrchestratorInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/orchestrator.api.ts:77

Creates a new orchestrator instance with the specified configuration.

Sets up a new orchestrator that will coordinate agent interactions according to the
provided rules and workflow definitions. The orchestrator can be started immediately
or configured further before activation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateOrchestratorRequest` | The orchestrator creation configuration |

#### Returns

`Promise`\<`OrchestratorInstance`\>

A promise that resolves to the newly created orchestrator instance

#### Example

```typescript
const orchestrator = await client.orchestrator.create({
  name: 'code-review-pipeline',
  type: 'sequential',
});
```

***

### delete()

```ts
delete(id: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/orchestrator.api.ts:116

Deletes an orchestrator instance permanently.

Removes the orchestrator and its configuration. Any active workflows managed by this
orchestrator should be stopped before deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the orchestrator to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the orchestrator has been deleted

#### Example

```typescript
await client.orchestrator.delete('orch-123');
```

***

### get()

```ts
get(id: string): Promise<OrchestratorInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/orchestrator.api.ts:54

Retrieves a specific orchestrator instance by its unique identifier.

Returns the full configuration and current state of an orchestrator, including its
assigned agents, coordination rules, and execution history.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the orchestrator to retrieve |

#### Returns

`Promise`\<`OrchestratorInstance`\>

A promise that resolves to the orchestrator instance details

#### Example

```typescript
const orchestrator = await client.orchestrator.get('orch-123');
console.log(`Orchestrator: ${orchestrator.name}, agents: ${orchestrator.agents?.length}`);
```

***

### list()

```ts
list(params?: OrchestratorListParams): Promise<OrchestratorInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/orchestrator.api.ts:35

Lists all orchestrator instances with optional filtering.

Returns the collection of configured orchestrators, which can be filtered by status,
type, or other criteria. Each orchestrator defines a coordination strategy for
multi-agent workflows.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `OrchestratorListParams` | Optional filtering and pagination parameters |

#### Returns

`Promise`\<`OrchestratorInstance`[]\>

A promise that resolves to an array of orchestrator instances

#### Example

```typescript
const orchestrators = await client.orchestrator.list();
const active = orchestrators.filter(o => o.status === 'active');
```

***

### update()

```ts
update(id: string, data: UpdateOrchestratorRequest): Promise<OrchestratorInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/orchestrator.api.ts:98

Updates an existing orchestrator instance's configuration.

Modifies the settings, rules, or agent assignments of an orchestrator. Changes take
effect for subsequent workflow executions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the orchestrator to update |
| `data` | `UpdateOrchestratorRequest` | The fields to update on the orchestrator |

#### Returns

`Promise`\<`OrchestratorInstance`\>

A promise that resolves to the updated orchestrator instance

#### Example

```typescript
const updated = await client.orchestrator.update('orch-123', {
  name: 'updated-pipeline',
});
```
