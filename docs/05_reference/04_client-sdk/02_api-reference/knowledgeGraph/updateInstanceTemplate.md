---
name: updateInstanceTemplate
cbbaseinfo:
  description: "Updates a knowledge graph instance template.

Modifies the template's schema or metadata. Existing instances
created from this template are not automatically updated."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the template to update
      isOptional: false
    - name: data
      typeName: UpdateKGInstanceTemplateRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGInstanceTemplate>"
    description: A promise that resolves to the updated
data:
  name: updateInstanceTemplate
  category: knowledgeGraph
  link: updateInstanceTemplate.md
---
# updateInstanceTemplate

```typescript
client.knowledgeGraph.updateInstanceTemplate(id: string, data: UpdateKGInstanceTemplateRequest): Promise<KGInstanceTemplate>
```

Updates a knowledge graph instance template.

Modifies the template's schema or metadata. Existing instances
created from this template are not automatically updated.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the template to update |
| `data` | `UpdateKGInstanceTemplateRequest` | The fields to update |

## Returns

**`Promise<KGInstanceTemplate>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.updateInstanceTemplate('id', /* UpdateKGInstanceTemplateRequest */);
```
