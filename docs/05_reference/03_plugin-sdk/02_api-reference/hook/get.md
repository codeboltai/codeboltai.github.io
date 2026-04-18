---
title: get
---

# `get`

```typescript
plugin.hook.get(hookId: string): Promise<HookResponse>
```

Get a hook by ID

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |

## Returns

`Promise<HookResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hook.get('hookId');
console.log(result);
```
