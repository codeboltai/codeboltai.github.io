---
name: list
cbbaseinfo:
  description: "Lists templates with optional filtering.

Returns templates matching the provided query parameters. This is
useful for finding templates by type, category, or other criteria
without loading the entire template catalog."
cbparameters:
  parameters:
    - name: params
      typeName: TemplateListParams
      description: Optional query parameters for filtering templates
      isOptional: true
  returns:
    signatureTypeName: "Promise<Template[]>"
    description: A promise that resolves to an array of matching Template objects
data:
  name: list
  category: templates
  link: list.md
---
# list

```typescript
client.templates.list(params?: TemplateListParams): Promise<Template[]>
```

Lists templates with optional filtering.

Returns templates matching the provided query parameters. This is
useful for finding templates by type, category, or other criteria
without loading the entire template catalog.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TemplateListParams` _(optional)_ | Optional query parameters for filtering templates |

## Returns

**`Promise<Template[]>`** — A promise that resolves to an array of matching Template objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.templates.list();
```
