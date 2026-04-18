---
name: clearThreadsMemory
cbbaseinfo:
  description: "Clears all threads from memory.

Removes all thread data from the in-memory cache, typically used
when switching projects to ensure a clean state."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the memory has been cleared
data:
  name: clearThreadsMemory
  category: chat
  link: clearThreadsMemory.md
---
# clearThreadsMemory

```typescript
client.chat.clearThreadsMemory(): Promise<void>
```

Clears all threads from memory.

Removes all thread data from the in-memory cache, typically used
when switching projects to ensure a clean state.

## Parameters

_None_

## Returns

**`Promise<void>`** — A promise that resolves when the memory has been cleared

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.clearThreadsMemory();
```
