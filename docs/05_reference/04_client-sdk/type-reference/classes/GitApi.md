---
title: GitApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: GitApi

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:30

Provides Git version control operations for the workspace.

This API wraps common Git commands -- init, commit, push, pull, branch
management, and diff inspection -- allowing agents and UI components
to interact with the project's Git repository programmatically.

## Constructors

### Constructor

```ts
new GitApi(http: HttpClient): GitApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:31

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

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:289

Lists branches in the repository.

Returns all local (and optionally remote) branches with their
metadata. Useful for branch selection UIs and workflow logic.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `GitBranchRequest` | Optional parameters to filter branches (e.g., local-only, remote) |

#### Returns

`Promise`\<`GitBranch`[]\>

A promise that resolves to an array of [GitBranch](../interfaces/GitBranch) objects

#### Example

```typescript
const branches = await client.git.branch();
branches.forEach(b => console.log(b.name));
```

***

### checkout()

```ts
checkout(data: GitCheckoutRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:308

Checks out an existing branch or commit.

Switches the working directory to the specified branch, tag, or
commit hash.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GitCheckoutRequest` | Checkout parameters specifying the target branch or commit |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the checkout is complete

#### Example

```typescript
await client.git.checkout({ branch: 'feature/auth' });
```

***

### commit()

```ts
commit(data: GitCommitRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:160

Creates a new Git commit with the staged changes.

Commits all currently staged files with the provided commit message
and optional author information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GitCommitRequest` | Commit parameters including the commit message |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the commit is created

#### Example

```typescript
await client.git.commit({ message: 'feat: add user authentication' });
```

***

### createBranch()

```ts
createBranch(data: GitCreateBranchRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:327

Creates a new Git branch.

Creates a branch with the specified name, optionally based on a
given starting point (commit, tag, or another branch).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GitCreateBranchRequest` | Branch creation parameters including the new branch name |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the branch has been created

#### Example

```typescript
await client.git.createBranch({ name: 'feature/new-feature' });
```

***

### diff()

```ts
diff(data?: GitDiffRequest): Promise<GitDiff[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:104

Retrieves the current diff of changes in the working directory.

Compares the working tree against the latest commit to show all
unstaged modifications. Optionally filters to a specific file path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `GitDiffRequest` | Optional filter parameters |

#### Returns

`Promise`\<`GitDiff`[]\>

A promise that resolves to an array of [GitDiff](../interfaces/GitDiff) objects with file changes and line modifications

#### Example

```typescript
const diffs = await client.git.diff({ file: 'src/index.ts' });
```

***

### download()

```ts
download(data: GitDownloadRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:198

Downloads (clones) a remote Git repository.

Clones a repository from a URL into the workspace. Use this to
set up a project from an existing remote repository.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GitDownloadRequest` | Clone parameters including the repository URL |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the download/clone is complete

#### Example

```typescript
await client.git.download({ url: 'https://github.com/org/repo.git' });
```

***

### getRemoteUrl()

```ts
getRemoteUrl(): Promise<GitRemoteUrlResponse>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:47

Retrieves the configured remote URL for the repository.

Returns the URL of the primary remote (typically "origin"). Useful
for displaying repository information or constructing web links.

#### Returns

`Promise`\<`GitRemoteUrlResponse`\>

A promise that resolves to a GitRemoteUrlResponse containing the remote URL

#### Example

```typescript
const remote = await client.git.getRemoteUrl();
console.log(remote.url); // e.g., 'https://github.com/org/repo.git'
```

***

### graph()

```ts
graph(data?: GitGraphRequest): Promise<GitCommit[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:84

Retrieves the commit graph (history) of the repository.

Returns an array of commits representing the repository's history.
Useful for rendering commit timelines or inspecting past changes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `GitGraphRequest` | Optional parameters to filter the graph (e.g., branch, limit) |

#### Returns

`Promise`\<`GitCommit`[]\>

A promise that resolves to an array of [GitCommit](../interfaces/GitCommit) objects

#### Example

```typescript
const commits = await client.git.graph({ limit: 20 });
commits.forEach(c => console.log(c.message));
```

***

### init()

```ts
init(data?: GitInitRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:65

Initializes a new Git repository in the workspace.

Creates a new `.git` directory and sets up the repository. If the
repository already exists, behavior depends on the server configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `GitInitRequest` | Optional initialization parameters such as default branch name |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when initialization is complete

#### Example

```typescript
await client.git.init();
```

***

### publishRemote()

```ts
publishRemote(data: GitPublishRemoteRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:216

Publishes the local repository to a new remote.

Sets up a remote and pushes the local repository to it for the first
time. Use this when the repository does not yet have a remote configured.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GitPublishRemoteRequest` | Remote publication parameters including the target URL |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when publishing is complete

#### Example

```typescript
await client.git.publishRemote({ url: 'https://github.com/org/new-repo.git' });
```

***

### pull()

```ts
pull(data?: GitPullRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:252

Pulls changes from the remote repository.

Downloads and integrates remote changes into the current branch.
Equivalent to running `git pull` from the command line.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `GitPullRequest` | Optional pull parameters such as remote name or branch |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the pull is complete

#### Example

```typescript
await client.git.pull();
```

***

### push()

```ts
push(data?: GitPushRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:270

Pushes committed changes to the remote repository.

An alias for [pushToRemote](#pushtoremote) providing a shorter method name.
Both methods perform the same push operation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `GitPushRequest` | Optional push parameters such as branch or force flag |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the push is complete

#### Example

```typescript
await client.git.push();
```

***

### pushToRemote()

```ts
pushToRemote(data?: GitPushRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:234

Pushes committed changes to the remote repository.

Uploads local commits to the configured remote. This is the standard
way to share local changes with the remote repository.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `GitPushRequest` | Optional push parameters such as branch or force flag |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the push is complete

#### Example

```typescript
await client.git.pushToRemote();
```

***

### revert()

```ts
revert(data: GitRevertRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:122

Reverts changes to tracked files in the working directory.

Discards uncommitted modifications to files that are already tracked
by Git, restoring them to their last committed state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GitRevertRequest` | Request specifying which files to revert |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the revert is complete

#### Example

```typescript
await client.git.revert({ files: ['src/index.ts'] });
```

***

### revertUntracked()

```ts
revertUntracked(data: GitRevertRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:141

Removes untracked files from the working directory.

Deletes files that are not tracked by Git (i.e., new files that
have not been staged or committed). Use with caution as this
operation cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GitRevertRequest` | Request specifying which untracked files to remove |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the untracked files have been removed

#### Example

```typescript
await client.git.revertUntracked({ files: ['temp.log'] });
```

***

### status()

```ts
status(data?: GitStatusRequest): Promise<GitStatus>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/git.api.ts:179

Retrieves the current Git status of the working directory.

Returns information about staged, unstaged, and untracked files,
similar to running `git status` from the command line.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `GitStatusRequest` | Optional parameters to scope the status check |

#### Returns

`Promise`\<`GitStatus`\>

A promise that resolves to the [GitStatus](../interfaces/GitStatus) of the repository

#### Example

```typescript
const status = await client.git.status();
console.log(status); // modified files, staged changes, etc.
```
