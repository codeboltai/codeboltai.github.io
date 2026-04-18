---
name: switchThread
cbbaseinfo:
  description: "Switches to a different chat thread.

Changes the active conversation context to the specified thread,
triggering any associated UI updates."
cbparameters:
  parameters:
    - name: data
      typeName: ThreadIdRequest
      description: The thread identifier to switch to
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the switch is complete
data:
  name: switchThread
  category: chat
  link: switchThread.md
---
# switchThread

```typescript
client.chat.switchThread(data: ThreadIdRequest): Promise<void>
```

Switches to a different chat thread.

Changes the active conversation context to the specified thread,
triggering any associated UI updates.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ThreadIdRequest` | The thread identifier to switch to |

## Returns

**`Promise<void>`** — A promise that resolves when the switch is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.switchThread(/* ThreadIdRequest */);
```
