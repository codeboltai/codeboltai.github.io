---
name: getTypes
cbbaseinfo:
  description: "Retrieves the list of available capability types.

Returns the distinct type identifiers that capabilities can belong to,
useful for categorizing or filtering capabilities."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of type name strings
data:
  name: getTypes
  category: capability
  link: getTypes.md
---
# getTypes

```typescript
client.capability.getTypes(): Promise<string[]>
```

Retrieves the list of available capability types.

Returns the distinct type identifiers that capabilities can belong to,
useful for categorizing or filtering capabilities.

## Parameters

_None_

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of type name strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.capability.getTypes();
```
