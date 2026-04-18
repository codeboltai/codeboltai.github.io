---
name: getThreadsForGroup
cbbaseinfo:
  description: "Retrieves all thread identifiers assigned to a specific task group.

Returns the list of thread IDs that belong to the specified group."
cbparameters:
  parameters:
    - name: groupId
      typeName: string
      description: The unique identifier of the task group
      isOptional: false
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of thread identifier strings
data:
  name: getThreadsForGroup
  category: projects
  link: getThreadsForGroup.md
---
# getThreadsForGroup

```typescript
client.projects.getThreadsForGroup(groupId: string): Promise<string[]>
```

Retrieves all thread identifiers assigned to a specific task group.

Returns the list of thread IDs that belong to the specified group.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `groupId` | `string` | The unique identifier of the task group |

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of thread identifier strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getThreadsForGroup('groupId');
```
