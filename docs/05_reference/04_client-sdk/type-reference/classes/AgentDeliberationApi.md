---
title: AgentDeliberationApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: AgentDeliberationApi

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:12

Provides methods for managing agent deliberation workflows in the CodeBolt runtime.

Deliberations enable multi-agent decision making where agents propose responses,
vote on proposals, and reach consensus. This API handles the full lifecycle
including creating deliberations, collecting responses, managing votes, and
determining winners.

## Constructors

### Constructor

```ts
new AgentDeliberationApi(http: HttpClient): AgentDeliberationApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`AgentDeliberationApi`

## Methods

### addResponse()

```ts
addResponse(id: string, data: AddDeliberationResponseRequest): Promise<DeliberationResponse>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:142

Adds a response to a deliberation.

Submits a new proposal or answer from an agent as part of the
deliberation process.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation |
| `data` | `AddDeliberationResponseRequest` | The response payload containing the agent's proposal |

#### Returns

`Promise`\<`DeliberationResponse`\>

A promise that resolves to the created DeliberationResponse

#### Example

```typescript
const response = await client.agentDeliberation.addResponse('delib-123', {
  agentId: 'agent-1',
  content: 'I propose we use the strategy pattern...'
});
```

***

### addVote()

```ts
addVote(id: string, data: AddDeliberationVoteRequest): Promise<DeliberationVote>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:183

Casts a vote on a deliberation.

Records an agent's vote for a specific response within the deliberation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation |
| `data` | `AddDeliberationVoteRequest` | The vote payload |

#### Returns

`Promise`\<`DeliberationVote`\>

A promise that resolves to the recorded DeliberationVote

#### Example

```typescript
const vote = await client.agentDeliberation.addVote('delib-123', {
  agentId: 'agent-2',
  responseId: 'resp-456'
});
```

***

### create()

```ts
create(data: CreateDeliberationRequest): Promise<Deliberation>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:53

Creates a new deliberation.

Initiates a deliberation session where multiple agents can propose
solutions and vote on the best approach.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateDeliberationRequest` | The deliberation creation payload |

#### Returns

`Promise`\<`Deliberation`\>

A promise that resolves to the newly created Deliberation

#### Example

```typescript
const deliberation = await client.agentDeliberation.create({
  topic: 'Best approach for refactoring the auth module',
  agentIds: ['agent-1', 'agent-2']
});
```

***

### delete()

```ts
delete(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:99

Deletes a deliberation.

Permanently removes the specified deliberation and all its associated
responses and votes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the deliberation has been deleted

***

### get()

```ts
get(id: string): Promise<Deliberation>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:72

Retrieves a specific deliberation by ID.

Returns the full deliberation record including its topic, status,
participants, and summary.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation |

#### Returns

`Promise`\<`Deliberation`\>

A promise that resolves to the Deliberation object

#### Example

```typescript
const deliberation = await client.agentDeliberation.get('delib-123');
console.log(deliberation.topic, deliberation.status);
```

***

### getAll()

```ts
getAll(params?: Record<string, unknown>): Promise<Deliberation[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:30

Retrieves all deliberations.

Returns every deliberation in the system, optionally filtered by
the provided query parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query or filter parameters |

#### Returns

`Promise`\<`Deliberation`[]\>

A promise that resolves to an array of Deliberation objects

#### Example

```typescript
const deliberations = await client.agentDeliberation.getAll();
console.log(`Found ${deliberations.length} deliberations`);
```

***

### getResponses()

```ts
getResponses(id: string): Promise<DeliberationResponse[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:118

Retrieves all responses submitted to a deliberation.

Returns the proposals or answers that agents have submitted as part
of the deliberation process.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation |

#### Returns

`Promise`\<`DeliberationResponse`[]\>

A promise that resolves to an array of DeliberationResponse objects

#### Example

```typescript
const responses = await client.agentDeliberation.getResponses('delib-123');
responses.forEach(r => console.log(r.agentId, r.content));
```

***

### getVotes()

```ts
getVotes(id: string): Promise<DeliberationVote[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:160

Retrieves all votes cast in a deliberation.

Returns the voting records showing which agents voted for which
responses.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation |

#### Returns

`Promise`\<`DeliberationVote`[]\>

A promise that resolves to an array of DeliberationVote objects

#### Example

```typescript
const votes = await client.agentDeliberation.getVotes('delib-123');
```

***

### getWinner()

```ts
getWinner(id: string): Promise<DeliberationResponse>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:202

Retrieves the winning response of a deliberation.

Returns the response that received the most votes or was otherwise
selected as the winner of the deliberation process.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation |

#### Returns

`Promise`\<`DeliberationResponse`\>

A promise that resolves to the winning DeliberationResponse

#### Example

```typescript
const winner = await client.agentDeliberation.getWinner('delib-123');
console.log('Winning proposal:', winner.content);
```

***

### startAgents()

```ts
startAgents(id: string, data?: StartDeliberationAgentsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:236

Starts agents for a deliberation.

Launches the participant agents so they can begin generating responses
for the deliberation topic.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation |
| `data?` | `StartDeliberationAgentsRequest` | Optional configuration for the agent startup |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the agents have been started

#### Example

```typescript
await client.agentDeliberation.startAgents('delib-123');
```

***

### startVotingAgents()

```ts
startVotingAgents(id: string, data?: StartVotingAgentsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:255

Starts voting agents for a deliberation.

Launches the voting agents so they can evaluate the submitted responses
and cast their votes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation |
| `data?` | `StartVotingAgentsRequest` | Optional configuration for the voting agent startup |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the voting agents have been started

#### Example

```typescript
await client.agentDeliberation.startVotingAgents('delib-123');
```

***

### update()

```ts
update(id: string, data: UpdateDeliberationRequest): Promise<Deliberation>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:86

Partially updates a deliberation.

Applies a patch to the deliberation record, updating only the
fields provided in the request.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation to update |
| `data` | `UpdateDeliberationRequest` | The fields to patch on the deliberation |

#### Returns

`Promise`\<`Deliberation`\>

A promise that resolves to the updated Deliberation

***

### updateSummary()

```ts
updateSummary(id: string, data: UpdateDeliberationSummaryRequest): Promise<Deliberation>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-deliberation.api.ts:217

Updates the summary of a deliberation.

Sets or modifies the summary text that describes the outcome or
current state of the deliberation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the deliberation |
| `data` | `UpdateDeliberationSummaryRequest` | The summary update payload |

#### Returns

`Promise`\<`Deliberation`\>

A promise that resolves to the updated Deliberation
