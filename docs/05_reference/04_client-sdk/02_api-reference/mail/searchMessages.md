---
name: searchMessages
cbbaseinfo:
  description: "Searches messages across all threads using the provided query parameters.

Performs a full-text or filtered search across the mail system, returning messages
that match the specified criteria such as keywords, sender, date range, or thread."
cbparameters:
  parameters:
    - name: params
      typeName: MailSearchParams
      description: Search query parameters for filtering results
      isOptional: true
  returns:
    signatureTypeName: "Promise<MailMessage[]>"
    description: A promise that resolves to an array of matching messages
data:
  name: searchMessages
  category: mail
  link: searchMessages.md
---
# searchMessages

```typescript
client.mail.searchMessages(params?: MailSearchParams): Promise<MailMessage[]>
```

Searches messages across all threads using the provided query parameters.

Performs a full-text or filtered search across the mail system, returning messages
that match the specified criteria such as keywords, sender, date range, or thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `MailSearchParams` _(optional)_ | Search query parameters for filtering results |

## Returns

**`Promise<MailMessage[]>`** — A promise that resolves to an array of matching messages

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.searchMessages();
```
