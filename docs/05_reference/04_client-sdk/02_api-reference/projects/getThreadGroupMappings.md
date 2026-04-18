---
name: getThreadGroupMappings
cbbaseinfo:
  description: "Retrieves all thread-to-group assignment mappings.

Returns the complete mapping of which threads are assigned to which task groups,
useful for building navigation or overview UIs."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ThreadGroupMapping[]>"
    description: A promise that resolves to an array of thread-group mapping entries
data:
  name: getThreadGroupMappings
  category: projects
  link: getThreadGroupMappings.md
---
# getThreadGroupMappings

```typescript
client.projects.getThreadGroupMappings(): Promise<ThreadGroupMapping[]>
```

Retrieves all thread-to-group assignment mappings.

Returns the complete mapping of which threads are assigned to which task groups,
useful for building navigation or overview UIs.

## Parameters

_None_

## Returns

**`Promise<ThreadGroupMapping[]>`** — A promise that resolves to an array of thread-group mapping entries

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getThreadGroupMappings();
```
