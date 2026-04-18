---
title: delete
---

# `delete`

```typescript
plugin.codemap.delete(codemapId: string, projectPath?: string): Promise<CodemapDeleteResponse>
```

Delete a codemap

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `projectPath` | `string` | No |  |

## Returns

`Promise<CodemapDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.codemap.delete('codemapId');
console.log(result);
```
