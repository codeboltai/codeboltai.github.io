---
name: getById
cbbaseinfo:
  description: "Retrieves a specific theme by its unique identifier.

Returns detailed information about a single theme including its
configuration, colors, settings, and metadata."
cbparameters:
  parameters:
    - name: themeId
      typeName: string
      description: The unique identifier of the theme to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<Theme>"
    description: A promise that resolves to the requested Theme object
data:
  name: getById
  category: themes
  link: getById.md
---
# getById

```typescript
client.themes.getById(themeId: string): Promise<Theme>
```

Retrieves a specific theme by its unique identifier.

Returns detailed information about a single theme including its
configuration, colors, settings, and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `themeId` | `string` | The unique identifier of the theme to retrieve |

## Returns

**`Promise<Theme>`** — A promise that resolves to the requested Theme object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.getById('themeId');
```
