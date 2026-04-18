---
title: getProviderStatus
---

# `getProviderStatus`

```typescript
plugin.environmentsApi.getProviderStatus(id: string): Promise<EnvironmentProviderStatus>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<EnvironmentProviderStatus>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.getProviderStatus('id');
console.log(result);
```
