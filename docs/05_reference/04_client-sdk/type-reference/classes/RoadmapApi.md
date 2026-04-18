---
title: RoadmapApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: RoadmapApi

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:11

Provides methods for managing the product roadmap, including phases, features, and ideas.

The roadmap is organized hierarchically: phases contain features, and ideas can be
promoted to features. This API supports the full lifecycle of roadmap items from
ideation through planning and task creation.

## Constructors

### Constructor

```ts
new RoadmapApi(http: HttpClient): RoadmapApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`RoadmapApi`

## Methods

### createFeature()

```ts
createFeature(phaseId: string, data: CreateFeatureRequest): Promise<RoadmapFeature>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:113

Creates a new feature within a specific phase.

Adds a feature to the roadmap under the specified phase. Features represent
discrete pieces of functionality planned for delivery.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phaseId` | `string` | The unique identifier of the phase to add the feature to |
| `data` | `CreateFeatureRequest` | The feature creation payload including title and description |

#### Returns

`Promise`\<`RoadmapFeature`\>

A promise that resolves to the newly created RoadmapFeature

#### Example

```typescript
const feature = await client.roadmap.createFeature('phase-123', {
  title: 'OAuth2 SSO Support',
  description: 'Allow users to authenticate via external identity providers',
});
```

***

### createIdea()

```ts
createIdea(data: CreateIdeaRequest): Promise<RoadmapIdea>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:219

Creates a new idea in the roadmap idea pool.

Adds an idea that can later be reviewed, refined, and potentially promoted
to a full feature on the roadmap.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateIdeaRequest` | The idea creation payload including title and description |

#### Returns

`Promise`\<`RoadmapIdea`\>

A promise that resolves to the newly created RoadmapIdea

#### Example

```typescript
const idea = await client.roadmap.createIdea({
  title: 'AI-powered code suggestions',
  description: 'Integrate LLM-based code completion into the editor',
});
```

***

### createPhase()

```ts
createPhase(data: CreatePhaseRequest): Promise<RoadmapPhase>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:50

Creates a new roadmap phase.

