---
title: writeFile
---

# `writeFile`

```typescript
plugin.environmentsApi.writeFile(id: string, data: WriteEnvironmentFileRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `WriteEnvironmentFileRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.writeFile('id', /* WriteEnvironmentFileRequest */);
console.log(result);
```
