---
name: getMessages
cbbaseinfo:
  description: "Retrieves saved messages from conversation history.

Returns previously saved message history, optionally filtered by agent
or other criteria. Useful for restoring conversation context or
displaying chat history in the UI."
cbparameters:
  parameters:
    - name: params
      typeName: GetMessagesParams
      description: Optional query parameters for filtering messages
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown[]>"
    description: A promise that resolves to an array of message objects
data:
  name: getMessages
  category: users
  link: getMessages.md
---
# getMessages

```typescript
client.users.getMessages(params?: GetMessagesParams): Promise<unknown[]>
```

Retrieves saved messages from conversation history.

Returns previously saved message history, optionally filtered by agent
or other criteria. Useful for restoring conversation context or
displaying chat history in the UI.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `GetMessagesParams` _(optional)_ | Optional query parameters for filtering messages |

## Returns

**`Promise<unknown[]>`** — A promise that resolves to an array of message objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.users.getMessages();
```
