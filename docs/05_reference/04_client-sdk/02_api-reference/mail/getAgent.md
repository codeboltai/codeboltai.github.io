---
name: getAgent
cbbaseinfo:
  description: "Retrieves a specific mail agent by its unique identifier.

Returns the agent's registration details including name, capabilities, and
configuration metadata."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailAgent>"
    description: A promise that resolves to the mail agent details
data:
  name: getAgent
  category: mail
  link: getAgent.md
---
# getAgent

```typescript
client.mail.getAgent(agentId: string): Promise<MailAgent>
```

Retrieves a specific mail agent by its unique identifier.

Returns the agent's registration details including name, capabilities, and
configuration metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent to retrieve |

## Returns

**`Promise<MailAgent>`** — A promise that resolves to the mail agent details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.getAgent('agentId');
```
