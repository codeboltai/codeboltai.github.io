---
name: updateColors
cbbaseinfo:
  description: "Updates the color scheme of a theme.

Modifies the color palette for one or more themes. This includes
primary colors, background colors, text colors, and other color
variables used throughout the interface."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateThemeColorsRequest
      description: Request containing theme color update information
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when colors have been updated
data:
  name: updateColors
  category: themes
  link: updateColors.md
---
# updateColors

```typescript
client.themes.updateColors(data: UpdateThemeColorsRequest): Promise<unknown>
```

Updates the color scheme of a theme.

Modifies the color palette for one or more themes. This includes
primary colors, background colors, text colors, and other color
variables used throughout the interface.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateThemeColorsRequest` | Request containing theme color update information |

## Returns

**`Promise<unknown>`** — A promise that resolves when colors have been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.updateColors(/* UpdateThemeColorsRequest */);
```
