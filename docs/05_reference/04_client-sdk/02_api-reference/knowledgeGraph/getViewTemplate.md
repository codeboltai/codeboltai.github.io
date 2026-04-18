---
name: getViewTemplate
cbbaseinfo:
  description: "Retrieves a specific view template by its ID.

Returns the full template definition including its query pattern
and configurable parameters."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the view template
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGViewTemplate>"
    description: A promise that resolves to the
data:
  name: getViewTemplate
  category: knowledgeGraph
  link: getViewTemplate.md
---
# getViewTemplate

```typescript
client.knowledgeGraph.getViewTemplate(id: string): Promise<KGViewTemplate>
```

Retrieves a specific view template by its ID.

Returns the full template definition including its query pattern
and configurable parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the view template |

## Returns

**`Promise<KGViewTemplate>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.getViewTemplate('id');
```
