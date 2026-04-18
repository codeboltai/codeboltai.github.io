---
title: listCodeDefinitionNames
---

# `listCodeDefinitionNames`

```typescript
plugin.fs.listCodeDefinitionNames(path: string): Promise<ListCodeDefinitionsResponse>
```

listCodeDefinitionNames

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The path to search for code definitions. |

## Returns

`Promise<ListCodeDefinitionsResponse>` — A promise that resolves with the list of code definition names.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.listCodeDefinitionNames('path');
console.log(result);
```
