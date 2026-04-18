---
title: clone
---

# `clone`

```typescript
plugin.git.clone(url: string, path?: string): Promise<GitCloneResponse>
```

Clones a remote Git repository to the specified path.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | `string` | Yes | The URL of the remote repository to clone. |
| `path` | `string` | No | The file system path where the repository should be cloned. |

## Returns

`Promise<GitCloneResponse>` — A promise that resolves with the response from the clone event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.clone('url');
console.log(result);
```
