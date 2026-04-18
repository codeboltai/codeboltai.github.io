---
title: RoadmapIdea
---

[**@codebolt/client-sdk**](../index)

***

# Interface: RoadmapIdea

Defined in: CodeBolt/packages/clientsdk/src/types/roadmap.ts:51

Roadmap idea

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="category"></a> `category` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:55](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L55) |
| <a id="createdat"></a> `createdAt` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:60](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L60) |
| <a id="createdby"></a> `createdBy` | [`Creator`](Creator) | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:62](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L62) |
| <a id="description"></a> `description` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:54](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L54) |
| <a id="id"></a> `id` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:52](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L52) |
| <a id="reviewedat"></a> `reviewedAt?` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:64](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L64) |
| <a id="reviewedby"></a> `reviewedBy?` | \{ `id`: `string`; `name`: `string`; \} | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:63](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L63) |
| `reviewedBy.id` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:63](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L63) |
| `reviewedBy.name` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:63](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L63) |
| <a id="reviewnotes"></a> `reviewNotes?` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:65](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L65) |
| <a id="status"></a> `status` | [`IdeaStatus`](../type-aliases/IdeaStatus) | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:59](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L59) |
| <a id="suggesteddifficulty"></a> `suggestedDifficulty?` | [`FeatureDifficulty`](../type-aliases/FeatureDifficulty) | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:57](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L57) |
| <a id="suggestedimpact"></a> `suggestedImpact?` | [`FeatureImpact`](../type-aliases/FeatureImpact) | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:56](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L56) |
| <a id="tags"></a> `tags` | `string`[] | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:58](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L58) |
| <a id="title"></a> `title` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:53](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L53) |
| <a id="updatedat"></a> `updatedAt` | `string` | [CodeBolt/packages/clientsdk/src/types/roadmap.ts:61](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/roadmap.ts#L61) |
