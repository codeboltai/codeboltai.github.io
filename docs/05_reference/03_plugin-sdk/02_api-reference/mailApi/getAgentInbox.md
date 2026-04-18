---
name: getAgentInbox
cbbaseinfo:
  description: Call getAgentInbox on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage[]>"
    description: ""
data:
  name: getAgentInbox
  category: mailApi
  link: getAgentInbox.md
---
# getAgentInbox

```typescript
plugin.mailApi.getAgentInbox(agentId: string): Promise<MailMessage[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` |  |

## Returns

**`Promise<MailMessage[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.getAgentInbox('agentId');
```
