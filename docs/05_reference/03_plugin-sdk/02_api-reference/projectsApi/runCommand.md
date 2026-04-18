---
title: runCommand
---

# `runCommand`

```typescript
plugin.projectsApi.runCommand(data: RunCommandRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `RunCommandRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.runCommand(/* RunCommandRequest */);
console.log(result);
```
