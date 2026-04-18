---
name: assignThreadToGroup
cbbaseinfo:
  description: "Assigns a conversation thread to a task group.

Links a thread to a task group for organizational purposes. A thread can belong
to at most one group at a time."
cbparameters:
  parameters:
    - name: data
      typeName: AssignThreadToGroupRequest
      description: The assignment request
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the assignment has been saved
data:
  name: assignThreadToGroup
  category: projects
  link: assignThreadToGroup.md
---
# assignThreadToGroup

```typescript
client.projects.assignThreadToGroup(data: AssignThreadToGroupRequest): Promise<void>
```

Assigns a conversation thread to a task group.

Links a thread to a task group for organizational purposes. A thread can belong
to at most one group at a time.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AssignThreadToGroupRequest` | The assignment request |

## Returns

**`Promise<void>`** — A promise that resolves when the assignment has been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.assignThreadToGroup(/* AssignThreadToGroupRequest */);
```
