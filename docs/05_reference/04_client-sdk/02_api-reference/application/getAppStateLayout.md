---
name: getAppStateLayout
cbbaseinfo:
  description: "Retrieves the application state layout.

Returns the full layout configuration for the application, including
all mode-specific layout definitions."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<AppStateLayout>"
    description: A promise that resolves to the AppStateLayout object
data:
  name: getAppStateLayout
  category: application
  link: getAppStateLayout.md
---
# getAppStateLayout

```typescript
client.application.getAppStateLayout(): Promise<AppStateLayout>
```

Retrieves the application state layout.

Returns the full layout configuration for the application, including
all mode-specific layout definitions.

## Parameters

_None_

## Returns

**`Promise<AppStateLayout>`** — A promise that resolves to the AppStateLayout object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.getAppStateLayout();
```
