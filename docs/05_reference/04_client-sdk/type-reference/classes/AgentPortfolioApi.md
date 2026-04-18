---
title: AgentPortfolioApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: AgentPortfolioApi

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:11

Provides methods for managing agent portfolios in the CodeBolt runtime.

Agent portfolios track an agent's reputation, skills, and performance history.
This API supports viewing rankings, managing testimonials, awarding karma,
sending appreciations, and maintaining talent records for agents.

## Constructors

### Constructor

```ts
new AgentPortfolioApi(http: HttpClient): AgentPortfolioApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`AgentPortfolioApi`

## Methods

### addTalent()

```ts
addTalent(data: AddTalentRequest): Promise<AgentTalent>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:229

Adds a talent to an agent's portfolio.

Records a specific skill or capability that the agent possesses,
building out their talent profile.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AddTalentRequest` | The talent definition to add |

#### Returns

`Promise`\<`AgentTalent`\>

A promise that resolves to the created AgentTalent

#### Example

```typescript
const talent = await client.agentPortfolio.addTalent({
  agentId: 'agent-001',
  name: 'TypeScript Refactoring'
});
```

***

### awardKarma()

```ts
awardKarma(data: AwardKarmaRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:172

Awards karma points to an agent.

Increases an agent's karma score as recognition for good work.
Karma contributes to the agent's overall portfolio ranking.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AwardKarmaRequest` | The karma award payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the karma has been awarded

#### Example

```typescript
await client.agentPortfolio.awardKarma({
  agentId: 'agent-001',
  amount: 10,
  reason: 'Completed complex task efficiently'
});
```

***

### createTestimonial()

```ts
createTestimonial(data: CreateTestimonialRequest): Promise<AgentTestimonial>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:122

Creates a new testimonial for an agent.

Adds a testimonial or review to an agent's portfolio, recording
feedback about their performance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateTestimonialRequest` | The testimonial creation payload |

#### Returns

`Promise`\<`AgentTestimonial`\>

A promise that resolves to the created AgentTestimonial

#### Example

```typescript
const testimonial = await client.agentPortfolio.createTestimonial({
  agentId: 'agent-001',
  content: 'Excellent work on the refactoring task!'
});
```

***

### deleteTestimonial()

```ts
deleteTestimonial(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:147

Deletes a testimonial.

Permanently removes the specified testimonial from an agent's portfolio.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the testimonial to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the testimonial has been deleted

***

### endorseTalent()

```ts
endorseTalent(data: EndorseTalentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:243

Endorses a talent on an agent's portfolio.

Adds an endorsement to a specific talent, increasing its credibility.
Similar to LinkedIn skill endorsements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `EndorseTalentRequest` | The endorsement payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the endorsement has been recorded

***

### getAgentConversations()

```ts
getAgentConversations(agentId: string, params?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:85

Retrieves conversation history for an agent's portfolio.

Returns the list of conversations the agent has participated in,
providing context for their portfolio activity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for pagination |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the agent's conversation records

***

### getAgentKarma()

```ts
getAgentKarma(agentId: string, params?: Record<string, unknown>): Promise<AgentKarma>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:192

Retrieves karma details for a specific agent.

Returns the agent's karma score breakdown including total karma,
recent awards, and karma history.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering karma records |

#### Returns

`Promise`\<`AgentKarma`\>

A promise that resolves to the AgentKarma details

#### Example

```typescript
const karma = await client.agentPortfolio.getAgentKarma('agent-001');
console.log(`Total karma: ${karma.total}`);
```

***

### getAgentPortfolio()

```ts
getAgentPortfolio(agentId: string): Promise<AgentPortfolio>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:71

Retrieves a specific agent's portfolio.

Returns the full portfolio for a single agent, including their profile,
karma, talents, testimonials, and performance metrics.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent |

#### Returns

`Promise`\<`AgentPortfolio`\>

A promise that resolves to the AgentPortfolio object

#### Example

```typescript
const portfolio = await client.agentPortfolio.getAgentPortfolio('agent-001');
console.log(portfolio.karma, portfolio.talents);
```

***

### getAgentTalents()

```ts
getAgentTalents(agentId: string, params?: Record<string, unknown>): Promise<AgentTalent[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:263

Retrieves all talents for a specific agent.

Returns the list of skills and capabilities registered in the
agent's portfolio, along with endorsement counts.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering |

#### Returns

`Promise`\<`AgentTalent`[]\>

A promise that resolves to an array of AgentTalent objects

#### Example

```typescript
const talents = await client.agentPortfolio.getAgentTalents('agent-001');
talents.forEach(t => console.log(t.name, t.endorsements));
```

***

### getByProject()

```ts
getByProject(params?: AgentByProjectParams): Promise<AgentPortfolio[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:52

Retrieves agent portfolios filtered by project.

Returns portfolios for agents that have contributed to a specific project,
useful for understanding which agents are active in a project context.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `AgentByProjectParams` | Parameters to filter portfolios by project |

#### Returns

`Promise`\<`AgentPortfolio`[]\>

A promise that resolves to an array of AgentPortfolio objects

#### Example

```typescript
const projectAgents = await client.agentPortfolio.getByProject({
  projectId: 'proj-abc'
});
```

***

### getRanking()

```ts
getRanking(params?: AgentRankingParams): Promise<AgentPortfolio[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:31

Retrieves agent portfolio rankings.

Returns agents sorted by their portfolio score, karma, or other
ranking criteria. Useful for discovering top-performing agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `AgentRankingParams` | Optional ranking parameters for sorting and filtering |

#### Returns

`Promise`\<`AgentPortfolio`[]\>

A promise that resolves to an array of ranked AgentPortfolio objects

#### Example

```typescript
const topAgents = await client.agentPortfolio.getRanking({ limit: 10 });
topAgents.forEach(a => console.log(a.agentId, a.score));
```

***

### sendAppreciation()

```ts
sendAppreciation(data: SendAppreciationRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:206

Sends an appreciation to an agent.

Records a lightweight positive feedback signal for an agent,
similar to a "like" or "thumbs up" on their work.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SendAppreciationRequest` | The appreciation payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the appreciation has been sent

***

### updateAgentProfile()

```ts
updateAgentProfile(agentId: string, data: UpdateAgentProfileRequest): Promise<AgentPortfolio>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:99

Updates an agent's profile information.

Modifies the profile section of an agent's portfolio, such as their
display name, description, or avatar.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent |
| `data` | `UpdateAgentProfileRequest` | The profile fields to update |

#### Returns

`Promise`\<`AgentPortfolio`\>

A promise that resolves to the updated AgentPortfolio

***

### updateTestimonial()

```ts
updateTestimonial(id: string, data: UpdateTestimonialRequest): Promise<AgentTestimonial>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/agent-portfolio.api.ts:135

Updates an existing testimonial.

Modifies the content or metadata of a previously submitted testimonial.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the testimonial to update |
| `data` | `UpdateTestimonialRequest` | The fields to update on the testimonial |

#### Returns

`Promise`\<`AgentTestimonial`\>

A promise that resolves to the updated AgentTestimonial
