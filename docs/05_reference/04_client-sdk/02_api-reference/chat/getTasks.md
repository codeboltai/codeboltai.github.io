---
name: getTasks
cbbaseinfo:
  description: "Retrieves all chat tasks.

Returns the list of tasks that have been created through the
chat system."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown[]>"
    description: A promise that resolves to an array of task objects
data:
  name: getTasks
  category: chat
  link: getTasks.md
---
# getTasks

```typescript
client.chat.getTasks(): Promise<unknown[]>
```

Retrieves all chat tasks.

Returns the list of tasks that have been created through the
chat system.

## Parameters

_None_

## Returns

**`Promise<unknown[]>`** — A promise that resolves to an array of task objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.getTasks();
```
