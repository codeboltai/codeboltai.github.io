---
title: delete
---

# `delete`

```typescript
plugin.hook.delete(hookId: string): Promise<HookDeleteResponse>
```

Delete a hook

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |

## Returns

`Promise<HookDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hook.delete('hookId');
console.log(result);
```
