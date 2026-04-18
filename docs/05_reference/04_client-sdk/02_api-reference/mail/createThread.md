---
name: createThread
cbbaseinfo:
  description: "Creates a new mail thread for agent-to-agent communication.

Initiates a new conversation thread that messages can be posted to. Threads provide
a structured way to organize multi-message exchanges between agents on a specific topic."
cbparameters:
  parameters:
    - name: data
      typeName: CreateMailThreadRequest
      description: The thread creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailThread>"
    description: A promise that resolves to the newly created mail thread
data:
  name: createThread
  category: mail
  link: createThread.md
---
# createThread

```typescript
client.mail.createThread(data: CreateMailThreadRequest): Promise<MailThread>
```

Creates a new mail thread for agent-to-agent communication.

Initiates a new conversation thread that messages can be posted to. Threads provide
a structured way to organize multi-message exchanges between agents on a specific topic.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateMailThreadRequest` | The thread creation payload |

## Returns

**`Promise<MailThread>`** — A promise that resolves to the newly created mail thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.createThread(/* CreateMailThreadRequest */);
```
