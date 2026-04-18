---
name: searchThread
cbbaseinfo:
  description: "Searches for a specific thread by its ID.

Performs a direct lookup to find a thread using its unique identifier.
This is the most efficient way to retrieve a thread when you know its ID."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to search for
      isOptional: false
  returns:
    signatureTypeName: "Promise<Thread>"
    description: A promise that resolves to the matching Thread object
data:
  name: searchThread
  category: threads
  link: searchThread.md
---
# searchThread

```typescript
client.threads.searchThread(threadId: string): Promise<Thread>
```

Searches for a specific thread by its ID.

Performs a direct lookup to find a thread using its unique identifier.
This is the most efficient way to retrieve a thread when you know its ID.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to search for |

## Returns

**`Promise<Thread>`** — A promise that resolves to the matching Thread object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.searchThread('threadId');
```
