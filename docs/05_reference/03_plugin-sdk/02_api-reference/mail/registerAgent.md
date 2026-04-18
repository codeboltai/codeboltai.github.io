---
title: registerAgent
---

# `registerAgent`

```typescript
plugin.mail.registerAgent(params: IRegisterAgentParams): Promise<IRegisterAgentResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IRegisterAgentParams` | Yes |  |

## Returns

`Promise<IRegisterAgentResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.registerAgent(/* IRegisterAgentParams */);
console.log(result);
```
