---
name: getThreadDetail
cbbaseinfo:
  description: Retrieves detailed information about a specific thread.
cbparameters:
  parameters:
    - name: options
      typeName: object
      description: The thread detail options
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the thread detail response
data:
  name: getThreadDetail
  category: thread
  link: getThreadDetail.md
---
# getThreadDetail

```typescript
plugin.thread.getThreadDetail(options: object): Promise<object>
```

Retrieves detailed information about a specific thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `object` | The thread detail options |

## Returns

**`Promise<object>`** — A promise that resolves with the thread detail response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.getThreadDetail(/* object */);
```
