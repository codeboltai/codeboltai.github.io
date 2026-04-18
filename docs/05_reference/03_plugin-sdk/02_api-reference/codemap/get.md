---
title: get
---

# `get`

```typescript
plugin.codemap.get(codemapId: string, projectPath?: string): Promise<CodemapGetResponse>
```

Get a specific codemap by ID

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `projectPath` | `string` | No |  |

## Returns

`Promise<CodemapGetResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.codemap.get('codemapId');
console.log(result);
```
