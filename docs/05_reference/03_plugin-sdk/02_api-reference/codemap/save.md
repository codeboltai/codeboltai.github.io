---
title: save
---

# `save`

```typescript
plugin.codemap.save(codemapId: string, codemap: Codemap, projectPath?: string): Promise<CodemapSaveResponse>
```

Save a complete codemap with content

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `codemap` | `Codemap` | Yes |  |
| `projectPath` | `string` | No |  |

## Returns

`Promise<CodemapSaveResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.codemap.save('codemapId', /* Codemap */);
console.log(result);
```
