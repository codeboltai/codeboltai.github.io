---
title: diff
---

# `diff`

```typescript
plugin.git.diff(commitHash: string): Promise<GitDiffResponse>
```

Retrieves the diff of changes for a specific commit in the local repository.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `commitHash` | `string` | Yes | The hash of the commit to retrieve the diff for. |

## Returns

`Promise<GitDiffResponse>` — A promise that resolves with the response from the diff event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.diff('commitHash');
console.log(result);
```
