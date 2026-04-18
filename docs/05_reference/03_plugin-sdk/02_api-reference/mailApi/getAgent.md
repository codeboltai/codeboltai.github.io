---
title: getAgent
---

# `getAgent`

```typescript
plugin.mailApi.getAgent(agentId: string): Promise<MailAgent>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `agentId` | `string` | Yes |  |

## Returns

`Promise<MailAgent>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.getAgent('agentId');
console.log(result);
```
