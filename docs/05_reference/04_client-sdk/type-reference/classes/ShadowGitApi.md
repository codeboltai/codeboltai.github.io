---
title: ShadowGitApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ShadowGitApi

Defined in: CodeBolt/packages/clientsdk/src/api/shadow-git.api.ts:4

## Constructors

### Constructor

```ts
new ShadowGitApi(http: HttpClient): ShadowGitApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/shadow-git.api.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ShadowGitApi`

## Methods

### checkpoint()

```ts
checkpoint(data?: ShadowGitCheckpointRequest): Promise<ShadowGitCheckpoint>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/shadow-git.api.ts:13

Create a shadow git checkpoint

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `ShadowGitCheckpointRequest` |

#### Returns

`Promise`\<`ShadowGitCheckpoint`\>

***

### cleanup()

```ts
cleanup(data?: ShadowGitCleanupRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/shadow-git.api.ts:33

Clean up shadow git data

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `ShadowGitCleanupRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### diff()

```ts
diff(data?: ShadowGitDiffRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/shadow-git.api.ts:18

Get diff between shadow git checkpoints

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `ShadowGitDiffRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### getCheckpoints()

```ts
getCheckpoints(params?: Record<string, unknown>): Promise<ShadowGitCheckpoint[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/shadow-git.api.ts:28

List all shadow git checkpoints

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`ShadowGitCheckpoint`[]\>

***

### initialize()

```ts
initialize(data?: ShadowGitInitializeRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/shadow-git.api.ts:8

Initialize shadow git tracking

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `ShadowGitInitializeRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### readFile()

```ts
readFile(data: ShadowGitReadFileRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/shadow-git.api.ts:38

Read a file from a shadow git checkpoint

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `ShadowGitReadFileRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### restore()

```ts
restore(data: ShadowGitRestoreRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/shadow-git.api.ts:23

Restore to a previous shadow git checkpoint

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `ShadowGitRestoreRequest` |

#### Returns

`Promise`\<`unknown`\>
