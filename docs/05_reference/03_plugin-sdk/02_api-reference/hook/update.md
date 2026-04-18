---
title: update
---

# `update`

```typescript
plugin.hook.update(hookId: string, config: Partial<HookConfig>): Promise<HookResponse>
```

Update an existing hook

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |
| `config` | `Partial<HookConfig>` | Yes | Updated hook configuration |

## Returns

`Promise<HookResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hook.update('hookId', /* Partial<HookConfig> */);
console.log(result);
```
