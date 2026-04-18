---
name: getMemoryTypes
cbbaseinfo:
  description: "Retrieves available memory types for context assembly.

Returns the list of memory type sources that can be used when
assembling context (e.g., episodic, semantic, working memory)."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ContextMemoryType[]>"
    description: A promise that resolves to an array of  objects
data:
  name: getMemoryTypes
  category: contextAssembly
  link: getMemoryTypes.md
---
# getMemoryTypes

```typescript
client.contextAssembly.getMemoryTypes(): Promise<ContextMemoryType[]>
```

Retrieves available memory types for context assembly.

Returns the list of memory type sources that can be used when
assembling context (e.g., episodic, semantic, working memory).

## Parameters

_None_

## Returns

**`Promise<ContextMemoryType[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextAssembly.getMemoryTypes();
```