Adds a high-level phase to the roadmap for organizing features. Phases typically
represent milestones, sprints, or release versions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreatePhaseRequest` | The phase creation payload including name and optional description |

#### Returns

`Promise`\<`RoadmapPhase`\>

A promise that resolves to the newly created RoadmapPhase

#### Example

```typescript
const phase = await client.roadmap.createPhase({
  name: 'Q2 2026 Release',
  description: 'Features planned for the Q2 release cycle',
});
```

***

### createTaskFromFeature()

```ts
createTaskFromFeature(featureId: string, data?: CreateTaskFromFeatureRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:177

Creates a task from a roadmap feature.

Converts a feature into an actionable task in the task management system. This
bridges the gap between roadmap planning and task execution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `featureId` | `string` | The unique identifier of the feature to create a task from |
| `data?` | `CreateTaskFromFeatureRequest` | Optional task creation parameters to override defaults |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the task has been created

***

### deleteFeature()

```ts
deleteFeature(featureId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:145

Deletes a feature from the roadmap.

Permanently removes a feature. This action cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `featureId` | `string` | The unique identifier of the feature to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the feature has been deleted

***

### deleteIdea()

```ts
deleteIdea(ideaId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:250

Deletes an idea from the roadmap idea pool.

Permanently removes an idea. This action cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ideaId` | `string` | The unique identifier of the idea to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the idea has been deleted

***

### deletePhase()

```ts
deletePhase(phaseId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:82

Deletes a roadmap phase.

Permanently removes a phase and potentially its associated features. This action
cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phaseId` | `string` | The unique identifier of the phase to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the phase has been deleted

***

### get()

```ts
get(params?: Record<string, unknown>): Promise<RoadmapPhase[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:31

Retrieves the full roadmap with all phases.

Returns the complete roadmap structure including all phases and their nested features.
Use optional query parameters to filter or paginate results.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering the roadmap |

#### Returns

`Promise`\<`RoadmapPhase`[]\>

A promise that resolves to an array of RoadmapPhase objects

#### Example

```typescript
const roadmap = await client.roadmap.get();
for (const phase of roadmap) {
  console.log(`Phase: ${phase.name}`);
}
```

***

### getFeature()

```ts
getFeature(featureId: string): Promise<RoadmapFeature>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:124

Retrieves a specific feature by its ID.

Fetches the full details of a single feature including its status, description,
and associated metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `featureId` | `string` | The unique identifier of the feature |

#### Returns

`Promise`\<`RoadmapFeature`\>

A promise that resolves to the RoadmapFeature object

***

### getFeatures()

```ts
getFeatures(params?: Record<string, unknown>): Promise<RoadmapFeature[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:93

Retrieves all features across all roadmap phases.

Returns a flat list of all features regardless of which phase they belong to.
Use optional query parameters to filter by status, priority, or other criteria.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering features |

#### Returns

`Promise`\<`RoadmapFeature`[]\>

A promise that resolves to an array of RoadmapFeature objects

***

### getIdea()

```ts
getIdea(ideaId: string): Promise<RoadmapIdea>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:229

Retrieves a specific idea by its ID.

Fetches the full details of a single idea including its status and review history.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ideaId` | `string` | The unique identifier of the idea |

#### Returns

`Promise`\<`RoadmapIdea`\>

A promise that resolves to the RoadmapIdea object

***

### getIdeas()

```ts
getIdeas(params?: Record<string, unknown>): Promise<RoadmapIdea[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:200

Retrieves all ideas in the roadmap idea pool.

Ideas are proposals that have not yet been promoted to features. Use optional
query parameters to filter by status or other criteria.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering ideas |

#### Returns

`Promise`\<`RoadmapIdea`[]\>

A promise that resolves to an array of RoadmapIdea objects

***

### getPhase()

```ts
getPhase(phaseId: string): Promise<RoadmapPhase>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:60

Retrieves a specific roadmap phase by its ID.

Fetches the full details of a single phase including its metadata and associated features.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phaseId` | `string` | The unique identifier of the phase |

#### Returns

`Promise`\<`RoadmapPhase`\>

A promise that resolves to the RoadmapPhase object

***

### moveFeature()

```ts
moveFeature(featureId: string, data: MoveFeatureRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:165

Moves a feature to a different phase or reorders it within its current phase.

Use this to reorganize the roadmap by relocating features between phases or
changing the display order of features within a phase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `featureId` | `string` | The unique identifier of the feature to move |
| `data` | `MoveFeatureRequest` | The move parameters including target phase and/or position |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the feature has been moved

#### Example

```typescript
await client.roadmap.moveFeature('feature-456', {
  targetPhaseId: 'phase-789',
  position: 0,
});
```

***

### moveIdeaToRoadmap()

```ts
moveIdeaToRoadmap(ideaId: string, data?: MoveIdeaToRoadmapRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:281

Promotes an idea to the roadmap as a feature.

Converts a reviewed and approved idea into a feature within a specified roadmap phase.
This is the final step in the idea-to-feature pipeline.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ideaId` | `string` | The unique identifier of the idea to promote |
| `data?` | `MoveIdeaToRoadmapRequest` | Optional parameters including target phase for the new feature |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the idea has been promoted to a feature

#### Example

```typescript
await client.roadmap.moveIdeaToRoadmap('idea-123', {
  phaseId: 'phase-456',
});
```

***

### reviewIdea()

```ts
reviewIdea(ideaId: string, data?: ReviewIdeaRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:262

Submits an idea for review.

Moves an idea into the review process where it can be evaluated for potential
promotion to a roadmap feature.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ideaId` | `string` | The unique identifier of the idea to review |
| `data?` | `ReviewIdeaRequest` | Optional review parameters such as reviewer assignment |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the idea has been submitted for review

***

### sendFeatureToChat()

```ts
sendFeatureToChat(featureId: string, data?: SendFeatureToChatRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:189

Sends a feature to the chat for discussion.

Shares the feature details in a chat context so that team members or agents can
discuss and collaborate on the feature requirements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `featureId` | `string` | The unique identifier of the feature to send to chat |
| `data?` | `SendFeatureToChatRequest` | Optional parameters controlling how the feature is shared |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the feature has been sent to chat

***

### updateFeature()

```ts
updateFeature(featureId: string, data: UpdateFeatureRequest): Promise<RoadmapFeature>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:135

Updates an existing feature.

Modifies the properties of a feature such as its title, description, status, or priority.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `featureId` | `string` | The unique identifier of the feature to update |
| `data` | `UpdateFeatureRequest` | The fields to update on the feature |

#### Returns

`Promise`\<`RoadmapFeature`\>

A promise that resolves to the updated RoadmapFeature

***

### updateIdea()

```ts
updateIdea(ideaId: string, data: UpdateIdeaRequest): Promise<RoadmapIdea>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:240

Updates an existing idea.

Modifies the properties of an idea such as its title, description, or status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ideaId` | `string` | The unique identifier of the idea to update |
| `data` | `UpdateIdeaRequest` | The fields to update on the idea |

#### Returns

`Promise`\<`RoadmapIdea`\>

A promise that resolves to the updated RoadmapIdea

***

### updatePhase()

```ts
updatePhase(phaseId: string, data: UpdatePhaseRequest): Promise<RoadmapPhase>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/roadmap.api.ts:71

Updates an existing roadmap phase.

Modifies the properties of a phase such as its name, description, or ordering.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `phaseId` | `string` | The unique identifier of the phase to update |
| `data` | `UpdatePhaseRequest` | The fields to update on the phase |

#### Returns

`Promise`\<`RoadmapPhase`\>

A promise that resolves to the updated RoadmapPhase
