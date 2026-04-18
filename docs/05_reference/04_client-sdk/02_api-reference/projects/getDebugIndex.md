---
name: getDebugIndex
cbbaseinfo:
  description: "Retrieves the debug index for the current project.

Returns the indexed debug information that enables fast lookup of debug sessions,
breakpoint locations, and diagnostic data."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the debug index data
data:
  name: getDebugIndex
  category: projects
  link: getDebugIndex.md
---
# getDebugIndex

```typescript
client.projects.getDebugIndex(): Promise<unknown>
```

Retrieves the debug index for the current project.

Returns the indexed debug information that enables fast lookup of debug sessions,
breakpoint locations, and diagnostic data.

## Parameters

_None_

## Returns

**`Promise<unknown>`** — A promise that resolves to the debug index data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getDebugIndex();
```
