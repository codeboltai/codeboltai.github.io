---
name: updateViewTemplate
cbbaseinfo:
  description: "Updates a view template.

Modifies the template's query definition or metadata. Existing
views created from this template are not automatically updated."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the view template to update
      isOptional: false
    - name: data
      typeName: UpdateKGViewTemplateRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGViewTemplate>"
    description: A promise that resolves to the updated
data:
  name: updateViewTemplate
  category: knowledgeGraph
  link: updateViewTemplate.md
---
# updateViewTemplate

```typescript
client.knowledgeGraph.updateViewTemplate(id: string, data: UpdateKGViewTemplateRequest): Promise<KGViewTemplate>
```

Updates a view template.

Modifies the template's query definition or metadata. Existing
views created from this template are not automatically updated.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the view template to update |
| `data` | `UpdateKGViewTemplateRequest` | The fields to update |

## Returns

**`Promise<KGViewTemplate>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.updateViewTemplate('id', /* UpdateKGViewTemplateRequest */);
```
