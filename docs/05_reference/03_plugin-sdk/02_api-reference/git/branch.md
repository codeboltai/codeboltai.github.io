---
title: branch
---

# `branch`

```typescript
plugin.git.branch(branch: string): Promise<GitBranchResponse>
```

Creates a new branch in the local repository at the given path.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `branch` | `string` | Yes | The name of the new branch to create. |

## Returns

`Promise<GitBranchResponse>` — A promise that resolves with the response from the branch event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.branch('branch');
console.log(result);
```
