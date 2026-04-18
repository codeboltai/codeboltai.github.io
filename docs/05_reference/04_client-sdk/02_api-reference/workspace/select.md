---
name: select
cbbaseinfo:
  description: "Selects a workspace as the active context.

Switches the active workspace to the specified one, updating all
subsequent API calls to operate within that workspace context.
This affects project selection, file access, and other operations."
cbparameters:
  parameters:
    - name: data
      typeName: SelectWorkspaceRequest
      description: Request containing workspace selection details
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the workspace has been selected
data:
  name: select
  category: workspace
  link: select.md
---
# select

```typescript
client.workspace.select(data: SelectWorkspaceRequest): Promise<void>
```

Selects a workspace as the active context.

Switches the active workspace to the specified one, updating all
subsequent API calls to operate within that workspace context.
This affects project selection, file access, and other operations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SelectWorkspaceRequest` | Request containing workspace selection details |

## Returns

**`Promise<void>`** — A promise that resolves when the workspace has been selected

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.workspace.select(/* SelectWorkspaceRequest */);
```
