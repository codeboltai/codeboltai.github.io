---
name: seedPopular
cbbaseinfo:
  description: "Seeds the system with popular theme presets.

Creates a collection of well-known and widely-used themes based on
popular color schemes and design systems. Useful for initializing
the theme catalog with common options."
cbparameters:
  parameters:
    - name: data
      typeName: Record<string, unknown>
      description: Optional parameters to control the seeding process
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when popular themes have been seeded
data:
  name: seedPopular
  category: themes
  link: seedPopular.md
---
# seedPopular

```typescript
client.themes.seedPopular(data?: Record<string, unknown>): Promise<unknown>
```

Seeds the system with popular theme presets.

Creates a collection of well-known and widely-used themes based on
popular color schemes and design systems. Useful for initializing
the theme catalog with common options.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `Record<string, unknown>` _(optional)_ | Optional parameters to control the seeding process |

## Returns

**`Promise<unknown>`** — A promise that resolves when popular themes have been seeded

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.seedPopular();
```
