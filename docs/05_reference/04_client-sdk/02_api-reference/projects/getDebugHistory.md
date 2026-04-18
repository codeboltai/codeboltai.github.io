---
name: getDebugHistory
cbbaseinfo:
  description: "Retrieves the debug session history for the current project.

Returns records of past debugging sessions including breakpoints hit, variable
states, and step-through sequences."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown[]>"
    description: A promise that resolves to an array of debug history entries
data:
  name: getDebugHistory
  category: projects
  link: getDebugHistory.md
---
# getDebugHistory

```typescript
client.projects.getDebugHistory(): Promise<unknown[]>
```

Retrieves the debug session history for the current project.

Returns records of past debugging sessions including breakpoints hit, variable
states, and step-through sequences.

## Parameters

_None_

## Returns

**`Promise<unknown[]>`** — A promise that resolves to an array of debug history entries

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getDebugHistory();
```
