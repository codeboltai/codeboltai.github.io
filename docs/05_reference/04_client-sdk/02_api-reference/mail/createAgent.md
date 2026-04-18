---
name: createAgent
cbbaseinfo:
  description: "Registers a new agent in the mail system.

Creates a mail identity for an agent, enabling it to send messages, receive mail in
its inbox, and participate in threaded conversations with other agents."
cbparameters:
  parameters:
    - name: data
      typeName: CreateMailAgentRequest
      description: The agent registration payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailAgent>"
    description: A promise that resolves to the newly registered mail agent
data:
  name: createAgent
  category: mail
  link: createAgent.md
---
# createAgent

```typescript
client.mail.createAgent(data: CreateMailAgentRequest): Promise<MailAgent>
```

Registers a new agent in the mail system.

Creates a mail identity for an agent, enabling it to send messages, receive mail in
its inbox, and participate in threaded conversations with other agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateMailAgentRequest` | The agent registration payload |

## Returns

**`Promise<MailAgent>`** — A promise that resolves to the newly registered mail agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.createAgent(/* CreateMailAgentRequest */);
```
