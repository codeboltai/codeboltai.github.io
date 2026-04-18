---
title: push
---

# `push`

```typescript
plugin.git.push(): Promise<GitPushResponse>
```

Pushes local repository changes to the remote repository at the given path.

## Parameters

_No parameters._

## Returns

`Promise<GitPushResponse>` — A promise that resolves with the response from the push event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.push();
console.log(result);
```
