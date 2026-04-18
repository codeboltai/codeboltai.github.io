---
name: getThreadMessages
cbbaseinfo:
  description: Retrieves messages for a specific thread.
cbparameters:
  parameters:
    - name: options
      typeName: object
      description: The thread messages options
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the thread messages response
data:
  name: getThreadMessages
  category: thread
  link: getThreadMessages.md
---
# getThreadMessages

```typescript
plugin.thread.getThreadMessages(options: object): Promise<object>
```

Retrieves messages for a specific thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `object` | The thread messages options |

## Returns

**`Promise<object>`** — A promise that resolves with the thread messages response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.getThreadMessages(/* object */);
```
