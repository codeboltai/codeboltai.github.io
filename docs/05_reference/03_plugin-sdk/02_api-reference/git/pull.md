---
title: pull
---

# `pull`

```typescript
plugin.git.pull(): Promise<GitPullResponse>
```

Pulls the latest changes from the remote repository to the local repository at the given path.

## Parameters

_No parameters._

## Returns

`Promise<GitPullResponse>` — A promise that resolves with the response from the pull event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.pull();
console.log(result);
```
