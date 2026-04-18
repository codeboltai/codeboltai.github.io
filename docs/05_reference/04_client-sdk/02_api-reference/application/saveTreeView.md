---
name: saveTreeView
cbbaseinfo:
  description: "Saves the tree view state.

Persists the current state of the file/project tree view, including
expanded nodes, scroll position, and selection."
cbparameters:
  parameters:
    - name: data
      typeName: SaveTreeViewRequest
      description: The tree view state to save
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the state has been saved
data:
  name: saveTreeView
  category: application
  link: saveTreeView.md
---
# saveTreeView

```typescript
client.application.saveTreeView(data: SaveTreeViewRequest): Promise<void>
```

Saves the tree view state.

Persists the current state of the file/project tree view, including
expanded nodes, scroll position, and selection.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SaveTreeViewRequest` | The tree view state to save |

## Returns

**`Promise<void>`** — A promise that resolves when the state has been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.saveTreeView(/* SaveTreeViewRequest */);
```
