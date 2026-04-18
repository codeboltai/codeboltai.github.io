---
title: updateMetadata
---

# `updateMetadata`

```typescript
plugin.projectStructure.updateMetadata(updates: Record<string, any>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update workspace metadata

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `updates` | `Record<string, any>` | Yes |  |
| `workspacePath` | `string` | No |  |

## Returns

`Promise<ProjectStructureUpdateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectStructure.updateMetadata(/* Record<string, any> */);
console.log(result);
```
