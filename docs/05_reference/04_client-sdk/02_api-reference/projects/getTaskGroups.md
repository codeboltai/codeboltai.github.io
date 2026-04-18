---
name: getTaskGroups
cbbaseinfo:
  description: "Retrieves all task groups defined for the current project.

Task groups organize conversation threads into logical categories for better
workflow management and navigation."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TaskGroup[]>"
    description: A promise that resolves to an array of task groups
data:
  name: getTaskGroups
  category: projects
  link: getTaskGroups.md
---
# getTaskGroups

```typescript
client.projects.getTaskGroups(): Promise<TaskGroup[]>
```

Retrieves all task groups defined for the current project.

Task groups organize conversation threads into logical categories for better
workflow management and navigation.

## Parameters

_None_

## Returns

**`Promise<TaskGroup[]>`** — A promise that resolves to an array of task groups

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getTaskGroups();
```
