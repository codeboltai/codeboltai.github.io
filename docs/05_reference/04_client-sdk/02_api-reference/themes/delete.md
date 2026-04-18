---
name: delete
cbbaseinfo:
  description: "Deletes a theme from the system.

Permanently removes the specified theme. If the theme is currently
active, another theme will need to be set as active. This operation
cannot be undone."
cbparameters:
  parameters:
    - name: themeId
      typeName: string
      description: The unique identifier of the theme to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the theme has been deleted
data:
  name: delete
  category: themes
  link: delete.md
---
# delete

```typescript
client.themes.delete(themeId: string): Promise<unknown>
```

Deletes a theme from the system.

Permanently removes the specified theme. If the theme is currently
active, another theme will need to be set as active. This operation
cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `themeId` | `string` | The unique identifier of the theme to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the theme has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.delete('themeId');
```
