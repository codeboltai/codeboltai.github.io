---
name: edit
cbbaseinfo:
  description: "Opens an application for editing.

Launches the app's source code or configuration in an editable mode,
allowing modifications to its behavior."
cbparameters:
  parameters:
    - name: data
      typeName: EditAppRequest
      description: The edit configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the app is ready for editing
data:
  name: edit
  category: apps
  link: edit.md
---
# edit

```typescript
client.apps.edit(data: EditAppRequest): Promise<unknown>
```

Opens an application for editing.

Launches the app's source code or configuration in an editable mode,
allowing modifications to its behavior.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `EditAppRequest` | The edit configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the app is ready for editing

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.apps.edit(/* EditAppRequest */);
```
