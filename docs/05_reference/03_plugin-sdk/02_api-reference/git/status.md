---
title: status
---

# `status`

```typescript
plugin.git.status(): Promise<GitStatusResponse>
```

Retrieves the status of the local repository at the given path.

## Parameters

_No parameters._

## Returns

`Promise<GitStatusResponse>` — A promise that resolves with the response from the status event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.status();
console.log(result);
```
