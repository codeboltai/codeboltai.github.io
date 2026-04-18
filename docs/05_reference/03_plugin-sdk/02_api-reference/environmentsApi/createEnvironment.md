---
title: createEnvironment
---

# `createEnvironment`

```typescript
plugin.environmentsApi.createEnvironment(data: CreateEnvironmentRequest): Promise<Environment>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateEnvironmentRequest` | Yes |  |

## Returns

`Promise<Environment>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.createEnvironment(/* CreateEnvironmentRequest */);
console.log(result);
```
