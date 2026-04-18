---
name: getAll
cbbaseinfo:
  description: "Retrieves all registered applications.

Returns the complete list of apps available in the system, both
installed and available for installation."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<App[]>"
    description: A promise that resolves to an array of App objects
data:
  name: getAll
  category: apps
  link: getAll.md
---
# getAll

```typescript
client.apps.getAll(): Promise<App[]>
```

Retrieves all registered applications.

Returns the complete list of apps available in the system, both
installed and available for installation.

## Parameters

_None_

## Returns

**`Promise<App[]>`** — A promise that resolves to an array of App objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.apps.getAll();
```
