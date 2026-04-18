---
name: getThreadList
cbbaseinfo:
  description: Retrieves a list of threads with optional filtering.
cbparameters:
  parameters:
    - name: options
      typeName: object
      description: Optional filters for threads
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the thread list response
data:
  name: getThreadList
  category: thread
  link: getThreadList.md
---
# getThreadList

```typescript
plugin.thread.getThreadList(options: object): Promise<object>
```

Retrieves a list of threads with optional filtering.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `object` | Optional filters for threads Default: `{}` |

## Returns

**`Promise<object>`** — A promise that resolves with the thread list response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.getThreadList(/* object */);
```
