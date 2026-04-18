---
title: addAll
---

# `addAll`

```typescript
plugin.git.addAll(): Promise<AddResponse>
```

Adds changes in the local repository to the staging area at the given path.

## Parameters

_No parameters._

## Returns

`Promise<AddResponse>` — A promise that resolves with the response from the add event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.addAll();
console.log(result);
```
