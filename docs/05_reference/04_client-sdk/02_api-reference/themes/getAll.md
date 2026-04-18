---
name: getAll
cbbaseinfo:
  description: "Retrieves all available themes in the system.

Returns every theme regardless of whether it's active or inactive.
Use this for comprehensive theme browsing or to populate theme selection UIs."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Theme[]>"
    description: A promise that resolves to an array of Theme objects
data:
  name: getAll
  category: themes
  link: getAll.md
---
# getAll

```typescript
client.themes.getAll(): Promise<Theme[]>
```

Retrieves all available themes in the system.

Returns every theme regardless of whether it's active or inactive.
Use this for comprehensive theme browsing or to populate theme selection UIs.

## Parameters

_None_

## Returns

**`Promise<Theme[]>`** — A promise that resolves to an array of Theme objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.getAll();
```
