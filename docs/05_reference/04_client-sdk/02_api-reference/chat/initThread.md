---
name: initThread
cbbaseinfo:
  description: "Initializes a chat thread.

An alias for  that creates or retrieves
a thread based on the provided parameters."
cbparameters:
  parameters:
    - name: data
      typeName: InitiateNewThreadRequest
      description: The thread initiation request
      isOptional: false
  returns:
    signatureTypeName: "Promise<ChatThreadInfo>"
    description: A promise that resolves to the ChatThreadInfo
data:
  name: initThread
  category: chat
  link: initThread.md
---
# initThread

```typescript
client.chat.initThread(data: InitiateNewThreadRequest): Promise<ChatThreadInfo>
```

Initializes a chat thread.

An alias for  that creates or retrieves
a thread based on the provided parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InitiateNewThreadRequest` | The thread initiation request |

## Returns

**`Promise<ChatThreadInfo>`** — A promise that resolves to the ChatThreadInfo

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.chat.initThread(/* InitiateNewThreadRequest */);
```
