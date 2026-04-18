---
title: initialize
---

# `initialize`

```typescript
plugin.hook.initialize(projectPath: string): Promise<HookInitializeResponse>
```

Initialize the hook manager for a project

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `projectPath` | `string` | Yes | Path to the project |

## Returns

`Promise<HookInitializeResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hook.initialize('projectPath');
console.log(result);
```
