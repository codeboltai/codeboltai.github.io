---
title: getAgentInbox
---

# `getAgentInbox`

```typescript
plugin.mailApi.getAgentInbox(agentId: string): Promise<MailMessage[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `agentId` | `string` | Yes |  |

## Returns

`Promise<MailMessage[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.getAgentInbox('agentId');
console.log(result);
```
