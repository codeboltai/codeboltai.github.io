---
title: roadmap
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: roadmap

```ts
const roadmap: {
  createFeature: (phaseId: string, data: CreateFeatureData, projectPath?: string) => Promise<RoadmapFeatureResponse>;
  createIdea: (data: CreateIdeaData, projectPath?: string) => Promise<RoadmapIdeaResponse>;
  createPhase: (data: CreatePhaseData, projectPath?: string) => Promise<RoadmapPhaseResponse>;
  deleteFeature: (featureId: string, projectPath?: string) => Promise<RoadmapDeleteResponse>;
  deleteIdea: (ideaId: string, projectPath?: string) => Promise<RoadmapDeleteResponse>;
  deletePhase: (phaseId: string, projectPath?: string) => Promise<RoadmapDeleteResponse>;
  getAllFeatures: (projectPath?: string) => Promise<RoadmapFeaturesResponse>;
  getFeatures: (phaseId: string, projectPath?: string) => Promise<RoadmapFeaturesResponse>;
  getIdeas: (projectPath?: string) => Promise<RoadmapIdeasResponse>;
  getPhases: (projectPath?: string) => Promise<RoadmapPhasesResponse>;
  getRoadmap: (projectPath?: string) => Promise<RoadmapGetResponse>;
  moveFeature: (featureId: string, data: MoveFeatureData, projectPath?: string) => Promise<RoadmapFeatureResponse>;
  moveIdeaToRoadmap: (ideaId: string, data: MoveIdeaToRoadmapData, projectPath?: string) => Promise<RoadmapMoveToRoadmapResponse>;
  reviewIdea: (ideaId: string, data: ReviewIdeaData, projectPath?: string) => Promise<RoadmapIdeaResponse>;
  updateFeature: (featureId: string, data: UpdateFeatureData, projectPath?: string) => Promise<RoadmapFeatureResponse>;
  updateIdea: (ideaId: string, data: UpdateIdeaData, projectPath?: string) => Promise<RoadmapIdeaResponse>;
  updatePhase: (phaseId: string, data: UpdatePhaseData, projectPath?: string) => Promise<RoadmapPhaseResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/roadmap.ts:29

Roadmap Module for codeboltjs
Provides functionality for managing project roadmaps, phases, features, and ideas.
Mirrors the roadmapService.cli.ts operations via WebSocket.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="createfeature"></a> `createFeature()` | (`phaseId`: `string`, `data`: [`CreateFeatureData`](../interfaces/CreateFeatureData), `projectPath?`: `string`) => `Promise`\<[`RoadmapFeatureResponse`](../interfaces/RoadmapFeatureResponse)\> | Create a new feature in a phase | [packages/codeboltjs/src/modules/roadmap.ts:158](packages/codeboltjs/src/modules/roadmap.ts#L158) |
| <a id="createidea"></a> `createIdea()` | (`data`: [`CreateIdeaData`](../interfaces/CreateIdeaData), `projectPath?`: `string`) => `Promise`\<[`RoadmapIdeaResponse`](../interfaces/RoadmapIdeaResponse)\> | Create a new idea | [packages/codeboltjs/src/modules/roadmap.ts:242](packages/codeboltjs/src/modules/roadmap.ts#L242) |
| <a id="createphase"></a> `createPhase()` | (`data`: [`CreatePhaseData`](../interfaces/CreatePhaseData), `projectPath?`: `string`) => `Promise`\<[`RoadmapPhaseResponse`](../interfaces/RoadmapPhaseResponse)\> | Create a new phase in the roadmap | [packages/codeboltjs/src/modules/roadmap.ts:74](packages/codeboltjs/src/modules/roadmap.ts#L74) |
| <a id="deletefeature"></a> `deleteFeature()` | (`featureId`: `string`, `projectPath?`: `string`) => `Promise`\<[`RoadmapDeleteResponse`](../interfaces/RoadmapDeleteResponse)\> | Delete a feature | [packages/codeboltjs/src/modules/roadmap.ts:190](packages/codeboltjs/src/modules/roadmap.ts#L190) |
| <a id="deleteidea"></a> `deleteIdea()` | (`ideaId`: `string`, `projectPath?`: `string`) => `Promise`\<[`RoadmapDeleteResponse`](../interfaces/RoadmapDeleteResponse)\> | Delete an idea | [packages/codeboltjs/src/modules/roadmap.ts:274](packages/codeboltjs/src/modules/roadmap.ts#L274) |
| <a id="deletephase"></a> `deletePhase()` | (`phaseId`: `string`, `projectPath?`: `string`) => `Promise`\<[`RoadmapDeleteResponse`](../interfaces/RoadmapDeleteResponse)\> | Delete a phase from the roadmap | [packages/codeboltjs/src/modules/roadmap.ts:106](packages/codeboltjs/src/modules/roadmap.ts#L106) |
| <a id="getallfeatures"></a> `getAllFeatures()` | (`projectPath?`: `string`) => `Promise`\<[`RoadmapFeaturesResponse`](../interfaces/RoadmapFeaturesResponse)\> | Get all features across all phases | [packages/codeboltjs/src/modules/roadmap.ts:142](packages/codeboltjs/src/modules/roadmap.ts#L142) |
| <a id="getfeatures"></a> `getFeatures()` | (`phaseId`: `string`, `projectPath?`: `string`) => `Promise`\<[`RoadmapFeaturesResponse`](../interfaces/RoadmapFeaturesResponse)\> | Get features in a specific phase | [packages/codeboltjs/src/modules/roadmap.ts:126](packages/codeboltjs/src/modules/roadmap.ts#L126) |
| <a id="getideas"></a> `getIdeas()` | (`projectPath?`: `string`) => `Promise`\<[`RoadmapIdeasResponse`](../interfaces/RoadmapIdeasResponse)\> | Get all ideas (pre-roadmap suggestions) | [packages/codeboltjs/src/modules/roadmap.ts:226](packages/codeboltjs/src/modules/roadmap.ts#L226) |
| <a id="getphases"></a> `getPhases()` | (`projectPath?`: `string`) => `Promise`\<[`RoadmapPhasesResponse`](../interfaces/RoadmapPhasesResponse)\> | Get all phases in the roadmap | [packages/codeboltjs/src/modules/roadmap.ts:58](packages/codeboltjs/src/modules/roadmap.ts#L58) |
| <a id="getroadmap"></a> `getRoadmap()` | (`projectPath?`: `string`) => `Promise`\<[`RoadmapGetResponse`](../interfaces/RoadmapGetResponse)\> | Get the complete roadmap for a project | [packages/codeboltjs/src/modules/roadmap.ts:38](packages/codeboltjs/src/modules/roadmap.ts#L38) |
| <a id="movefeature"></a> `moveFeature()` | (`featureId`: `string`, `data`: [`MoveFeatureData`](../interfaces/MoveFeatureData), `projectPath?`: `string`) => `Promise`\<[`RoadmapFeatureResponse`](../interfaces/RoadmapFeatureResponse)\> | Move a feature to a different phase | [packages/codeboltjs/src/modules/roadmap.ts:206](packages/codeboltjs/src/modules/roadmap.ts#L206) |
| <a id="moveideatoroadmap"></a> `moveIdeaToRoadmap()` | (`ideaId`: `string`, `data`: [`MoveIdeaToRoadmapData`](../interfaces/MoveIdeaToRoadmapData), `projectPath?`: `string`) => `Promise`\<[`RoadmapMoveToRoadmapResponse`](../interfaces/RoadmapMoveToRoadmapResponse)\> | Move an accepted idea to the roadmap as a feature | [packages/codeboltjs/src/modules/roadmap.ts:306](packages/codeboltjs/src/modules/roadmap.ts#L306) |
| <a id="reviewidea"></a> `reviewIdea()` | (`ideaId`: `string`, `data`: [`ReviewIdeaData`](../interfaces/ReviewIdeaData), `projectPath?`: `string`) => `Promise`\<[`RoadmapIdeaResponse`](../interfaces/RoadmapIdeaResponse)\> | Review an idea (accept or reject) | [packages/codeboltjs/src/modules/roadmap.ts:290](packages/codeboltjs/src/modules/roadmap.ts#L290) |
| <a id="updatefeature"></a> `updateFeature()` | (`featureId`: `string`, `data`: [`UpdateFeatureData`](../interfaces/UpdateFeatureData), `projectPath?`: `string`) => `Promise`\<[`RoadmapFeatureResponse`](../interfaces/RoadmapFeatureResponse)\> | Update an existing feature | [packages/codeboltjs/src/modules/roadmap.ts:174](packages/codeboltjs/src/modules/roadmap.ts#L174) |
| <a id="updateidea"></a> `updateIdea()` | (`ideaId`: `string`, `data`: [`UpdateIdeaData`](../interfaces/UpdateIdeaData), `projectPath?`: `string`) => `Promise`\<[`RoadmapIdeaResponse`](../interfaces/RoadmapIdeaResponse)\> | Update an existing idea | [packages/codeboltjs/src/modules/roadmap.ts:258](packages/codeboltjs/src/modules/roadmap.ts#L258) |
| <a id="updatephase"></a> `updatePhase()` | (`phaseId`: `string`, `data`: [`UpdatePhaseData`](../interfaces/UpdatePhaseData), `projectPath?`: `string`) => `Promise`\<[`RoadmapPhaseResponse`](../interfaces/RoadmapPhaseResponse)\> | Update an existing phase | [packages/codeboltjs/src/modules/roadmap.ts:90](packages/codeboltjs/src/modules/roadmap.ts#L90) |
