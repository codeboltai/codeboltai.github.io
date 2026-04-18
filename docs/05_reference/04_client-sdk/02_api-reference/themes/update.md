---
name: update
cbbaseinfo:
  description: "Updates an existing theme's configuration.

Modifies the properties, colors, or settings of a theme identified
by its ID. Use this to make incremental changes to a theme without
recreating it from scratch."
cbparameters:
  parameters:
    - name: themeId
      typeName: string
      description: The unique identifier of the theme to update
      isOptional: false
    - name: data
      typeName: UpdateThemeRequest
      description: Request containing the theme updates to apply
      isOptional: false
  returns:
    signatureTypeName: "Promise<Theme>"
    description: A promise that resolves to the updated Theme object
data:
  name: update
  category: themes
  link: update.md
---
# update

```typescript
client.themes.update(themeId: string, data: UpdateThemeRequest): Promise<Theme>
```

Updates an existing theme's configuration.

Modifies the properties, colors, or settings of a theme identified
by its ID. Use this to make incremental changes to a theme without
recreating it from scratch.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `themeId` | `string` | The unique identifier of the theme to update |
| `data` | `UpdateThemeRequest` | Request containing the theme updates to apply |

## Returns

**`Promise<Theme>`** — A promise that resolves to the updated Theme object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.update('themeId', /* UpdateThemeRequest */);
```
