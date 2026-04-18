---
name: getDependencies
cbbaseinfo:
  description: "Retrieves all threads that the specified thread depends on.

Returns threads that are prerequisites or dependencies of the given thread.
This is useful for understanding execution order requirements and managing
complex thread relationships."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<Thread[]>"
    description: A promise that resolves to an array of dependent Thread objects
data:
  name: getDependencies
  category: threads
  link: getDependencies.md
---
# getDependencies

```typescript
client.threads.getDependencies(threadId: string): Promise<Thread[]>
```

Retrieves all threads that the specified thread depends on.

Returns threads that are prerequisites or dependencies of the given thread.
This is useful for understanding execution order requirements and managing
complex thread relationships.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<Thread[]>`** — A promise that resolves to an array of dependent Thread objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.getDependencies('threadId');
```
