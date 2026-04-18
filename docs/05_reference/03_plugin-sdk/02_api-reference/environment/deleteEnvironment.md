---
title: deleteEnvironment
---

# `deleteEnvironment`

```typescript
plugin.environment.deleteEnvironment(environmentId: string): Promise<any>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |

## Returns

`Promise<any>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environment.deleteEnvironment('environmentId');
console.log(result);
```
