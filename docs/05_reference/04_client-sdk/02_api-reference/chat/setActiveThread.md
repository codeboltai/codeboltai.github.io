---
name: setActiveThread
cbbaseinfo:
  description: "Sets the active chat thread.

Switches the current focus to the specified thread, making it the
primary conversation context for subsequent operations."
cbparameters:
  parameters:
    - name: data
      typeName: SetActiveThreadRequest
      description: The active thread selection
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the active thread has been set
data:
  name: setActiveThread
  category: chat
  link: setActiveThread.md
---
# setActiveThread

```typescript
client.chat.setActiveThread(data: SetActiveThreadRequest): Promise<void>
```

Sets the active chat thread.

Switches the current focus to the specified thread, making it the
primary conversation context for subsequent operations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SetActiveThreadRequest` | The active thread selection |

## Returns

**`Promise<void>`** — A promise that resolves when the active thread has been set

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.setActiveThread(/* SetActiveThreadRequest */);
```
