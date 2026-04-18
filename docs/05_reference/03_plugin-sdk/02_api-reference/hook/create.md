---
title: create
---

# `create`

```typescript
plugin.hook.create(config: HookConfig): Promise<HookResponse>
```

Create a new hook

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `config` | `HookConfig` | Yes | Hook configuration |

## Returns

`Promise<HookResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hook.create(/* HookConfig */);
console.log(result);
```
