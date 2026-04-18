---
title: enable
---

# `enable`

```typescript
plugin.hook.enable(hookId: string): Promise<HookResponse>
```

Enable a hook

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |

## Returns

`Promise<HookResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hook.enable('hookId');
console.log(result);
```
