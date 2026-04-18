---
name: getCurrentLayout
cbbaseinfo:
  description: "Retrieves the current active layout.

Returns the layout configuration that is currently being displayed
in the application UI."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<CurrentLayout>"
    description: A promise that resolves to the CurrentLayout object
data:
  name: getCurrentLayout
  category: application
  link: getCurrentLayout.md
---
# getCurrentLayout

```typescript
client.application.getCurrentLayout(): Promise<CurrentLayout>
```

Retrieves the current active layout.

Returns the layout configuration that is currently being displayed
in the application UI.

## Parameters

_None_

## Returns

**`Promise<CurrentLayout>`** — A promise that resolves to the CurrentLayout object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.getCurrentLayout();
```
