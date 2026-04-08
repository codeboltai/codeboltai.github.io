---
title: git
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: git

```ts
const git: {
  addAll: () => Promise<AddResponse>;
  branch: (branch: string) => Promise<GitBranchResponse>;
  checkout: (branch: string) => Promise<GitCheckoutResponse>;
  clone: (url: string, path?: string) => Promise<GitCloneResponse>;
  commit: (message: string) => Promise<GitCommitResponse>;
  diff: (commitHash: string) => Promise<GitDiffResponse>;
  init: (path: string) => Promise<GitInitResponse>;
  logs: (path: string) => Promise<GitLogsResponse>;
  pull: () => Promise<GitPullResponse>;
  push: () => Promise<GitPushResponse>;
  status: () => Promise<GitStatusResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/git.ts:22

A service for interacting with Git operations via WebSocket messages.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addall"></a> `addAll()` | () => `Promise`\<`AddResponse`\> | Adds changes in the local repository to the staging area at the given path. | [packages/codeboltjs/src/modules/git.ts:87](packages/codeboltjs/src/modules/git.ts#L87) |
| <a id="branch"></a> `branch()` | (`branch`: `string`) => `Promise`\<`GitBranchResponse`\> | Creates a new branch in the local repository at the given path. | [packages/codeboltjs/src/modules/git.ts:133](packages/codeboltjs/src/modules/git.ts#L133) |
| <a id="checkout"></a> `checkout()` | (`branch`: `string`) => `Promise`\<`GitCheckoutResponse`\> | Checks out a branch or commit in the local repository at the given path. | [packages/codeboltjs/src/modules/git.ts:117](packages/codeboltjs/src/modules/git.ts#L117) |
| <a id="clone"></a> `clone()` | (`url`: `string`, `path?`: `string`) => `Promise`\<`GitCloneResponse`\> | Clones a remote Git repository to the specified path. | [packages/codeboltjs/src/modules/git.ts:180](packages/codeboltjs/src/modules/git.ts#L180) |
| <a id="commit"></a> `commit()` | (`message`: `string`) => `Promise`\<`GitCommitResponse`\> | Commits the staged changes in the local repository with the given commit message. | [packages/codeboltjs/src/modules/git.ts:101](packages/codeboltjs/src/modules/git.ts#L101) |
| <a id="diff"></a> `diff()` | (`commitHash`: `string`) => `Promise`\<`GitDiffResponse`\> | Retrieves the diff of changes for a specific commit in the local repository. | [packages/codeboltjs/src/modules/git.ts:164](packages/codeboltjs/src/modules/git.ts#L164) |
| <a id="init"></a> `init()` | (`path`: `string`) => `Promise`\<`GitInitResponse`\> | Initializes a new Git repository at the given path. | [packages/codeboltjs/src/modules/git.ts:28](packages/codeboltjs/src/modules/git.ts#L28) |
| <a id="logs"></a> `logs()` | (`path`: `string`) => `Promise`\<`GitLogsResponse`\> | Retrieves the commit logs for the local repository at the given path. | [packages/codeboltjs/src/modules/git.ts:148](packages/codeboltjs/src/modules/git.ts#L148) |
| <a id="pull"></a> `pull()` | () => `Promise`\<`GitPullResponse`\> | Pulls the latest changes from the remote repository to the local repository at the given path. | [packages/codeboltjs/src/modules/git.ts:44](packages/codeboltjs/src/modules/git.ts#L44) |
| <a id="push"></a> `push()` | () => `Promise`\<`GitPushResponse`\> | Pushes local repository changes to the remote repository at the given path. | [packages/codeboltjs/src/modules/git.ts:58](packages/codeboltjs/src/modules/git.ts#L58) |
| <a id="status"></a> `status()` | () => `Promise`\<`GitStatusResponse`\> | Retrieves the status of the local repository at the given path. | [packages/codeboltjs/src/modules/git.ts:73](packages/codeboltjs/src/modules/git.ts#L73) |
