---
name: syncThreads
cbbaseinfo:
  description: "Synchronizes threads from the thread store to the chat manager.

Ensures that the in-memory chat manager is up-to-date with the
persisted thread store, resolving any inconsistencies."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when synchronization is complete
data:
  name: syncThreads
  category: chat
  link: syncThreads.md
---
# syncThreads

```typescript
client.chat.syncThreads(): Promise<void>
```

Synchronizes threads from the thread store to the chat manager.

Ensures that the in-memory chat manager is up-to-date with the
persisted thread store, resolving any inconsistencies.

## Parameters

_None_

## Returns

**`Promise<void>`** — A promise that resolves when synchronization is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.syncThreads();
```
