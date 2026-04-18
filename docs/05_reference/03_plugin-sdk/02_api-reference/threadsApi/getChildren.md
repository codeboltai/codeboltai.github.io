---
name: getChildren
cbbaseinfo:
  description: "Retrieves all direct child threads of a specified thread.

Returns threads that are immediate descendants of the given parent thread.
This is useful for navigating thread hierarchies and managing related threads."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the parent thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<Thread[]>"
    description: A promise that resolves to an array of child Thread objects
data:
  name: getChildren
  category: threadsApi
  link: getChildren.md
---
# getChildren

```typescript
plugin.threadsApi.getChildren(threadId: string): Promise<Thread[]>
```

Retrieves all direct child threads of a specified thread.

Returns threads that are immediate descendants of the given parent thread.
This is useful for navigating thread hierarchies and managing related threads.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the parent thread |

## Returns

**`Promise<Thread[]>`** — A promise that resolves to an array of child Thread objects

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.threadsApi.getChildren('threadId');
```
