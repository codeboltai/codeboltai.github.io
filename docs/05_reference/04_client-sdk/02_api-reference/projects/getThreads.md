---
name: getThreads
cbbaseinfo:
  description: "Retrieves all conversation threads associated with the current project.

Returns the list of active and archived threads, which represent individual
conversation streams within the project."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown[]>"
    description: A promise that resolves to an array of project threads
data:
  name: getThreads
  category: projects
  link: getThreads.md
---
# getThreads

```typescript
client.projects.getThreads(): Promise<unknown[]>
```

Retrieves all conversation threads associated with the current project.

Returns the list of active and archived threads, which represent individual
conversation streams within the project.

## Parameters

_None_

## Returns

**`Promise<unknown[]>`** — A promise that resolves to an array of project threads

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getThreads();
```
