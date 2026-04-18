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
  category: threads
  link: getChildren.md
---
# getChildren

```typescript
client.threads.getChildren(threadId: string): Promise<Thread[]>
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
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.getChildren('threadId');
```
