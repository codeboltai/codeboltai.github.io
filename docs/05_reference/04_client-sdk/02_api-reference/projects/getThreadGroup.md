---
name: getThreadGroup
cbbaseinfo:
  description: "Retrieves the task group that a specific thread is assigned to.

Returns the group assignment for a thread, or null if the thread is not assigned
to any group."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The identifier of the thread to look up
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskGroup | null>"
    description: A promise that resolves to the assigned task group, or null if unassigned
data:
  name: getThreadGroup
  category: projects
  link: getThreadGroup.md
---
# getThreadGroup

```typescript
client.projects.getThreadGroup(threadId: string): Promise<TaskGroup | null>
```

Retrieves the task group that a specific thread is assigned to.

Returns the group assignment for a thread, or null if the thread is not assigned
to any group.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The identifier of the thread to look up |

## Returns

**`Promise<TaskGroup | null>`** — A promise that resolves to the assigned task group, or null if unassigned

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getThreadGroup('threadId');
```
