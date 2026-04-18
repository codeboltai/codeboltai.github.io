---
title: getAgent
---

# `getAgent`

```typescript
plugin.mail.getAgent(params: IGetAgentParams): Promise<IGetAgentResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetAgentParams` | Yes |  |

## Returns

`Promise<IGetAgentResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.getAgent(/* IGetAgentParams */);
console.log(result);
```
