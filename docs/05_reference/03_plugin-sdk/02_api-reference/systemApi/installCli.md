---
title: installCli
---

# `installCli`

```typescript
plugin.systemApi.installCli(data?: InstallCliRequest): Promise<InstallCliResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `InstallCliRequest` | No |  |

## Returns

`Promise<InstallCliResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.systemApi.installCli();
console.log(result);
```
