---
title: Git API
---

# Git API

The `git` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`addAll`](./addAll) | Adds changes in the local repository to the staging area at the given path. |
| [`branch`](./branch) | Creates a new branch in the local repository at the given path. |
| [`checkout`](./checkout) | Checks out a branch or commit in the local repository at the given path. |
| [`clone`](./clone) | Clones a remote Git repository to the specified path. |
| [`commit`](./commit) | Commits the staged changes in the local repository with the given commit message. |
| [`diff`](./diff) | Retrieves the diff of changes for a specific commit in the local repository. |
| [`init`](./init) | Initializes a new Git repository at the given path. |
| [`logs`](./logs) | Retrieves the commit logs for the local repository at the given path. |
| [`pull`](./pull) | Pulls the latest changes from the remote repository to the local repository at the given path. |
| [`push`](./push) | Pushes local repository changes to the remote repository at the given path. |
| [`status`](./status) | Retrieves the status of the local repository at the given path. |

## Methods

---

### `addAll`

```typescript
plugin.git.addAll(): Promise<AddResponse>
```

Adds changes in the local repository to the staging area at the given path.

_No parameters._

**Returns:** `Promise<AddResponse>` — A promise that resolves with the response from the add event.

[Full reference →](./addAll)

---

### `branch`

```typescript
plugin.git.branch(branch: string): Promise<GitBranchResponse>
```

Creates a new branch in the local repository at the given path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `branch` | `string` | Yes | The name of the new branch to create. |

**Returns:** `Promise<GitBranchResponse>` — A promise that resolves with the response from the branch event.

[Full reference →](./branch)

---

### `checkout`

```typescript
plugin.git.checkout(branch: string): Promise<GitCheckoutResponse>
```

Checks out a branch or commit in the local repository at the given path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `branch` | `string` | Yes | The name of the branch or commit to check out. |

**Returns:** `Promise<GitCheckoutResponse>` — A promise that resolves with the response from the checkout event.

[Full reference →](./checkout)

---

### `clone`

```typescript
plugin.git.clone(url: string, path?: string): Promise<GitCloneResponse>
```

Clones a remote Git repository to the specified path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | `string` | Yes | The URL of the remote repository to clone. |
| `path` | `string` | No | The file system path where the repository should be cloned. |

**Returns:** `Promise<GitCloneResponse>` — A promise that resolves with the response from the clone event.

[Full reference →](./clone)

---

### `commit`

```typescript
plugin.git.commit(message: string): Promise<GitCommitResponse>
```

Commits the staged changes in the local repository with the given commit message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `string` | Yes | The commit message to use for the commit. |

**Returns:** `Promise<GitCommitResponse>` — A promise that resolves with the response from the commit event.

[Full reference →](./commit)

---

### `diff`

```typescript
plugin.git.diff(commitHash: string): Promise<GitDiffResponse>
```

Retrieves the diff of changes for a specific commit in the local repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `commitHash` | `string` | Yes | The hash of the commit to retrieve the diff for. |

**Returns:** `Promise<GitDiffResponse>` — A promise that resolves with the response from the diff event.

[Full reference →](./diff)

---

### `init`

```typescript
plugin.git.init(path: string): Promise<GitInitResponse>
```

Initializes a new Git repository at the given path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The file system path where the Git repository should be initialized. |

**Returns:** `Promise<GitInitResponse>` — A promise that resolves with the response from the init event.

[Full reference →](./init)

---

### `logs`

```typescript
plugin.git.logs(path: string): Promise<GitLogsResponse>
```

Retrieves the commit logs for the local repository at the given path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The file system path of the local Git repository. |

**Returns:** `Promise<GitLogsResponse>` — A promise that resolves with the response from the logs event.

[Full reference →](./logs)

---

### `pull`

```typescript
plugin.git.pull(): Promise<GitPullResponse>
```

Pulls the latest changes from the remote repository to the local repository at the given path.

_No parameters._

**Returns:** `Promise<GitPullResponse>` — A promise that resolves with the response from the pull event.

[Full reference →](./pull)

---

### `push`

```typescript
plugin.git.push(): Promise<GitPushResponse>
```

Pushes local repository changes to the remote repository at the given path.

_No parameters._

**Returns:** `Promise<GitPushResponse>` — A promise that resolves with the response from the push event.

[Full reference →](./push)

---

### `status`

```typescript
plugin.git.status(): Promise<GitStatusResponse>
```

Retrieves the status of the local repository at the given path.

_No parameters._

**Returns:** `Promise<GitStatusResponse>` — A promise that resolves with the response from the status event.

[Full reference →](./status)

