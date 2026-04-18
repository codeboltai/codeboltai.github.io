---
name: getAll
cbbaseinfo:
  description: "Retrieves all available templates.

Returns every template in the system regardless of type or category.
Use this for comprehensive template browsing or to populate a full
template gallery."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Template[]>"
    description: A promise that resolves to an array of Template objects
data:
  name: getAll
  category: templates
  link: getAll.md
---
# getAll

```typescript
client.templates.getAll(): Promise<Template[]>
```

Retrieves all available templates.

Returns every template in the system regardless of type or category.
Use this for comprehensive template browsing or to populate a full
template gallery.

## Parameters

_None_

## Returns

**`Promise<Template[]>`** — A promise that resolves to an array of Template objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.templates.getAll();
```
