---
name: createMessage
cbbaseinfo:
  description: "Creates a new inbox message.

Posts a message to the inbox that will appear as a notification for
the user. Use this to communicate important information, requests
for input, or status updates from agents."
cbparameters:
  parameters:
    - name: data
      typeName: CreateInboxMessageRequest
      description: Message creation payload including title, body, and priority
      isOptional: false
  returns:
    signatureTypeName: "Promise<InboxMessage>"
    description: A promise that resolves to the newly created
data:
  name: createMessage
  category: inbox
  link: createMessage.md
---
# createMessage

```typescript
client.inbox.createMessage(data: CreateInboxMessageRequest): Promise<InboxMessage>
```

Creates a new inbox message.

Posts a message to the inbox that will appear as a notification for
the user. Use this to communicate important information, requests
for input, or status updates from agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateInboxMessageRequest` | Message creation payload including title, body, and priority |

## Returns

**`Promise<InboxMessage>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.inbox.createMessage(/* CreateInboxMessageRequest */);
```
