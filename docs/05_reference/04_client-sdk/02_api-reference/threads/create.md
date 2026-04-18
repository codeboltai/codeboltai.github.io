---
name: create
cbbaseinfo:
  description: "Creates a new thread with the specified configuration.

Initializes a new thread with the provided settings and parameters.
The thread will be created in an initial state and can be executed
when ready. Use this to set up new execution units."
cbparameters:
  parameters:
    - name: data
      typeName: CreateThreadRequest
      description: The thread creation request with configuration details
      isOptional: false
  returns:
    signatureTypeName: "Promise<Thread>"
    description: A promise that resolves to the newly created Thread object
data:
  name: create
  category: threads
  link: create.md
---
# create

```typescript
client.threads.create(data: CreateThreadRequest): Promise<Thread>
```

Creates a new thread with the specified configuration.

Initializes a new thread with the provided settings and parameters.
The thread will be created in an initial state and can be executed
when ready. Use this to set up new execution units.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateThreadRequest` | The thread creation request with configuration details |

## Returns

**`Promise<Thread>`** — A promise that resolves to the newly created Thread object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.create(/* CreateThreadRequest */);
```
