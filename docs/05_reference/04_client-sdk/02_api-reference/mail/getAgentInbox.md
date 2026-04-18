---
name: getAgentInbox
cbbaseinfo:
  description: "Retrieves the inbox messages for a specific agent.

Returns all unread and pending messages directed to the specified agent. This is the
primary way an agent checks for new incoming communications."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent whose inbox to fetch
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailMessage[]>"
    description: A promise that resolves to an array of inbox messages
data:
  name: getAgentInbox
  category: mail
  link: getAgentInbox.md
---
# getAgentInbox

```typescript
client.mail.getAgentInbox(agentId: string): Promise<MailMessage[]>
```

Retrieves the inbox messages for a specific agent.

Returns all unread and pending messages directed to the specified agent. This is the
primary way an agent checks for new incoming communications.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent whose inbox to fetch |

## Returns

**`Promise<MailMessage[]>`** — A promise that resolves to an array of inbox messages

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.getAgentInbox('agentId');
```
