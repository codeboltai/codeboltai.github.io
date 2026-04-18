---
name: hideThread
cbbaseinfo:
  description: "Hides a thread from the user interface.

Removes the thread from the visible thread list without deleting it.
The thread data is preserved and can be restored later."
cbparameters:
  parameters:
    - name: data
      typeName: ThreadIdRequest
      description: The thread identifier
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been hidden
data:
  name: hideThread
  category: chatApi
  link: hideThread.md
---
# hideThread

```typescript
plugin.chatApi.hideThread(data: ThreadIdRequest): Promise<void>
```

Hides a thread from the user interface.

Removes the thread from the visible thread list without deleting it.
The thread data is preserved and can be restored later.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ThreadIdRequest` | The thread identifier |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been hidden

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.hideThread(/* ThreadIdRequest */);
```
