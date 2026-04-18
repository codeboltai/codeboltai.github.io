---
name: getThreads
cbbaseinfo:
  description: "Lists all mail threads with optional filtering and pagination.

Returns conversation threads that group related messages together. Threads can be
filtered by participants, status, or other criteria using the params argument."
cbparameters:
  parameters:
    - name: params
      typeName: MailThreadListParams
      description: Optional query parameters for filtering and pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<MailThread[]>"
    description: A promise that resolves to an array of mail threads
data:
  name: getThreads
  category: mail
  link: getThreads.md
---
# getThreads

```typescript
client.mail.getThreads(params?: MailThreadListParams): Promise<MailThread[]>
```

Lists all mail threads with optional filtering and pagination.

Returns conversation threads that group related messages together. Threads can be
filtered by participants, status, or other criteria using the params argument.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `MailThreadListParams` _(optional)_ | Optional query parameters for filtering and pagination |

## Returns

**`Promise<MailThread[]>`** — A promise that resolves to an array of mail threads

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.mail.getThreads();
```
