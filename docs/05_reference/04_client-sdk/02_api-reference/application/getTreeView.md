---
name: getTreeView
cbbaseinfo:
  description: "Retrieves the saved tree view state.

Returns the previously persisted tree view configuration so the UI
can restore the user's preferred view."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TreeViewState>"
    description: A promise that resolves to the TreeViewState object
data:
  name: getTreeView
  category: application
  link: getTreeView.md
---
# getTreeView

```typescript
client.application.getTreeView(): Promise<TreeViewState>
```

Retrieves the saved tree view state.

Returns the previously persisted tree view configuration so the UI
can restore the user's preferred view.

## Parameters

_None_

## Returns

**`Promise<TreeViewState>`** — A promise that resolves to the TreeViewState object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.getTreeView();
```
