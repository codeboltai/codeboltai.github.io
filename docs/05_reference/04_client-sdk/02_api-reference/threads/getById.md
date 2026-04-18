---
name: getById
cbbaseinfo:
  description: "Retrieves a thread by its unique identifier.

Fetches the complete thread object including all its properties and
current state. This is the primary method for accessing thread details
when you know the thread's ID."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the thread to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<Thread>"
    description: A promise that resolves to the Thread object
data:
  name: getById
  category: threads
  link: getById.md
---
# getById

```typescript
client.threads.getById(id: string): Promise<Thread>
```

Retrieves a thread by its unique identifier.

Fetches the complete thread object including all its properties and
current state. This is the primary method for accessing thread details
when you know the thread's ID.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the thread to retrieve |

## Returns

**`Promise<Thread>`** — A promise that resolves to the Thread object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.getById('id');
```
