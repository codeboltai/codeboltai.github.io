---
title: fileUpdateIntent
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: fileUpdateIntent

```ts
const fileUpdateIntent: {
  cancel: (id: string, cancelledBy: string) => Promise<FileUpdateIntent>;
  checkOverlap: (environmentId: string, filePaths: string[], priority: number) => Promise<IntentOverlapResult>;
  complete: (id: string, closedBy: string) => Promise<FileUpdateIntent>;
  create: (data: CreateFileUpdateIntentRequest, claimedBy: string, claimedByName?: string) => Promise<{
     intent?: FileUpdateIntent;
     overlap?: IntentOverlapResult;
  }>;
  delete: (id: string) => Promise<{
     success: boolean;
  }>;
  get: (id: string) => Promise<FileUpdateIntent>;
  getBlockedFiles: (environmentId: string) => Promise<{
     blockedFiles: string[];
  }>;
  getByAgent: (agentId: string) => Promise<FileUpdateIntent[]>;
  getFilesWithIntents: (environmentId: string) => Promise<FileWithIntent[]>;
  list: (filters: FileUpdateIntentFilters) => Promise<FileUpdateIntent[]>;
  update: (id: string, data: UpdateFileUpdateIntentRequest) => Promise<FileUpdateIntent>;
};
```

Defined in: packages/codeboltjs/src/modules/fileUpdateIntent.ts:15

File Update Intent service client for codeboltjs.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="cancel"></a> `cancel()` | (`id`: `string`, `cancelledBy`: `string`) => `Promise`\<[`FileUpdateIntent`](../interfaces/FileUpdateIntent)\> | Cancel an intent | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:100](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L100) |
| <a id="checkoverlap"></a> `checkOverlap()` | (`environmentId`: `string`, `filePaths`: `string`[], `priority`: `number`) => `Promise`\<[`IntentOverlapResult`](../interfaces/IntentOverlapResult)\> | Check for overlap without creating | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:116](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L116) |
| <a id="complete"></a> `complete()` | (`id`: `string`, `closedBy`: `string`) => `Promise`\<[`FileUpdateIntent`](../interfaces/FileUpdateIntent)\> | Complete an intent | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:84](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L84) |
| <a id="create"></a> `create()` | (`data`: [`CreateFileUpdateIntentRequest`](../interfaces/CreateFileUpdateIntentRequest), `claimedBy`: `string`, `claimedByName?`: `string`) => `Promise`\<\{ `intent?`: [`FileUpdateIntent`](../interfaces/FileUpdateIntent); `overlap?`: [`IntentOverlapResult`](../interfaces/IntentOverlapResult); \}\> | Create a new file update intent | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:20](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L20) |
| <a id="delete"></a> `delete()` | (`id`: `string`) => `Promise`\<\{ `success`: `boolean`; \}\> | Delete an intent | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:180](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L180) |
| <a id="get"></a> `get()` | (`id`: `string`) => `Promise`\<[`FileUpdateIntent`](../interfaces/FileUpdateIntent)\> | Get a single intent | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:52](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L52) |
| <a id="getblockedfiles"></a> `getBlockedFiles()` | (`environmentId`: `string`) => `Promise`\<\{ `blockedFiles`: `string`[]; \}\> | Get blocked files (level 4 locks) | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:132](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L132) |
| <a id="getbyagent"></a> `getByAgent()` | (`agentId`: `string`) => `Promise`\<[`FileUpdateIntent`](../interfaces/FileUpdateIntent)[]\> | Get intents by agent | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:148](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L148) |
| <a id="getfileswithintents"></a> `getFilesWithIntents()` | (`environmentId`: `string`) => `Promise`\<`FileWithIntent`[]\> | Get all files with intents | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:164](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L164) |
| <a id="list"></a> `list()` | (`filters`: [`FileUpdateIntentFilters`](../interfaces/FileUpdateIntentFilters)) => `Promise`\<[`FileUpdateIntent`](../interfaces/FileUpdateIntent)[]\> | List intents | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:68](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L68) |
| <a id="update"></a> `update()` | (`id`: `string`, `data`: [`UpdateFileUpdateIntentRequest`](../interfaces/UpdateFileUpdateIntentRequest)) => `Promise`\<[`FileUpdateIntent`](../interfaces/FileUpdateIntent)\> | Update an existing intent | [packages/codeboltjs/src/modules/fileUpdateIntent.ts:36](packages/codeboltjs/src/modules/fileUpdateIntent.ts#L36) |
