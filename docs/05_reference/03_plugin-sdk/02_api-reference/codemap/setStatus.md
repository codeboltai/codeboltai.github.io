---
title: setStatus
---

# `setStatus`

```typescript
plugin.codemap.setStatus(codemapId: string, status: CodemapStatus, error?: string, projectPath?: string): Promise<CodemapUpdateResponse>
```

Set the status of a codemap

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `status` | `CodemapStatus` | Yes |  |
| `error` | `string` | No |  |
| `projectPath` | `string` | No |  |

## Returns

`Promise<CodemapUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.codemap.setStatus('codemapId', /* CodemapStatus */);
console.log(result);
```
