---
name: clearResolved
cbbaseinfo:
  description: "Clears all resolved inbox messages.

Removes messages that have been marked as resolved, cleaning up the
inbox. Unresolved and acknowledged messages are not affected."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the resolved messages have been cleared
data:
  name: clearResolved
  category: inbox
  link: clearResolved.md
---
# clearResolved

```typescript
client.inbox.clearResolved(): Promise<void>
```

Clears all resolved inbox messages.

Removes messages that have been marked as resolved, cleaning up the
inbox. Unresolved and acknowledged messages are not affected.

## Parameters

_None_

## Returns

**`Promise<void>`** — A promise that resolves when the resolved messages have been cleared

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.inbox.clearResolved();
```
