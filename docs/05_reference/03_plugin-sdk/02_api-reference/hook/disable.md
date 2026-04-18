---
title: disable
---

# `disable`

```typescript
plugin.hook.disable(hookId: string): Promise<HookResponse>
```

Disable a hook

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |

## Returns

`Promise<HookResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hook.disable('hookId');
console.log(result);
```
