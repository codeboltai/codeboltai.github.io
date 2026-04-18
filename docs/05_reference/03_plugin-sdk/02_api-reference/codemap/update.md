---
title: update
---

# `update`

```typescript
plugin.codemap.update(codemapId: string, data: UpdateCodemapData, projectPath?: string): Promise<CodemapUpdateResponse>
```

Update codemap info (title, description, etc.)

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `data` | `UpdateCodemapData` | Yes |  |
| `projectPath` | `string` | No |  |

## Returns

`Promise<CodemapUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.codemap.update('codemapId', /* UpdateCodemapData */);
console.log(result);
```
