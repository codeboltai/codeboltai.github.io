---
title: NarrativeImportResponse
---

[**@codebolt/plugin-sdk**](../index)

***

# Interface: NarrativeImportResponse

Defined in: CodeBolt/packages/pluginSdk/src/modules/narrative.ts:20

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="error"></a> `error?` | `string` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:33](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L33) |
| <a id="imported_refs"></a> `imported_refs?` | \[`string`, `string`\][] | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:24](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L24) |
| <a id="narrative_imported"></a> `narrative_imported?` | `boolean` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:25](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L25) |
| <a id="narrative_summary"></a> `narrative_summary?` | \{ `agent_runs_count`: `number`; `commits_count`: `number`; `execution_traces_count`: `number`; `snapshots_count`: `number`; `trace_records_count`: `number`; \} | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:26](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L26) |
| `narrative_summary.agent_runs_count` | `number` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:31](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L31) |
| `narrative_summary.commits_count` | `number` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:28](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L28) |
| `narrative_summary.execution_traces_count` | `number` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:29](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L29) |
| `narrative_summary.snapshots_count` | `number` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:27](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L27) |
| `narrative_summary.trace_records_count` | `number` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:30](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L30) |
| <a id="requestid"></a> `requestId?` | `string` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:34](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L34) |
| <a id="snapshot_ids"></a> `snapshot_ids?` | `string`[] | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:23](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L23) |
| <a id="success"></a> `success` | `boolean` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:22](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L22) |
| <a id="type"></a> `type` | `string` | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:21](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L21) |
