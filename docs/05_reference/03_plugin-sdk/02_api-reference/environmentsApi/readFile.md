---
title: readFile
---

# `readFile`

```typescript
plugin.environmentsApi.readFile(id: string, data: ReadEnvironmentFileRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `ReadEnvironmentFileRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.readFile('id', /* ReadEnvironmentFileRequest */);
console.log(result);
```
