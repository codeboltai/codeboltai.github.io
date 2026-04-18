---
title: create
---

# `create`

```typescript
plugin.codemap.create(data: CreateCodemapData, projectPath?: string): Promise<CodemapCreateResponse>
```

Create a placeholder codemap (status: 'creating')
Call this before generating the actual codemap content

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateCodemapData` | Yes |  |
| `projectPath` | `string` | No |  |

## Returns

`Promise<CodemapCreateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.codemap.create(/* CreateCodemapData */);
console.log(result);
```
