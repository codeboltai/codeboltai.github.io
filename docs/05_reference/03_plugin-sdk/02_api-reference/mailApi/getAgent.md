---
name: getAgent
cbbaseinfo:
  description: Call getAgent on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailAgent>"
    description: ""
data:
  name: getAgent
  category: mailApi
  link: getAgent.md
---
# getAgent

```typescript
plugin.mailApi.getAgent(agentId: string): Promise<MailAgent>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` |  |

## Returns

**`Promise<MailAgent>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.getAgent('agentId');
```
