---
name: getMessages
cbbaseinfo:
  description: "Retrieves all inbox messages.

Returns the full list of messages in the inbox, including unread,
acknowledged, and unresolved messages. Use optional parameters to
filter by status or paginate results."
cbparameters:
  parameters:
    - name: params
      typeName: InboxMessageListParams
      description: Optional query and filter parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<InboxMessage[]>"
    description: A promise that resolves to an array of  objects
data:
  name: getMessages
  category: inbox
  link: getMessages.md
---
# getMessages

```typescript
client.inbox.getMessages(params?: InboxMessageListParams): Promise<InboxMessage[]>
```

Retrieves all inbox messages.

Returns the full list of messages in the inbox, including unread,
acknowledged, and unresolved messages. Use optional parameters to
filter by status or paginate results.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `InboxMessageListParams` _(optional)_ | Optional query and filter parameters |

## Returns

**`Promise<InboxMessage[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.inbox.getMessages();
```
