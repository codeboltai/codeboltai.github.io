---
title: createAgent
---

# `createAgent`

```typescript
plugin.mailApi.createAgent(data: CreateMailAgentRequest): Promise<MailAgent>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateMailAgentRequest` | Yes |  |

## Returns

`Promise<MailAgent>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.createAgent(/* CreateMailAgentRequest */);
console.log(result);
```
