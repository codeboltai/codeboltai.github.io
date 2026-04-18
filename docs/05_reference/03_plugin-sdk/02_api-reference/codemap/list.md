---
title: list
---

# `list`

```typescript
plugin.codemap.list(projectPath?: string): Promise<CodemapListResponse>
```

List all codemaps for a project

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `projectPath` | `string` | No |  |

## Returns

`Promise<CodemapListResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.codemap.list();
console.log(result);
```
