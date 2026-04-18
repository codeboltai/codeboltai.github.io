---
title: GitApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: GitApi

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:30

Provides Git version control operations for the workspace.

This API wraps common Git commands -- init, commit, push, pull, branch
management, and diff inspection -- allowing agents and UI components
to interact with the project's Git repository programmatically.

## Constructors

### Constructor

```ts
new GitApi(http: HttpClient): GitApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`GitApi`

## Methods

### branch()

```ts
branch(data?: GitBranchRequest): Promise<GitBranch[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:85

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `GitBranchRequest` |

#### Returns

`Promise`\<`GitBranch`[]\>

***

### checkout()

```ts
checkout(data: GitCheckoutRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:89

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `GitCheckoutRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### commit()

```ts
commit(data: GitCommitRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:57

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `GitCommitRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### createBranch()

```ts
createBranch(data: GitCreateBranchRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:93

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `GitCreateBranchRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### diff()

```ts
diff(data?: GitDiffRequest): Promise<GitDiff[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:45

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `GitDiffRequest` |

#### Returns

`Promise`\<`GitDiff`[]\>

***

### download()

```ts
download(data: GitDownloadRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:65

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `GitDownloadRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### getRemoteUrl()

```ts
getRemoteUrl(): Promise<GitRemoteUrlResponse>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:33

#### Returns

`Promise`\<`GitRemoteUrlResponse`\>

***

### graph()

```ts
graph(data?: GitGraphRequest): Promise<GitCommit[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:41

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `GitGraphRequest` |

#### Returns

`Promise`\<`GitCommit`[]\>

***

### init()

```ts
init(data?: GitInitRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `GitInitRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### publishRemote()

```ts
publishRemote(data: GitPublishRemoteRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:69

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `GitPublishRemoteRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### pull()

```ts
pull(data?: GitPullRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `GitPullRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### push()

```ts
push(data?: GitPushRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:81

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `GitPushRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### pushToRemote()

```ts
pushToRemote(data?: GitPushRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:73

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `GitPushRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### revert()

```ts
revert(data: GitRevertRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:49

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `GitRevertRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### revertUntracked()

```ts
revertUntracked(data: GitRevertRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:53

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `GitRevertRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### status()

```ts
status(data?: GitStatusRequest): Promise<GitStatus>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/git.api.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `GitStatusRequest` |

#### Returns

`Promise`\<`GitStatus`\>
