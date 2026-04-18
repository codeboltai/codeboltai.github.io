---
name: getAgents
cbbaseinfo:
  description: "Lists all registered mail agents in the system.

Returns the complete list of agents that are registered to send and receive mail.
Each agent has a unique identity and inbox for receiving messages."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<MailAgent[]>"
    description: A promise that resolves to an array of mail agent registrations
data:
  name: getAgents
  category: mail
  link: getAgents.md
---
# getAgents

```typescript
client.mail.getAgents(): Promise<MailAgent[]>
```

Lists all registered mail agents in the system.

Returns the complete list of agents that are registered to send and receive mail.
Each agent has a unique identity and inbox for receiving messages.

## Parameters

_None_

## Returns

**`Promise<MailAgent[]>`** — A promise that resolves to an array of mail agent registrations

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.getAgents();
```
