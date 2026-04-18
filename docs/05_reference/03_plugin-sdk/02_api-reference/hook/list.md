---
title: list
---

# `list`

```typescript
plugin.hook.list(): Promise<HookListResponse>
```

List all hooks

## Parameters

_No parameters._

## Returns

`Promise<HookListResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hook.list();
console.log(result);
```
