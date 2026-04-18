---
name: getTypes
cbbaseinfo:
  description: "Retrieves the list of available action block types.

Returns the distinct type identifiers that can be used when creating
or filtering action blocks."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of type name strings
data:
  name: getTypes
  category: actionBlocks
  link: getTypes.md
---
# getTypes

```typescript
client.actionBlocks.getTypes(): Promise<string[]>
```

Retrieves the list of available action block types.

Returns the distinct type identifiers that can be used when creating
or filtering action blocks.

## Parameters

_None_

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of type name strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionBlocks.getTypes();
```
