---
title: commit
---

# `commit`

```typescript
plugin.git.commit(message: string): Promise<GitCommitResponse>
```

Commits the staged changes in the local repository with the given commit message.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `string` | Yes | The commit message to use for the commit. |

## Returns

`Promise<GitCommitResponse>` — A promise that resolves with the response from the commit event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.commit('message');
console.log(result);
```
