---
title: GitApi API
---

# GitApi API

The `gitApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`branch`](./branch) |  |
| [`checkout`](./checkout) |  |
| [`commit`](./commit) |  |
| [`createBranch`](./createBranch) |  |
| [`diff`](./diff) |  |
| [`download`](./download) |  |
| [`getRemoteUrl`](./getRemoteUrl) |  |
| [`graph`](./graph) |  |
| [`init`](./init) |  |
| [`publishRemote`](./publishRemote) |  |
| [`pull`](./pull) |  |
| [`push`](./push) |  |
| [`pushToRemote`](./pushToRemote) |  |
| [`revert`](./revert) |  |
| [`revertUntracked`](./revertUntracked) |  |
| [`status`](./status) |  |

## Methods

---

### `branch`

```typescript
plugin.gitApi.branch(data?: GitBranchRequest): Promise<GitBranch[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitBranchRequest` | No |  |

**Returns:** `Promise<GitBranch[]>`

[Full reference →](./branch)

---

### `checkout`

```typescript
plugin.gitApi.checkout(data: GitCheckoutRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitCheckoutRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./checkout)

---

### `commit`

```typescript
plugin.gitApi.commit(data: GitCommitRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitCommitRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./commit)

---

### `createBranch`

```typescript
plugin.gitApi.createBranch(data: GitCreateBranchRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitCreateBranchRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./createBranch)

---

### `diff`

```typescript
plugin.gitApi.diff(data?: GitDiffRequest): Promise<GitDiff[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitDiffRequest` | No |  |

**Returns:** `Promise<GitDiff[]>`

[Full reference →](./diff)

---

### `download`

```typescript
plugin.gitApi.download(data: GitDownloadRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitDownloadRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./download)

---

### `getRemoteUrl`

```typescript
plugin.gitApi.getRemoteUrl(): Promise<GitRemoteUrlResponse>
```



_No parameters._

**Returns:** `Promise<GitRemoteUrlResponse>`

[Full reference →](./getRemoteUrl)

---

### `graph`

```typescript
plugin.gitApi.graph(data?: GitGraphRequest): Promise<GitCommit[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitGraphRequest` | No |  |

**Returns:** `Promise<GitCommit[]>`

[Full reference →](./graph)

---

### `init`

```typescript
plugin.gitApi.init(data?: GitInitRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitInitRequest` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./init)

---

### `publishRemote`

```typescript
plugin.gitApi.publishRemote(data: GitPublishRemoteRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitPublishRemoteRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./publishRemote)

---

### `pull`

```typescript
plugin.gitApi.pull(data?: GitPullRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitPullRequest` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./pull)

---

### `push`

```typescript
plugin.gitApi.push(data?: GitPushRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitPushRequest` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./push)

---

### `pushToRemote`

```typescript
plugin.gitApi.pushToRemote(data?: GitPushRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitPushRequest` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./pushToRemote)

---

### `revert`

```typescript
plugin.gitApi.revert(data: GitRevertRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitRevertRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./revert)

---

### `revertUntracked`

```typescript
plugin.gitApi.revertUntracked(data: GitRevertRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitRevertRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./revertUntracked)

---

### `status`

```typescript
plugin.gitApi.status(data?: GitStatusRequest): Promise<GitStatus>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitStatusRequest` | No |  |

**Returns:** `Promise<GitStatus>`

[Full reference →](./status)

