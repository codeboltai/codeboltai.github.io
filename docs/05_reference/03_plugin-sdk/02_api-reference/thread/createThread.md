---
name: createThread
cbbaseinfo:
  description: Creates a new thread with comprehensive options.
cbparameters:
  parameters:
    - name: options
      typeName: object
      description: The thread creation parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the thread creation response
data:
  name: createThread
  category: thread
  link: createThread.md
---
# createThread

```typescript
plugin.thread.createThread(options: object): Promise<object>
```

Creates a new thread with comprehensive options.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `object` | The thread creation parameters |

## Returns

**`Promise<object>`** — A promise that resolves with the thread creation response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.createThread(/* object */);
```
