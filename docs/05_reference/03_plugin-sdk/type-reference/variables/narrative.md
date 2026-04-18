---
title: narrative
---

[**@codebolt/plugin-sdk**](../index)

***

# Variable: narrative

```ts
const narrative: {
  checkoutSnapshot: (params: NarrativeCheckoutParams) => Promise<NarrativeCheckoutResponse>;
  createSnapshot: (params: {
     description?: string;
     environmentId: string;
     workspace: string;
   }) => Promise<{
     agent_run_id?: string;
     error?: string;
     requestId?: string;
     snapshot_id?: string;
     success: boolean;
     tree_hash?: string;
     type: string;
  }>;
  exportUnifiedBundle: (params: NarrativeExportParams) => Promise<NarrativeExportResponse>;
  importUnifiedBundle: (params: NarrativeImportParams) => Promise<NarrativeImportResponse>;
};
```

Defined in: CodeBolt/packages/pluginSdk/src/modules/narrative.ts:73

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="checkoutsnapshot"></a> `checkoutSnapshot()` | (`params`: `NarrativeCheckoutParams`) => `Promise`\<`NarrativeCheckoutResponse`\> | Materialize the workspace files for a previously imported snapshot. Call this AFTER importUnifiedBundle when the remote needs the files checked out into the workspace directory. | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:141](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L141) |
| <a id="createsnapshot"></a> `createSnapshot()` | (`params`: \{ `description?`: `string`; `environmentId`: `string`; `workspace`: `string`; \}) => `Promise`\<\{ `agent_run_id?`: `string`; `error?`: `string`; `requestId?`: `string`; `snapshot_id?`: `string`; `success`: `boolean`; `tree_hash?`: `string`; `type`: `string`; \}\> | Take a fresh snapshot of the current workspace state. Used by callers (e.g. the remote-execution-plugin) before exporting, so the exported bundle contains the workspace's CURRENT state — not a stale earlier snapshot id. | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:121](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L121) |
| <a id="exportunifiedbundle"></a> `exportUnifiedBundle()` | (`params`: [`NarrativeExportParams`](../interfaces/NarrativeExportParams)) => `Promise`\<[`NarrativeExportResponse`](../interfaces/NarrativeExportResponse)\> | Export a unified bundle for an existing snapshot. Returns the path to the .tar.gz on the same machine as the unified server. Caller is responsible for picking up the bytes (e.g. via sandbox.files.read). | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:99](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L99) |
| <a id="importunifiedbundle"></a> `importUnifiedBundle()` | (`params`: [`NarrativeImportParams`](../interfaces/NarrativeImportParams)) => `Promise`\<[`NarrativeImportResponse`](../interfaces/NarrativeImportResponse)\> | Import a unified bundle (git.bundle + narrative.json) into the local narrative store. The bundle file must already exist on the same machine as the unified server (e.g. dropped via sandbox.files.write before this call). | [CodeBolt/packages/pluginSdk/src/modules/narrative.ts:79](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/narrative.ts#L79) |
