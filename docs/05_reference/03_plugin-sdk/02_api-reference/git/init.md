---
title: init
---

# `init`

```typescript
plugin.git.init(path: string): Promise<GitInitResponse>
```

Initializes a new Git repository at the given path.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The file system path where the Git repository should be initialized. |

## Returns

`Promise<GitInitResponse>` — A promise that resolves with the response from the init event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.init('path');
console.log(result);
```
