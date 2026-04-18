---
title: getMetadata
---

# `getMetadata`

```typescript
plugin.projectStructure.getMetadata(workspacePath?: string): Promise<ProjectStructureMetadataResponse>
```

Get complete project metadata

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureMetadataResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.getMetadata();
console.log(result);
```
