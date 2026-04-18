---
name: createAndStartThread
cbbaseinfo:
  description: Creates and immediately starts a new thread.
cbparameters:
  parameters:
    - name: options
      typeName: object
      description: The thread creation and start parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the thread start response
data:
  name: createAndStartThread
  category: thread
  link: createAndStartThread.md
---
# createAndStartThread

```typescript
plugin.thread.createAndStartThread(options: object): Promise<object>
```

Creates and immediately starts a new thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `object` | The thread creation and start parameters |

## Returns

**`Promise<object>`** — A promise that resolves with the thread start response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.createAndStartThread(/* object */);
```
