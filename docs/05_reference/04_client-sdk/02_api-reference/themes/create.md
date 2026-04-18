---
name: create
cbbaseinfo:
  description: "Creates a new custom theme.

Registers a new theme with the system using the provided configuration.
The theme can be customized with specific colors, fonts, and styling
preferences to match design requirements."
cbparameters:
  parameters:
    - name: data
      typeName: CreateThemeRequest
      description: Request containing the new theme configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Theme>"
    description: A promise that resolves to the created Theme object
data:
  name: create
  category: themes
  link: create.md
---
# create

```typescript
client.themes.create(data: CreateThemeRequest): Promise<Theme>
```

Creates a new custom theme.

Registers a new theme with the system using the provided configuration.
The theme can be customized with specific colors, fonts, and styling
preferences to match design requirements.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateThemeRequest` | Request containing the new theme configuration |

## Returns

**`Promise<Theme>`** — A promise that resolves to the created Theme object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.create(/* CreateThemeRequest */);
```
